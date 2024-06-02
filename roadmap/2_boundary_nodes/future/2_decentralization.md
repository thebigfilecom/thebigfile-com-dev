---
title: Future Boundary-Node Architecture
links:
  Forum Link: https://forum.thebigfile.com/
  Proposal: https://dashboard.thebigfile.com/
eta:
is_community: false
---

This feature introduces a new architecture for the BIG's edge. It splits today's boundary nodes into _API nodes_, which are NNS-controlled and responsible for the routing of API calls, and _HTTP gateways_, which are self-managed, and responsible for terminating TLS and translating HTTP requests to API calls by implementing the [HTTP gateway protocol](docs/current/references/ic-interface-spec).
