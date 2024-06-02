---
title: Subnet Splitting MVP
links:
  Forum Link: https://forum.thebigfile.com/
  Proposal: https://dashboard.thebigfile.com/
eta:
is_community: false
---

The BigFile is designed to have unbounded capacity by scaling out to different subnet blockchains. 
Each subnet, however, has a bounded capacity: It is limited in how many messages it can process and how much cube memory it can hold. 
If a subnet becomes overloaded then the cubes on that subnet may become less responsive or unable to increase their memory usage. 

Subnet splitting aims to address such issues by providing functionality to split a single subnet into two subnets. 
The MVP version can be viewed as a first step towards the vision of full subnet splitting layed out in the forum post linked below. 
The goal is to have a fully functional and end to end verifiable process which consists of a series of NNS proposals. 
Compared to full subnet splitting the MVP version cuts some corners in terms of automation and minmizing downtime but otherwise follows the same ideas so that the MVP version can be turned into full subnet splitting in future incremental steps. 