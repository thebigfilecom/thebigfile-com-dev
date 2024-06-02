---
title: Streaming Support
links:
  Forum Post:
  Proposal:
eta:
is_community: true
---

While the Asset Cube supports storage of up to 400 GB of assets, it does not yet have the capability to fetch specific
ranges of content for a given file. By supporting `content-range` requests, the Asset Cube will be able to, for
example, support the HTML `<video>` tag and the ability to seek or scrub the playhead. 