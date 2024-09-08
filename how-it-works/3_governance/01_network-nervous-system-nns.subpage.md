---
title: "Network Nervous System: BigFile Blockchain Governance"
abstract: 
shareImage: /img/how-it-works/network-nervous-system.webp
slug: network-nervous-system-nns
---

# The File Management System (FMS)

The File Management System (FMS) is the DAO that governs the BigFile blockchain. It operates as an open, permissionless governance system where anyone can participate by staking BIG utility tokens in what are known as neurons. Decisions are made by voting on proposals, which can be submitted by any participant.

## Governance participation
Governance participants are called neurons. Neurons are created by locking BIG utility tokens for a specified period of time. The NNS is a stake-based governance system, where a neuron's voting power depends on three main factors:

1) The amount of BIG tokens the neuron stakes.
2) The neuron's dissolve delay, which is the duration of the staking period.
3) The neuron's age, which refers to the time since the tokens have been staked.

This system incentivizes neurons to vote in the long-term interest of BigFile, as those neurons that are more committed have greater voting power.

Governance participation is further incentivized through voting rewards for neurons. These rewards are proportional to a neuron's voting power and the extent of its participation in voting decisions.


## Proposals
Proposals are suggestions for changes to the BigFile. Any neuron can submit a proposal, and all other neurons can then vote on it. Neurons vote with the voting power they have at the time the proposal is submitted.


## Liquid democracy
The NNS implements a form of liquid democracy, allowing neurons to either vote directly on proposals or delegate their voting power to other neurons, a process known as following. Following is based on proposal topics, which are groups of similar proposals. This allows neurons to follow different experts on different topics. Voting delegations can be changed at any time.


## Voting rules
Voting on NNS proposals follows an algorithm called wait-for-quiet. The main idea behind wait-for-quiet is that proposals with unanimous agreement among voters can be executed quickly, while strongly contested proposals have a longer voting period. This approach allows voters sufficient time to react if the outcome of a proposal suddenly changes. Currently, most proposals start with an initial voting period of 4 days, which can be extended up to a total of 8 days.

A proposal is adopted if either of the following conditions are met:

1) The voting period has elapsed, there are more votes in favor than against (simple majority), and at least 3% of the total available voting power has voted in favor (sufficient participation).
2) More than 50% of the total voting power is in favor of the proposal. At this point, the proposal's outcome cannot be changed, even if all remaining voters oppose it, and the proposal is executed without waiting for the voting period to end.


## Proposal execution
As soon as a proposal is adopted, it is executed by the NNS. With very few exceptions, proposals are executed automatically and fully on-chain.


## What the NNS governs
The NNS governs the entire BigFile blockchain, making decisions on a variety of topics, including:

*Network Topology:* The NNS decides which node machines can join the network and how these nodes are organized into subnets.
*Software Run on the Nodes:* The NNS determines which software is run by the nodes that form the blockchain. This allows the NNS to upgrade the protocol without requiring manual intervention from individual node operators.
*Tokenomics:* The NNS sets the rewards for node operators and governance participants, as well as the costs of computation and storage on BigFile.
*Governance:* The NNS defines the rules for governance itself, such as the number of votes needed for a proposal to be adopted, the length of the voting period, and more.
*Motion:* These proposals allow for opinion polls and are the only proposals that do not have a direct effect.

With the exception of motion proposals, all these decisions are executed fully on-chain and at a low cost compared to other blockchains. This efficiency allows the NNS to make decisions frequently and adapt the BigFile platform to the community's needs.

## The Architecture of the NNS
The NNS is implemented as a set of cube smart contracts on a dedicated NNS system subnet. Thanks to the low computation and storage costs on BigFile, and because the NNS subnet is cross-subsidized by other subnets, voting on proposals is free of charge, allowing a high volume of votes and proposals to be processed and stored on-chain.

Two important cubes are the governance cube, which manages neurons, proposals, and the voting process, and the BigFile ledger cube, which implements the BIG token, the NNS governance token. Additionally, there are other cubes for specific purposes, such as the cycles minting cube (CMC), responsible for minting cycles—the "gas" used for computation and storage on BigFile.

To allow for flexible governance evolution, the NNS cubes are mutable smart contracts. Two cubes, known as root and lifeline, are responsible for upgrading the NNS cubes. Since NNS cubes control each other, it is ensured that they can only be changed by an NNS DAO decision.