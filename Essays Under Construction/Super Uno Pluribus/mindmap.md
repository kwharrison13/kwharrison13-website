# Super Uno Pluribus — Mind Map

> "Over One, The Many." Three diagrams: the **concept clusters**, the **central tension** that organizes them, and the **sources** that feed each cluster. Companion glossary in [notes.md](notes.md).

---

## 1. Concept Clusters

The framework breaks into roughly twelve clusters. Each is a node in the larger argument; many concepts live on the boundary between two.

```mermaid
mindmap
  root((Super Uno Pluribus))
    Substrate
      Ruliad
      Ein Sof
      Brahman / Dao
      Symboliad
      Emes
      Block Universe
      Eternalism
    Observer
      Observer Theory
      Finite Mind
      Computational Boundedness
      Equivalencing
      Coarse-graining
      Umwelt
      Qualia
      Single Thread of Experience
      Subjective vs Objective Truth
    Time and Causality
      Time-Symmetry of Physics
      Second Law / Entropy
      Laplaces Demon / Superman
      Variational vs Causal
      Fermats Principle
      Least Action
      Heraclitus vs Parmenides
      Kairos Chronos Aeon
      Free Will
      Determinism
    Self
      The Ego
      Individualism
      AT Field
      Persistence
      Soul / Identity
      Rulial Location
      Ego Dissolution
    Hive Mind
      Joining
      Shared Awareness
      Superorganism
      Collective Mind
      Distributed Cognition
      The Borg
      Sensates
      Instrumentality
    Convergence vs Divergence
      Apotheosis
      Theosis / Exaltation
      Gods in Embryo
      Emergent Unity
      Imposed Unity
      Babel Pattern
      Becoming Ruliad vs Upgraded Observer
      Vishvarupa
      Perennial Philosophy
    Communication
      Memetics
      Rulial Particles
      Adamic Language
      Performative Language
      Semagrams
      Mandala
      Shared Context
      E Unibus Pluram
    Conflict
      Conflict as Miscalculation
      Forced vs Chosen Unity
      Communism vs Communalism
      Babel
      Cooperation from Incentives
    Telos
      Teleology
      Universal Telos
      Information Integration
      Computational Ethics
      Virtue and Sin
      Variational Lens on Life
    Emergence
      Holos
      Noosphere
      Gaia
      Technium
      World Brain
      Singularity
      Ants Bees Termites Reefs
      Kardashev Scale
    Religion
      Let There Be Light
      Tzimtzum
      Tower of Babel
      Atonement
      All Things Denote a God
      Daniels Intuitive Aptitude
      Moses 1
    AI and Homogeneity
      Artificial Hivemind Paper
      Illusion of Choice
      Time is a River / Weaver
      Sanding Down Edges
      Reward Model Collapse
      Moltbook
```

---

## 2. The Central Tension

The clusters all hang off one organizing dialectic: **two paths that look like "becoming one"** but are inverses of each other. This is the spine of the essay.

```mermaid
flowchart TB
    THESIS["Super Uno Pluribus<br/><i>becoming one without ceasing to be many</i>"]

    THESIS --> AVERSION["Why we recoil from Hive Mind"]
    AVERSION --> EGO[Primacy of Individual Ego]
    AVERSION --> CONFLICT[Virtue of Conflict<br/><i>Ender's Game miscalculation</i>]

    THESIS --> EMBED["Observer Embedding<br/><i>Wolfram / Senchal</i>"]
    EMBED --> FINITE[Finite Mind<br/>Computational Boundedness]
    EMBED --> EQUIV[Equivalencing<br/>Coarse-graining]
    EMBED --> RULIAL[Rulial Location<br/>each mind samples differently]

    THESIS --> SPLIT{"Two paths to 'becoming one'"}

    SPLIT --> EMERGENT["EMERGENT UNITY<br/><i>Apotheosis</i>"]
    EMERGENT --> EGG[The Egg<br/>all lives are you]
    EMERGENT --> ASIMOV[The Last Question<br/>merge becomes God]
    EMERGENT --> EXALT[Theosis / Exaltation<br/>Gods in Embryo]
    EMERGENT --> UPGRADE[Upgraded Observer B<br/>more capacity not less self]
    EMERGENT --> EXPAND[Span more rulial distance<br/>honor difference not flatten it]

    SPLIT --> IMPOSED["IMPOSED UNITY<br/><i>Babel</i>"]
    IMPOSED --> PLURIB[Pluribus Joining<br/>nobody got asked]
    IMPOSED --> ANTHEM[Anthem<br/>collectivism by decree]
    IMPOSED --> COMMU[Communism<br/>forced collectivism]
    IMPOSED --> HIVEMIND[Artificial Hivemind<br/>river or weaver]
    IMPOSED --> CONTRACT[Contracted Observer A<br/>delete rulial distance<br/>flatten the parser]

    EMERGENT -.-> SAME{"Both look like<br/>'becoming one'"}
    IMPOSED -.-> SAME
    SAME --> QUESTION["The question:<br/><b>Which kind are we building?</b><br/><b>Do we get a vote?</b>"]

    classDef thesis fill:#1f2937,color:#fff,stroke:#fff,stroke-width:2px
    classDef good fill:#064e3b,color:#fff,stroke:#10b981
    classDef bad fill:#7f1d1d,color:#fff,stroke:#ef4444
    classDef neutral fill:#1e3a8a,color:#fff,stroke:#3b82f6

    class THESIS,QUESTION thesis
    class EMERGENT,EGG,ASIMOV,EXALT,UPGRADE,EXPAND good
    class IMPOSED,PLURIB,ANTHEM,COMMU,HIVEMIND,CONTRACT bad
    class SPLIT,SAME,EMBED,FINITE,EQUIV,RULIAL,AVERSION,EGO,CONFLICT neutral
```

---

## 3. Sources → Concepts

Which works speak to which clusters. Use this when you need a citation for a given idea, or when you want to know which works are pulling double duty.

```mermaid
flowchart LR
    subgraph SF[Science Fiction]
        Pluribus
        LastQ[The Last Question]
        Answer
        Egg[The Egg]
        Arrival[Arrival / Stories of Your Life]
        Anthem
        Eva[Evangelion]
        Childhood[Childhood's End]
        Sense8
        Matrix[The Matrix]
        Heroes
        Chuck
        Hitchhiker
        Borg[Star Trek / Borg]
        Interstellar
        Prisoner[The Prisoner]
        ChildrenRuin[Children of Ruin]
        Thor
        RickMorty[Rick and Morty / Unity]
        EndersGame[Ender's Game]
        Novel2034[2034]
    end

    subgraph PH[Physics / Philosophy]
        ObserverTh[Observer Theory - Wolfram]
        RuliadEss[The Ruliad - Wolfram]
        Senchal[God Conjecture - Senchal]
        Symboliad
        Laplace[Laplace / Reichenbach]
        Bat[Nagel - What Is It Like to Be a Bat]
        Umwelt[Yong - An Immense World]
        Hawkins[Power vs Force - Hawkins]
        Matthews[Transparent Minds - Matthews]
        DFW[E Unibus Pluram - DFW]
        ArtHive[Artificial Hivemind paper]
    end

    subgraph REL[Religion / Theology]
        LDS[LDS - Gods in Embryo / Exaltation]
        Kabbalah[Ein Sof / Tzimtzum]
        Babel[Tower of Babel]
        Vish[Bhagavad Gita - Vishvarupa]
        Perennial[Perennial Philosophy]
        Adamic[Adamic Language]
        Moses1[Moses 1]
        Daniel[Daniel - Intuitive Aptitude]
    end

    subgraph TECH[Technology / Emergence]
        Kelly[Kevin Kelly - Technium / Holos]
        Teilhard[Teilhard - Noosphere]
        Lovelock[Lovelock - Gaia]
        Wells[HG Wells - World Brain]
        Kurzweil[Kurzweil - Singularity]
        Moltbook
    end

    subgraph C[Clusters]
        Substrate
        Observer
        Time[Time and Causality]
        Self
        Hive[Hive Mind]
        Converge[Convergence vs Divergence]
        Comm[Communication]
        Conflict
        Telos
        Emerge[Emergence]
        Religion
        AIHomog[AI Homogeneity]
    end

    Pluribus --> Hive
    Pluribus --> Converge
    Pluribus --> Self
    LastQ --> Converge
    LastQ --> Telos
    LastQ --> Time
    Answer --> Converge
    Egg --> Converge
    Egg --> Self
    Egg --> Religion
    Arrival --> Time
    Arrival --> Comm
    Arrival --> Telos
    Anthem --> Self
    Anthem --> Conflict
    Eva --> Self
    Eva --> Hive
    Childhood --> Converge
    Childhood --> Emerge
    Sense8 --> Hive
    Sense8 --> Comm
    Matrix --> Hive
    Heroes --> Observer
    Chuck --> Comm
    Hitchhiker --> Telos
    Borg --> Hive
    Interstellar --> Time
    Prisoner --> Self
    ChildrenRuin --> Hive
    Thor --> Observer
    RickMorty --> Hive
    EndersGame --> Conflict
    Novel2034 --> Conflict

    ObserverTh --> Observer
    ObserverTh --> Substrate
    RuliadEss --> Substrate
    RuliadEss --> Observer
    RuliadEss --> Converge
    Senchal --> Religion
    Senchal --> Telos
    Senchal --> Converge
    Senchal --> Substrate
    Symboliad --> Substrate
    Symboliad --> Comm
    Laplace --> Time
    Bat --> Observer
    Umwelt --> Observer
    Hawkins --> Observer
    Matthews --> Hive
    Matthews --> Comm
    DFW --> Comm
    DFW --> AIHomog
    ArtHive --> AIHomog
    ArtHive --> Comm

    LDS --> Religion
    LDS --> Converge
    Kabbalah --> Substrate
    Kabbalah --> Religion
    Babel --> Conflict
    Babel --> Converge
    Vish --> Religion
    Vish --> Substrate
    Perennial --> Religion
    Adamic --> Comm
    Moses1 --> Religion
    Daniel --> Observer

    Kelly --> Emerge
    Kelly --> Telos
    Teilhard --> Emerge
    Lovelock --> Emerge
    Wells --> Emerge
    Kurzweil --> Emerge
    Kurzweil --> Self
    Moltbook --> AIHomog
    Moltbook --> Conflict

    classDef cluster fill:#1e3a8a,color:#fff,stroke:#3b82f6,stroke-width:2px
    class Substrate,Observer,Time,Self,Hive,Converge,Comm,Conflict,Telos,Emerge,Religion,AIHomog cluster
```

---

## How to use these diagrams

- **Cluster diagram** is the home view — twelve themes, each a candidate section in the essay.
- **Tension diagram** is the spine — when in doubt about whether something belongs in the essay, ask: does it sharpen the "two paths" question?
- **Sources diagram** is the citation map — when you're writing a paragraph about, say, the Observer cluster, this tells you which works to draw from.
- **Glossary**: see [notes.md](notes.md) for definitions, quotes, and notes per concept.
