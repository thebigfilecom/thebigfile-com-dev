---
title: Fault tolerance
abstract:
shareImage: /img/how-it-works/fault-tolerance.jpg
slug: fault-tolerance
---

# Fault tolerance

Whether due to hardware failure, bugs, power outages, or even attacks, individual nodes may fail at any time. BigFile is fault-tolerant, meaning that the protocol will continue to make progress even if some nodes fail or misbehave.

## Handling node failures

In each round, the consensus layer proposes a block, and the messages within that block are subsequently processed by the execution layer. For the subnet to make progress, the proposed block and the resulting state must be signed by at least two-thirds of the nodes in the subnet. As long as less than one-third of the nodes in a subnet fail or misbehave—even in a Byzantine manner—the subnet will continue to make progress.

Consider a scenario where less than one-third of the nodes in a subnet fail while the remaining nodes continue to operate normally. A failed node can recover automatically and catch up with the other nodes. A newly joined node follows the same process to synchronize with the existing nodes in the subnet.

One natural solution is for a failed or newly joined node to download all the consensus blocks it missed from its peers and process them one by one. However, if a node has to process all blocks from the subnet's genesis, it will take a long time to catch up. Another approach is to allow the node to directly sync the latest state from its peers. However, since peers continuously update their state as they process new blocks, syncing the latest state could lead to inconsistencies.

BigFile uses a combination of both approaches. The consensus protocol is divided into epochs, with each epoch comprising a few hundred consensus rounds. At the beginning of each epoch, all nodes make a backup copy of their blockchain state and create a catch-up package (CUP). The CUP at height h contains all the necessary information for consensus to resume from height h, including the hash of the blockchain state after processing the block at that height. The CUP is then signed by at least two-thirds of the nodes in the subnet, and each normally-operating node broadcasts the CUP.

While the failed or newly joined nodes are syncing the blockchain state, the well-functioning nodes continue to process new blocks and make progress. The well-functioning nodes use their backup copy of the blockchain state (created at the same time as the CUP) to supply the state to syncing nodes. After the syncing node finishes syncing the blockchain state, it requests the consensus blocks generated since the CUP and processes them one by one. Once fully synced, the node can process messages regularly like the other nodes.

## Handling regular subnet failures

In rare cases, an entire subnet can become stuck and fail to make progress. A subnet can fail for various reasons, such as software bugs leading to non-deterministic execution or when more than one-third of the nodes in the subnet fail simultaneously. In such cases, the well-functioning nodes are unable to create and sign a catch-up package (CUP), preventing the failed nodes from automatically recovering.

When a subnet fails, manual intervention is required for recovery. Essentially, since the subnet nodes cannot automatically create and sign a CUP, someone needs to manually create one. The CUP should be created at the maximum blockchain height where the state was certified by at least two-thirds of the nodes in the subnet. However, the subnet nodes cannot inherently trust a manually created CUP, so community consensus on the CUP's validity is necessary. BigFile has a blockchain governance system called the [Network Nervous System](/how-it-works/#Network-Nervous-System) (NNS), which handles subnet recovery via a proposal to use the manually created CUP for the subnet. Anyone who has staked their BIG tokens can vote on the proposal. If a majority of voters accept the proposal, the CUP is stored in the NNS registry.

Each node runs two processes: (1) Replica and (2) Orchestrator. The replica consists of the four-layer software stack that maintains the blockchain, while the orchestrator manages the replica software. The orchestrator regularly queries the NNS registry for updates. If it detects a new CUP in the registry, it restarts the replica process using the newly created CUP as input. As described earlier, the CUP at height h contains the necessary information to resume consensus from that height. Once the replica starts, it initiates a state sync protocol if it observes that the blockchain state hash in the CUP differs from the local state hash. After syncing the state, it resumes processing consensus blocks.

It's important to note that this recovery process requires submitting a proposal to the NNS, meaning it only works for recovering regular subnets, not the NNS subnet itself. In many BigFile documents, this process is often referred to as disaster recovery.


## Handling NNS cube failures

The BigFile has a special subnet called the [Network Nervous System](/how-it-works/#Network-Nervous-System) (NNS), which hosts cubes that govern the entire BigFile. These include the root cube, governance cube, ledger cube, registry cube, and others.

Suppose a cube in the NNS fails while the NNS subnet continues to make progress. This failure could be due to a software bug in the cube’s code. In such a case, the cube needs to be "upgraded," meaning it should be restarted with new WebAssembly (WASM) code. Generally, each cube in BigFile has a (possibly empty) list of “controllers.” A controller has the right to upgrade the cube’s WASM code by sending a request to the subnet’s management cube. The lifeline cube is designated as the controller for the root cube, and the root cube is the controller for all other NNS cubes. The root cube has a method to upgrade other NNS cubes by calling the management cube, and similarly, the lifeline cube has a method to upgrade the root cube.

If the governance cube is operational, a manual NNS proposal can be submitted to call the root or lifeline cube’s method to upgrade the failed cube. Anyone who has staked BIG tokens can vote on the proposal. If a majority of voters approve, the failed cube will be upgraded.


## Handling NNS subnet failures

In the worst-case scenario, the entire NNS subnet could become stuck and fail to make progress. If this happens, all node providers who have contributed a node to the NNS subnet would need to manually intervene by creating a CUP and restarting their node with the new CUP.