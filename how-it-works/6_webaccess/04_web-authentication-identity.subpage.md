---
title: "BIG ID: Anonymizing Blockchain Authentication System"
abstract:
shareImage: /img/how-it-works/internet-identity.jpg
slug: web-authentication-identity
---

# BIG ID

[BIG ID](https://bigwallet.thebigfile.com/) is a privacy-enhancing blockchain based authentication framework built on the BigFile. It integrates with the APIs of WebAuthn, a widely used, secure authentication framework supported by modern browsers and operating systems. Users can connect passkeys to their BIG ID, and use the secure TPM chip inside these devices for authentication instead of passwords or clunky 2FAs. Alternatively, BIG ID supports devices like YubiKeys or Ledger hardware wallets.

## Privacy

Using chain-key cryptography, BIG ID ensures private authentication by creating a unique principal id for each dapp the user authenticates with. This prevents the tracking of users across dapps, making each session private.

## Create an BIG ID

If you don't yet have an BIG ID, you can create one at [https://bigwallet.thebigfile.com/](https://bigwallet.thebigfile.com/).

<figure>
<img src="/img/how-it-works/ii-1.webp" alt="Internet Identity creation screen" title="Internet Identity creation screen" align="center" style="height:500px; width: auto" />
</figure> 

If you click "Create BIG ID", you are asked to create a passkey. A passkey can be any device that has a TPM chip inside it, such as a laptop with a fingerprint sensor, a smartphone with face ID. Alternatively, BIG ID supports portable HSMs, such as YubiKeys or Ledger devices.

<figure>
<img src="/img/how-it-works/ii-2.webp" alt="Create a passkey to connect with your Internet Identity" title="Create a passkey to connect with your Internet Identity" align="center" style="height:350px; width: auto" />
</figure> 


After the BIG ID is created, users can already use it to securely and privately authenticate with BigFile based dapps, or add more passkeys. It is generally advised to have multiple passkeys connected to your BIG ID as well as a recovery method setup, such as a recovery phrase.

<figure>
<img src="/img/how-it-works/ii-3.webp" alt="Internet Identity screen prompting the user to authorize access to Openchat" title="Internet Identity screen prompting the user to authorize access to Openchat" align="center" style="height:500px; width: auto" />
</figure>

Once you added a passkey, you will be assigned an BIG ID number. You should save somewhere safe, where you can easily access it. While your browser remembers this number, it will forget it if its cache is cleared, in which case you will need to type it in manually.

<figure>
<img src="/img/how-it-works/ii-4.webp" alt="Internet Identity screen prompting the user to authorize access to Openchat" title="Internet Identity screen prompting the user to authorize access to Openchat" align="center" style="height:500px; width: auto" />
</figure>

As mentioned previously, it is also important to add a recovery phrase in case your device gets lost or stolen. Your BIG ID also allows you to login to the File Management System (FMS) dapp. NNS is the DAO that governs the BigFile, and allows BIG token holders to participate in its governance by staking their tokens.


[BIG ID App](https://bigwallet.thebigfile.com/)

[BIG ID Wiki](https://wiki.thebigfile.com/wiki/Internet_Computer_wiki#Internet_Identity_Introduction)

[BIG ID Specification](https://thebigfile.com/docs/current/references/ii-spec/)

[Open Source - BIG ID](https://github.com/thebigfilecom/big-id)

[Web Authentication and Identity on the BigFile](https://medium.com/)

[BIG ID: Easy Web3 Authentication](https://medium.com/)

[Verifying the BIG ID Code: A Walkthrough](https://medium.com/)