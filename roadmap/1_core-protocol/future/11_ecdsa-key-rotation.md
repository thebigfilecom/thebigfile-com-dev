---
title: ECDSA key rotation and resharing
links:
  Forum Link: https://forum.thebigfile.com/
eta: 2026
is_community: true
in_beta: false
---

To make the threshold ECDSA feature as secure as possible, all ECDSA secret shares are periodically refreshed by resharing the secret key. The encryption keys that are used in this distributed key generation protocol are also regularly updated by the nodes. This makes it harder for an attacker to steal sufficiently many ECDSA key shares, as the attack now has to be performed in a small time window. 