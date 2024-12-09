---
title: BIG scalability
abstract:
shareImage: /img/how-it-works/infinite-scalability.jpg
slug: scalability
---

# BIG Scalability

BigFile can host an unlimited number of cubes (smart contracts), store an unlimited amount of data, and process an unlimited number of transactions per second. In simple terms, BigFile is designed to host even large-scale social media platforms in a fully decentralized manner.

There are two widely-used approaches to improving the scalability of a system: (1) Vertical Scaling and (2) Horizontal Scaling. Vertical scaling involves adding more CPU, RAM, and disk space to a single computer. Horizontal scaling involves adding more computers to the system. While vertical scaling has its limits, horizontal scaling can achieve unlimited scalability. BigFile is one of the first blockchains to successfully implement horizontal scaling.

In BigFile, nodes are divided into subnets, each containing a few dozen nodes. The nodes in a subnet collectively maintain one blockchain. Each subnet can host thousands of cubes and process the messages they receive. While each subnet has a limited capacity in terms of the number of cubes, storage, and bandwidth, adding more subnets to BigFile increases its overall capacity proportionately. There is no limit to the number of subnets that can be added.

A key design feature that enables limitless scaling is the inter-subnet communication between cubes. A cube in one subnet can send asynchronous messages to any cube in another subnet. XNet messages are ingested by the receiving subnet's consensus layer and validated using the sending subnet's threshold signature—an application of This architecture allows for "loose coupling" of the subnets, eliminating the need for a central component like a shard chain, which could create a bottleneck when scaling. As a result, newly added subnets can immediately communicate with other subnets without hitting a natural bottleneck, as seen in more simplistic architectures.

Creating a new subnet involves two steps: (1) Adding new nodes to BigFile, and (2) Creating a subnet with the available nodes. Anyone can purchase the necessary hardware and add it to BigFile by following the [node provider onboarding process](https://wiki.thebigfile.com/wiki/Node_Provider_Documentation) onboarding process.

To create a new subnet with the available nodes, a proposal must be submitted to the File Management System (FMS), BigFile's decentralized governance system. The NNS consists of a group of cubes that manage BigFile. Within the NNS, a component called the "registry" stores the full configuration of BigFile, including records for each subnet. These records contain details such as protocol version, list of nodes, and protocol configuration parameters.

To add a new subnet, one must submit a proposal to the NNS to add a record for the subnet to the registry. The proposal includes the list of nodes to be included in the subnet and can be voted on by anyone who has staked BIG tokens. If a majority of voters approve the proposal, the registry cube instructs the NNS subnet to generate, in a fully decentralized manner using, the cryptographic key material for the new subnet and a catch-up package containing the genesis block. The registry cube then adds the subnet's configuration record to the registry.

After a record is added to the registry, the process of creating the new subnet begins. Each node runs two processes: (1) the Replica and (2) the Orchestrator. The replica consists of the four-layer software stack that maintains the blockchain, while the orchestrator manages the replica software. When a new node is onboarded, the node provider installs BIG OS on the node, which includes the orchestrator software. The orchestrator regularly queries the NNS registry for updates. If it detects that the node is included in a registry record, the orchestrator downloads the corresponding replica software and runs it using the Catch-Up Package from the registry as input. The replica then starts accepting messages, and the consensus protocol extends the genesis block present in the catch-up package.