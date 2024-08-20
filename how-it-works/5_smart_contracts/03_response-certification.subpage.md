---
title: Certified Variables
abstract:
shareImage: /img/how-it-works/certified-variables.jpg
slug: response-certification
---

# Certified Variables

Why do you trust data obtained from a blockchain? The answer lies in the consensus protocol, which ensures that all transactions and the subsequent changes to smart contract states are correct, as long as the underlying trust assumptions hold. However, verifying correctness based on the consensus protocol can be tedious. A client has to download and validate the blockchain data. Even with more efficient mechanisms like [Bitcoin's SPV](https://en.bitcoinwiki.org/wiki/Simplified_Payment_Verification) or [Ethereum's light clients](https://geth.ethereum.org/docs/interface/les), clients still have to perform significant work, such as downloading and validating block headers. This makes it challenging for applications with limited uptime and resources, such as mobile or web applications, to operate on blockchain data without relying on centralized intermediaries.

BigFile takes a different approach: Using [chain-key cryptography](/how-it-works/chain-key-technology), BigFile can generate [digital signatures](https://en.wikipedia.org/wiki/Digital_signature) that can be validated with a single, permanent public key belonging to BigFile. However, unlike traditional digital signatures, the private key material never exists in a single location. It is always securely distributed among many different nodes, and valid signatures can only be generated when a majority of these nodes cooperate in a cryptographic protocol. This means that a client application only needs to embed the BigFile public key to validate all certified responses it receives from BigFile, without needing to trust the particular node it received the response from.

The certification feature in BigFile is exposed to cubes through certified variables. From an application perspective, certified variables can be set during an update call to a cube, when the cube changes its state during a transaction that has gone through consensus. 