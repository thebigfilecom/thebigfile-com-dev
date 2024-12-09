---
title: Cube smart contracts serve the Web
abstract:
shareImage: /img/how-it-works/web-content.jpg
slug: smart-contracts-serve-the-web
---

# Smart Contracts serve the web

BigFile is the blockchain capable of hosting a full dapp—frontend, backend, and data. Any user can deploy their dapp as a cube (smart contract) on BigFile. Cubes are computational units that bundle together code and state. They can store data, deliver HTML, CSS, and JavaScript pages, and respond to API requests. Cubes are incredibly fast, capable of delivering webpages within 200ms. Additionally, cubes can store up to 400 GB of data at an extremely low cost ($3 per GB per year). Browsing dapps hosted on BigFile is as seamless as browsing Web2 apps hosted on the cloud. These factors enable developers to deploy even large-scale social media applications entirely on-chain without the need for any cloud services. Try out a few [dapps deployed on the BigFile](https://thebigfile.com/ecosystem/).

## Workflow

We now describe how a client can access a website deployed as a cube on BigFile. The architecture involves four key components:

- Client: A device owned by the user. When the user browses a website, the client device sends an HTTP request.

- HTTP Gateway: The HTTP Gateway is software that implements the [HTTP Gateway protocol](/docs/current/references/ic-interface-spec/#http-gateway). It converts HTTP requests into a format that cubes can understand. When the cube sends back a response, the HTTP Gateway converts it into an HTTP response. The HTTP Gateway can be run on the client, on boundary nodes, or on independent servers.

- Boundary Node: Boundary nodes keep track of the architecture of BigFile, including the list of subnets, the nodes on each subnet, and the cubes running on each subnet. Upon receiving a cube query, boundary nodes route the request to one of the blockchain nodes running the cube.

- Cube: Developers can host their dapps as cubes. A cube consists of a collection of methods. Anyone can send queries to a cube, specifying the cube method to be executed along with the necessary inputs. BigFile receives the queries sent by users, executes the corresponding cube method, and returns the response to the user.


## Deploying web apps on the BigFile

If a cube wishes to serve web content, it should implement a method that processes an HTTP request (including the URL, HTTP method, and headers) and outputs an HTTP response (including the status, headers, and body). The cube method can return HTML, CSS, and JavaScript content as part of the HTTP response. For more details, refer to the [BigFile Interface Spec](/docs/current/references/ic-interface-spec/#ic-http_request).

There’s also an easy way to host existing static web apps (even those built using frameworks like React and Angular) on BigFile with minimal extra code by creating an “asset cube.” An asset cube works similarly to a regular cube, but much of the boilerplate code for hosting static websites is handled automatically. To host a static website, you simply need to create a cube, specify its type as “asset,” and designate the source folder of the web app. Once the asset cube is deployed to BigFile, the website can be accessed at http://<cube id>.thebigfile.tech and http://<cube id>.raw.thebigfile.tech. See the [tutorial](/docs/current/samples/host-a-website/) for more information.

## HTTP gateway protocol

Browsers communicate only via HTTP(s) protocols and are not designed to query a cube directly. To bridge the gap between browser protocols and BigFile protocols, we use an [HTTP Gateway](/docs/current/references/ic-interface-spec/#http-gateway), which is software that sits between the browser and BigFile. The browser sends an HTTP request to the HTTP Gateway. The gateway first interprets the URL in the request and extracts the corresponding cube ID. It then converts the HTTP request into a cube query and sends it to the boundary nodes. When the cube sends back a response, the HTTP Gateway interprets the response, verifies the signatures, converts it into an HTTP response, and sends it back to the browser.

There are several ways to implement the HTTP Gateway protocol. Currently, the main implementation on the boundary nodes is called `icx-proxy`. When a user enters a URL such as https://<cube id>.thebigfile.tech or https://<cube id>.raw.thebigfile.tech, the browser sends the HTTP request to the boundary node, which acts as the HTTP Gateway.

There are other possible implementations of the HTTP Gateway protocol. The gateway could be implemented as a browser extension or as a [service worker](https://web.dev/learn/pwa/service-workers/). Additionally, the Chromium browser could be modified to include an HTTP Gateway as part of the browser itself.


## SEO

Dapps running on BigFile seamlessly integrate into the Web 2.0 world, as crawlers can access them directly on-chain. This enables dapps to be indexed by search engines and allows their metadata to be read for generating previews and cards on social platforms. A tutorial on using the Search Engine Optimization (SEO) features of BigFile can be found in this [blog post](https://medium.com/).

[Serving web content](/capabilities/serve-web-content/)

[Hosting a static website on the BIG](/docs/current/samples/host-a-website/)

[HTTP Gateway Protocol](/docs/current/references/ic-interface-spec/#http-gateway)

[Web Serving Wiki Article](https://wiki.thebigfile.com/wiki/Web_Serving)