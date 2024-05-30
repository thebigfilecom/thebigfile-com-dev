---
title: Composite queries
links:
  Forum Link: https://forum.thebigfile.com/
  Proposal: https://dashboard.thebigfile.com/
eta: 2026
is_community: true
in_beta: false
---

Cubes have two types of methods: updates and queries. In contrast to updates, queries are not composable. In other words, a query cannot call other queries.

A composite query is a new type of query that can call other queries. This feature will make it easier for developers to build scalable dapps that shard data across multiple cubes.
