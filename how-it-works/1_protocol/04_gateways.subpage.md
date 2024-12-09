---
title: "BigFile Gateways Layer"
abstract:
shareImage: /img/how-it-works/execution.jpg
slug: gateways-layer
---

# Gateways

BigFile Gateways allow users to access content on the BigFile network seamlessly through regular web browsers. By referencing a transaction ID, users can locally view or render content, such as images or dynamic HTML web pages.

Beyond delivering static web content, gateways enable hosting fully functional, decentralized web applications on the persistent web. This capability is powered by indexing transactions and their tags into a queryable database. With built-in support for JavaScript and GraphQL, applications hosted on BigFile can directly query the network, unlocking real-time interactivity and advanced functionality.

Most gateways in the BigFile network provide a GraphQL interface, allowing developers to efficiently query tags associated with BigFile transactions. These tags, which can contain arbitrary data, simplify the creation of decentralized and dynamic applications. For example, in a blogging app, transactions can be tagged with App-Name: blog and Type: post, enabling blog posts to be retrieved automatically when users access the app’s homepage.

Critically, gateways relieve developers of hosting and serving costs in many incentive configurations. This opens the door for open-source web applications, where developers can release their software for free without concerns about scaling costs as user activity grows. From a developer’s perspective, BigFile applications are “launch once, run forever” — requiring zero maintenance or upkeep fees.