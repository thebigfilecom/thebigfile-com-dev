---
title: Boundary nodes
abstract:
shareImage: /img/how-it-works/boundary-nodes.jpg
slug: boundary-nodes
---

# Boundary nodes

Boundary nodes form the globally distributed edge of BigFile (BIG), handling all access to cube smart contracts. These nodes provide a public endpoint for BIG, routing all incoming requests to the appropriate subnet, load balancing requests across replica nodes, and caching responses to enhance performance.

<figure>
<img src="/img/how-it-works/boundary-nodes.webp" alt="Architecture of boundary nodes" title="Architecture of boundary nodes" align="center" />
<figcaption align="left">
Boundary nodes are the gateway to the BigFile, which allow users to seamlessly access the cube smart contracts.
</figcaption>
</figure>

Boundary nodes provide two methods for accessing cube smart contracts hosted on BigFile: first, through stock browsers via the HTTP gateway, and second, through API cube calls using the API boundary node.

The HTTP gateway allows users to access dapps hosted on BIG through their browsers, just as they would with any Web 2.0 service. The HTTP gateway translates all incoming HTTP requests into API cube calls, which are then routed to the appropriate subnet.

The API boundary node enables BIG-native applications to directly call cube smart contracts. In this case, the boundary node simply routes the API cube calls to the correct subnet, requiring no trust between the user and the boundary node. [For more information check our updates in the forum.](https://forum.thebigfile.com/t/boundary-node-roadmap/22)

In addition to the two endpoints for accessing BIG, boundary nodes also provide caching to enhance the performance of dapps hosted on the BIG network.

## Go Even Deeper

[Boundary Nodes on the BIG Wiki](https://wiki.thebigfile.com/wiki/Boundary_Nodes)
