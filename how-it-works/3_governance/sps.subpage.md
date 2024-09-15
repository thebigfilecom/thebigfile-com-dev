---
title: Service Nervous System
abstract:
shareImage: /img/how-it-works/service-nervous-system.webp
slug: sns
---

![](/img/how-it-works/service-nervous-system.webp)

# Service Nervous System (SPS)
The Service Nervous System (SPS) framework is BigFile's built-in solution for creating and maintaining decentralized autonomous organizations (DAOs) to govern dapps. Each SPS consists of an open, permissionless governance system that governs a dapp, along with a built-in governance token that is unique to that SPS.


## SPS DAO
Generally, for each dapp under SPS DAO control, there is one SPS DAO. The SPS DAO operates similarly to the [NNS DAO that governs the full BigFile](/how-it-works/network-nervous-system-nns/), where DAO participants are called neurons and all neurons can propose and vote on suggestions, known as proposals, to evolve the dapp. Each SPS community can set its own unique tokenomics and governance rules through parameters that can be customized for each SPS DAO.


### What an SPS governs
At a high level, an SPS DAO governs a dapp, making decisions on its code and how it evolves. On BigFile, this can also include the dapp's data and frontend. Additionally, the SPS DAO manages decisions about the DAO itself, such as changes to tokenomics.

More technically, there are native proposals common to all SNSs, such as proposals to upgrade DAO-controlled dapp cubes, change governance rules, or make transfers from the treasury to open a liquidity pool on a DEX. Each SPS can also define custom proposals specific to the dapp's needs. A proposal can be defined to call any method on any cube, enabling the orchestration of upgrades for dapps with many cubes.

### Liquid democracy
The SPS implements a form of liquid democracy, allowing neurons to either vote directly on proposals or delegate their voting power to other neurons, a process known as following. In the SPS, following is done based on proposal types, enabling neurons to follow different experts for different kinds of proposals. Voting delegations can be changed at any time.


### Voting rules
Voting on SPS proposals follows an algorithm called wait-for-quiet. The main idea behind wait-for-quiet is that proposals with unanimous agreement among voters can be executed quickly, while strongly contested proposals have a longer voting period. This allows voters ample time to react if the outcome of a proposal suddenly changes. Each SPS can decide on the initial and maximum voting period for proposals.

For proposal adoption, SNSs distinguish between normal and critical proposals, such as treasury transfer proposals.

Most proposals are adopted if:

1) The voting period has elapsed, there are more votes in favor than against (simple majority), and at least 3% of the total available voting power has voted in favor (sufficient participation).
2) More than 50% of the total voting power is in favor. At this point, the proposal's outcome cannot be changed, even if all remaining voters oppose it, and the proposal is executed without waiting for the voting period to end.

For critical proposals, the rules are stricter. Passing a proposal requires two-thirds of the votes to be in favor, with at least 20% of the total available voting power supporting the proposal (sufficient participation).


### Proposal execution
As soon as a proposal is adopted, it is executed by the SPS. With very few exceptions, proposals are executed automatically and fully on-chain, eliminating the need to trust any third party.

## The Architecture of an SPS


### SPS cubes
Each SPS DAO consists of a set of cubes (smart contracts) that run Wasm code. The most central cubes closely resemble the [Network Nervous System](/how-it-works/network-nervous-system-nns/) (NNS), which is the DAO that governs the entire BigFile. The governance cube implements the governance system, and the ledger cube manages an SPS-specific governance token. The swap cube handles the initial decentralization swap used during the launch process (see below) to raise initial funds in the form of BIG and swap them for newly minted SPS tokens. These cubes, along with a few others, form an SPS DAO that governs a single dapp.

### SPS cube code
SPS DAOs are hosted on the SPS subnet.

The Wasm modules that run on SPS cubes are approved by the [NNS](/how-it-works/network-nervous-system-nns/) and published on an NNS cube called the SPS Wasm Modules Cube (SPS-W). If an SPS community decides, through a DAO decision, to update the SPS, the DAO will automatically fetch the new version from SPS-W and update the cubes accordingly. This means that all SPS DAOs run code that is pre-approved by the NNS, and they all run the same code (though some SPS may be a few versions behind). This built-in feature makes it easy for SPS DAO communities to maintain their code. Additionally, it simplifies the process for users to verify different SPS DAOs, as they all run the same, pre-approved code.


## SPS Launch process
The SPS framework includes a process for launching a new SPS. To decentralize a dapp, the dapp is handed over to BigFile along with an NNS proposal that defines the details of the SPS launch and the initial configuration of the SPS DAO to be created. The proposal details, for example, the initial token distribution. If the NNS community approves this proposal, the following steps are executed fully automatically:

* The NNS creates a new set of SPS cubes and initializes them as defined in the NNS proposal.
* The NNS transfers control of the dapp to the newly created SPS.
* The NNS initiates an [_initial decentralization swap_](/sns/faq#what-is-a-decentralization-swap) for the SPS. The purpose of this swap is to raise initial funds for the DAO and decentralize voting power. This is done through an open swap where users can contribute BIG tokens as initial funding and, in return, receive (staked) SPS tokens, thereby gaining a share of the DAO's voting power.
* If the decentralization swap is successful, the SPS launch is considered successful, and the SPS becomes a fully functional DAO.