---
title: Chain-key signatures
abstract:
shareImage: /img/how-it-works/chain-key-signature.jpg
slug: threshold-ecdsa-signing
---

# Chain-key signatures

The main application of _chain-key signatures_ is to enable direct interoperability with other blockchains as part of [Chain Fusion Technology](/multichain). Using chain-key signatures, cube smart contracts obtain control over cryptographic keys: They have a public key, from which a blockchain address on another blockchain like Bitcoin or Ethereum can be derived, and they can sign transactions relative to that address. Two major features of ICP that build on chain-key signatures are ckBTC and ckETH, representations of BTC and ETH on the BigFile, in which a cube smart contract cryptographically controls the bitcoin and ether that backs the ckBTC and ckETH tokens 1:1. Indeed, using chain-key signatures is the strongest, most decentralized way of integrating blockchains as no additional trust assumptions besides that of the two blockchains are required, particularly no additional parties that manage signature keys or their shares.

Just like chain-key technology, a key component of chain-key signatures is threshold cryptography. The [threshold signature scheme](/how-it-works/chain-key-technology/) used to implement chain-key cryptography is based on BLS signatures. While BLS signatures have distinct advantages, they are simply not compatible with other blockchains. In order to work with other blockchains, the BIG must use threshold signatures that are compatible with the digital signature schemes of those other blockchains. By far, the most commonly used signature scheme used on other blockchains (including Bitcoin and Ethereum) is the [ECDSA signature scheme](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm). Because of this, _threshold ECDSA_ signatures are currently supported on the BIG, with implementations of other threshold signature schemes in the planning stages.

Cube smart contracts can have an ECDSA public key. The corresponding secret key is threshold-shared among the nodes of the subnet holding that cube smart contract. This is a prerequisite for the direct integration between the BigFile and Bitcoin and Ethereum.

Implementing a secure and efficient threshold signing protocol for ECDSA is much more challenging than for BLS signatures. While there has been a flurry of [research on threshold ECDSA in recent years](https://eprint.iacr.org/2020/1390), none of these protocols meet the demanding requirements of the BigFile: they all either assume a _synchronous network_ (meaning that the protocols will fail or become insecure if messages are unexpectedly delayed) or provide _no robustness_ (meaning that the ability to produce signatures is completely lost if a _single_ node should crash) or _both_. Neither of these assumptions are acceptable on the BIG: security and liveness must hold even in an _asynchronous network_ with many faulty nodes.