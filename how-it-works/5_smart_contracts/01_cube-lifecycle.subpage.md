---
title: Cube smart contracts
abstract:
shareImage: /img/how-it-works/canisters.jpg
slug: cube-lifecycle
---

# Cubes

## What are cubes

On the BigFile, smart contracts come in the form of cubes. These are computational units which bundle together code and state. Cubes expose endpoints which can be called both by other cubes and by parties external to the BIG, such as browsers or mobile apps. There are two types of endpoints. Updates are calls that can modify the state of the cubes and queries which cannot do that. A good mental model for these is that updates are used to write to the state of a cube and queries are used to read from that state. The code of a cube consists of a [WebAssembly](https://webassembly.org/) (Wasm) module. The state consists of the usual heap of the Wasm module, together with stable memory, a special type of memory which plays an important role in the life-cycle of a cube.

## How do cubes work

Cubes behave much like actors from the actor-based concurrency model. Their code is single threaded and is executed in complete isolation of other cubes. Cubes communicate with one another via asynchronous messaging. When processing a message, a cube can make changes to its state, send messages to other cubes, or even create other cubes. Unlike in the traditional actor model, communication is bidirectional. Cube messages are either requests or replies. For each request sent, the BIG records a callback to be invoked when the callee sends back a response. If the BIG determines that there is no way for the callee to respond, then the BIG will produce a response. Another novel aspect of the cube based model is the interplay between message processing and cube trapping. While processing a request a cube may send requests to other cubes and wait for (some of) the replies, before producing a reply to the original request. If a cube traps, its state is rolled back to the point right after it made the last outgoing call.

## Resource charging

As they execute, cubes use resources in the form of memory, computation and network bandwidth. On the BIG all of these are paid for using a unit called _cycles_. To this end, each cube has a local cycles account from which cycles are deducted as execution proceeds. Charging for memory usage is straightforward. The protocol keeps track of the memory used by the cube and regularly charges the cube’s balance. For efficiency, this charging happens at regular intervals but not every round. In contrast, charging for computation at the time that computation is performed. To this end, the cubes are instrumented with code that allows the BIG to count the number of instructions executed while processing a message. Every round, there is an upper bound on the number of instructions that can be executed during that round. If this number of instructions is exceeded, then execution is paused and continued in a subsequent round. However, cycles for the computation performed during any round are already charged at the end of that round. To prevent a buggy or malicious cube from completely taking over an execution core, the total number of rounds the execution of a cube can take is also bounded.

Charging for bandwidth is also done at the moment of use. When a cube wants to send a request to another cube, the protocol calculates the number of cycles that sending the message costs (the cost of sending has a fixed component and a component that depends on the size of the payload) and deducts the cost from the cube’s balance. Furthermore, it also deducts the cost of sending a maximal size reply from the callee since for inter-cube messages the caller pays for reply. The cycles corresponding to the difference between the maximal size and the actual size of the reply are refunded to the cube when the reply arrives.

When cubes run out of cycles, they are uninstalled (their code and state are deleted, but the rest of the information associated with the cubes are kept). To avoid that deletion happens too suddenly, cubes have associated a so-called freezing threshold. Once the cube’s balance dips below the freezing threshold, then the cube stops processing any new requests; replies are still being processed. A cube cannot perform actions (e.g. attaching cycles or sending a message) which would result in the cycles balance dipping below the freezing threshold.

## Cube management

Cubes are managed by controllers which can be users or even other cubes. The control structure of cubes could be centralized (e.g. when the controllers include some centralized entity), decentralized (when the controller is a DAO) or even non-existent, in which case the cube is an immutable smart contract. Controllers are in charge of deploying and maintaining the cubes to the BIG and they are the only entities who are allowed to perform management operations on cubes. The most common such operations are deploying a cube smart contract to the BIG and starting and stopping cubes. The controller of cubes can change the cube parameters, including adding and removing controllers or changing the freezing threshold.

Controllers can update the code that runs on cube by submitting a new Wasm module which should replace the older one. By default, updating the Wasm module of a cube wipes out the Wasm memory but the content of the stable memory remains unchanged. The BIG offers an upgrade mechanism where three actions are executed atomically: serializing the Wasm memory of the cube and writing it to stable memory, installing the new Wasm code and then deserializing the content of the stable memory. Of course, a cube may ensure at all times that the data that needs to be persisted across upgrades is stored in the stable memory in which case the upgrade process is significantly simpler.