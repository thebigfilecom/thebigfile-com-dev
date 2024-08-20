---
title: Chain-key signatures
abstract: This feature will enable cube smart contracts to sign with regard to an ECDSA public key while their host subnet has a threshold shared secret key.
coverImage: /img/how-it-works/chain-key-signature.webp
---

![](/img/how-it-works/chain-key-signature.webp)

# Chain-key signatures

*Chain-key signatures* are a key component of chain-key technology that allows the creation of signed transactions targeted at other blockchains fully on-chain using BigFile. With chain-key signatures, BIG can integrate with other blockchains, such as Bitcoin and Ethereum, in a completely trustless manner, eliminating the need for bridges or off-chain third-party signers. This enables Cubes to securely store and transact Bitcoin. The secret key exists only as shares distributed among all the nodes that form the subnet running the Cube. A Cube can execute a Bitcoin transaction using a chain-key signed transaction only when at least two-thirds of the nodes agree to proceed. Indeed, using chain-key signatures is the most secure and decentralized method of integrating blockchains, as it requires no additional trust assumptions beyond those of the two blockchains involved, and no additional parties are needed to manage signing keys or their shares.

[Go deeper](/how-it-works/threshold-ecdsa-signing/)

