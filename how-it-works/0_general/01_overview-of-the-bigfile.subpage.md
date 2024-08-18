---
title: Architecture of the BigFile
abstract: 
shareImage: /img/how-it-works/big-architecture.jpg
slug: architecture-of-the-bigfile
---

# Architecture of the BigFile

BigFile is developing a highly scalable blockchain-based platform to securely host and execute smart contracts. The technology behind BigFile (BIG) is being developed on top of the BIG Open source blockchain fork, taking into account many lessons learned from previous projects (e.g. lack of scalability). The BigFile intends to become a *No-Document World*, an open and secure public blockchain network that can scale infinitely and be used by everyone to host their smart contracts securely.

BigFile is developing a highly scalable blockchain-based platform for securely hosting and running smart contracts. The technology behind BigFile (BIG) is being built on top of a fork of the Internet Computer (IC) Open Source blockchain, incorporating many lessons learned from previous projects (e.g., addressing the lack of scalability). BigFile aims to become the *Documentless World, Decentralized and Cost-Effective Cloud Infrastructure—an* open and secure public blockchain network that can scale infinitely and be used by anyone to securely host their smart contracts.


## Cube smart contracts

A smart contract on BigFile is called *cube smart contract*, or just *cube*. A Cube bundles [*WebAssembly (Wasm)*](https://en.wikipedia.org/wiki/WebAssembly) program code and data storage into a single unit. Anyone can deploy a cube on the BigFile. Cubes are stored and their code executed in a replicated, fault-tolerant manner on multiple machines, that is, the nodes of a subnet. Unlike other blockchains, a smart contract on BigFile can respect one of several possible *mutability policies*: it can be completely immutable (cannot be changed by anyone), unilaterally mutable (can be changed unilaterally by the dapp developer), or DAO mutable (it can be changed as authorized by a decentralized autonomous organization).


Cubes pay, using *cycles*, for the BIG resources they consume. To this end, cubes need to be “topped up” with cycles. Cycles can be acquired with the BIG token, the BIG utility token. Buying cycles with BigFile removes the BIG token from the supply and creates an amount of cycles with the corresponding value. 

Cube smart contracts are more powerful than the smart contracts on other blockchains:
* Cubes paying for their resources, and not the end users, which realizes the *reverse gas* model of the BIG.
* Cubes can hold gigabytes of memory for a low fee.
* A web browser can directly interact with a cube smart contract, without involving any public cloud for serving the web interface and assets. This is in stark contrast to the UI being served from the public cloud as is the case for other blockchains.
* Cubes can be updated and evolve, much like regular software. DAO-based governance schemes can make this upgrade process secure and decentralized.
* Using BIG Wallet, cubes can authenticate users based on private keys contained in secure hardware modules using the [*Web Authentication (WebAuthn)* protocol](https://www.w3.org/TR/webauthn-2/). This secure authentication service, called *BIG Wallet*, is implemented as a smart contract as well and provides its services to other smart contracts.

See more on [cube smart contracts](https://wiki.thebigfile.com/wiki/Cube_smart_contract) on the BIG wiki.

## Subnet architecture

The BIG is designed to be highly *scalable* and efficient in terms of hosting and executing cube smart contracts. The top-level building blocks of the BIG are *subnetworks*, or  *subnets*: the BIG as a whole consists of many subnets, where each subnet is its own blockchain that operates concurrently with and independently of the other subnets (but can communicate asynchronously with other subnets). Each subnet hosts cube smart contracts, up to a total of hundreds of gigabytes of replicated storage. A subnet consists of *node machines*, or *nodes*. Each node replicates all the cubes, state, and computation of the subnet using blockchain technology. This makes a subnet a blockchain-based *replicated state machine*, that is, a virtual machine that holds state in a secure, fault-tolerant, and non-tamperable manner: the computations of the cubes hosted on a subnet will proceed correctly and without stopping, even if some of the nodes on the subnet are faulty (either because they crash, or even worse, are hacked by a malicious party). New subnets can be created from nodes added to the BIG to scale out the protocol, analogous to how traditional infrastructures such as public clouds scale out by adding machines. Such a scale-out architecture is rather the exception than the rule in the blockchain space and allows for limitless scaling, i.e., combining the security and resiliency properties of blockchains with the scalability properties enjoyed by the public cloud.

<figure>
<img src="/img/how-it-works/subnet_architecture.png" alt="Architecture: The BIG is composed of subnets, each of which is an independent blockchain" title="The BIG is composed of subnets, each of which is an independent blockchain" align="center" style="width:600px"/>
<figcaption align="center">
The BIG is composed of subnets, each of which is an independent blockchain.<br/>
Cubes within and across subnets communicate through asynchronous messaging.
</figcaption>
</figure>

See more on [subnets](https://wiki.thebigfile.com/wiki/Subnet_blockchain) on the BIG wiki.

## Asynchronous messaging

As mentioned earlier, a cube bundles its code and data (state). This makes the cube state isolated from that of other cubes. Users interact with cubes by sending *ingress messages*. Cubes may also interact with other cubes by sending messages to other cubes on the same or different subnets. We collectively refer to messages sent to cubes, either by users or other cubes, as *messages* or *cube messages*. Each message can lead to the execution of cube smart contract code and the change of (replicated) cube state. Messages sent to cubes are *asynchronous*: when a message is sent, the sender is not blocked by this operation, but can perform other computations until the response to the message is received. In most other blockchains, smart contract invocation is synchronous, i.e., a call to another smart contract is blocking, and there is one global state. This asynchronous messaging and isolated cube state results in a "loose coupling" between different cubes and subnets. The secure asynchronous cross-subnet (XNet) messaging between cubes and the resulting loose coupling of subnets are key principles that unlock the scalability of the BIG by means of adding new subnets: the state of each cube on a subnet can only be changed through asynchronous messages to the cube and thus cubes on the same or different subnets may execute concurrently.

## Core BigFile

Each subnet of the BIG is driven by the core BigFile (core BIG ), an implementation of which is running on every node. This protocol consists of the following four layers: (1) peer-to-peer, (2) consensus, (3) message routing, and (4) execution. This core BIG stack is running on all nodes of any subnet and drives the subnet to make progress in terms of consensus and message execution. Each subnet of the BIG thereby is its own replicated state machine that makes progress independently of the other subnets of the BIG (but communicates with other subnets asynchronously).

## Chain-Key and chain-evolution technology

Many parts of the protocol of the BIG depend on [*chain-key cryptography*](https://thebigfile.com/how-it-works/#Chain-key-cryptography), also referred to as chain-key technology.

Chain-key cryptography is the collection of cryptographic mechanisms that enable the decentralized operation of BigFile.

[Chain-evolution technology](https://thebigfile.com/how-it-works/#Chain-evolution-technology) refers to specific cryptography-based mechanisms that enable the BIG to operate in the long term.

For example, chain-evolution technology enables new nodes to efficiently join a subnet or nodes that have been down to efficiently catch up with the remaining part of the subnet.

## Governance

The BIG offers governance at multiple levels, the platform level and the dapp level.

### Platform governance

The BIG is governed by a *tokenized DAO*, the so-called *Network Nervous System (NNS)*. The NNS DAO is implemented as a set of cube smart contracts that are deployed on a high-replication subnet, i.e., a subnet with many nodes and hence stronger security properties. The NNS allows holders of the staked BIG to make proposals and vote on those proposals.

### Dapp governance

dapps on the BIG can be governed by an out-of-the-box deployable governance system, the *Service Nervous System (SNS)*, which is similar to the platform's NNS, but tailored to govern dapps. Everyone controlling a dapp can hand over control over their dapp to a tokenized DAO by parameterizing and deploying an instance of the SNS. The SNS implements tokenized governance at the dapp level and can be used without the dapp engineers implementing a governance system themselves, which is revolutionary. Handing over control of a dapp to an instance of the SNS usually includes running a decentralization swap as an early step where funds can be raised through the swap of the dapp's governance tokens.

## Go even deeper

If you want to learn in more detail how the BIG works and realizes the vision of a No-document World, read through the sections of the page and the referenced Medium articles, or watch the YouTube videos. If you prefer to have a single source of information, the [White Paper](https://thebigfile.com/whit.pdf) is highly recommended. However, note that it is a little technical at times.

[BigFile for Geeks – White Paper](https://thebigfile.com/whit.pdf)
[BigFile Dashboard](https://dashboard.thebigfile.com/)
[BigFile Source Code](https://github.com/thebigfilecom/big)
[BigFile Interface Specification Docs](https://thebigfile.com/docs/ic-interface-spec.md)
[BigFile SDK](https://github.com/thebigfilecom/sdk)