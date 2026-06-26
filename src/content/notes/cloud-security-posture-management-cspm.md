---
title: "Cloud Security Posture Management (CSPM)"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-19"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/companies/Wiz.io.md"
  - "wiki/meetings/September 17th, 2021 — Wiz.io Pre-Brief (Shardul Shah).md"
tags:
  - "cybersecurity"
  - "cspm"
  - "cloud-security"
aliases:
  - "Cloud Security Posture Management (CSPM)"
  - "CSPM"
related:
  - "[[Wiz.io]]"
  - "[[Orca Security]]"
  - "[[Cloud Security]]"
---

# Cloud Security Posture Management (CSPM)

CSPM is the cloud-security category Kyle's notes anchor to [Wiz.io](/notes/wiz-io), described as an "agentless, full-stack, graph-based cloud-infrastructure security (CSPM) platform that brings context to prioritize actionable security signals across a customer's cloud estate." The 2021 Wiz pre-brief frames what the category aspires to: a cloud-native scanner that collects from applications, open-source libraries, containers, VMs, cloud configs, identity providers, and the network, then layers a graph that enriches the data to give an "up-to-the-minute" view of security across all cloud resources — deploying agentlessly in under 15 minutes rather than the months-long POCs that kill security projects. The analogy Kyle records is that Wiz could do "for Security what [Datadog ($DDOG)](/notes/datadog) did for Observability." In the Salt Security diligence, [Nir Rothenberg](/notes/nir-rothenberg) names CSPM (via Wiz) as one layer of a "must-have" cloud-security stack.

The competitive frame in the notes places [Orca Security](/notes/orca-security) and [Palo Alto Networks ($PANW)](/notes/palo-alto-networks) (which "fumbled its first 2 acquisitions" in the space) as the main rivals in the CSPM category, with additional well-funded startups expected to enter.

**Context:** Cloud Security Posture Management (CSPM) is a category of security tools that continuously scan cloud environments (AWS, Azure, GCP) for misconfigurations, compliance violations, and risks across infrastructure, identity, and workloads. Wiz and Orca popularized the "agentless," graph-based approach that scans the cloud account directly rather than installing agents on each workload.

## Where this appears

- [Wiz.io](/notes/wiz-io) — its core category; named in the company's one-line definition and tags, with agentless graph-based CSPM as the product wedge.
- September 17th, 2021 — Wiz.io Pre-Brief (Shardul Shah) — the pre-brief detailing the agentless, sub-15-minute CSPM deployment, the Datadog-for-security analogy, and the Orca/Palo Alto competitive frame.
