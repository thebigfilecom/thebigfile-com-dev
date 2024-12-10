---
keywords: [static website, basic website, html, host a website, beginner]
---

# Static website

[View this sample's code on GitHub](https://github.com/thebigfilecom/examples/)

## Overview
The example shows how to deploy a simple, static website on the BIG in an asset Smart Contracts

The purpose of this example is to show how to deploy a static website in an asset Smart Contracts. While the website in this example is very simple, the method would be the same for a more advanced static website, e.g. based on popular static site generators.

This example covers:

- Build a very simple HTML website
- Deploy the smart contract locally
- Test the frontend in browser 

## Prerequisites

This example requires an installation of:

- [x] Install the [BIG SDK](https://thebigfile.com/docs/current/developer-docs/setup/install/).

- [x] Download and install

### Install
Install the example dapp project:

```bash
git clone https://github.com/thebigfilecom/examples
cd examples/hosting/static-website
```

## Documentation

### Website
The website is simple. It consists of an HTML file, a CSS file and a PNG file. The content of the HTML file looks like this:

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <title>Static Website</title>
        <base href="/">
        <link type="text/css" rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <img src="logo.png" alt="BigFile logo" />
    </body>
</html>
```

The only styling done in the CSS file is aligning the logo image:

```css
img {
    max-width: 50vw;
    max-height: 25vw;
    display: block;
    margin: auto;
}
```

### bigfile.json

## Deployment


## Testing

## License
This project is licensed under the Apache 2.0 license, see `LICENSE.md` for details. See `CONTRIBUTE.md` for details about how to contribute to this project. 
