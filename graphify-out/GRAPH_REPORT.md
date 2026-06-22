# Graph Report - .  (2026-06-22)

## Corpus Check
- 21 files · ~0 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 162 nodes · 182 edges · 21 communities (9 shown, 12 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `whatsappLink()` - 9 edges
3. `tailwind` - 6 edges
4. `aliases` - 6 edges
5. `scripts` - 5 edges
6. `Reveal()` - 5 edges
7. `site.ts Editable Config` - 4 edges
8. `site` - 4 edges
9. `Button()` - 3 edges
10. `cn()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Site Sections (Navbar, Hero, Services, Gallery, About, Testimonials, Footer)` --references--> `Hero Portrait - Soft Glam Beauty Editorial`  [INFERRED]
  README.md → public/hero/hero-portrait.png
- `Image-Swap Workflow` --references--> `Hero Portrait - Soft Glam Beauty Editorial`  [EXTRACTED]
  README.md → public/hero/hero-portrait.png
- `CLAUDE.md - Claude Code Config` --references--> `AGENTS.md - Next.js Agent Rules`  [EXTRACTED]
  CLAUDE.md → AGENTS.md
- `File Icon SVG` --semantically_similar_to--> `Window/Browser Icon SVG`  [INFERRED] [semantically similar]
  public/file.svg → public/window.svg
- `Vercel Logo SVG (Triangle)` --semantically_similar_to--> `Next.js Wordmark SVG`  [INFERRED] [semantically similar]
  public/vercel.svg → public/next.svg

## Import Cycles
- None detected.

## Communities (21 total, 12 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.09
Nodes (23): cormorant, geistMono, metadata, outfit, gallery, GalleryImage, galleryTabs, nav (+15 more)

### Community 1 - "Community 1"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 2 - "Community 2"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (19): dependencies, @21st-dev/cli, @base-ui/react, class-variance-authority, clsx, gsap, lenis, lucide-react (+11 more)

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (17): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+9 more)

### Community 5 - "Community 5"
Cohesion: 0.28
Nodes (9): Beauty 3 - Vogue-Style Glam Makeup Cover, Hero Portrait - Soft Glam Beauty Editorial, Facebook Integration, Image-Swap Workflow, PinkFox Brentwood Website, site.ts Editable Config, Site Sections (Navbar, Hero, Services, Gallery, About, Testimonials, Footer), Tech Stack (Next.js, Tailwind v4, GSAP, Lenis, Splitting.js, Swiper) (+1 more)

### Community 7 - "Community 7"
Cohesion: 0.70
Nodes (3): cn(), Button(), buttonVariants

### Community 8 - "Community 8"
Cohesion: 0.67
Nodes (3): Next.js Breaking Changes Warning, AGENTS.md - Next.js Agent Rules, CLAUDE.md - Claude Code Config

## Knowledge Gaps
- **98 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+93 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 3` to `Community 4`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _99 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.09358974358974359 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._