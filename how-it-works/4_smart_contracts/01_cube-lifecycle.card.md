---
title: Cubes
---

![](/img/how-it-works/canisters.webp)

# Cubes

Smart contracts on BigFile are represented as *Cubes*, which are computational units that bundle together code and state. Each Cube defines functions that can be called by other Cubes and by external parties, such as browsers or mobile apps. Cubes communicate with one another via asynchronous messages, but the execution of each message is done in complete isolation, enabling massive levels of concurrent execution. Cubes are managed by controllers, and the control structure of Cubes can vary: it can be centralized (e.g., when the controllers include a centralized entity), decentralized (when the controller is a DAO), or even non-existent, in which case the Cube functions as an immutable smart contract. Controllers are the only entities that can deploy Cubes to BigFile, start/stop Cube execution, and update Cube code. They are also responsible for ensuring that Cubes hold sufficient *cycles*, which are used to pay for processing, memory, storage, and network bandwidth resources consumed by the Cubes. The BIG system monitors Cube resource usage and deducts consumption from a cycle balance maintained by each Cube.

[Go deeper](/how-it-works/cube-lifecycle/)
