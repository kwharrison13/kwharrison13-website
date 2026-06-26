---
title: "XDR"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-19"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/companies/NeoSec.md"
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
  - "wiki/diligence-research/Noname Security - Diligence.md"
tags:
  - "cybersecurity"
  - "api-security"
aliases:
  - "XDR"
  - "Extended Detection and Response"
related:
  - "[[NeoSec]]"
  - "[[API Security]]"
  - "[[CrowdStrike ($CRWD)]]"
  - "[[Nir Rothenberg]]"
---

# XDR

In Kyle's [API Security](/notes/api-security) diligence, XDR is the detection-and-response posture that [NeoSec](/notes/neosec) used to differentiate itself: rather than relying on a human threat hunter to interpret findings, the vendor "presented an XDR model, so instead of a threat hunter analyzing it they do it all themselves" (Salt Security Diligence — 2021, Noname Security - Diligence). NeoSec paired this with a log-analysis approach (parsing logs for anomalies with its own queries) instead of mirroring live traffic — a model [Nir Rothenberg](/notes/nir-rothenberg) (CISO, [Rapyd](/notes/rapyd)) described as feeling "geared towards being acquired by [CrowdStrike ($CRWD)](/notes/crowdstrike)," i.e. "CrowdStrike for API Security."

The recurring theme in Kyle's notes is that XDR shifts the analytical burden from the security team onto the platform — the vendor identifies the risks itself — which is exactly what made NeoSec read as an acquisition target for a larger endpoint/security platform.

**Context:** XDR ("Extended Detection and Response") is a cybersecurity category that unifies telemetry across endpoints, networks, identities, cloud, and applications into a single detection-and-response platform, automating correlation and triage that would otherwise fall to analysts. Vendors associated with the category include CrowdStrike, Palo Alto Networks, and Microsoft.

## Where this appears

- [NeoSec](/notes/neosec) — built its differentiation on an XDR model that identifies risks itself rather than relying on a threat hunter.
- Salt Security Diligence — 2021 — the 2021 API security market sweep where the XDR framing of NeoSec was recorded.
- Noname Security - Diligence — same XDR-model note captured in the Noname diligence file.
