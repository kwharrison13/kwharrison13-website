---
title: "Blameless"
type: "concept"
publish: false
confidence: "medium"
created: "2026-06-17"
updated: "2026-06-26"
last_updated_by: "agent"
sources:
  - "wiki/essays-research/What's In a Post-Mortem - Research.md"
  - "wiki/concepts/Post-Mortems.md"
  - "wiki/diligence-research/Noname Security - Diligence.md"
tags:
  - "devops"
  - "incident-management"
aliases:
  - "Blameless"
related:
  - "[[Post-Mortems]]"
  - "[[What's In a Post-Mortem]]"
  - "[[Incident.io]]"
reference_count: 1
---

# Blameless

"Blameless" is, for Kyle, primarily a principle for running [Post-Mortems](/notes/post-mortems): the discipline of asking **"what went wrong?"** rather than **"who did something wrong?"** Citing Etsy's "Code as Craft" essay on blameless post-mortems, his post-mortem research treats blamelessness as the way to strip the politics out of a retrospective so people will actually surface failures instead of hiding them. The [Post-Mortems](/notes/post-mortems) page frames it the same way and connects it to [Charlie Munger](/notes/charlie-munger)'s observation that the institutional version of the same instinct is forcing yourself to revisit old decisions and compare predictions with outcomes — at [Johnson & Johnson](/notes/johnson-and-johnson), "the rules make everybody revisit old acquisitions," whereas most firms quietly forget their failures because nobody wants to own the bad outcome.

The same word also appears as a **product name**: in the Noname Security - Diligence notes, Blameless is described as an SRE / incident-management platform that [Kong](/notes/kong) was in the process of adopting ("feels very promising but it's early days"), positioned competitively against [Incident.io](/notes/incident-io) — i.e., a tool that operationalizes the blameless post-mortem practice for engineering teams.

**Context:** "Blameless post-mortem" is a term of art in site-reliability engineering (popularized by Etsy and John Allspaw, and codified in Google's SRE practices): the retrospective treats incidents as systems failures to learn from rather than individual faults to punish. Blameless, Inc. is also a vendor that builds incident-response and reliability tooling around that philosophy.

## Where this appears

- What's In a Post-Mortem - Research — blameless post-mortems (Etsy / Code as Craft) cited as the way to avoid the politics that cloud a retrospective.
- [Post-Mortems](/notes/post-mortems) — blamelessness framed as focusing on "what went wrong?" not "who did something wrong?", linked to Munger's institutional version.
- Noname Security - Diligence — Blameless named as an incident-management product Kong was adopting, competitive with Incident.io.
