---
title: Wasm-native stable memory
links:
  Forum Link: https://forum.thebigfile.com/
  Proposal: https://dashboard.thebigfile.com/
eta: 2025
is_community: false
---

The goal of introducing Wasm-native stable memory is to improve the performance of stable reads and writes by letting these operations directly access stable memory in the same way Wasm loads and stores access the Wasm heap.

This will make direct use of stable memory more practical and it will not require cube developers to make any changes to how they use stable memory.
