---
title: Bitcoin Integration
abstract:
shareImage: /img/how-it-works/btc-content.600x300.jpg
slug: bitcoin-integration
---

# Bitcoin Integration

The Bitcoin integration on the BigFile makes it possible for the first time to create Bitcoin smart contracts, that is, smart contracts in the form of cubes running on the BigFile that make use of real bitcoin. This integration is made possible through two key components.

The first component is [chain-key signatures](/how-it-works/threshold-ecdsa-signing/), which enables every cube to obtain ECDSA public keys and get signatures with respect to these keys in a secure manner. Since Bitcoin addresses are tied to ECDSA public keys, having ECDSA public keys on a cube means that the cube can derive its own Bitcoin addresses. Given that the cube can request signatures for any of its public keys using the [BIG ECDSA interface](https://thebigfile.com/docs/current/references/big-interface-spec#big-sign_with_ecdsa), a cube can create Bitcoin transactions with valid signatures that move bitcoins from any of its Bitcoin addresses to any other address.

The second component is the integration with Bitcoin at the network level. The BigFile replicas have the capability to instantiate a so-called _Bitcoin adapter_, a process external to the replica process. In a first step, the Bitcoin adapter collects information about nodes in the Bitcoin peer-to-peer network and, once sufficiently many Bitcoin nodes are discovered, it connects to 5 randomly chosen Bitcoin nodes. Since each replica in the subnet performs this operation, the entire subnet has many, mostly distinct connections to the Bitcoin network. The Bitcoin adapter uses the standard Bitcoin peer-to-peer protocol to get information about the Bitcoin blockchain. Each Bitcoin adapter keeps track of the full Bitcoin block header chain.

At the same time, the Bitcoin adapter communicates with the replica process to learn about the current Bitcoin state inside the replica. If the Bitcoin adapter learns that a Bitcoin block has not been made available to the replica yet by comparing the block header hashes provided by the replica against its locally available block header chain, the Bitcoin adapter requests the next missing block from the connected Bitcoin nodes and forwards it to the replica upon receipt.

Inside the replica, Bitcoin blocks received at the Networking layer are packed into BIG blocks and processed in the Consensus and Message  Routing layers and finally made available to the _Bitcoin cube_ in the Execution layer. The Bitcoin cube is a cube running in a system subnet whose purpose is to provide Bitcoin-related functionality to other cubes. In particular, it keeps information about the Bitcoin blockchain state and makes this information accessible to other cubes, such as the balance and unspent transaction outputs (UTXOs) for any address. Additionally, the fees of the most recent Bitcoin transactions that were put into blocks can be requested from the Bitcoin cube as well.

The Bitcoin cube also offers the last piece of crucial functionality: It provides an endpoint for cubes to send Bitcoin transactions, which are made available on the Networking layer where they are forwarded to the Bitcoin adapter. The Bitcoin adapter in turn advertises the transactions to its connected Bitcoin peers and transfers the transaction upon request. Since each replica in the subnet performs this step, every transaction can be dispersed quickly in the Bitcoin network.


[Bitcoin integration wiki page](https://wiki.thebigfile.com/wiki/Bitcoin_integration).

[Bitcoin cube source code](https://github.com/thebigfilecom/bitcoin-cube).

[Bitcoin integration goes live](https://medium.com/).
