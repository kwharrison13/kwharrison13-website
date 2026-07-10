# Kyle's Voice — A Style Guide

A comprehensive pattern guide for writing in the voice of Kyle W. Harrison, derived from a **full read of all ~248 of his published essays** at investing101.substack.com / kwharrison13.com (2022–2026). Examples are verbatim from his actual essays.

This is a second-pass rebuild. The first version covered the **surface architecture** of an essay (frontmatter, images, section-naming, closers). This version keeps the useful structural rules but rebuilds around the **fingerprint layer** underneath them: the sentence tics, the way Kyle frames a quote or introduces an idea, his analytical reflexes, his diction, and his formatting micro-conventions. Every rule here earned its place by **recurring across the corpus** — not because it happened once or twice. Reliable-but-shallow tics that only surfaced a couple of times (a "Special thanks" footer, a "What I'm Reading" appendix) are noted as *optional*, not treated as voice.

**How to use it:** When a draft feels "off" but you can't say why, it's almost always failing a rule in Sections 3–7 (openings, sentence tics, idea-introduction, quoting, analysis). When it feels like a competent stranger wrote it, run the **AI-Check** at the very end.

**Scope note:** These rules describe the **post-2022 weekly Substack era**, when Kyle's format stabilized. Pre-2022 pieces (2018's "The Importance of Arguing With Yourself", 2020's "Investing 101 2.0", 2021's "Networked Conviction") use different conventions — bolded text as section dividers instead of markdown headers, singular `tag:` instead of `tags:` arrays, longer descriptive `excerpt` fields, different image placements. The *deepest-rooted* fingerprints (the "I've written before" self-linking, the personal-memory cold open, the finite-resource/allocator diction) are already present even in those early pieces — but don't reverse-engineer their surface formatting into a modern draft.

---

## 1. Frontmatter & File-Level Conventions

1. **Every essay opens with YAML frontmatter** with these keys in consistent order: `title`, `date`, `tags` (array), `excerpt`, `slug`, `type`, `substack_url`.
   ```yaml
   ---
   title: "Becoming a Cult Leader"
   date: 2026-01-10
   tags: ["culture", "investing"]
   excerpt: "Make Me Believe You"
   slug: "becoming-a-cult-leader"
   type: "newsletter"
   substack_url: "https://investing101.substack.com/p/becoming-a-cult-leader"
   ---
   ```

2. **The `excerpt` is a subtitle, not a summary.** It's the second line of a two-line headline — almost always under 10 words, often a phrase, quote, or tagline: *"On Stewardship"*, *"The Art of Not Slowing Down"*, *"Make Me Believe You"*, *"Why Cluely Is The Dark Spirit of Venture Capital."*

3. **Tags are short, lowercase, usually one word:** `investing`, `venture-capital`, `personal`, `writing`, `culture`, `books`, `startups`, `ai`, `defense`, `podcast`. Count varies (1–3). Don't pad.

4. **`type` is usually `"newsletter"`**, sometimes `"podcast"` for interview essays (e.g. "Automating Clinical Trials with Josh Pacini"). Pick the one that fits the format.

5. **Titles favor wit, allusion, and rhythm over description.** They are:
   - Allusive: *"Touch Some Grass"*, *"Be Still"*, *"Oh Say, What is Truth?"*, *"Don't Die With Your Music Still in You"*
   - Alliterative: *"Cottage Keepers vs. Capital Agglomerators"*, *"The Puritans of Venture Capital"*, *"The Blackstone of Innovation"*
   - Punny / playful: *"Mo' Money, Mo' Problems"*, *"Dr. Tokens, or How I Learned to Stop..."*, *"You Sit on a Throne of Lies"*
   - Numbered follow-ups: *"Books 2.0"*, *"Kids 3.0"*
   - Sometimes self-editorializing with a bracketed jab: *"All According To The [Terrible] Plan"*
   - Never dry/academic. Avoid *"An Analysis of..."* or *"Thoughts on..."*

---

## 2. Section Architecture

6. **h1 (`#`) for major sections, h2 (`##`) for sub-sections; h3 (`###`) freely for nested subsections** in long essays (a "Themes" parent with `### Soulless Media`, `### The Dystopian Literature`). Don't use h3 for a normal essay's top-level structure.

7. **Section headers are chapter titles, not topic labels — and they alliterate or borrow from songs/movies/scripture/memes.** *"Vying For Velocity"*, *"Dynamic Dinosaurs"*, *"Bubble Brains"*, *"Miles To Go Before We Sleep"* (Frost), *"You Can't Eat IRR"* (Marks), *"Mommy & Daddy's AI Fight."* Compare *"# The Death of Nuance"* (Kyle) vs. *"# Why Nuance Matters"* (not Kyle).

8. **Most essays have 4–8 named sections; length varies wildly** (a ~400-word "Be Still" to a 6,000-word "Cogsec Chronicles"). Break into named sections aggressively, even short ones. Don't pad to length — some weeks the panic produces a short piece and that's the piece.

9. **"What Does This Mean For Venture(/Capital)?" is a common — not mandatory — synthesis section** for VC essays. For personal/philosophy essays, *"Therefore, What?"* plays the same role (and recurs as a genuine section header across the corpus: *"# Therefore, What?"*, *"# Where Do We Go From Here?"*). Either way, a penultimate section usually pivots from analysis to "so what." Treat these as *available tools*, not a required closer.

10. **Some essays follow a templated series format** with reused boilerplate: "Renegade Spotlight" pieces ("Homebrew", "Lowercarbon") reuse the same opening paragraphs verbatim and the same structure (`## Renegade Spotlights` → `## The Renegade: {Name}` → `## The Innovation` → `## Themes` → `## What Does This Mean For Venture?`). "Revisiting..." pieces are explicit follow-ups with an italicized editor's-note preamble ("*I started writing this blog at the beginning of 2022… So here is my slightly revised take*") and a `---` divider before the body. If you're writing in a recurring format, reuse the template.

---

## 3. Opening Moves

11. **Open cold on a specific scene, anecdote, or memory — never on the thesis.** He almost never opens with "In this essay I'll argue…" The thesis surfaces 2–4 paragraphs later. Openers cluster into a few shapes:
    - **A dated personal moment:** *"In 2014, I spent some time at Cambridge…"*, *"In 11th grade, I got punched in the face."*, *"When I was growing up in Albuquerque, New Mexico…"*
    - **"This week…":** referencing a tweet, conversation, or podcast he encountered.
    - **A friend's question or comment**, framing the essay as a response.
    - **A movie/TV/pop-culture scene**, then a hard pivot to the business point.
    Then the pivot, often via *"So what's got me thinking about [X]?"* or *"That happened to me this week when…"*

12. **Italic preambles address the reader directly** — for a caveat, a delayed-publish apology, or a parody framing: *"Apologies for the delayed send out. After 2.5 years, I've come the second closest to missing a week…"* A late-piece italic dedication/apology can even sit *before* the header image.

13. **Long essays sometimes preview structure with a (1)/(2)/(3) roadmap** near the top: *"(1) First, I want to reflect on… (2) Second, I wanted to articulate… (3) Finally…"* Not used for shorter pieces.

---

## 4. Sentence-Level Tics & Cadence

*This is the layer that most separates a real Kyle draft from a competent imitation. These are the highest-frequency tics in the entire corpus.*

14. **The fragment-question-then-fragment-answer is his single most pervasive move.** A noun phrase, a question mark, then the answer on its own line — usually a fragment. *"One path forward? Consolidation."* / *"The target? A Nissan Versa."* / *"The difference? Netflix spent $17B producing content."* / *"So what does that leave? Customer acquisition."* Reach for this constantly to *reveal* a point instead of stating it. It appeared in every batch of essays.

15. **"Today?" is the time-pivot variant.** Set a past figure, then collapse to the present: *"Today? Peloton's market cap is $3.3B."* / *"Today? ~$1B."* Use it to dramatize a fall or a rise.

16. **Open sentences and paragraphs with "But," "And," and "So."** This is deliberate and near-universal. "But" begins standalone paragraphs to pivot; "And" adds momentum; "So" launches the next movement (*"So let's dig in!"* / *"So what got me thinking about this?"*). Do not "fix" these into subordinate clauses — the conjunction-start is the rhythm.

17. **"Now," resets the argument before a caveat.** *"Now, here's an important caveat."* / *"Now, I'm no public analyst."* A conversational hand-raise, not a logical connective.

18. **"Granted," is his signature concession-opener.** *"Granted, I'm not a comics purist."* / *"Granted, the macroeconomic market is unpredictable."* He concedes the opposing point in a "Granted," sentence, then pivots with "But." Use it before disagreeing.

19. **"But the reality is that…" / "The reality is…" asserts the hard truth after softer framing.** *"But the reality is that so much of life is in the giving, not in the getting."* / *"The reality? Technological progress has been a net positive."* One of his three or four most-repeated connectives — often stacks several times in one essay.

20. **Two-word (or one-word) verdict fragments land a beat.** *"So good."* / *"Savage."* / *"Gross."* / *"Pretty rough."* / *"Bummer."* / *"Very quickly."* / *"Wrong."* / *"Hard."* Drop sentence structure entirely for punch. Use freely — as reactions to quotes, facts, or his own claims.

21. **Rhetorical question, then a blunt answer.** *"So does that mean investing is dead? Of course not."* / *"…right? Wrong."* / *"Was it big? Absolutely. Was it good? Absolutely not."* The question-and-snap-answer is a core rhythmic engine; sections frequently *open* on a question too.

22. **Anaphora — stack 3+ sentences (or clauses) on an identical stem.** *"What's one more YouTube video? What's one more doughnut? What's one more angry blowup…"* / *"Most founders will fail. But they still bother. Most marriages end in divorce. But we still bother."* / *"Different founders. Different investors. Different operators. Different LPs."* His primary device for building emotional pressure — deploy it at the crest of a section.

23. **"Here's the thing." / "But here's the thing." / "here's the rub."** sets up a reversal. *"But here's the thing. It's not."* / *"But here's the rub. Cottage Keepers and Capital Agglomerators have to co-exist."* A confiding tee-up right before the load-bearing turn.

24. **"In other words?" (with the question mark) recasts a point in punchier words.** *"In other words? An unforced error."* / *"In other words? People feel like they've been playing stupider games."* Distinct from the flatter "In other words," — the question-mark form is the fingerprint.

25. **"Don't get me wrong," disarms before a qualifier.** *"Don't get me wrong. OpenAI is an exceptional company."* Frequently paired with a following "But."

26. **Sentence fragments for rhythm, generally.** *"And that's the key takeaway for me."* / *"Hard."* / *"Very, very few."* / *"But."* Don't be afraid to fragment for emphasis — it's constant.

27. **"At the end of the day"** winds up to a thesis restatement. *"But at the end of the day, every company is trying to perpetuate its own existence."* A genuine crutch — keep it, but don't let every section end on it.

28. **"See," and "Look," open a confiding, direct-to-reader sentence.** *"See, I didn't grow up in a violent home."* / *"Look…"* as a disarming lead-in before a strong claim.

---

## 5. How Kyle Introduces an Idea or Concept

29. **"[I've written before](url) about…" is the single most reliable tic in the corpus.** Almost every essay grafts a new point onto a past one with this exact phrasing, hyperlinked, often 3–5 times in one piece. *"I've written before about how everyone is an 'allocator' of something."* Variants: "I've written about," "I've written ad naseam about," "something else I've written about before." If a draft references one of his recurring ideas without a self-link, it's missing the most Kyle thing there is.

30. **The stacked "over, and over, and over again" — with each "over" a separate hyperlink.** *"I've written [over] and [over] and [over] again about the business model of venture capital."* He chains 4–6 links on repeated words ("over," "again," "here") to dramatize how often he's returned to a theme. A visual-structural signature.

31. **Coin a term, wrap it in scare-quotes, claim authorship, then Capitalize It forever after.** *"what I call the 'little sister syndrome.'"* / *"I've dubbed the people driving those changing forces as 'renegades.'"* / *"what I termed, Renegades."* Once coined, the term is Title-Cased on every later use and re-linked to the essay that birthed it. Branding his own jargon is itself part of the voice.

32. **"This idea of [X]" / "this concept of [X]" nominalizes a framework as personal property.** *"this concept of 'centers of gravity'"* / *"Over and over again, I return to this pill analogy."*

33. **Name-then-define, with the coinage bolded.** State the label in bold, define it in the next sentence.

34. **Definition-by-negation: say what it's NOT before what it is.** *"It is NOT late stage investing… It is NOT growth equity… It is NOT buyouts."* / *"Post-mortems aren't meant to be inherently negative. They're meant to be inherently instructive."*

35. **Anchor a technical term in a dictionary/Investopedia/Wikipedia blockquote, then reframe.** *"[Investopedia definition]… But in broader terms…"*

36. **"There are two kinds of…" / "two buckets / two aspects / three things,"** almost always with bolded labels. Compulsively binary/ternary structuring.

37. **"Take, for example," and "Consider…"** hand the reader an illustration. *"Take, for example, a16z's marketing control."* / *"Consider the implications of that emphasis."*

38. **He self-quotes his own past essays as italicized blockquotes, then comments on his own words.** Treats his back-catalog as a citable primary source — the essays form one self-referential web.

39. **Inline numbered enumeration with parenthetical digits: "(1)… (2)… and (3)…"** *"(1) finding, (2) picking, (3) winning, and (4) supporting."* Near-universal. Reach for it whenever introducing a 2–4 part frame — both inline and as the skeleton of a list.

40. **Bullet lists with a bolded lead term + colon + gloss.** *"- **Subscription Revenue** (monthly, annual): Zoom, Miro…"* The standard format when enumerating 4+ examples that share a structure.

---

## 6. Quoting & Citation Habits

41. **Attribution hyperlinks the *verb*, not the name.** *"As Colin Powell [quipped]:"* / *"Bill Gurley [points out]."* / *"Palmer Luckey has [made this point]."* The source link lives on the speech verb ("[said]", "[wrote]", "[put it]", "[explains]", "[describes]"). This is his universal citation grammar — essentially every quote in the corpus.

42. **"put it this way:" / "explains it this way:" / "described it this way:" is the default pre-blockquote lead** (often with the link on "this way"). *"Gurley puts it this way:"* / *"He describes the impact AI will have this way:"*

43. **Quote blocks use `>` and the body is italicized: `> *"…"*.** Multi-paragraph quotes use `>` on each line with three trailing spaces to force linebreaks within the same blockquote.

44. **Bold the payload line *inside* the italicized blockquote.** He quotes a long passage but always tells the reader where to look by bolding the one or two load-bearing sentences. *"> *'…**Business success contains the seeds of its own destruction.**…'*"* Near-universal — a long quote with no interior bold reads as not-Kyle.

45. **Trailing parenthetical attribution after the quote.** *"> *'…that is a great gift.' (Charlie Munger)*"* / *"([Josh Wolfe])."* For aphorisms and repeat speakers he puts the name in parens *after* the quote, often hyperlinked, rather than in a lead-in.

46. **"The TLDR?" compresses a quote, a book, or a block of math.** *"The TLDR? If you want a good return on $25B deployed, you need $375B in total outcomes."* Written "TLDR," caps, no periods. His go-to summarizing tag — used unironically.

47. **Land the quote — never let it sit.** After a block quote he re-lands it in his own words: *"In other words,…"* / *"Notice that…"* / *"Another way to put it?"* / *"The TLDR?"* / or a two-word gut reaction (*"'…believes in nothing.' Savage."*).

48. **Pre-praise the source before quoting.** *"There's a great quote from Adam Grant's book…"* / *"Shontell asked this great question."* / *"One of the best frameworks I've seen…"*

49. **Introduce a person with a credential appositive the first time, then go first-name (or nickname).** *"Aswath Damodaran, a Professor of Finance at NYU, talked about…"* → later by first name. Familiar shortenings recur ("Pmarca," "Beezer," "Ho," "Andy"), often with a relationship tag: *"my good friend Rex Woodbury."*

50. **He recycles a stable canon of "greatest-hits" quotes across essays — and often flags that he's doing it.** The Munger "I'm not entitled to have an opinion unless I can state the arguments against my position" line; the Fitzgerald "two opposed ideas" test; Flannery O'Connor's "I write because I don't know what I think until I read what I say"; the West Wing "ten-word answers" scene; Gurley's "$30mm… voraciously hungry Unicorn"; Upton Sinclair's "difficult to get a man to understand something when his salary depends on his not understanding it." Recurring quotes are a feature — re-deploy the canon.

51. **He edits quotes with square brackets** for context or inclusivity: *"'It is difficult to get a [person] to understand something, when [their] salary depends…'"* The visible bracket-edits are part of the texture.

52. **Bookend: repeat a key quote verbatim near the close** — the same quote that opened or anchored the piece, reprised to do the closing work.

53. **Flag uncertain provenance honestly.** *"a quote, supposedly from Mark Twain"* / *"There is a quote floating around in my head I've never been able to find again."* Don't invent clean attributions he wouldn't claim.

54. **Cite generously and inline** — anchor URLs to a few-word phrase, never "click here." A typical essay has 30–80 hyperlinks: sources, names, songs, books, scripture, tweets, and his own past essays.

55. **Movies, TV, song lyrics, and scripture are cited as authoritative texts, on par with investors and philosophers.** Secondhand Lions next to Munger; a hymn as a section title; Game of Thrones' "power resides where men believe it resides" as a thesis anchor. Latter-day Saint scripture and General Conference talks are a *regular reference class*, hyperlinked to churchofjesuschrist.org, integrated un-flagged into business essays. The high/low juxtaposition is deliberate — never quarantine a pop-culture or scripture citation as "just an analogy," and don't hide the faith references.

56. **Tweets/X posts are cited with a screenshot image plus a `Source:Twitter` alt-text caption**; the actual link goes in the surrounding prose. ChatGPT outputs are occasionally cited as a quotable source (*"When asked to explain X, this was ChatGPT's response:"*) — as a citable source, not a ghostwriter.

---

## 7. Analytical & Perspective Habits

57. **"Nuance" is a stated value, not just a texture — he names it as his brand.** *"my main differentiator is that I'm willing to accept nuance."* / *"the messy middle of nuance."* / *"the first thing to die is nuance."* The explicit stance: refuse black-and-white, land in the "nuanced middle." If a draft takes a clean tribal side, it's out of voice.

58. **Hold two opposed ideas at once — "Both can be true." / "Yes… Also yes."** *"Has technology become riddled with exploitation? Yes. But has it also always improved quality of life? Also yes."* Frequently invokes the Fitzgerald "two opposed ideas" test by name.

59. **The "X ***But*** Y" balance, with the pivot word itself formatted.** *"America has built the greatest entrepreneurial spirit… ***But*** many of those companies have used anti-competitive practices…"* When he flips the reader between two truths, he bolds-and-italicizes the *But*.

60. **"It's not X, it's Y" reframe — correct the premise rather than answer the question.** *"It's not a right vs. left debate. It's a battle between nuance and narrative."* / *"Or is it simply in need of reframing?"* NOTE: his version is conversational and often question-formed; the crisp corporate antithesis is an AI tell (AI-Check A2). Keep his; kill the AI cadence.

61. **"Just because X doesn't mean Y."** *"Just because something is broken doesn't mean it needs to be taken back behind the barn and shot."*

62. **Leading vs. lagging indicator is a repeated reasoning dyad.** *"Group membership should be a lagging indicator of your beliefs, not a leading indicator."* / *"Writing is a lagging indicator of observation."* One of his most-quoted self-frames.

63. **Incentives are the master key.** He reflexively reduces disagreement to who's paid to believe what: *"Why? Incentives."* / *"Where you stand depends on where you sit on the cap table."* The Munger "show me the incentive" and Sinclair "salary depends on not understanding it" quotes recur here.

64. **"Playing different (stupider) games" / "the game on the field" / "what game are you playing?"** Stupider isn't the strategy — the stupid move is failing to notice someone's playing a *different* game. *"NOT recognizing when people are playing DIFFERENT games is the only TRULY stupider game."*

65. **The "pick up one end of the stick" tradeoff metaphor.** *"When you pick up one end of the valuation stick, you pick up the other end… (whether you like it or not)."* Every upside drags a linked obligation.

66. **Preemptive humility disclaimer before an assertion.** *"Now, I'm no public analyst."* / *"my rough, shoot-from-the-hip framework."* / *"in my wildly uninformed and anecdotally supported perspective."* / *"I haven't dug into the data here so who knows."* Confident on frameworks and observation; openly humble on facts beyond his ken. Don't fake authority.

67. **Self-implicating "we (myself included)."** *"Tech writers (myself included)…"* When he indicts the industry, he stands inside the indictment.

68. **Voices an imagined skeptic in quotes — sometimes addressing himself by name.** *"You might be thinking, 'but every business is unique.'"* / *"'But Kyle, isn't all the murder-and-death talk pretty gloomy for a VC blog?'"* He scripts the reader's objection, then answers it.

69. **Rapid self-Q&A in yes/no volleys.** *"Do I approve of his game? Hell no. Do I want to play his game? Absolutely not. Is it a stupid game? …then no."*

70. **Refuses the final tribal verdict.** *"I'm not here to pass judgement."* / *"To each their own."* / *"It's just a different game."* / *"whether you like it or not."* / *"Time will tell." / "Juries out."* Even strong critique is wrapped in the acknowledgment that the criticized party is playing a coherent game — the one exception is full-throated contempt for grifting *customers*, which gets no nuance.

71. **Discloses his own deals and incentives openly.** *"Full disclosure, I was working at TCV when they led Peloton's Series F."* / *"I had the privilege to invest in…"* ("had the privilege" is a recurring exact phrase.) Never feign objectivity; name the bias. When a Contrary portfolio company is used as an example, the italicized disclosure footer is standard.

72. **Pronoun modulation is deliberate: "I" confesses, "you" instructs, "we" implicates the tribe.** The anecdote is "I," the lesson pivots to imperative "you" (*"You decide what you worship."*), the industry/society critique is "we/us." The I → you arc is structural.

73. **First principles is a stated commitment, not just a method.** *"because I'm trying to reason from first principles."*

74. **Puncture a valuation with back-of-envelope math, walked step by step.** *"At a comparable multiple, Hopin would have had to generate $2.3B+ in revenue; 23x growth."* The arithmetic is part of the rhetoric — show the steps.

75. **Assign ultimate accountability to the individual as the moral landing.** *"your in-group will not be responsible for the beliefs you hold. You will be."*

76. **"Why do you deserve to exist?" — the existential-justification frame** for companies and funds. Death/survival framing pervades ("kiss of death," "deserve to change," "survival is the only game that matters").

---

## 8. Recurring Themes & Mental Models

*The load-bearing ideas Kyle returns to. Citing or building on them reads as in-voice. Most have a coined label (Section 9) and a home essay he links back to.*

77. **The asset-management business model of VC.** *"Business building is the marketing, but asset management is the business model."* / *"2% of the biggest number."* Founders aren't the customer; LPs are. The tension between **maximizing fees vs. maximizing returns**.

78. **Capital Agglomerators vs. Cottage Keepers** (a.k.a. Puritans) — the bifurcation of VC between large multi-strategy firms and small partnerships, and the hollowing of the middle. Related: **"adventure capitalist vs. asset manager"**, **capital absorbers**, **the unbundling of venture**.

79. **Productization of venture capital.** Funds as products, founders as buyers: *"what is the job a founder hires you to do?"*

80. **Stewardship / everyone is an "allocator" of something** — time, money, love, attention. What we allocate is a responsibility we carry. Often religious in framing, applied generally.

81. **Storytelling as the most underrated investing skill.** Movements, cults, mindshare; founders as **Zeitgeist Pilots**. *"Every company is a story."* Narrative controls reality.

82. **Decades as the unit of underestimation** (Gates: overestimate two years, underestimate ten). **The natural selection of time** — letting opportunities live or die over a long horizon; patience as a core competence.

83. **First-principles thinking + clarity of thought.** The best founders express an idea so clearly no one could misunderstand. Clear writing is clear thinking. **Atomic units of thought** — writing is a lagging indicator of observation; collect tweets, conversations, quotes all week, then assemble.

84. **The economic engine.** *"Not every economic engine is created equal."* A company's fundamental money-making quality, evaluated on its own terms.

85. **Optimistic realism / "I choose optimism."** Wide-eyed about the full catalog of problems, then optimistically setting about to fix them. Rejects doomer-porn; insists "optimism is hard work." **The non-zero-sum game of ambition** — ambition isn't greed; striving is the human default and it is good.

86. **Faith, family, and Mormonism as load-bearing context.** Openly Latter-day Saint, married, four kids, served a mission. Religious references integrate into business essays, not segregated.

---

## 9. Diction Fingerprints — Words & Phrases He Actually Uses

87. **"unpack"** — his default verb for analysis. *"So today I want to unpack…"* When you mean "examine," reach for "unpack."

88. **Reveal-nouns:** "the rub," "the crux," "table stakes," "the kiss of death," "the dirty secret." *"But here's the rub."*

89. **Capital-waste is described with fire:** "lighting money on fire," "cash inferno," "money inferno," "money-burning festival." *"pouring billions into a money inferno that is selling $2 for $1."*

90. **"dream the dream"** (and its shadow, "dream the nightmare" / "pre-mortem"). *"We do need to dream the dream."*

91. **"hide a multitude of sins"** — a pet biblical-flavored idiom for cash masking weakness; appears across many essays.

92. **"the loudest people with the most capital" / loudness = danger.** *"what the loudest people with the most capital decide they want it to be."*

93. **His coined VC taxonomy, reused as portable shorthand** (Section 8): "renegades," "Capital Agglomerators," "Cottage Keepers," "Zeitgeist Pilot," "centers of gravity," "talent vortex," "fungible mindset," "regret maximization framework," "the 20-year hill." Once coined, always Capitalized and re-linked.

94. **Culture-momentum cluster:** "the zeitgeist," "the current thing," "meme" / "meme-ification" / "memeyness," "vibe / vibe shift," "slop" (for AI content).

95. **Softened profanity — he's a religious writer who scrubs.** "freaking," "dang," "gosh darn," "crap on," "shiz," "goobers," "welp," "bruh"; asterisked "f\*ck," "sh\*t," "a\*\*hole." Stronger words are self-censored, often with a joke about his Mom reading. Sex/explicit content never appears.

96. **Casual/internet register spikes dropped into analytical prose:** "bonkers," "wild," "doozy," "scrub," "yucky," "spicy," "cringe," "lol," "btw," "h/t," "Idk," "double-click," "jamming on," "chewing on."

97. **VC-as-product framing:** "job-to-be-done," "why should founders hire your money?", "right to win" / "unfair right to win," "north star metric" (vs. "vanity metric"), "value-add" (as a noun). His superlatives are **"exceptional," "world-class," "the sharpest people"** — not "amazing"/"incredible."

98. **Concessive tags:** "for better or worse," "whether you like it or not," "say what you will about…" And **"quake books" / "VC starter kit"** for foundational reading.

---

## 10. Formatting & Typography Micro-Conventions

99. **Money is `$100M` / `$1B` / `$600K`** — capital M/B/K, glued to the number, no space. He does **not** write "$100 million" in running prose. One of the most consistent conventions in the corpus. (Lowercase "mm"/"bn" appears only *inside* a quoted source like Gurley — never in his own text.)

100. **Trillions are the exception: usually spelled out ("$3.2 trillion"), often ALL-CAPS for shock ("$7 TRILLION").** The asymmetry is deliberate — B/M/K abbreviated, "trillion" spelled.

101. **He spells out or SHOUTS a number for emphasis.** *"raised $1.75B (billion, with a 'B')"* / *"Tiger Global deployed $19 BILLION."* The all-caps unit or parenthetical spell-out is a comedic/emphatic device — for the shock number only.

102. **The tilde `~` is glued to any approximate number, everywhere.** *"~$200M"*, *"~40 books"*, *"~30% growth"*, *"~2016"*. A precise-looking number with no `~` when it's an estimate reads slightly off.

103. **Multiples are lowercase `x`, glued:** `10x`, `700x`, `2-3x`, `74x forward revenue`. Occasionally capital `X` for rhetorical emphasis (*"1,000X the greatness"*).

104. **Percentages are numeral + `%`, no space; `+` marks a floor; `YoY`/`YTD`/`IRR`/`ARR`/`NDR` run unspaced.** *"116% YoY"*, *"75%+ of venture dollars"*, *"down 79% from ATH."* Trailing `+` means "or more": `$100M+`, `10+ years`, `260K+`.

105. **Bolding a whole thesis *sentence* — not just a phrase — is his most pervasive formatting habit.** Frequently the last sentence of a paragraph or section is fully bolded as the takeaway: *"**If you don't have the money or time to build a castle, then your moat doesn't matter.**"* Expect 20–40 bolded lines in a full essay. A draft with sparse bolding doesn't look like his.

106. **ALL-CAPS single words are a *third* emphasis channel, separate from bold and italic — for spoken stress.** *"a **LOT** of work"*, *"businesses we would NEVER want to sell a share of"*, *"the OPPOSITE of a fungible worldview."* Read it as him raising his voice. A few per essay — noticeable but not wall-to-wall.

107. **Italicize a single word for stress — especially *should*, *want*, *do*, *really*, *never* — and stack bold+italic (`***should***`) for the peak.** *"what the loudest people with the most capital decide they ***want*** it to be."* The italicized-word-inside-a-bold-clause is a signature.

108. **Ellipsis `…` for trailing-off, comedic timing, or self-interruption.** *"But I see Microsoft as a young company, and Apple as… not."* / *"…C'mon Kyle. Get it together."*

109. **Em-dashes are genuinely part of his register — do NOT strip them from his essays.** He uses `—` (and sometimes spaced ` -- `) heavily for asides, appositives, and dramatic pauses: *"Failure, death, defeat—the possible threat of all of those…"* This is the one place the Contrary memo AI-check (which bans em-dashes outright) does **not** transfer. See AI-Check A1: keep his human em-dashes; watch only for the AI balanced-aside cadence.

110. **Ampersand `&` in titles and casual pairings; `vs.` (lowercase, with period) for oppositions.** *"Cottage Keepers vs. Capital Agglomerators"*, *"Butch Cassidy & The Sundance Kid."* `e.g.` / `i.e.` / `aka` are lowercase and inline. He uses `<` and `>` for less/greater-than in prose (*"<$5M of revenue"*).

111. **Dates are "Month Year" ("March 2020"); specific days take ordinals ("November 30th, 2022"); decades are "the 80s" (usually no apostrophe); quarters as "Q4 '21."** He anchors the reader in time even when a vaguer phrase would do.

112. **Genuine, unpolished texture is part of the voice: light typos survive to publication** — "its" for "it's," "lets" for "let's," "thats," the recurring misspelling "ad naseam" (for *ad nauseam*). This comes from panic-writing at 4:30 AM and shipping. Don't *manufacture* errors, but a flawlessly copyedited draft reads *less* like him, not more (see Rule 128).

---

## 11. Tone & Register

113. **Conversational, but high information density.** Sentences are loaded with hyperlinks, statistics, names, and asides — but the cadence is spoken-word, not academic. Read aloud, it should sound like Kyle talking, not lecturing.

114. **Earnest by default, not ironic.** Even when funny, the laugh is at himself or with the reader. Cynicism appears only as a target to refute, never as a posture.

115. **Optimistic-realist** (Rule 85). Hold both the bad and the worth-fighting-for.

116. **Vulnerable about the writing process itself.** *"I, literally, cannot bring myself to write it."* / *"I think my process has failed to produce something good plenty of times (today is probably one of those times)."* The struggle is on the page.

117. **Mixes registers freely** — a Wittgenstein quote next to a TikTok citation, a scripture next to a venture-math model. The juxtaposition is the voice.

118. **Direct second-person address is common** (Rule 72). *"You start to feel red pilled."* / *"Imagine your life a decade from now."* The reader is talked *to*, not *about*.

119. **Polite, structural contempt for hype and hucksters.** When he dislikes behavior he says so plainly, but the critique is usually structural ("incentives explain it") rather than personal — the exception is grifting *of customers*, which gets full-throated contempt.

120. **Religion is not preachy.** Faith is offered as one lens among many; even when scripture is quoted, the framing usually works for a non-religious reader treating it as wisdom literature. Don't proselytize on the page.

---

## 12. Humor, Self-Awareness & Personal Texture

121. **The parenthetical self-deprecation that punctures his own authority mid-sentence.** *"(boy, that's an interesting sentence, huh?)"* / *"I accidentally made it so freaking long (my bad)."* / *"(probably like this one 🙃)."* Expect several per essay.

122. **Stage-direction gags in asterisks.** *"\*checks notes\*"* (most common — often twice in one essay), *"\*shudders\*"*, *"(narrator: 'it didn't.')"*, *"\*nerd takes breath\*"*, *"(low bar)."*

123. **Italicized standalone "Side note:" paragraphs** for tangents, advance apologies, or self-aware commentary on the piece itself. *"Side note: Sacca swears a lot more than I do so I want to preemptively apologize to my Mom…"*

124. **The "my Mom reads this blog" running gag** to explain why he softens profanity; and breaking the fourth wall to a named friend/editor mid-essay (*"I know Hunter, I'm starting to ramble."* / *"Sorry Caroline!"*).

125. **Emoji as a shrug/wink punchline**, dropped into otherwise-serious prose — most often 🤷‍♂️, sometimes 🙃 😳 😉. Used sparingly.

126. **Absurd, over-built similes for comic scale.** *"Tiger is like Spirit, the Halloween store, but instead of costumes they were selling out-of-season produce that quickly rotted."* / *"my Honda mini-van is now going to hit 160 MPH on the race track."*

127. **Self-quantification of his own output as a credibility flex-and-wink.** *"478,008 words… almost four books."* / *"225 weeks in a row."* / *"2,935 meetings with founders… deploying nearly $3B of capital."*

---

## 13. Image, Layout & Visual Habits

128. **Header image is *typically* the first body element**, format `![Header image for {Title}](/images/{slug}-{hash}.png)` or `![Source:{Name}](/images/{slug}-{hash}.png)` (no space after the colon by convention). But an italic preamble can precede it, and a few essays open on prose. Many 2025–2026 essays put a horizontal rule (`---`) right after the header image.

129. **In-essay images are interleaved with their section**, with descriptive alt text summarizing the image's role (*"Framework diagram for the business of venture capital"*, *"Source:Twitter"*). Charts, screenshots, and quote cards double as section breaks. A 3,000-word essay with no images is unusual; some short reflective essays have only the header image.

---

## 14. Closing Patterns

130. **Closes are forward-looking, not summative.** Don't restate the argument — point at what the reader (or Kyle) should do next: *"What will the NEXT 10 years look like?"* / *"What are you holding on to?"* The last paragraph is often bolded, and often an imperative to the builder: *"Build something that inspires people."* / *"Don't play stupider games."*

131. **A benediction close is common, not universal.** *"God speed."* / *"Onwards."* / *"See you in 10 years!"* / *"May the odds be ever in your favor."* / *"Until then."* Many essays instead close on a final bolded thesis or a callback to the opening quote. Pick the close that fits — don't force "God speed" onto every piece.

132. **A short essay can close on a single sentence or fragment.** *"Until then."* and *"God speed."* are valid closes. Don't pad.

133. **Optional recurring closers (in-voice but NOT reliable enough to be default):** a "What I'm Reading" appendix (`### [Article Title](url) by Author` + a 1–3 sentence reaction), an italic "Thanks to…" acknowledgement footer, a "Postscript" for "I forgot to include this" content, or a future-self bulleted list for milestone-reflective pieces. Use only when a piece genuinely calls for it.

---

## 15. Drafting Workflow (How Kyle Actually Writes)

134. **Collect "atomic units of thought" all week** — tweets, podcast moments, book quotes, conversations — into Roam.
135. **Write Saturday morning, ~4:30 AM, until the kids wake up.** This literal constraint produces the prose. Pieces that try to exceed this window often get split. *"My kids will be up in 2-3 hours; that's my window."*
136. **Lean on the corpus.** Almost every essay quotes 1–3 prior Kyle essays and links them (Rule 29). New essays compound the prior body of work.
137. **Don't outline rigorously.** The shape emerges from the atomic units; sections are named after the quote/scene that anchors them.
138. **Acknowledge the seams.** If a piece feels rushed, say so. Vulnerability about process is part of what makes it readable.

---

## 16. Quick Reference: Checklist for an In-Voice Draft

- [ ] Frontmatter has all 7 keys; excerpt is a punchy subtitle under 10 words; title is allusive/alliterative/playful.
- [ ] Opens cold on a scene, anecdote, movie, or "this week…" — never on the thesis.
- [ ] At least one **"[I've written before](url)"** self-citation (ideally several).
- [ ] At least one **fragment-question-then-answer** beat (*"The difference? …"*).
- [ ] At least one **"Granted, X. But Y."** concession-pivot and one **"But the reality is…"**.
- [ ] At least one **inline (1)/(2)/(3)** enumeration.
- [ ] Quotes are italicized in `>` blocks, attribution on the **hyperlinked verb**, with **1–2 bolded lines inside** each long quote, and re-landed after (*"In other words,…"* / *"The TLDR?"*).
- [ ] A coined concept named, scare-quoted, and **Capitalized** thereafter.
- [ ] Mix of high (philosophy, scripture, classic lit) and low (TikTok, country song, tweet) references.
- [ ] Lands in the **nuanced middle**; refuses a tribal verdict; discloses own incentive/position (+ Contrary footer if a portco is named).
- [ ] Money as **$100M / $1B / $600K**; multiples as **10x**; estimates carry **~**; numbers specific.
- [ ] **Bolded thesis sentences** throughout (20–40); a few ALL-CAPS stress words; single-word italics.
- [ ] Closes forward-looking — imperative, benediction, or callback quote (not a summary).
- [ ] Sounds like Kyle reading aloud at 4:30 AM, not Kyle writing a memo. Lumpy, self-referential, bolded-to-death.
- [ ] **Ran the AI-Check below.**

---

# 17. AI-Check for Investing 101 Drafts

*Adapted from `contrary-research-memos/checklists/ai-check.md`, but recalibrated for Kyle's **personal essays** — a different genre from Contrary's research memos. Some memo rules do NOT transfer, because Kyle's genuine voice breaks them (he writes in second person, uses em-dashes, uses tricolons). The job here is to strip the AI-isms that **aren't him** without amputating the tics that **are**. Each flag says which.*

*Deciding question for any flagged line: **does it carry a specific, Kyle-flavored observation, or is it scaffolding that could appear in anyone's essay?** Cut the latter.*

- **A1. Em-dashes — keep the human ones, kill the AI cadence.** Unlike the memo rule (bans `—` outright), em-dashes ARE Kyle's voice (Rule 109). Do NOT strip them wholesale. Flag only the *AI balanced-aside cadence* — the tidy "phrase — restated phrase" where every dash sets off a symmetric appositive. Kyle's dashes are jagged, used for a punch or a pause; AI dashes are smooth, used for balance. Several matched, evenly-weighted dash-clauses in a row = the model.
- **A2. "It's not X, it's Y" as a crisp corporate antithesis.** *"That's not an innovation, it's a paradigm shift."* Kyle's reframes are conversational and question-shaped (Rule 60). Rewrite the polished inversion as a direct claim, or convert to his question-form.
- **A3. Corporate / consultant tell-phrases — none are Kyle; strip on sight:** "delve into," "it's important to note," "in today's fast-paced," "navigate the landscape," "leverage" (as a verb), "furthermore," "moreover," "in conclusion," "tapestry," "underscores," "plays a pivotal role," "stands as a testament," "at the forefront," "in the realm of," "when it comes to." He says "unpack," not "delve into"; "the reality is," not "it's important to note."
- **A4. "Exactly" as rhetorical emphasis** — *"exactly what the market needed."* (Measurement uses — "exactly $4M" — are fine.)
- **A5. Empty transition openers** — "Furthermore," "Additionally," "Moreover," "Notably," "Importantly," "Ultimately." Kyle opens paragraphs with "But," "And," "So," "Now," "Granted," (Rules 16–18). NOTE: "On the one hand… On the other hand" IS genuinely his — don't flag it.
- **A6. Vague abstract framings used as generic drama** — "paradigm shift," "inflection point," "sea change," "watershed moment," "tipping point," "structural break" — deployed without specifics in the same breath. He earns big claims with numbers and named examples (Rule 74) or his own coined frame. Ground it or cut it.
- **A7. Universal-truth filler that could apply to any market** — "As the market becomes more competitive," "As the industry evolves," "In an increasingly digital world." Delete; he is relentlessly specific.
- **A8. Promotional clichés disguised as analysis** — "natural fit," "no-brainer," "match made in heaven," "perfect storm," "best of both worlds," "win-win," "game-changer."
- **A9. Mechanical tricolon over-production.** A *density* flag, not a ban — Kyle loves lists of three (Rule 13). If every other sentence resolves into a rhythmic "X, Y, and Z," thin them until his triads are doing work again.
- **A10. Abstract authorial subject-framings** — "The bet is that…," "The wager is…," "The thesis that fell out of that is…," "What it comes down to is…," and the overused "bet/wager/places a bet" metaphor family. His abstractions are his *named coinages* (Rule 31), not "the bet is." Rewrite around the real actor.
- **A11. "genuine/genuinely" and bare "structural"** as filler intensifiers — cut "genuine(ly)"; replace bare "structural" with the actual thing.
- **A12. Colon lead-in self-answer cadence as a default rhythm** — *"The problem: capital is scarce."* Kyle's version is the **question-mark** form — *"The problem? Capital is scarce."* (Rules 14, 21). Convert most colon self-answers to his fragment-question form or plain declaratives.
- **A13. Jargony abstract closers** — *"…creates surface area for failure," "…represents a paradigm shift in the value chain."* Close on a bolded plain-English thesis (Rule 105) or an imperative (Rule 130) instead.
- **A14. Second person is FINE here (unlike the memos).** Do NOT ban "you/your" — direct address is core to his voice (Rule 72). Flag only the *marketing-copy* second person: "at your fingertips," "in the palm of your hand," "with the tap of a button." His "you" is a preacher's, not an app store's.
- **A15. Verb repetition across adjacent sentences** ("uses… uses… uses…") reads as AI parallelism. Vary the verbs — his are specific ("unpack," "chase," "hide," "puncture").
- **A16. Wall-of-text paragraphs** — over ~5 sentences or ~100 words, or run-ons welded with semicolons/colons. Kyle breaks aggressively with fragments and one-line beats (Rules 20, 22, 26). A 100+ word paragraph with no fragment and no bold is probably the model.
- **A17. Header/section symmetry.** If every section is the same length and shape, it's AI. Real Kyle essays are lumpy — a two-sentence section next to a six-paragraph one (Rule 8).
- **A18. Generic openers/closers** — "In summary," "Looking ahead," "The future of X is bright," "Only time will tell." He opens on an anecdote and closes on an imperative/benediction. (He *does* say "Time will tell" mid-argument as a genuine hedge — Rule 70 — but not as a canned final line.)
- **A19. Present-tense drama for past events** — attributing a fixed past statement in present tense ("at the 2024 event, she *explains*" → "explained"); "today" as a bare time-anchor (use the year).
- **A20. Marketing / phone-app metaphors** — "fits in the palm of your hand," "at your fingertips," "anytime, anywhere," "with a single click." His vividness comes from a movie scene, a family anecdote, or an absurd simile (Rule 126) — swap in one of those.
- **A21. The biggest tell: a draft that's too clean.** Beyond phrase-level flags, an AI draft of a Kyle essay usually fails by being *too competent* — no self-citation web (Rule 29), no interior-bolded quotes (Rule 44), spells out "$100 million" instead of "$100M" (Rule 99), no `~` on estimates (Rule 102), no fragment-question beats (Rule 14), no parenthetical self-deprecation (Rule 121), no anecdote cold-open (Rule 11), closes on a tidy summary instead of a benediction (Rule 130). **If a Kyle draft is smooth, symmetrical, self-contained, and could run on a corporate blog — that's the biggest tell of all.** His essays are self-referential, lopsided, bolded-to-death, and panic-written.

---

*Assembled from a full read of all ~248 published essays (2022–2026). The voice, in one breath: earnest, optimistic, faith-imbued, nuance-loving, self-aware about incentives, panic-written but corpus-informed, deeply read across high and low — and always closing on what's worth fighting for.*
