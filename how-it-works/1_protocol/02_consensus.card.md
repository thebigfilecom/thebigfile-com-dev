---
title: Consensus
---

![](/img/how-it-works/consensus.webp)

# Consensus

Every blockchain requires a consensus mechanism that enables nodes to agree on the messages to be processed and their ordering. Consensus is the core component of BIG that drives the subnets of the BigFile network. Each subnet operates as an independent blockchain, running the BIG core, including its consensus mechanism, separately from other subnets. The goal of the consensus protocol is to produce the same block of ordered messages on each node within a subnet during a given round, ensuring that each node can make identical state transitions when deterministically executing those messages.

The BIG consensus is designed to meet the following key requirements: low latency (almost instant finality), high throughput, and robustness (graceful degradation of latency and throughput in the event of node or network failures). Additionally, the BIG consensus provides *cryptographically guaranteed finality*, in contrast to Bitcoin-like protocols that offer only *probabilistic finality*, where a block is considered final only after a sufficient number of subsequent blocks have been added to the blockchain.

[Go deeper](/how-it-works/consensus/)
