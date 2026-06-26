---
title: "Data Leakage"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-19"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/companies/Venmo.md"
tags:
  - "api-security"
  - "cybersecurity"
aliases:
  - "Data Leakage"
related:
  - "[[Venmo]]"
  - "[[API Security]]"
  - "[[Salt Security]]"
---

# Data Leakage

In Kyle's API-security notes, "data leakage" is the distinction that matters in the [Venmo](/notes/venmo) case: in 2020 roughly 200 million Venmo transactions were scraped by querying its public API, exposing user information. The transcript debated whether this even counted as a breach and landed on data leakage as the right frame — *"it was just data leakage at the time, not an official hack… There wasn't someone in my network… exfiltrating it out. It was just a way to query and get this information from us."* The point of the distinction is that securing the front-end / GUI does nothing if the underlying API interface remains openly queryable — a core argument for [API Security](/notes/api-security) as a category and for vendors like [Salt Security](/notes/salt-security).

**Context:** "Data leakage" generally describes sensitive data becoming accessible through unintended channels — here, an exposed API endpoint — rather than through an active intrusion or exfiltration by an attacker inside the network.

## Where this appears

- [Venmo](/notes/venmo) — the API-scrape case study used to illustrate data leakage versus an official breach.
