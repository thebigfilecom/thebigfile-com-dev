---
title: Asset certification
abstract:
shareImage: /img/how-it-works/asset-certification.jpg
slug: asset-certification
---

# Asset certification

A user interacting with BigFile needs to confirm that the responses they receive are genuinely from BigFile and have not been tampered with. Traditionally, on the Internet, this problem is solved using public-key cryptography. The server running the service has a secret key, which it uses to sign all its responses. A user can then verify the signature on the response using the server’s public key.

Similarly, BigFile blockchain maintains a public-key/secret-key pair, just as a web server in Web2 does. Additionally, each individual subnet within BigFile also maintains its own public-key/secret-key pair. When a new subnet is formed, the NNS issues a certificate for the subnet that includes a signature of the subnet's public key signed with BigFile’s public key. When the subnet responds to a user's message, the response includes a certificate chain, which contains the subnet’s signature on the response and the certificate issued by the NNS to the subnet. The user can verify the certificate chain using BigFile’s public key, similar to how certificate chains are verified in Web2. 

Each blockchain node holds only a portion of its subnet’s secret key, making it incapable of signing a message independently. However, if at least two-thirds of the nodes in a subnet agree on a message, they can collectively combine their secret key shares to sign the message. The signed message can then be easily verified using the subnet's public key. If the verification succeeds, it confirms that at least two-thirds of the blockchain nodes running the Cube agreed to deliver that message. The technology used by BigFile to generate and maintain secret key shares, and to sign messages using these shares, is known as .

BigFile supports two types of messages: Query calls and Update calls. Query calls are similar to HTTP GET requests and do not modify the state of BigFile. These calls do not pass through the consensus protocol. A user can make a query call to any blockchain node in the subnet, and only that (potentially malicious) node will respond. Since generating a certificate requires consensus from at least two-thirds of the subnet’s nodes, BigFile does not issue a certificate when responding to query calls.

For efficiency reasons, cubes deliver web pages to the client via query calls. However, since the client needs to verify the received content, BigFile introduces the concept of [Certified Variables](/how-it-works/response-certification/). In essence, a cube can choose to create a certificate for a piece of data in advance and store it in the replicated state. Any user can later access this data along with its certificate through query calls.

Certified Variables can be used to pre-certify all the assets of an app (HTML, CSS, JavaScript files, images, videos, etc.). There are two ways to perform asset certification:

1. The cube developer can explicitly write code to manage and certify all the assets.
2. The cube developer can create an "asset cube" by setting the cube type to "asset" and specifying the folder containing all the assets. An asset cube is a regular cube, but it comes with boilerplate code that automatically handles the management and certification of all the assets.


When a cube issues a response along with its certificate, a [HTTP Gateway](/how-it-works/smart-contracts-serve-the-web) can be used to verify the certificate before passing on the response to the client. 

For more information on certification, check [Certified Variables](/how-it-works/response-certification/).

[Asset Certification Wiki Article](https://wiki.thebigfile.com/wiki/HTTP_asset_certification)

[Rust Cube Development Security Best Practices](/docs/current/references/security/rust-cube-development-security-best-practices#asset-certification)
