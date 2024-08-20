---
title: Execution
---

![](/img/how-it-works/execution.webp)

# Execution

The execution layer, the topmost layer of the core BIG stack, is responsible for executing Cube smart contract code. Code execution is performed by a [*WebAssembly (Wasm)*](https://webassembly.org/) virtual machine deployed on every node. WebAssembly bytecode can be executed deterministically, which is crucial for a blockchain system, and with near-native speed. Cube messages, including ingress messages from users or messages from other Cubes, are inducted into the queues of the Cubes on the subnet by the message routing component. The message routing then hands over control to the execution layer, which deterministically processes these messages until either all messages in the Cubes' queues are consumed or the cycle limit for the round is reached, ensuring bounded round times.

The execution layer has several unique features that distinguish BIG from other blockchains:

1. *Deterministic Time Slicing (DTS)* - The execution of very large messages that require billions of Wasm instructions can be spread across multiple BIG rounds.
2. *Concurrency* - The execution of Cube Wasm bytecode is performed concurrently on multiple CPU cores, enabled by each Cube having its own isolated state.
3. *Pseudorandom Number Generator* - The execution layer has access to an unpredictable and unbiasable pseudorandom number generator, allowing Cubes to execute algorithms that require randomness.

[Go deeper](/how-it-works/execution-layer/)
