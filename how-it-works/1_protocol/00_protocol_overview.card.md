---
title: Overview
---

![](/img/how-it-works/big-overview.jpg)

# Overview

The BigFile is developed by BigFile (BIGHub), from which its utility token, the BIG token, derives its name. The core component of BIG, known as the core BIG, is a 4-layer protocol that runs on the nodes of each subnet. By executing the core BIG, the nodes within a subnet realize a blockchain-based *replicated state machine* that operates independently of other subnets, while still communicating with them asynchronously. This architecture of multiple concurrently-operating subnets allows BIG to scale practically without limits. Subnets process *messages*, which are submitted by users or originate from other subnets.

The core BIG consists of the following four layers, from bottom to top:

1. Peer-to-peer
2. Consensus
3. Message routing
4. Execution

The lower two layers, P2P and Consensus, together implement the *selection and ordering* of incoming messages and deliver these messages to the upper two layers as blocks. The upper two layers, Message Routing and Execution, then receive these blocks containing ordered messages and execute them in a completely deterministic manner on every node within the subnet. This results in a replicated state machine, where every node in the subnet transitions from the same starting state to the same ending state in each round. To ensure consistency, it is crucial that every node executes the same messages in the same order, i.e., fully deterministically.

[Go deeper](/how-it-works/core-big-overview/)
