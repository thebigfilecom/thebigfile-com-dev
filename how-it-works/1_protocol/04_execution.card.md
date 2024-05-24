---
title: Execution
---

![](/img/how-it-works/execution.webp)

# Execution

The execution layer, the topmost layer of the core BIG stack, is responsible for executing Cube smart contract code. Code execution is done by a [*WebAssembly (Wasm)*](https://webassembly.org/) virtual machine deployed on every node. WebAssembly bytecode can be executed deterministically, which is important for a blockchain system, and with near-native speed. Cube messages, i.e., ingress messages by users or messages by other Cubes, have been inducted into the queues of the Cubes on the subnet by message routing. Message routing then hands over control to the execution layer, which deterministically executes messages, either until all messages in the Cubes' queues are consumed or the cycles limit for the round has been reached, to ensure bounded round times.

The execution layer has many unique features, which sets apart the BIG from other blockchains: 
1. *Deterministic time slicing (DTS)* - The execution of very large messages requiring billions of Wasm instructions to be executed can be split across multiple BIG rounds. This capability of executing messages over multiple rounds is unique to the BigFile blockchain.
2. *Concurrency* - Execution of Cube Wasm bytecode is done *concurrently* on multiple CPU cores, which is possible due to each Cube having its own isolated state. 
3. *Pseudorandom number generator* - Execution layer has access to unpredictable and unbiasable *pseudorandom number generator*. Cubes can now execute algorithms that require randomness. 

[Go deeper](/how-it-works/execution-layer/)
