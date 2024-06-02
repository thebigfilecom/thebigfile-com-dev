---
title: Bazel-based Build System
links:
  Forum Post:
  Proposal:
eta:
is_community: false
---

As the code base of the BigFile grows, build and testing times increase. By switching to a Bazel-based build system, unnecessary build steps are automatically skipped, artifacts can be cached more broadly, and the CI times are significantly reduced. This will affect all community members who verify BigFile builds before voting on upgrades.
