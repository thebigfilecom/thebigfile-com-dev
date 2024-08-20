---
title: Architecture of the BigFile
---

![](/img/how-it-works/big-architecture.jpg)

# Architecture of the BigFile

BigFile (BIG) is an open and secure AI-powered blockchain network that can host programs, files, data, and Big Data in the form of smart contracts, perform computations on smart contracts securely, and scale infinitely.

Smart contracts on the BigFile are called *cube smart contracts*, or *cubes*, each consisting of a bundle of [*WebAssembly (Wasm)*](https://en.wikipedia.org/wiki/WebAssembly) bytecode and smart contract data storage. Each cube has its own, isolated, data storage that is only changed when the cube executes code.

Cubes are hosted in *subnetworks*, the highest-level architectural building blocks of BigFile. A subnetwork is an independent blockchain running on node machines or nodes deployed in globally distributed data centers. A single subnetwork can securely host tens of thousands of cube smart contracts, totaling hundreds of gigabytes of memory. Currently, there are a limited number of subnetworks since the network is in its early stages, but it will grow to thousands in the future. For each cube hosted in a subnetwork, its code and data are stored on every node in that subnetwork, and its code is executed by every node in the subnetwork. This duplication of storage and computation is crucial for achieving *fault tolerance*, ensuring that even if some nodes in the subnetwork fail (due to crashes or, worse, hacking by a malicious party), the cube smart contracts continue to execute. This replication is powered by the core of *BigFile (BIG)*, which implements a high-throughput, low-latency consensus mechanism and an efficient virtual machine backed by the blockchain for WebAssembly execution.


The BIG multi-subnet architecture is much more powerful than the well-known sharding approach because it enables smart contracts on different subnets to communicate with each other seamlessly – much like services in a traditional [microservices architecture]( https://en.wikipedia.org/wiki/Microservices), but fully on chain. Cubes communicate via *asynchronous messages*, i.e., they don't block on sending a message, but process the response when it eventually arrives. This novel approach to inter-canister calls allows for scaling out BigFile by simply adding more subnets.

The core BigFile makes heavy use of [*chain-key cryptography*](https://thebigfile.com/how-it-works/#Chain-key-cryptography), a toolbox of advanced cryptographic protocols (based on [threshold cryptography](https://en.wikipedia.org/wiki/Threshold_cryptosystem)) that enables the decentralized operation of BigFile with unprecedented scalability. Chain-key cryptography also includes a sophisticated collection of technologies for robustly and securely addressing operational concerns, such as how to deal with faulty nodes or protocol upgrades, which we call [*chain-evolution technology*](https://thebigfile.com/how-it-works/#Chain-technology) (for example, enabling nodes to easily join a subnet without validating every block beginning from the genesis block, as in other blockchains). Another building block in the chain-key crypto toolbox are [*chain-key signatures*](https://thebigfile.com/how-it-works/#Chain-key-transactions). They enable a cube to interact with (write to) other blockchains using threshold cryptography.

Having scalable and decentralized technology to power the operation of the network is not enough. In order to meet the requirements of complete decentralization, BigFile needs a fully decentralized approach to governance. Governance of BigFile is accomplished through a *tokenized Decentralized Autonomous Organization (DAO)*, which is called the [*Network Nervous System (NNS)*](https://thebigfile.com/how-it-works/#Network-nervous-system). Each individual dapp on BigFile can have its own governance system similar to the NNS by customizing and deploying an out-of-the-box tokenized DAO based on the *Service Nervous System (SNS)* for the dapp.

[Go deeper](/how-it-works/architecture-of-the-bigfile/)
