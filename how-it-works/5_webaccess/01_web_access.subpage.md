---
title: Cube smart contracts serve the Web
abstract:
shareImage: /img/how-it-works/web-content.jpg
slug: smart-contracts-serve-the-web
---

# Smart Contracts serve the web

BigFile is the blockchain capable of hosting a full dapp—frontend, backend, and data. Any user can deploy their dapp as a cube (smart contract) on BigFile. Cubes are computational units that bundle together code and state. They can store data, deliver HTML, CSS, and JavaScript pages, and respond to API requests. Cubes are incredibly fast, capable of delivering webpages within 200ms. Additionally, cubes can store up to 400 GB of data at an extremely low cost ($30 per GB Forever). Browsing dapps hosted on BigFile is as seamless as browsing Web2 apps hosted on the cloud. These factors enable developers to deploy even large-scale social media applications entirely on-chain without the need for any cloud services. Try out a few [dapps deployed on the BigFile](https://thebigfile.com/ecosystem/).

## Workflow

We now describe how a client can access a website deployed as a cube on BigFile. The architecture involves four key components:

- Client: A device owned by the user. When the user browses a website, the client device sends an HTTP request.

- 

- Boundary Node: Boundary nodes keep track of the architecture of BigFile, including the list of subnets, the nodes on each subnet, and the cubes running on each subnet. Upon receiving a cube query, boundary nodes route the request to one of the blockchain nodes running the cube.

- Cube: Developers can host their dapps as cubes. A cube consists of a collection of methods. Anyone can send queries to a cube, specifying the cube method to be executed along with the necessary inputs. BigFile receives the queries sent by users, executes the corresponding cube method, and returns the response to the user.


## Deploying web apps on the BigFile



There’s also an easy way to host existing static web apps (even those built using frameworks like React and Angular) on BigFile with minimal extra code by creating an “asset cube.” An asset cube works similarly to a regular cube, but much of the boilerplate code for hosting static websites is handled automatically. To host a static website, you simply need to create a cube, specify its type as “asset,” and designate the source folder of the web app. Once the asset cube is deployed to BigFile, the website can be accessed at http://<cube id>.thebigfile.tech and http://<cube id>.raw.thebigfile.tech. See the [tutorial](/docs/current/samples/host-a-website/) for more information.

## HTTP gateway protocol


There are several ways to implement the HTTP Gateway protocol. Currently, the main implementation on the boundary nodes is called `icx-proxy`. When a user enters a URL such as https://<cube id>.thebigfile.tech or https://<cube id>.raw.thebigfile.tech, the browser sends the HTTP request to the boundary node, which acts as the HTTP Gateway.

There are other possible implementations of the HTTP Gateway protocol. The gateway could be implemented as a browser extension or as a [service worker](https://web.dev/learn/pwa/service-workers/). Additionally, the Chromium browser could be modified to include an HTTP Gateway as part of the browser itself.


## SEO

Dapps running on BigFile seamlessly integrate into the Web 2.0 world, as crawlers can access them directly on-chain. This enables dapps to be indexed by search engines and allows their metadata to be read for generating previews and cards on social platforms. A tutorial on using the Search Engine Optimization (SEO) features of BigFile can be found in this [blog post](https://medium.com/).

[Serving web content](/capabilities/serve-web-content/)

[Hosting a static website on the BIG](/docs/current/samples/host-a-website/)

[Web Serving Wiki Article](https://wiki.thebigfile.com/wiki/Web_Serving)