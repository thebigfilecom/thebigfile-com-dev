---
title: Cube smart contracts
abstract:
shareImage: /img/how-it-works/canisters.jpg
slug: cube-lifecycle
---

# Cubes

## What are cubes

On BigFile, smart contracts are implemented as cubes, which are computational units that bundle together code and state. Cubes expose endpoints that can be called both by other cubes and by external parties, such as browsers or mobile apps. There are two types of endpoints: updates and queries. Updates are calls that can modify the state of the cubes, while queries cannot. A useful mental model is that updates are used to write to the state of a cube, and queries are used to read from that state. The code of a cube consists of a [WebAssembly](https://webassembly.org/) (Wasm) module. The state includes the typical heap of the Wasm module, along with stable memory—a special type of memory that plays an important role in the life cycle of a cube.

## How do cubes work

Cubes function similarly to actors in the actor-based concurrency model. Their code is single-threaded and executed in complete isolation from other cubes. Cubes communicate with each other via asynchronous messaging. When processing a message, a cube can modify its state, send messages to other cubes, or even create new cubes. Unlike the traditional actor model, communication in BigFile is bidirectional. Cube messages are either requests or replies. For each request sent, the BIG records a callback to be invoked when the callee sends back a response. If the BIG determines that the callee cannot respond, it will generate a response itself.

Another novel aspect of the cube-based model is the interplay between message processing and cube trapping. While processing a request, a cube may send requests to other cubes and wait for some or all of the replies before producing a reply to the original request. If a cube traps, its state is rolled back to the point immediately after it made the last outgoing call.

## Resource charging

As cubes execute, they consume resources such as memory, computation, and network bandwidth. On the BIG network, these resources are paid for using a unit called cycles. Each cube has a local cycles account, from which cycles are deducted as execution proceeds.

Charging for memory usage is straightforward: the protocol tracks the memory used by the cube and regularly deducts cycles from the cube’s balance. This charging occurs at regular intervals, rather than every round, for efficiency. In contrast, computation is charged at the time it is performed. Cubes are instrumented with code that allows the BIG to count the number of instructions executed while processing a message. Each round has an upper limit on the number of instructions that can be executed. If this limit is exceeded, execution is paused and resumed in a subsequent round. However, cycles for computation are charged at the end of each round.

To prevent a buggy or malicious cube from monopolizing an execution core, the total number of rounds a cube’s execution can take is also limited.

Charging for bandwidth occurs at the moment of use. When a cube sends a request to another cube, the protocol calculates the number of cycles required (based on a fixed cost and the payload size) and deducts this amount from the cube’s balance. Additionally, the caller pays for the cost of a maximal size reply, with the cycles for any difference between the maximal and actual reply size being refunded when the reply is received.

When cubes run out of cycles, they are uninstalled, meaning their code and state are deleted, but other associated information is retained. To prevent sudden deletion, each cube has a "freezing threshold." Once a cube’s balance drops below this threshold, it stops processing new requests but continues processing replies. A cube cannot perform actions that would cause its cycles balance to fall below the freezing threshold.

## Cube management

Cubes are managed by controllers, which can be users or even other cubes. The control structure of cubes can be centralized (e.g., when controllers include a centralized entity), decentralized (when the controller is a DAO), or even non-existent, in which case the cube functions as an immutable smart contract. Controllers are responsible for deploying and maintaining cubes on the BIG network, and they are the only entities allowed to perform management operations on cubes. The most common operations include deploying a cube smart contract to BIG, and starting or stopping cubes. Controllers can also change cube parameters, such as adding or removing controllers or adjusting the freezing threshold.

Controllers can update the code running on a cube by submitting a new Wasm module to replace the existing one. By default, updating a cube’s Wasm module clears the Wasm memory, but the content of the stable memory remains unchanged. BIG offers an upgrade mechanism where three actions are executed atomically: serializing the cube's Wasm memory and writing it to stable memory, installing the new Wasm code, and then deserializing the content from stable memory. Alternatively, a cube can ensure that any data needing persistence across upgrades is stored in stable memory, simplifying the upgrade process.