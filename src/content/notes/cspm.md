---
title: "CSPM"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-19"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/companies/CrowdStrike.md"
  - "wiki/companies/Palo Alto Networks.md"
  - "wiki/companies/Wiz.io.md"
tags:
  - "cybersecurity"
  - "cloud-security"
aliases:
  - "CSPM"
  - "Cloud Security Posture Management"
related:
  - "[[Wiz.io]]"
  - "[[Orca Security]]"
  - "[[CrowdStrike]]"
  - "[[Palo Alto Networks]]"
---

# CSPM

CSPM (Cloud Security Posture Management) is the cloud-security layer in the "must-have" security stack Kyle records across his cybersecurity diligence. In the Salt Security Diligence — 2021 notes, [Nir Rothenberg](/notes/nir-rothenberg) lays out the stack as: endpoint security ([CrowdStrike](/notes/crowdstrike), [SentinelOne](/notes/sentinelone)) → a firewall ([Palo Alto Networks](/notes/palo-alto-networks), [Check Point](/notes/check-point)) → a CSPM ([Orca Security](/notes/orca-security), [Wiz.io](/notes/wiz-io)) → an API security tool. [Wiz.io](/notes/wiz-io) is described as an agentless, full-stack, graph-based CSPM platform — a cloud-native scanner that pulls from apps, libraries, containers, VMs, cloud configs, identity providers, and the network — positioned to do "for Security what [Datadog](/notes/datadog) did for Observability." [Palo Alto Networks](/notes/palo-alto-networks) appears as the CSPM incumbent that "fumbled its first 2 acquisitions" in the space.

**Context:** Cloud Security Posture Management is a category of tooling that continuously scans cloud infrastructure (AWS/Azure/GCP configurations, identities, workloads) for misconfigurations and compliance violations. Wiz, Orca, and Palo Alto's Prisma Cloud are leading offerings.

## Where this appears

- [Wiz.io](/notes/wiz-io) — named as the agentless, graph-based CSPM platform at the center of the cloud-security pre-brief.
- [CrowdStrike](/notes/crowdstrike) — anchors the "must-have" stack framing where CSPM (Orca, Wiz) is one required layer.
- [Palo Alto Networks](/notes/palo-alto-networks) — the firewall/CSPM incumbent used as the comparison and acquisition reference point.
