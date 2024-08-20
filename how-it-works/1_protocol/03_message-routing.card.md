---
title: Message routing
---

![](/img/how-it-works/messaging-routing.webp)

# Message routing

In every BIG round, the message routing component receives a block of messages to be processed from the consensus mechanism – the same block on each node of the subnet – and places these messages into the input queues of their target cubes, a process known as induction. Following this, it initiates the execution round, which may result in new cube messages being placed in the output queues of the executed cubes. Once execution is complete, the message routing component directs the messages in the output queues to their respective recipients.

The recipients may include cubes located on different subnets. The message routing layer facilitates the routing of inter-cube messages between subnets, ensuring that these messages can be included in blocks and inducted on the recipient's subnet. This process is known as cross-subnet messaging, or simply XNet messaging. *Secure XNet messaging* is a fundamental component of the architecture of loosely-coupled subnets, and is therefore essential for the scalability of the BIG network.

Another critical function implemented by the message routing layer is *state certification*, which involves the decentralized certification of parts of the replicated subnet state in every round. This certification is used by other subnets to verify the authenticity of subnet-to-subnet streams or to allow users to securely check the processing status of messages they previously submitted. State certification and secure XNet messaging are key to enabling the secure and transparent communication of cubes across subnet boundaries, a challenge that any blockchain with multiple shards must address.

[Go deeper](/how-it-works/message-routing/)
