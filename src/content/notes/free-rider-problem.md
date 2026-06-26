---
title: "Free-Rider Problem"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-19"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/concepts/Open Source.md"
  - "wiki/books/Working in Public.md"
tags: []
aliases:
  - "Free-Rider Problem"
  - "Free Rider Problem"
related:
  - "[[Open Source]]"
  - "[[Working in Public]]"
  - "[[Public Goods]]"
---

# Free-Rider Problem

In [Working in Public](/books/working-in-public), [Nadia Eghbal](/notes/nadia-eghbal) treats the free-rider problem as open source's central economic puzzle. She states it plainly: "if you can't exclude others from consuming a good they'll use it without paying. Eventually, the good becomes overused, as producers lack the resources—usually provided by consumers—to supply it." The book applies this to software as a public good — non-excludable and (nearly) non-rivalrous — where "a thousand people can read the same article, or use the same snippet of code, without diminishing its quality."

Eghbal's distinctive move is to question whether the free-rider problem even applies to online public goods. She argues that when "software is in static state... it only has first-copy costs, which the creator is intrinsically motivated to provide—so the problem doesn't seem to lie in how many people consume it." Because most content is "a highly substitutable good" that someone will always make of their own accord, she is "skeptical of attempts to charge for access to information." The real cost, she contends, is not consumption but *maintenance* — the hidden, ongoing temporal cost of keeping content and code alive over time. Kyle's note on the page frames the unresolved tension as a balance: "There is a balance between limiting the marginal cost while simultaneously structuring a logical process for getting paid." The book flags this as the genuine open question rather than resolving it.

This carries directly into the [Open Source](/notes/open-source) page, where the free-rider problem appears alongside maintainer burnout as the economic tension at the heart of the model: the many who consume a freely available good — a library, a package, a piece of infrastructure — without contributing back to its upkeep, while "creation is an intrinsic motivator, maintenance usually requires extrinsic motivation." Because nearly everyone free-rides on shared code while the burden of maintenance falls on a small pool of maintainers, the incentives to keep critical infrastructure healthy are chronically misaligned.

**Context:** The free-rider problem is a classic concept in public-goods economics: when a good is non-excludable (you can't easily stop people from using it), individuals have an incentive to consume it without paying or contributing, leaving it under-funded or under-produced. It is the standard explanation for why public goods tend to be undersupplied by markets.

## Where this appears

- [Working in Public](/books/working-in-public) — the book's recurring economic puzzle about non-excludable public goods; Eghbal questions whether it even applies to static software, and Kyle's note flags the marginal-cost-vs-getting-paid balance as the actual open question.
- [Open Source](/notes/open-source) — named as the structural economic force behind maintainer burnout; a free-riding consumer base against a small maintainer pool, with [Working in Public](/books/working-in-public) cited for the deeper analysis.
