---
title: "Developer-Led Security"
type: "concept"
publish: false
confidence: "low"
created: "2026-06-17"
updated: "2026-06-19"
last_updated_by: "agent"
sources:
  - "wiki/diligence-research/Salt Security Diligence — 2021.md"
tags:
  - "cybersecurity"
  - "devops"
  - "developer-tools"
aliases:
  - "Developer-Led Security"
related:
  - "[[Salt Security Diligence — 2021]]"
  - "[[Snyk]]"
  - "[[Salt Security]]"
  - "[[DevSecOps]]"
  - "[[API Security]]"
  - "[[DevOps]]"
---

# Developer-Led Security

**One-line definition:** *Security tooling that meets developers where they work, rather than sitting purely in a security team's dashboard — two main vectors: at the command line (Snyk) and around the surface / at runtime (Salt Security).*

## How sources describe it

- Two ways to play developer-led security: [Snyk](/notes/snyk) at the command line (shift-left, code-time) vs. [Salt Security](/notes/salt-security) around the surface (runtime, production). (Salt Security Diligence — 2021)
- "We commonly hear the refrain 'developers write APIs, so they should be responsible for securing APIs.' … 52% of respondents put responsibility for API security on the API team, developers, and DevOps." — but in practice, not all API security problems can be tested for in code prior to runtime. (Salt Security Diligence — 2021)
- Key design challenge for runtime API security tools: signals need to reach engineering teams in a way that "doesn't piss them off and doesn't take them away from their core job of building product." ([Prabhath Karanth](/notes/prabhath-karanth), Salt Security Diligence — 2021)
- Salt Security critique: primarily serves security teams, not well-built for developers writing code. [David Mark](/notes/david-mark) at Appsflyer wanted a system that served both DevOps AND security audiences.

## Where it shows up

- Salt Security Diligence — 2021 — framing concept for the thesis.

## Related concepts

- [Snyk](/notes/snyk) — the command-line / shift-left approach to developer-led security
- [Salt Security](/notes/salt-security) — the runtime / surface-area approach
- [DevSecOps](/notes/devsecops) — the broader organizational practice
- [API Security](/notes/api-security) — the problem domain where the developer-vs-security responsibility debate plays out (52% put it on the API team / developers / DevOps)
- [DevOps](/notes/devops) — the audience runtime security tooling must serve alongside the security team

## Connections

- [Prabhath Karanth](/notes/prabhath-karanth) — frames the design challenge: runtime signals must reach engineering without pulling them away from building product
- [David Mark](/notes/david-mark) — at Appsflyer, critiqued Salt Security for serving security teams over developers; wanted a system serving both DevOps and security
