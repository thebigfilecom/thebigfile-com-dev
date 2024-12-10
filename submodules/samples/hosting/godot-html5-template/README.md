---
keywords: [html5, html, godot, hosting, host a website, beginner]
---

# Godot HTML5 sample

[View this sample's code on GitHub](https://github.com/thebigfilecom/examples/)

## Overview
The example shows how to deploy a Godot HTML5 build on the BIG in an asset Smart Contracts. The Godot HTML5 build is deployed as frontend, no backend is needed in this sample.

This example project can be cloned, installed, and deployed locally, for learning and testing purposes. The instructions are based on running the example on either macOS or Linux, but when using WSL2 on Windows, the instructions will be the same.

## Prerequisites

This example requires an installation of:

- [x] Install the [BIG SDK](https://thebigfile.com/docs/current/developer-docs/setup/install/).

- [x] Download and install

## Install

Clone the example dapp project:

```bash
git clone https://github.com/thebigfilecom/examples
cd examples/hosting/godot-html5-template
```

## Deployment
The local replica is started by running this command:

```bash
big start --background
```

When the local replica is up and running, run this command to deploy the canisters:

```bash
big deploy
```
