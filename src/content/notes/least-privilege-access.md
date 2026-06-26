---
title: "Least-Privilege Access"
type: "concept"
publish: false
confidence: "low"
created: "2026-06-19"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/concepts/Zero Trust.md"
tags:
  - "cybersecurity"
  - "identity"
  - "network-security"
aliases:
  - "Least-Privilege Access"
  - "Least Privilege"
related:
  - "[[Zero Trust]]"
  - "[[API Security]]"
---

# Least-Privilege Access

A defining principle of the [Zero Trust](/notes/zero-trust) security model as Kyle's notes frame it: rather than granting broad standing access inside a trusted perimeter, every actor is given only the minimum access required, with identity verified at each step. In the [Zero Trust](/notes/zero-trust) page it sits next to "identity verification" as the two pillars of a model that "assumes no implicit trust for any actor inside or outside the network perimeter." It is the access-control half of the broader Zero Trust paradigm that API gateway/security teams typically focus on — distinct from the runtime *behavioral* layer (anomaly detection) that tools like [Salt Security](/notes/salt-security) add on top.

**Context:** The principle of least privilege (PoLP) is a long-standing security tenet: every user, process, or system should operate with the fewest permissions needed to do its job, limiting the blast radius if any single credential or component is compromised.

## Where this appears

- [Zero Trust](/notes/zero-trust) — names least-privilege access (with identity verification) as a core principle of the model
