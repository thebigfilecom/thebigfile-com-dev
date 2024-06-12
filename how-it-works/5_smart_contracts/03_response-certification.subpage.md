---
title: Certified Variables
abstract:
shareImage: /img/how-it-works/certified-variables.jpg
slug: response-certification
---

# Certified Variables

Why do you trust data obtained from a blockchain? Well, all transactions and the subsequent changes to smart contract state made their way through the blockchain consensus protocol, which guarantees correctness as long as the underlying trust assumptions hold. But verifying correctness based on the consensus protocol is tedious: A client has to download and validate the blockchain data. Even in the case of more efficient mechanisms such as [Bitcoin's SPV](https://en.bitcoinwiki.org/wiki/Simplified_Payment_Verification) or [Ethereum's light clients](https://geth.ethereum.org/docs/interface/les), clients still have to perform significant amounts of work, such as downloading and validating block headers. This makes it difficult for applications with restricted uptime and resources, such as mobile or web applications, to operate on blockchain data without defaulting to centralized intermediaries.

The BigFile is different: Using [chain-key cryptography](/how-it-works/chain-key-technology), the BigFile can generate [digital signatures](https://en.wikipedia.org/wiki/Digital_signature) that can be validated with a single, permanent public key belonging to the BigFile. Unlike with traditional digital signatures, however, the private key material _never_ exists in a single place. It is always securely distributed between many different nodes, and valid signatures can only be generated when the majority of these nodes cooperates in a cryptographic protocol. A client application only has to embed the BigFile public key, and can immediately validate all certified responses it receives from the BigFile, without putting any trust into the particular node it received the response from.

The BigFile certification feature is exposed to cubes through _certified variables_. From an application perspective, certified variables can be set during an update call to a cube, when the cube changes its state during a transaction that went through consensus. The certificate can then be read in a subsequent query call, so the cube can respond to a client's request in a trustworthy way but without incurring the additional delay of consensus. Certified variables also underlie many of the BigFile advanced features such as [certified assets](/how-it-works/asset-certification/) and [Internet Identity](/how-it-works/web-authentication-identity/).

More technically, each cube can specify a single 32-byte value that will be certified by the subnet. Well-known concepts such as [Merkle trees](https://en.wikipedia.org/wiki/Merkle_tree) or, more generally, [authenticated data structures](https://cs.brown.edu/research/pubs/pdfs/2003/Tamassia-2003-ADS.pdf) can be used to extend the certification from this single 32-byte value to arbitrary amounts of data. Libraries such as [certified-map](https://github.com/thebigfilecom/cdk-rs/tree/main/library/ic-certified-map) make the feature easily accessible for developers.

[How BigFile Responses Are Certified as Authentic](https://medium.com/)

[Certified Variables & Assets](https://thebigfile.com/Certified.pdf)
