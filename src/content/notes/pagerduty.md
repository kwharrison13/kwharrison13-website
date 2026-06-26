---
title: "PagerDuty"
type: "company"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/diligence-research/Noname Security - Diligence.md"
  - "wiki/diligence-research/Identity & Access Management Diligence — 2021.md"
tags:
  - "devops"
  - "incident-management"
aliases:
  - "PagerDuty"
related:
  - "[[Noname Security - Diligence]]"
  - "[[Identity & Access Management Diligence — 2021]]"
  - "[[Kong]]"
  - "[[SendGrid]]"
reference_count: 1
---

# PagerDuty

Incident-response and on-call alerting platform that recurs across Kyle's diligence as both a stack component and a developer-distribution archetype. In the Noname Security - Diligence notes, [Dave Thompson](/notes/dave-thompson) of [Kong](/notes/kong) praises PagerDuty as "an appliance that does what you need it to do" — recalling that he used to have to manage his own SMS daemon and "hated it," and now loves having a managed system handle it. Elsewhere in that diligence, API-security findings are described as flowing out to Jira, Slack, and PagerDuty, positioning it as a common downstream destination for security/operational alerts.

In the Identity & Access Management Diligence — 2021 dossier, PagerDuty is grouped with [Twilio](/notes/twilio), [Stripe](/notes/stripe), and [SendGrid](/notes/sendgrid) as canonical proof that **"developers are the new kingmakers"** — companies that won enterprise share via developer-first, bottoms-up adoption (the same lens applied to Auth0's developer reputation).

**Context:** PagerDuty (NYSE: PD) is a digital operations / incident-management platform that routes alerts to on-call engineers and coordinates incident response. Founded in 2009, it went public in 2019.

## Where this appears

- Noname Security - Diligence — [Dave Thompson](/notes/dave-thompson) ([Kong](/notes/kong)) cites PagerDuty as a managed alerting appliance he relies on; also named as an alert destination (Jira/Slack/PagerDuty).
- Identity & Access Management Diligence — 2021 — grouped with Twilio, Stripe, and SendGrid as evidence "developers are the new kingmakers."
