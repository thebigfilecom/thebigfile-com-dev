---
title: Cube groups
links:
  Forum Link: https://forum.thebigfile.com/
  Proposal: 
eta:
is_community: false
---

Communication between cubes on the same subnet is significantly faster than between subnets. Since inter-cube communication latency is less of a concern, one can scale dapps through multi-cube architectures, as long as the cubes are guaranteed to be collocated. 

Since upcoming load-balancing mechanisms need to move cubes between subnets, we need to avoid splitting up cubes that are part of the same dapp. Cube groups would allow a dapp developer to explicitly indicate which cubes "belong" together and which should always be located on the same subnet.

