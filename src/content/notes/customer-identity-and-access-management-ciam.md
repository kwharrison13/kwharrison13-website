---
title: "Customer Identity & Access Management (CIAM)"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-19"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/long-reads/Todd McKinnon — Creating and Defining a New Market Category.md"
  - "wiki/diligence-research/Identity & Access Management Diligence — 2021.md"
tags:
  - "identity"
  - "access-management"
  - "ciam"
aliases:
  - "Customer Identity & Access Management (CIAM)"
  - "CIAM"
related:
  - "[[Todd McKinnon — Creating and Defining a New Market Category]]"
  - "[[Identity & Access Management Diligence — 2021]]"
  - "[[Identity & Access Management]]"
  - "[[Okta ($OKTA)]]"
  - "[[Auth0]]"
  - "[[Workforce Identity & Access Management (WIAM)]]"
  - "[[OAuth]]"
---

# Customer Identity & Access Management (CIAM)

Customer Identity & Access Management (CIAM) is the half of [Identity & Access Management](/notes/identity-and-access-management) that handles a company's *customers* logging in — as opposed to Workforce Identity & Access Management (WIAM), which handles employees. In the [Todd McKinnon interview](/notes/todd-mckinnon-creating-and-defining-a-new-market-category), CIAM is [Okta ($OKTA)](/notes/okta)'s **"second act"**: ~3–4 years in, customers began using Okta to log in *their* customers (e.g. Allergan's doctors, MajorLeagueBaseball.com), and that became **~24% of Okta's revenue** — the proof point that Okta wasn't a "one-trick pony" ahead of its 2017 IPO.

Kyle's IAM diligence maps CIAM in depth. Its defining characteristics: it must scale to millions of users (consumer IAM vendors see ~2B logins/month vs. workforce's ~1B/year), it authenticates against public standards like OAuth and OpenID rather than Active Directory, and it is developer-centric. Auth0 is the named CIAM leader — "the consumer-focused Okta," sold bottom-up to developers (the [Twilio](/notes/twilio) model) — versus Okta's top-down CISO/CIO motion. Pricing inverts the workforce model: consumer access is pennies-per-user because it isn't daily (e.g. $0.25/user/month, ~$12K/user enterprise vs. ~$3/consumer). The diligence sizes CIAM at ~$10–20B and flags it as the faster-growing, more contested frontier.

**Context:** CIAM is the category of identity software focused on registering, authenticating, and managing the accounts of external end-users (consumers) of a company's apps, emphasizing scale, social/standards-based login, and developer-friendly APIs; major players include Auth0 (Okta), ForgeRock, and Microsoft.

## Where this appears

- [Todd McKinnon — Creating and Defining a New Market Category](/notes/todd-mckinnon-creating-and-defining-a-new-market-category) — CIAM as Okta's customer-driven "second act," ~24% of revenue and the anti-"one-trick-pony" proof before IPO.
- Identity & Access Management Diligence — 2021 — the full CIAM map: million-user scale, OAuth/OpenID, developer-centric, Auth0 as leader, pennies-per-consumer pricing, ~$10–20B sizing.
