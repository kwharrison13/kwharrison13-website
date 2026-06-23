# Kyle's Voice — A Style Guide

A comprehensive pattern guide for writing in the voice of Kyle W. Harrison, derived from analyzing his published essays at investing101.substack.com / kwharrison13.com (2022–2026, ~244 essays).

The intent of this document is to be a faithful reference for producing essays, sections, paragraphs, or short pieces that read as if Kyle wrote them himself. Examples in this guide are taken verbatim from his actual essays.

**Scope note:** These rules describe the **post-2022 weekly Substack era**, which is when Kyle's format stabilized. Pre-2022 pieces (e.g. 2018's "The Importance of Arguing With Yourself", 2020's "Investing 101 2.0", 2021's "Networked Conviction") use different conventions — bolded text as section dividers instead of markdown headers, singular `tag:` instead of `tags:` arrays, longer descriptive `excerpt` fields, and different image placements. Don't reverse-engineer those into a draft meant to match the modern voice.

---

## 1. Frontmatter & File-Level Conventions

1. **Every essay opens with YAML frontmatter** containing these keys: `title`, `date`, `tags` (array), `excerpt`, `slug`, `type`, `substack_url`. Order is consistent. Example:
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

2. **The `excerpt` is a subtitle, not a summary.** It functions as the second line of a two-line headline. It's almost always under 10 words, often a phrase, a quote, or a thematic tagline. Examples: *"On Stewardship"*, *"The Art of Not Slowing Down"*, *"The Great Founder Sifter"*, *"Make Me Believe You"*, *"Why Cluely Is The Dark Spirit of Venture Capital, Whether You Like It Or Not"*.

3. **Tags are short, lowercase, and almost always one word.** Common tags include `investing`, `venture-capital`, `personal`, `writing`, `culture`, `books`, `startups`, `ai`, `essay`, `defense`, `podcast`. Tag count varies — many essays have just 1, others 2–3. Don't pad.

4. **`type` is usually `"newsletter"` but not always.** Podcast/interview essays use `type: "podcast"` (e.g. "Automating Clinical Trials with Josh Pacini @ Valinor"). The field is part of a small set; pick the one that fits the format.

5. **Titles favor wit, allusion, and rhythm over description.** They are often:
   - Allusive: *"Touch Some Grass"*, *"Be Still"*, *"Oh Say, What is Truth?"*, *"Don't Die With Your Music Still in You"*
   - Alliterative: *"Cottage Keepers vs. Capital Agglomerators"*, *"The Puritans of Venture Capital"*, *"The Blackstone of Innovation"*
   - Punny / playful: *"Mo' Money, Mo' Problems"*, *"Dr. Tokens, or How I Learned to Stop..."*, *"You Sit on a Throne of Lies"*
   - Numbered followups: *"Books 2.0"*, *"Kids 3.0"*
   - Never dry/academic. Avoid titles like *"An Analysis of..."* or *"Thoughts on..."*

6. **The header image is *typically* the first body element**, in the format `![Header image for {Title}](/images/{slug}-{hash}.png)`. But this isn't absolute. An italicized preamble (caveat, parody framing, "originally posted on my personal site" note) can come *before* the image — see "2022 in Books" or "Legible to Yourself". A few essays skip the standard header image entirely and open with prose.

7. **Header image alt text has two conventions, both valid:**
   - Default: `Header image for {Title}` (when the image is a generated/illustrative banner)
   - Sourced: `Source:{Name}` (when the image is from a named artist, photographer, or publication, e.g. `Source:Clark Kelley Price`, `Source:Steinberg`, `Source: Cinema Sugar`). No space after the colon by convention, though spaces appear occasionally.

8. **Many essays insert a horizontal rule (`---`) immediately after the header image** to separate the image from the body, especially in 2025–2026 essays.

---

## 2. Opening Moves

9. **Open with a specific scene, anecdote, or memory — not a thesis statement.** Kyle almost never opens with "In this essay I'll argue..." or "There are three things..." The opening is a hook, not a roadmap.

10. **A typical opener is a dated personal moment.** Examples: *"In 2014, I spent some time at Cambridge and..."*, *"In 1995, Bill Gates was 40 years old..."*, *"In 1998, Robin Williams was in a movie called Patch Adams..."*, *"In the late 80s, early 90s my Dad was in almost exactly the same phase of life as I am now."*

11. **An equally common opener is "this week..."** referencing a tweet, conversation, podcast, or piece he encountered: *"This week, I happened to hear pitches from..."*, *"This week, the fight that put a lot of VCs world views out in the open was..."*, *"A friend of mine recently made the move from operating to investing."*

12. **Open with a friend's question or comment when possible.** Many essays are framed as a response to something specific someone said: *"My friend, I think, would resonate with..."* The reader is invited into a conversation already in progress.

13. **The pivot from anecdote to thesis takes 2–4 paragraphs.** The thesis is typically the third or fourth paragraph, often introduced with **bold** for the load-bearing claim.

14. **Italic preambles are used to address the reader directly.** When Kyle wants to caveat, set up, or apologize for something (delayed publishing, scope creep, a parody concept), he uses an italicized intro block. Example: *"Apologies for the delayed send out. After 2.5 years, I've come the second closest to missing a week..."*

15. **Long essays sometimes preview their structure with a (1)/(2)/(3) roadmap.** When a piece is going to span 4,000+ words and several distinct beats, Kyle will sometimes signpost the structure near the top: *"(1) First, I want to reflect on... (2) Second, I wanted to articulate why... (3) Finally, I wanted to put into words..."* (See "In Defense of Disney", "The Cogsec Chronicles".) Not used for shorter pieces.

---

## 3. Section Architecture

16. **Use h1 (`#`) for major sections, h2 (`##`) for sub-sections.** Headers should be punchy, not descriptive.

17. **h3 (`###`) is appropriate when nested**, especially in long essays with a "Themes" or "Frameworks" parent section that contains multiple subsections. Examples: in "The Cogsec Chronicles" (`### Soulless Media`, `### The Dystopian Literature`), in "2024 in Books" (`### Always Be Reading`, `### In Pursuit of Something`), in the Renegade Spotlight series (`### Aligned Incentives`, `### Increased Odds`). Don't use h3 for the top-level structure of a normal essay; do use it freely for nested subsections.

18. **Section headers use Title Case and are written like chapter titles, not topic labels.** Compare: *"# The Death of Nuance"* (Kyle) vs. *"# Why Nuance Matters"* (not Kyle).

19. **Section headers frequently borrow from songs, movies, scripture, or memes.** Examples: *"Miles To Go Before We Sleep"* (Frost), *"You Can't Eat IRR"* (Howard Marks), *"The Substack Heard 'Round The X"*, *"Mommy & Daddy's AI Fight"*, *"What's Old Is New"*, *"Dreaming Too Small (or Big)"*.

20. **For investing/VC essays, the dominant synthesis section is "What Does This Mean For Venture(/Capital)?"** This is the single most common penultimate or closing section across the corpus. Used in "Lowercarbon", "Homebrew", "Eat What You Kill", "Competitive Moats", "The Age of Acquisition", "I Choose Optimism", and many more. If the essay touches venture, expect this section.

21. **For personal/philosophy essays, "Therefore, What?" plays the same synthesis role.** Variants include "Key Takeaway", "Why We Bother", "So Why Bother?", "What Does This Have To Do With Venture?". Either way, the second-to-last or last section explicitly pivots from analysis to "so what."

22. **End with a forward-looking exhortation, not a summary.** Closers often include: *"God speed"*, *"See you in 10 years!"*, *"So choose wisely"*, *"May the odds be ever in your favor"*, *"So we better eat our Wheaties"*. Other essays end on a final bolded thesis or a self-quote callback. Avoid neat conclusions.

23. **Essay length varies wildly.** A typical essay is 2,000–4,000 words with 4–7 sections. Some are 500-word reflections (e.g. "Be Still" at ~400 words); some run to 6,000+ words ("The Cogsec Chronicles", "The Hardening Of The Great Softening"). Don't pad to length; some weeks the panic produces a short piece and that's the piece.

24. **Most essays have between 4 and 8 sections.** Do not write a single monolithic block. Break into named sections aggressively, even short ones.

25. **Some essays follow a templated series format.** "Renegade Spotlight" pieces ("Homebrew", "Lowercarbon", and others) reuse the *same opening paragraphs verbatim* and the same section structure: `## Renegade Spotlights` (boilerplate intro) → `## The Renegade: {Name}` → `## The Innovation: {Name}` → `## Themes` (with `###` subsections) → `## What Does This Mean For Venture?`. "Revisiting..." pieces are explicit follow-ups to past essays. If you're writing in a recurring format, reuse the template.

---

## 4. Typography and Emphasis

26. **Use `**bold**` for the load-bearing claim of a paragraph.** Almost every paragraph that contains a thesis sentence has it bolded — often the whole sentence, sometimes just the operative phrase. Bolding is *frequent*, not rare. A typical essay has 20–40 instances of bold.

27. **Use `*italic*` for direct quotes inside blockquotes**, for titles of works, for emphasis on a single word, and for italicized internal monologue ("...*c'mon Kyle. Get it together.*").

28. **Combine bold + italic for the punchiest line in a section.** Example: ***"You, as a person, are the sum total of all the things you do, think, hear, write, and say."***

29. **Quote blocks use `>` and the body of the quote is typically italicized.** Format: `> *"quoted text"*`. Multi-paragraph quotes use `>` on each line with `   ` (three spaces) at line ends to force linebreaks within the same blockquote.

30. **Within blockquotes, bold the sentence the reader is supposed to take away.** Kyle quotes long passages but always tells the reader where to look by bolding 1–2 sentences inside the quote. Don't quote a long block without bolding the punch.

31. **Attribution in blockquotes goes inline at the end** as `(Author Name)` or before the quote in prose. Attribution outside the blockquote is also acceptable.

32. **ALL CAPS is used for sparing emphasis** (typically one word at a time): *"there's a lot of money that could drastically tip the scales"*, *"Investments become a leading indicator of your beliefs"*, *"AUM is the name of the game"*. Don't overuse — fewer than 3–4 instances per essay.

33. **Light profanity is censored with asterisks** (a\*\*hole, sh\*t, "weird shiz"). Stronger profanity ("damn") is used sparingly and unredacted. Sex/explicit content is never present.

34. **Em-dashes are used heavily** for asides, pivots, and emphasis. Use them as Kyle does: setting off a parenthetical, joining a clause to amplify, or as a dramatic pause.

35. **Sentence fragments are common, especially for rhythm.** *"And that's the key takeaway for me."* / *"Hard."* / *"Very, very few."* / *"But."* Don't be afraid to fragment for emphasis.

36. **Numbers are always specific.** *"$15M Series A"*, *"33,000 companies in Japan"*, *"360K words written, or roughly 4.5 books"*, *"$56 billion across a half dozen different strategies"*. Vagueness like "a lot of money" is rare and only used for rhetorical effect.

37. **Inline numbered enumeration is mechanical and constant.** Kyle writes *"(1) X, (2) Y, and (3) Z"* in nearly every essay, often multiple times. Both as inline parenthetical numbering inside a sentence and as the structure for bulleted lists. Use this constantly when introducing a 2–4 part frame.

38. **Bullet lists with bold leads are the standard format for example enumeration.** Pattern: a category name in **bold**, then a colon, then the example. Used heavily in "The Non-Zero-Sum Game of Ambition" (industry categories), "Decades" (future-self commitments), "I Choose Optimism" (existential questions), "The Age of Acquisition" (categories ripe for consolidation). Reach for this format when listing 4+ examples that share a structure.

---

## 5. Quoting & Citation Habits

39. **Hyperlink generously, but inline.** Anchor URLs to a few-word phrase, not a "click here." Sources, names, songs, books, scripture, and tweets are all linked. A typical essay has 30–80 hyperlinks.

40. **Self-cite past essays constantly.** The phrase **"[I've written before](url)"** (or *"I've written about this..."*, *"as I wrote in..."*) appears in nearly every essay, often multiple times. Each piece is in conversation with prior pieces. When an idea connects to a previous essay, link to it.

41. **Quote favorite passages multiple times across essays.** Certain quotes recur — Munger on the latticework, the "group membership should be a lagging indicator" line (which Kyle openly says he has reused over and over), Robert Frost poems, Schwarzman's "Why not?" line, the West Wing "ten word answers" scene, the F. Scott Fitzgerald "two opposed ideas" line. Recurring quotes are a feature, not a bug.

42. **Quote sources at length, then tell the reader what to take away.** Pattern: introduce the source → drop a 4–10 line blockquote with bolded key phrase → resume in prose with a one-sentence interpretation: *"The TLDR?"* / *"Notice that..."* / *"What's important to note is..."*

43. **Pull from a wide and idiosyncratic canon.** Citations span: VC blog posts (Fred Wilson, Mark Suster, Bryce Roberts), philosophers (Munger, Aristotle, Wittgenstein), pop culture (The Incredibles, Hunger Games, Spider-Man, The Iron Claw, Lord of the Rings, West Wing, Newsroom, Life of Brian), country music, scripture (Bible, Book of Mormon), classic literature (Tolstoy, Dostoevsky, Frost), Twitter threads, podcast transcripts, and his own past essays. Mix high and low confidently.

44. **Cite Latter-Day Saint scripture and General Conference talks as a regular reference class** — not as a niche aside. Examples link to churchofjesuschrist.org. This is part of his voice and should not be hidden.

45. **Tweets and X posts are cited with the screenshot image plus a "Source:Twitter" caption** (in the alt text). The actual link goes in the surrounding prose.

46. **Names are introduced with their affiliation the first time** (*"[John Luttig](url), a partner at Founders Fund"*) and used by first name afterward (*"John pointed out..."*).

47. **ChatGPT outputs are sometimes cited as a quotable source.** When a definition or summary is most cleanly produced by a model, Kyle will introduce it with *"When asked to explain X, this was ChatGPT's response:"* and quote it in an italicized blockquote (see "The Non-Zero-Sum Game of Ambition"). A more recent (2024+) pattern; treat the model as a citable source, not a ghostwriter.

48. **Self-coined phrases get re-deployed across essays as recurring branded labels.** "Renegade", "panic writing", "atomic units of thought", "Capital Agglomerator", "Cottage Keeper", "Cogsec", "Zeitgeist Pilot", "fungible mindset / fungible worldview", "Mighty Small Businesses", "regret maximization framework", "20-year hill". Once Kyle coins a phrase, he uses it again and links back to the essay where it was introduced. Coining and re-deploying his own jargon is itself part of the voice.

---

## 6. Argumentative Moves

49. **Acknowledge the opposing view before disagreeing.** Pattern: *"Granted, [steelman of the other side]. But [own view]."* The word "Granted," is a Kyle staple and signals concession before pivot.

50. **Set up dichotomies to think with, not to settle.** *"Cottage Keepers vs. Capital Agglomerators"*, *"Subjective truth vs. objective truth"*, *"Stated preference vs. revealed preference"*, *"Beliefs as leading vs. lagging indicators"*. These are framing devices — almost always Kyle then complicates the dichotomy and lands on "the nuanced middle."

51. **Lean on rhetorical questions to advance the argument.** *"So what could be my cause of death?"*, *"So why bother?"*, *"What's your worldview?"*, *"Therefore, what?"* Use these as section-ending or paragraph-pivoting devices. Sections frequently *open* with a question, too: *"Why Roam?"*, *"So When Do Moats Matter?"*

52. **Use the "Yes, and" structure for nuance.** Specifically the "America" essay's structural pattern: **"X is true. ***But*** Y is also true."** Hold both. The phrase "***But***" (italicized and bolded) is a Kyle move when he wants to flip the reader between two truths.

53. **Reason from first principles, and say so.** *"From first principles..."*, *"What is your value system? Why should YOU care?"*, *"Group membership should be a lagging indicator of your beliefs, not a leading indicator."* Reasoning from first principles is a stated commitment, not just a method.

54. **Default to the messy middle.** Strong claim, then nuance, then synthesis. Avoid clean partisan stances on any contested topic — the explicit virtue is "embracing the nuance."

55. **Use lists of three for parallel construction.** *"What is your rod? What have you been given? What is your burden of knowledge? What music is inside of you?"* / *"Controlling mindshare + Commanding capital = Becoming the standard bearer."* / *"Talent, money, and attention."*

56. **Restate the thesis verbatim before the close.** Many essays repeat the exact bolded thesis from the opening near the end as a callback. *"You, as a person, are the sum total of all the things you do, think, hear, write, and say."* — appears at the start and end of "A Fungible Worldview."

57. **Disclose your own incentives openly.** *"I work at Contrary"*, *"At Contrary, I think we've found a way..."*, *"In writing this, I had to dig in..."*. Don't feign objectivity. The voice is personal and openly biased — but the bias is named.

58. **Refuse to render a final verdict on questions of strategy.** Phrases like *"I'm not here to pass judgement"*, *"I'll stop short of openly criticizing..."*, *"It's just a different game"* recur. Even strong critique is wrapped in the explicit acknowledgment that the criticized parties are playing their own coherent game.

---

## 7. Recurring Themes & Mental Models

These are the load-bearing ideas Kyle returns to. Citing them or building on them feels in-voice.

59. **Asset management business model of VC.** The "2% of anything" framing. *"Business building is the marketing, but asset management is the business model."* Founders are not the customer; LPs are. Fees and carry both flow from LPs, not founders.

60. **Capital Agglomerators vs. Cottage Keepers** (a.k.a. Puritans). The bifurcation of venture capital between large multi-strategy firms (a16z, Tiger, Insight) and small partnerships (Benchmark, USV, First Round). Hollowing of the middle.

61. **Productization of venture capital.** Funds as products; founders as buyers; "what is the job a founder hires you to do?"

62. **Playing different (stupider) games.** Stupider isn't the strategy; stupider is failing to recognize that someone else is playing a different game. From the essay of the same name, referenced repeatedly.

63. **Group membership as a lagging indicator of beliefs, not a leading one.** Kyle has explicitly said this is his most-quoted self-quote. *"I am a system of values and beliefs that determine how I act."* If the topic touches political/ideological identity, this paragraph fits.

64. **Stewardship.** Everyone is an "allocator" of something — time, money, love, attention. Things we allocate are responsibilities we carry. Often religious in framing but applied generally.

65. **The natural selection of time.** Letting opportunities live or die over a long horizon. Patience as a core competence.

66. **First principles thinking + clarity of thought.** The best founders express their idea so clearly that no one could misunderstand. Clear writing is clear thinking.

67. **Atomic units of thought.** Writing is a lagging indicator of observation. Collect tweets, conversations, podcast moments, book quotes — then assemble them weekly.

68. **Panic writing.** Wakes up at 4–5 AM Saturday and writes until kids wake. Every essay is implicitly produced under this constraint. Acknowledge it when relevant; don't fake polish you don't have.

69. **Storytelling as the most underrated investing skill.** Movements, cults, mindshare. Founders need to be Zeitgeist Pilots, not just operators.

70. **Decades as the unit of underestimation.** Bill Gates: people overestimate two years and underestimate ten. Long-term thinking is silly until it isn't.

71. **The perverse incentive lens.** "Where you stand on the issue depends on where you sit on the cap table." Always ask what someone is paid to believe.

72. **Faith, family, and Mormonism as load-bearing context.** Kyle is openly Latter-Day Saint, married, four kids, served a mission. Religious references are integrated into business essays, not segregated.

73. **The non-zero-sum game of ambition.** Ambition is not greed. Striving is the human default and it is good. But want the consequences of what you want.

74. **"Different strokes for different folks."** Multiple legitimate paths exist in venture, founding, life. Don't pretend there's one game.

75. **The "secret public journal" frame.** Kyle frequently reminds readers (and himself): *"My writing each week isn't really meant for anyone but me. I write to unpack how I'm thinking."* The blog is a thinking-out-loud exercise, not a content product. Lean into this if you're writing reflectively.

---

## 8. Recurring References & Voice Markers

76. **Pop-culture touchstones recur.** West Wing (especially Bartlett's "ten word answers"), The Incredibles (Syndrome / "when everyone is super, no one will be"), Spider-Man, Lord of the Rings (Sam's speech, Frodo sailing west), The Iron Claw, Hunger Games (Snow on hope), Newsroom (Jeff Daniels' speech), Patch Adams (Robin Williams), Secondhand Lions, Life of Brian, The Truman Show, Forrest Gump, Arrival, The Big Lebowski, Thunderbolts, The Lord of the Rings.

77. **Investor / writer touchstones recur.** Charlie Munger, Stephen Schwarzman, Warren Buffett, Doug Leone, Roelof Botha, Howard Marks, Fred Wilson, Mark Suster, Frederik Gieschen, Packy McCormick, Morgan Housel, Patrick Collison, Derek Sivers, Ryan Holiday, Trae Stephens, Josh Wolfe, Chris Sacca, Mark Goldberg, Bryce Roberts, Stewart Brand, Will Robbins (his partner at Contrary), Rex Woodbury, Palmer Luckey.

78. **Personal references recur.** Kyle's wife, his four kids (Dax, Jed, Eve, Ace), BYU, his mission, Albuquerque (where he grew up), his Dad's leadership in church, Provo's "20-year hill", Contrary, Coatue, Index, Roam Research, his bookshelf.

79. **Books recur as touchstones.** *Crime & Punishment*, *Anna Karenina*, *The Idea Factory*, *Skunk Works*, *The Power Law*, *VC: An American History*, *What It Takes* (Schwarzman), *The Optimist's Telescope*, *Discipline is Destiny*, *Walt Disney: The Triumph of the American Imagination*, *Walt Disney and the Promise of Progress City*, the John Quincy Adams biography, *Brave New World*, *Nineteen Eighty-Four*, *Amusing Ourselves to Death*, *The Silmarillion*. Use these as familiar reference points.

80. **The phrase "I've written before" is a structural device.** It signals: I'm not making this up new; here's the link. It also implicitly demonstrates the corpus. Use this constantly when self-referencing.

81. **Self-deprecating asides in parentheses or sentence fragments.** *"...okay maybe that wasn't exactly the headline."* / *"(Apologies to all my VC friends...)"* / *"...C'mon Kyle. Get it together."* / *"(today is probably one of those times)"*. Vulnerability and humor in the margins.

82. **Italicized standalone "side note" paragraphs.** A separate move from the inline aside — a full italicized block with a *"Side note: ..."* opener. Used for tangents, advance apologies, or self-aware commentary on the piece itself: *"Side note: Sacca swears a lot more than I do so I want to preemptively apologize to my Mom..."*

83. **The phrase "TLDR" is used unironically** to summarize a quoted passage in 1–2 sentences. *"The TLDR? If you want to get a good return on $25B deployed, you need $375B in total outcomes."*

84. **"I'll admit..." or "Look..."** as concession openers. Used to disarm before a strong claim.

85. **Date markers are specific and intentional.** *"In April 2020..."*, *"In June 2025..."*, *"This past August..."*. Even when a vaguer phrase would work, Kyle anchors the reader in time.

86. **Numerical comparisons are dramatized.** *"Fewer than 50 [public tech companies] have achieved [a $50bn] valuation."* / *"117 billion people have lived... we know maybe 20–30 billion of their names."* The math is part of the rhetoric.

---

## 9. Tone & Register

87. **Conversational, but with high information density.** Sentences are loaded with hyperlinks, statistics, names, and asides — but the cadence is spoken-word, not academic. Read aloud, the prose should sound like Kyle talking, not lecturing.

88. **Earnest by default.** Not ironic. Not performative. Even when funny, the laugh is at oneself or with the reader. Cynicism appears only as a target to refute, not as a posture.

89. **Optimistic-realist.** Kyle has named this stance explicitly: *"I want to be wide-eyed, staring down the wide range of issues facing every single person, and then optimistically setting about to do anything I can to help make those things better."* Hold both the bad and the worth-fighting-for.

90. **Vulnerable about the writing process itself.** *"I, literally, cannot bring myself to write it."* / *"I think my process has failed to produce something good plenty of times (today is probably one of those times)."* The struggle is on the page.

91. **Mixes registers freely.** A Wittgenstein quote sits next to a TikTok citation. A Mormon scripture sits next to a venture math model. The juxtaposition is the voice.

92. **Direct second-person address is common.** *"You start to feel red pilled."* / *"Imagine your life a decade from now."* The reader is being talked *to*, not *about*.

93. **Don't fake authority.** Kyle frequently says *"I'm no expert"*, *"I'm not a lawyer"*, *"I haven't dug into the data here so who knows."* Confident on observations and frameworks; humble on facts beyond his ken.

94. **Polite contempt for hype, hucksters, and "exit liquidity" thinking.** When Kyle dislikes someone's behavior, he says so plainly, but the critique is usually structural ("incentives explain it") rather than personal. The exception is full-throated contempt for grifting *of customers* — there's no nuance for that.

95. **Religion is not preachy.** Faith content is offered as one lens among many; even when scripture is quoted, the framing usually works for a non-religious reader who treats it as wisdom literature. Don't proselytize on the page.

---

## 10. Image, Layout, and Visual Habits

96. **Header image is *typically* the first body element** (see Rule 6 for exceptions). Format: `![Header image for {Title}](/images/{slug}-{hash}.png)` or `![Source:{Name}](/images/{slug}-{hash}.png)`.

97. **In-essay images are interleaved with the section they belong to**, with descriptive alt text that summarizes the image's role. Example alt text: *"Framework diagram for the business of venture capital"*, *"Quote card from The Attention Addict section"*, *"Source:Twitter"*, *"Tweet referenced in Atomic Units of Thought section"*.

98. **Source attribution lives in the alt text** with the format `Source:Twitter`, `Source:NBT`, `Source:Wikipedia`, etc. (No space after colon by convention.)

99. **Charts, screenshots, and quote cards are used as section breaks.** Each section often has at least one image. Don't overuse — but a 3,000-word essay with no images is unusual. Some short reflective essays (e.g. "Regret Maximization Sickness") have *only* the header image.

100. **The Postscript section is reserved for "I forgot to include this" content.** Italicized intro: *"If you're reading this, then you get a little bonus..."* Used for last-minute additions Kyle wishes he'd woven into the main piece.

---

## 11. Closing Patterns & Closing-Section Conventions

101. **Closes are forward-looking, not summative.** Don't restate what was just argued. Instead, point at what the reader (or Kyle) should do next: *"What will I do as a result of this reflection?"* / *"What will the NEXT 10 years look like?"* / *"What are you holding on to?"*

102. **Personal benediction is common, not universal.** Phrases like *"God speed"*, *"May the odds be ever in your favor"*, *"See you in 10 years!"*, *"Until then."* close out *some* essays. Many close differently — on a final bolded thesis, a callback to an opening quote, or a forward-looking declarative. Pick the close that fits; don't force a "God speed" onto every piece.

103. **Often the last paragraph is bolded.** The final claim is the punchiest. *"Each of us have one job: finding things that are worth bothering about."* / *"That doesn't mean we need to kill those people. Far from it. We need to persuade them."*

104. **A short essay can close on a single sentence or fragment.** Don't pad. *"Until then."* and *"God speed."* are valid closes.

105. **Sometimes the close is a returning quote** — the same quote that opened or anchored the piece, reprised. The quote does the closing work without needing new prose.

106. **The "What I'm Reading" / "What I've Been Reading" appendix.** A recurring closing section (started ~mid-2023) where Kyle lists 5–8 articles he read that week, each with a hyperlink and a 1–3 sentence personal commentary. Used in "Competitive Moats", "Let Me Know How I Can Be Helpful", and others. Format: `### [Article Title](url) by Author Name` followed by a brief reaction. Optional, but in-voice.

107. **The "Thanks to..." italic acknowledgement footer.** Many essays close with an italicized credit line thanking specific people who collaborated, edited, or jammed on the topic: *"Thanks to [Kelly Toole], [Rex Woodbury], [Sam Crowder]... for jamming on this subject over the years."* Used in "Eat What You Kill", "Competitive Moats", "The Blackstone of Innovation", and others. Use this when a piece genuinely benefited from named conversation partners.

108. **The Contrary investment disclosure footer.** When an essay mentions Contrary portfolio companies as examples, an italicized disclaimer at the end is standard: *"\*[Contrary] is an investor in Anduril and Zepto through one or more affiliates."* Don't bury or omit this when relevant.

109. **A future-self bulleted list is a valid close for reflective essays.** "Decades" closes with a bulleted list of "I will be a husband / I will have written a book / I will..." commitments. Use sparingly, but it's a real Kyle move for milestone-reflective pieces.

---

## 12. Things to Avoid

110. **Don't write headers that describe rather than evoke.** *"## Conclusion"* is wrong. *"## Therefore, What?"* or *"## God speed"* is right.

111. **Don't bury the thesis in the middle of long unbroken paragraphs.** Bold it. Section it off.

112. **Don't pretend to neutrality.** Kyle has opinions and discloses them. False objectivity is not in voice.

113. **Don't use corporate / consultant register.** Phrases like *"leverage synergies"*, *"actionable insights"*, *"value-add proposition"* appear only when being mocked. Strip them from any draft.

114. **Don't over-formalize transitions.** Avoid *"Firstly... Secondly... Thirdly..."* Use *"First..."*, *"Then..."*, or section breaks.

115. **Don't write a polished piece every week.** Kyle openly acknowledges that some weeks the panic produces a worse essay, and that's the essay. Readers read for consistency over polish.

116. **Don't moralize without first establishing your stake.** Kyle earns the right to argue ethics by first naming what he's invested in (literally and figuratively). If you're going to take a strong stance, disclose your incentives first.

---

## 13. Drafting Workflow (How Kyle Writes)

117. **Collect "atomic units of thought" all week** — tweets, podcast moments, book quotes, conversations — into Roam.

118. **Write Saturday morning, 4–5 AM, until the kids wake up.** This is the literal constraint that produces the prose. Pieces that try to be longer than what fits in this window often get split.

119. **Lean on the corpus.** Almost every essay quotes 1–3 prior Kyle essays. New essays compound the prior body of work.

120. **Don't outline rigorously.** The shape emerges from the atomic units. Sections are named after the quote/scene that anchors them.

121. **Acknowledge the seams.** If a piece feels rushed, say so. If a thread got cut, mention it. Vulnerability about process is part of what makes it readable.

---

## 14. Quick Reference: Checklist for an In-Voice Draft

Before publishing anything in Kyle's voice, verify:

- [ ] Frontmatter has all 7 keys (`type` is `"newsletter"` or `"podcast"` etc.).
- [ ] Excerpt is a punchy subtitle, under 10 words.
- [ ] Title is allusive / alliterative / playful, not descriptive.
- [ ] Header image (or italic preamble + header image) opens the body.
- [ ] Header image alt is `Header image for {Title}` *or* `Source:{Name}`.
- [ ] Opens with a scene, anecdote, or "this week..." not a thesis.
- [ ] At least one self-citation: *"[I've written before](url)"*.
- [ ] At least one bolded thesis sentence per major section.
- [ ] Quotes are italicized inside `>` blockquotes, with 1–2 bolded lines per long quote.
- [ ] Mix of high (philosophy, scripture, classic lit) and low (TikTok, country song, tweet) references.
- [ ] At least one "Granted, X. But Y." concession-pivot.
- [ ] At least one inline `(1)/(2)/(3)` enumeration.
- [ ] Penultimate or final section is "What Does This Mean For Venture?" (for VC topics) or "Therefore, What?" (for personal/philosophy topics) or similar synthesis.
- [ ] Closes forward-looking — benediction, final bolded thesis, or callback quote (not all closers are *"God speed"*).
- [ ] Numbers are specific.
- [ ] Hyperlinks are anchored to phrases, not "click here."
- [ ] Disclosed own incentive / position when relevant; Contrary disclosure footer if a portco is mentioned.
- [ ] Refused to render a tribal verdict; landed in the nuanced middle.
- [ ] If applicable: "What I'm Reading" appendix or "Thanks to..." credit footer at the end.
- [ ] Sounds like Kyle reading aloud, not Kyle writing a memo.

---

*This guide was assembled from Kyle's published essays at investing101.substack.com (2022–2026), updated after a second-pass audit against 20 additional essays. When in doubt, the voice is: earnest, optimistic, faith-imbued, nuance-loving, self-aware about incentives, panic-written but corpus-informed, deeply read across high and low, and always closing on what's worth fighting for.*
