---
title: "Venmo"
type: "company"
publish: false
confidence: "low"
created: "2026-06-17"
updated: "2026-06-19"
last_updated_by: "agent"
sources:
  - "Roam Research daily-note export — September 22nd, 2021 (Index Ventures sourcing/diligence call log): ~/Downloads/September 22nd, 2021.md"
  - "wiki/meetings/September 22nd, 2021 — API Security Transcript (Salt Security).md"
tags:
  - "fintech"
  - "api-security"
  - "data-leakage"
aliases:
  - "Venmo"
related:
  - "[[September 22nd, 2021 — API Security Transcript (Salt Security)]]"
  - "[[API Security]]"
  - "[[Salt Security]]"
  - "[[Payments]]"
  - "[[Index Ventures]]"
---

# Venmo

**One-line:** *Payments app (world-knowledge identifier); in Kyle's API-security notes it's the case study where ~200M transactions were scraped via its API — "data leakage," not an official breach.*

## What we know

- In 2020, 200 million Venmo transactions were scraped and pulled out by querying its API, exposing a variety of information. (September 22nd, 2021 — API Security Transcript (Salt Security))
- The transcript debated whether to call it a breach at all: *"it was just data leakage at the time, not an official hack… There wasn't someone in my network… exfiltrating it out. It was just a way to query and get this information from us."* Used to illustrate that securing the front-end / GUI leaves the API interface open. (September 22nd, 2021 — API Security Transcript (Salt Security))

## Context hub

- September 22nd, 2021 — API Security Transcript (Salt Security) — the source; Venmo as the API data-leakage example.
- [API Security](/notes/api-security) — the risk category illustrated.
- [Payments](/notes/payments) — Venmo's sector.
- [Salt Security](/notes/salt-security) — the API-security vendor whose diligence raised the case.
- [Index Ventures](/notes/index-ventures) — firm whose call surfaced this example.

## Mentioned in

- September 22nd, 2021 — API Security Transcript (Salt Security) — example of API data leakage.
