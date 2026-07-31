---
title: "Networked Conviction 006"
date: 2026-04-14
tags: ["investing"]
excerpt: "AI Business Models, Founder Charisma, First Principles Rebuilds, and More"
slug: "networked-conviction-006"
type: "newsletter"
substack_url: "https://investing101.substack.com/p/networked-conviction-006"
---

![](/images/networked-conviction-006-1-0a7cd6f0.jpg)

One of the simultaneously most satisfying and disheartening parts of my job is constantly being a mile wide and an inch deep in some of the most interesting conversations in the world.

Yesterday, alone, I went from talking about growing human organs for transplants, to rebuilding manufacturing from first principles, and finished the day pondering the connection between God, the Singularity, and intelligence. That was just a Monday!

As part of my investing journal, I often want to try to both capture and articulate some of the most interesting nuggets. One of the obstacles to me being able to consistently publish Networked Conviction to a small group of people comes from the inability to find the throughline each week. I struggle to get everything to link up and ultimately fail.

So, instead, this week I’m attempting something different. This is a round-up of some of the most interesting insights I had over the last week or so from the conversations with some of the smartest people in the world. Some of these are from potential portfolio companies, existing portfolio companies, or anti-portfolio companies (the ones that got away). So I’m considering these a smattering of portfolio-derived insights.

From reckoning with the cognitive dissonance of AI business models to the premium placed on founder charisma unlike anything I’ve ever seen, to the opportunity that exists in building from first principles, and beyond.

Let’s dig in!

# AI Business Models & Unit Economics

The most important question in AI right now isn’t “is AI powerful?” Anyone who thinks its just glorified auto-complete clearly isn’t using it. The real question it’s whether anyone has figured out how to sell it profitably. The paradigm of training and inference at scale is deeply unprofitable for most companies. A handful of businesses have cracked this by constraining their token inputs and outputs to something predictable. Think of an image generation tool: it knows roughly what each generation costs, so it can meter usage and price accordingly. That’s a profitable unit economic model. Compare that to a chat-based coding assistant where a single prompt might produce two sentences or spin up an entire database. The variance in cost-per-query makes it nearly impossible to price sustainably.

The companies in the best position are those doing a specific, repeatable thing where the token economics are manageable; customer support triage, for example, where the low-hanging-fruit tickets can be handled autonomously at a cost that makes sense. The companies in trouble are selling general-purpose intelligence at prices that assume future cost curves, not current ones. Some reportedly have fully-loaded gross margins in the negative hundreds of percent. The business model, for now, is raising venture money.

This doesn’t diminish AI’s capability. It just means we need to distinguish between a *funding model* and a *business model*. The technology is real. The revenue quality, in many cases, is not.

# Revenue Quality in the Current Market

A related and underappreciated problem: some of the headline revenue numbers in AI are genuinely misleading. Companies annualizing free trials. Reporting revenue gross of significant revenue-share obligations owed to partners. Structuring mega-rounds where the vast majority of “capital raised” is actually compute credits from cloud providers and chip lend-backs from semiconductor companies. That’s not equity dollars in the bank. It’s similar to a fintech announcing a $100M raise when $92M of it is a debt facility. Same dynamic, just at a hundred-billion-dollar scale.

There will be real consequences here. Some of this behavior is borderline; some of it will probably result in criminal charges. When you’re evaluating an AI company, whether as an investor, a potential employee, or a customer, the single most important question is: *at the actual unit level, does this company make money when a customer uses the product?*

# The OpenAI IPO as an Inflection Point

The possibility of an OpenAI IPO this year is one of the most consequential events on the horizon for the broader tech ecosystem. A year ago, everyone was tripping over themselves wishing for it. Now there’s growing nervousness that it could struggle. The internal tensions around timing and structure, the competitive dynamics with other labs that are also playing fast and loose with revenue reporting... this could be the moment where the market is forced to reconcile hype with fundamentals.

If that IPO goes well, it validates an entire category (sort of), and indicates the market is even *more* irrational than I thought. And that, obviously, extends the cycle. If it stumbles, it could become the kind of cold-water moment that reprices a generation of private AI companies. Time will tell.

# Founder Charisma & the Legibility of Startups

Startups have become hyper-legible. The playbook for how to start a company, raise capital, and build a team has been so thoroughly documented and democratized that the barrier to *looking* like a good startup has never been lower. I’ve talked about this before in both [The Huckster’s Hypebook](https://www.kwharrison13.com/essays/hijacking-the-hucksters-hypebook) and [Build What’s Fundable](https://www.kwharrison13.com/essays/build-whats-fundable). YC used to be an on-ramp to an opaque world. Now the game is so well-understood that YC has shifted from being a filter to being a throughway: **get as many companies through as possible and let the math work itself out.**

This means that the old signals of quality (e.g. polished decks, name-brand accelerators, impressive-sounding traction carry less weight. What still matters, and arguably matters more than ever, is the depth of a founder’s conviction and the quality of the team they assemble. When you look at the companies that break out, there is almost always an exceptional density of talent in the first 50-100 employees. **The companies where that early talent bar is low don’t get better from there**. The talent signal at founding is one of the most durable predictors of long-term success.

# Manufacturing & First Principles Rebuilds

One of the most compelling frameworks emerging right now is in hardware and manufacturing: the idea that if you take a legacy system all the way down to its fundamental components and rebuild from scratch, you unlock economics that are simply impossible within the existing paradigm. That’s what Elon did well with both Tesla and SpaceX. Funny enough, I actually think he *didn’t* do that with xAI and that’s why its his most underwhelming company.

Consider CNC machining. The form factor of these machines has barely changed since their invention. Because legacy systems are closed (e.g. proprietary logic controllers, fixed networking stacks, opaque firmware) any “software-defined factory” built on top of them is really just a scheduling tool with an API layer. You can’t get true telemetry, real-time quoting, or scalable production if you don’t own the machine itself.

A first-principles rebuild: designing your own motor controllers, writing your own communication protocols, bypassing traditional networking stacks to hit microsecond-level precision? That could yield machines that cost a fraction of traditional equipment and produce comparable precision. The strategic insight is that this isn’t about selling cheap machines. It’s about using those machines to build manufacturing *capability* at density. The US doesn’t lack specialty manufacturing skill; it lacks the capacity to *iterate* at volume. The Chinese advantage isn’t better machines. Rather, it’s an ecosystem built on relentless iteration and process knowledge accumulated over decades.

The playbook: embed at the lowest-friction point (rapid prototyping), accumulate process knowledge through sheer volume, then expand into adjacent manufacturing methods. This is how Foxconn started. This is how TSMC started. The returns compound through process knowledge, not hardware margins.

# The Knife Fight in IT Automation

Enterprise IT is one of the most natural surfaces for AI after coding: programmatic systems, structured workflows, tons of data exhaust. But it’s also becoming one of the most competitive categories in venture-backed software. Every company in the space has the same chart: lots of tools funneling into one platform, that platform driving systems of execution. Everyone wants to be the thing. They can all talk about it.

The reason most haven’t delivered is that the integration surface layer is genuinely, brutally hard. You have a first layer of tools (Slack, Notion, Google Workspace) that were never designed to be systems of record, all trying to become one. On top of that, you now have agentic tools that are essentially babies with shotguns trying to identify all their capabilities but executing inconsistently.

The companies that have raised enormous rounds in this space have made enormous promises. Many of their customers are excited but haven’t seen full delivery yet. The opportunity is real, but the gap between vision and execution is wider than the fundraising announcements would suggest. The winners here will likely be the ones who resist the temptation to boil the ocean and instead box their agents into constrained, team-level contexts where they can actually be reliable.

# Family Offices & The Cycle Scorecard

There’s a predictable pattern in every technology cycle: large asset managers flood into private markets chasing beta. Fidelity, T. Rowe, etc. wading in and getting active in privates is not new. It happens every time. And one of the most reliable top-tick indicators? Family offices getting hungry for direct investments.

When the market is frothy and markups feel inevitable, direct investments seem like easy money. Package them into a vehicle, invite other family offices, scrape some fees. It works for a while as everything keeps getting marked up. But the vast majority of family offices aren’t adding operational value, and the vintage of entry matters enormously. The ones who grabbed certain positions eight or ten years ago have done spectacularly. The ones grabbing the same names today at current valuations may have a very different experience.

# Go-To-Market in Highly Regulated Industries: Two Archetypes

There’s a framework I’ve been seeing around how companies sell into industries with heavy regulatory or institutional oversight; think pharma, utilities, defense, government health systems, financial infrastructure. The go-to-market in these industries tends to be served by one of two founder archetypes.

- **Archetype 1: The Buttoned-Up Professional.** This is the founder who shows up looking like they already belong in the room. Polished, credentialed, conversant in the acronyms and compliance frameworks. They sell trust through familiarity.
- **Archetype 2: The Starry-Eyed Visionary.** This is the founder who shows up radiating conviction about a future that doesn’t exist yet. They sell transformation through belief.

Which archetype works depends almost entirely on *who is making the purchasing decision*.

If the buyer is an acquisitions person — someone in procurement, a purchasing officer, a compliance-driven evaluator — they’re checking boxes. Their job security depends on not making waves. Nobody gets fired for adhering to the SALY principle: *Same As Last Year.* For this buyer, the Buttoned-Up Professional wins almost every time. They de-risk the decision. They make the acquirer feel safe. The product might be incremental, but that’s fine because incremental is what the SALY principle demands.

But if the decision-maker is someone on the front lines (e.g. a clinician, a field engineer, an operations lead) the question becomes: *do they seem desperate?* If the answer is yes, the calculus flips entirely. A desperate front-line decision-maker isn’t looking for incremental improvement. They know the current system is failing. They need *salvation*, not optimization. And for them, the Starry-Eyed Visionary is exactly what they’re looking for! Someone who can paint a picture of a fundamentally different future and make them believe it’s achievable.

This dynamic is playing out right now in pharma. Virtual cell models have been the promise of computational biology for the last few years. The technology is theoretically transformative. Simulate drug interactions at the cellular level before going to clinical trials. But the people who’ve actually tried to use these models in production are hitting walls. The models aren’t reliable enough. The data inputs are messier than expected. The integration with existing workflows is painful.

These are front-line researchers and R&D leads who *wanted* to believe. They’re the ones who championed these tools internally, fought to get budget, pushed their organizations to adopt. And now they’re sitting with tools that aren’t delivering on the vision. They’re getting desperate. Not for a better version of what they have, but for something genuinely different.

This is the moment when the Visionary archetype becomes most powerful. When the front-line buyer has been burned by incremental solutions and knows the status quo is untenable, they become receptive to ambitious bets. The founder who walks in and says “here’s why the entire paradigm is wrong, and here’s what we’re building instead” has an audience that’s primed to listen. The professional who walks in with a compliance-friendly improvement to the existing workflow will get a polite nod and a “we’ll circle back.”

The mistake most founders make is not reading the room. They default to one archetype and apply it everywhere. But the right approach depends on reading whether the buyer is operating in SALY mode or salvation mode. And increasingly, in industries where the existing tools have over-promised and under-delivered: pharma, utility grid management, clinical trials, defense procurement. The front-line decision makers are sliding from SALY into desperation. That’s where the opportunity is widest for founders willing to be bold.

# Related Reading

Final thing I thought I would try is to point to some of the essays and book notes I have that are relevant, as I’ve been building them out more on [my personal site](https://www.kwharrison13.com/).

**On AI bubbles and productive delusion:** [Dr. Tokens or: How I Learned to Stop Worrying and Love the AI Bubble](https://www.kwharrison13.com/essays/dr-tokens-or-how-i-learned-to-stop) explores the history of productive manias and why the question isn’t whether AI is a bubble, but how productive the bubble can be. Pairs well with my notes on [Boom: Bubbles and the End of Stagnation](https://www.kwharrison13.com/books/boom-bubbles-and-the-end-of-stagnation) by Byrne Hobart and Tobias Huber, which offers the best modern framework for understanding how speculative excess funds lasting infrastructure.

**On talent as the ultimate signal:** [Why Most VCs Suck at Talent](https://www.kwharrison13.com/essays/talent) digs into why talent evaluation is the hardest and most important skill in venture. [The Professionalization of Startups](https://www.kwharrison13.com/essays/the-professionalization-of-startups) traces how the democratization of startup knowledge has changed what “good” looks like.

**On competitive moats and what actually endures:** [Competitive Moats](https://www.kwharrison13.com/essays/competitive-moats) challenges the notion that defensibility is what you think it is. The manufacturing thesis above is a real-world case of a company discovering that the “moat” of legacy CNC machine manufacturers is actually a vulnerability.

**On the venture capital cycle:** [The Hype Cycles of Venture Capital](https://www.kwharrison13.com/essays/the-hype-cycles-of-venture-capital) and [A Tale of Two Markets](https://www.kwharrison13.com/essays/a-tale-of-two-markets) map the cyclical dynamics that drive everything from family office behavior to the compression and expansion of venture strategies.

**On manufacturing, defense, and first-principles rebuilds:** [Chip War](https://www.kwharrison13.com/bookshelf) by Chris Miller is essential context for why manufacturing density matters at a geopolitical level. My notes on [The Kill Chain](https://www.kwharrison13.com/bookshelf) by Christian Brose explain why the defense procurement system is broken in ways that create openings for startups. What’s more, I’ll give you a very buried sneak peak (only for true believers!) But a book I wrote alongside the team at Contrary Research is, as of just days ago, available for purchase on Amazon, called [The Anduril Thesis](https://www.amazon.com/Anduril-Thesis-Kyle-Harrison/dp/B0GWLXQ7FC/ref=sr_1_1?crid=FFQ5NQOGJWEN&dib=eyJ2IjoiMSJ9.OY9n9i4pDsjdBdHMCaajJw.Q8Nm3w81gNjDg3-vFgJ2epmGakhuRjt7C9h1T6aof3M&dib_tag=se&keywords=the+anduril+thesis&qid=1776192368&sprefix=the+anduril+thesis%2Caps%2C241&sr=8-1)! One story from the book, in particular, includes the detail that their first product attempt was a firefighting tank. Pretty interesting perfect case study in pivoting from first principles.
