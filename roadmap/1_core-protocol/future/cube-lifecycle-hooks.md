---
title: Cube Lifecycle Hooks
links:
  Forum Link: https://forum.thebigfile.com/
  Proposal: https://dashboard.thebigfile.com/
eta:
is_community: true
---

Currently, developers have to actively monitor their cubes by periodically
polling the cycle balance and the memory usage of the cubes. Periodic
polling is inefficient in terms of resource usage and difficult to maintain for dapps with many cubes.

This feature aims to improve the monitoring and observability of cubes by
introducing a push model, where the cube is automatically notified when it
is low on cycles and memory.
