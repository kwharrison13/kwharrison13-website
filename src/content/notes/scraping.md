---
title: "Scraping"
type: "concept"
publish: false
confidence: "low"
created: "2026-06-19"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/concepts/API.md"
tags: []
aliases:
  - "Scraping"
related:
  - "[[API]]"
---

# Scraping

Scraping appears in Kyle's notes as one of the abuse patterns that makes [API](/notes/api) security hard. The [API](/notes/api) page frames the integration surface as large and under-secured: web application firewalls protect the front-end, yet leave the API interface open to brute-forcing, unauthenticated access, and scraping — the context of the Salt Security transcript (September 22nd, 2021 — API Security Transcript (Salt Security)). The thread is that undocumented or unauthenticated APIs are precisely the ones most exposed to programmatic harvesting.

**Context:** Scraping is the automated extraction of data from a website or API, typically by a bot issuing repeated requests and parsing the responses. It's a double-edged technique — legitimate uses include search indexing and data aggregation, while abusive uses include harvesting proprietary data, credential stuffing, and overwhelming endpoints that lack rate-limiting or authentication.

## Where this appears

- [API](/notes/api) — named alongside brute-forcing and unauthenticated access as a core threat to undocumented APIs, drawn from the Salt Security API-security transcript.
