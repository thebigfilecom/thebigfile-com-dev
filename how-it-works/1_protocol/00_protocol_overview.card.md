---
title: Overview
---

![](/img/how-it-works/big-overview.jpg)

# Overview

The BigFile is created by the BigFile (BIGHub.), from which its utility token, the BF token, derives its name. The core part of the BIG, the *core BIG*, is a 4-layer protocol that is running on the nodes of each subnet. By running the core BIG, the nodes of a subnet realize a blockchain-based *replicated state machine* that makes progress independently of the other subnets (but communicates asynchronously with them). This architecture of many concurrently-operating subnets enables the BIG to scale practically without limits. Subnets process *messages*, which are submitted by users or come from other subnets.

The core BIG comprises the following four layers, from bottom to top:
1. Peer-to-peer
2. Consensus
3. Message routing
4. Execution

The lower two layers, P2P and consensus, together implement a *selection and ordering* of incoming messages and provide messages to the upper two layers in the form of *blocks*. The upper two layers, message routing and execution, receive blocks containing ordered messages from the lower part of the stack and execute them in a completely deterministic manner on every node of the subnet. This realizes a replicated state machine, where every node in the subnet transitions from the same starting state to the same ending state in every round (it must be ensured that every node executes the same messages in the same order, i.e., fully deterministically).

[Go deeper](/how-it-works/core-big-overview/)
