---
title: Cubes
---

![](/img/how-it-works/canisters.webp)

# Cubes

Smart contracts on the BigFile come in the form of *Cubes*: computational units that bundle together code and state. Each Cube defines functions that can be called by other Cubes and parties external to the BIG, such as browsers or mobile apps. Cubes communicate with one another via asynchronous messages but the execution of each such message is done in complete isolation, allowing for massive levels of concurrent execution. Cubes are managed by controllers. The control structure of Cubes can either be centralized (e.g. when the controllers include some centralized entity), decentralized (when the controller is a DAO) or even non-existent, in which case the Cube is an immutable smart contract. Controllers are the only entities which can deploy the Cube to the BigFile, start/stop Cube execution and update the Cube code.  The controllers also need to ensure that Cube hold sufficient *cycles*, charged for processing, memory, storage and network bandwith resources consumed by Cubes. To this end the BIG monitors the resource usage of Cubes and deducts their consumption from a cycle balance maintained locally by each Cube.

[Go deeper](/how-it-works/cube-lifecycle/)
