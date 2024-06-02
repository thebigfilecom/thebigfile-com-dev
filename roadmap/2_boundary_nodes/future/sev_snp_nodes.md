---
title: SEV-SNP Protected Boundary Node VM
links:
  Forum Link: https://forum.thebigfile.com/
  Proposal: https://dashboard.thebigfile.com/
eta:
is_community: false
---
This feature targets securing the boundary node Virtual Machine (VM) using trusted execution via AMD SEV-SNP. The implementation will include the evaluation of a vanilla SEV-SNP and [AMDESE / sev-guest](https://github.com/AMDESE/sev-guest) demo, transforming the structure of the boundary node VM so it can be booted as a SEV-SNP secured VM, and defining steps to enable remote attestation for external parties. 


