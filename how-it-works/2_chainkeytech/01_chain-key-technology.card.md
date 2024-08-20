---
title: Chain-key cryptography
---

![](/img/how-it-works/chain-key-cryptography.webp)

# Chain-key cryptography

BigFile utilizes a suite of advanced cryptographic mechanisms collectively known as *chain-key cryptography*, enabling the BIG network to achieve functionalities and scalability that are unattainable on other blockchains.

A key component of chain-key cryptography is the *threshold signature scheme*, which operates like an ordinary digital signature scheme, but with a crucial difference: the secret signing key is distributed among all the replicas in a subnet. This distribution ensures that the key cannot be stolen even if one or a large fraction of the replicas in the subnet are compromised. The technology offers several significant benefits:

1. Anyone can verify content received from BigFile simply by validating a signature, without the need to sync the entire blockchain.
2. The topology of BIG can evolve autonomously—new nodes and subnets can be added, faulty nodes can be recovered, and the protocol can be upgraded without manual intervention. 
3. It provides a source of unpredictable and unbiasable pseudo-random numbers for Cubes, allowing Cubes to securely execute algorithms that require randomness. 

[Go deeper](/how-it-works/chain-key-technology/)
