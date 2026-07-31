---
title: "Gila Hunts"
type: "company"
publish: false
confidence: "high"
created: "2026-07-30"
updated: "2026-07-30"
last_updated_by: "agent"
sources:
  - "/Users/kwharrison13/gila-hunts/wiki/00-Home.md"
  - "/Users/kwharrison13/gila-hunts/wiki/01-Business-Plan.md"
  - "/Users/kwharrison13/gila-hunts/wiki/02-Market-Research.md"
  - "/Users/kwharrison13/gila-hunts/wiki/03-Product-and-Mockup.md"
  - "/Users/kwharrison13/gila-hunts/wiki/04-Decisions-and-Open-Questions.md"
  - "raw/archive/inbox/luna-landing-organization-brief.md"
tags:
  - "marketplace"
  - "hunting"
  - "seo"
  - "gila"
aliases:
  - "Gila Hunts"
  - "gilahunts.com"
  - "Hunt The Gila"
related:
  - "[[Luna Hunting Economy]]"
  - "[[The Luna Landing]]"
  - "[[Hunt Outfitter Industry]]"
  - "[[Lead-Gen Marketplace]]"
  - "[[Programmatic SEO]]"
  - "[[Gila]]"
  - "[[NM Tag Draw System]]"
  - "[[FishingBooker]]"
---

# Gila Hunts

**One-line:** *A verified-only, hyper-local two-sided marketplace connecting hunters with hunting guides in the Gila Wilderness & Catron County (Units 15, 16, 23, 24) — the first vehicle in the [Luna Hunting Economy](/notes/luna-hunting-economy) under [The Luna Landing](/notes/the-luna-landing).* Domain target: **gilahunts.com**. Status: **pre-build** (plan + clickable mockup). Renamed from the earlier working title "Hunt The Gila."

This is the **company identity node**. The full plan, market research, product spec, and decisions live in the private Gila Hunts — Diligence loading dock. Reusable market knowledge deliberately lives in shared concept pages (below), not here, so it survives beyond this vehicle.

## The one-paragraph version

Gila Hunts is a hyper-local, **verified-only** marketplace for guided hunts in the [Gila](/notes/gila) and Catron County. Elk **draw** hunts are the marquee draw; over-the-counter **bear, cougar, javelina, and predator** hunts keep it liquid year-round. Growth comes from **[Programmatic SEO](/notes/programmatic-seo)** (unit × species × season landing pages + draw-odds/unit guides), the moat comes from **owning the first booking + being the guide's operating system** (a lead CRM), and **trust — the #1 unmet need in this market — is the wedge**: every outfitter's **NM registration + Gila Wilderness USFS permit** is confirmed before they can list.

## What we know

- **Model:** a verified two-sided marketplace (a [Lead-Gen Marketplace](/notes/lead-gen-marketplace) evolving to owning the transaction). Closest analog: **FishingBooker** (bootstrapped to ~$28M revenue: free to list, 10–30% commission, owns payments, programmatic local-SEO moat).
- **Monetization path (locked):** Phase 1 free + lead-gen → Phase 2 guide subscription (~$49/mo, listing + lead CRM + verified badge) → Phase 3 booking commission (~8–12% via on-platform deposit). Anti-disintermediation via owning deposits, on-platform reviews, and the CRM.
- **Growth engine:** programmatic SEO across unit × species × hunt-type × season + draw-odds/unit guides — the single-player hook that pulls hunters in *before* the guide network exists, then routes warm leads to verified guides.
- **Trust model (the differentiator):** strict / verified-only — confirm NM outfitter registration + USFS Gila permit before a guide can list. Trust is the #1 unmet hunter need (scams, no-shows after deposit, faked success rates are rampant).
- **Supply strategy:** cold-start by hand — pull the NMDGF registered-outfitter roster for Catron County, build verified profiles for the first 20–40 outfitters ("claim your verified listing").
- **Two natural supply moats:** NM outfitter/guide registration (exam, bond, contracts) and limited USFS Gila Wilderness permits.
- **Tech stack (locked):** Next.js (App Router) on Vercel + Supabase (Postgres + Auth, RLS) + Cloudinary + Resend + Mapbox; Stripe deposits in Phase 3. No-code (Sharetribe/Bubble) rejected — can't deliver the URL/canonical/schema control an SEO-first business needs.
- **Status:** pre-build — a clickable 5-page HTML/CSS mockup exists (`/mockup/` in the `~/gila-hunts` repo); next step is to register the domain and scaffold the Next.js app (SEO unit pages + verified directory first).
- **Team:** Kyle (operator/domain) + Claude (build). Lean budget.

## The reusable market map (shared, not owned by this page)

- [Hunt Outfitter Industry](/notes/hunt-outfitter-industry) — supply side (see the [Gila & Catron County Hunt Guide Directory](/notes/gila-and-catron-county-hunt-guide-directory) for the census).
- [Trophy Hunting Economics](/notes/trophy-hunting-economics) — pricing / willingness to pay.
- [Lead-Gen Marketplace](/notes/lead-gen-marketplace) — the marketplace model + playbook.
- [NM Tag Draw System](/notes/nm-tag-draw-system) — the draw mechanics (84/6/10 rule, no preference points); [E-PLUS](/notes/e-plus) for landowner tags.
- [Gila](/notes/gila) — the region and its units.
- [Programmatic SEO](/notes/programmatic-seo) — the growth-engine concept.

## Context hub

- Gila Hunts — Diligence — full business plan, market research, product/mockup, decisions & open questions.
- [Luna Hunting Economy](/notes/luna-hunting-economy) — the sub-thesis hub; [The Luna Landing](/notes/the-luna-landing) — the program.
- Comps tracked in `wiki/companies-to-watch/`: FishingBooker (key analog), BookYourHunt, GoHUNT, Huntin' Fool.
- Potential supply / partners: Gila & Apache Outfitters, San Francisco River Outfitters (see the guide directory).

## Open questions

- Confirm **gilahunts.com** availability (fallbacks: gilahunts.co, huntgila.com, gilahuntsnm.com).
- Exact commission % and subscription price (8–12% / ~$49 are placeholders).
- Launch with "unclaimed" verified listings scraped from the NMDGF roster vs. invite-only.
- Logo/visual-identity pass, or build from the current mockup styling.
