# Portfolio redesign: "Twilight"

Status: built and waiting for review (all tickets except T-22). See "Delivery" at the bottom for the PRs and the merge order.

## Goal

Make the site feel modern, tactile and personal on desktop and mobile, so visitors go past the landing page to Projects, Experience, Certifications and Contact. Visual source of truth: the "Portfolio Redesign Concepts" design canvas, Look D (Twilight): a deep navy hero band over a light cool-white content area, cobalt and sky accents, a marigold highlight, a characterful display font, hard offset shadows on cards, a real photo, and handwritten touches used sparingly.

## The parity contract (nothing here may change)

A redesign changes how things look and are laid out. It does not change what exists or what it does. Every ticket must keep all of the following working, and T-20 checks them automatically.

**Routes (URLs stay exactly as they are):** `/portfolio` (home), `/projects`, `/certifications`, `/history`, `/contact-me`, `/index` redirects to `/portfolio`, unknown paths redirect to `/portfolio`. Navigation labels may be reworded (decision D-1), the URLs may not.

**External links and files (same targets, same `target` and `rel`):**
- LinkedIn, GitHub, Kaggle, Credly and the mailto link.
- The résumé PDF download (`Arnav_Kaushal_2025_ML.pdf`).
- Every project link: pulled AI & RAG projects (`src/data/pulledProjects.json`) and the curated tiles in `ProjectsPage.js`.
- Every certification and badge link (self-hosted badge images, Udemy image, Credly links).

**Data shown on the site (all of it stays, wherever it is displayed):**
- Profile: residence, city, age (computed from today's date), languages with their proficiency rings.
- All 11 skills with their labels and percentages, and the 7 "knowledge" lines.
- Work history, education and certifications (current wording and dates).
- All 9 service descriptions on the home page, the home counters (years, projects, tools, widgets), and the rotating titles in `src/data/titles.js`.
- The typing-effect lines in the home hero.

**Behaviour:**
- Projects: tab filtering (All, AI & RAG, ML & Data Science, Web & Mobile), section order AI, ML, Web, tabs hidden when empty, tiles never left invisible (observer plus failsafe), pulled projects merged in.
- Rotating title: both placements stay in step.
- Contact form: required-field and email validation with inline messages, Send disabled while errors show.
- Contact grid, back-to-top button, scroll position behaviour, Escape and outside tap closing any open panel (while panels exist).
- Theme system: `DEFAULT_THEME` in `public/index.html`, `?theme=` preview and `?theme=reset`, one-line rollback to the previous theme.
- Analytics: page views per route through `PageTracker`, and any events added later (T-20 compares event names).
- Build pipeline: `npm run build` runs `scripts/pull-projects.js`, committed data keeps the site buildable offline.
- Accessibility already present: alt text, focus handling, reduced-motion respect.

## Decisions needed from Arnav

| id | question | default if no answer |
| --- | --- | --- |
| D-1 | Rename nav labels to Work and Experience (URLs unchanged)? Today: Portfolio, History | Rename, as in the design |
| D-2 | A sharper, larger photo for the hero polaroid (the current avatar is about 109 px wide) | Use the largest existing image, flagged in T-06 |
| D-3 | Text of the sticky "NOW" note, and whether to keep it | "building LLM Gateway, a router for AI calls" |
| D-4 | Keep the handwritten accents (Caveat font), or use them only in the hero and footer | Hero and footer only |
| D-5 | Dark mode: keep Ivory, Dark and Twilight selectable, or retire the old two after cutover | Keep old themes for one release as rollback, then retire (T-21) |

## Phases and tickets

One branch and one pull request per ticket, cut from an up-to-date `master`. Size: S under half a day, M about a day, L two days or more.

### Phase 1: foundation

**T-01 Twilight theme tokens and fonts** (both, S)
Add a third theme, `twilight`, beside `ivory` and `dark` in `_art-theme.scss`: navy `#101A4A`, cobalt `#2F4BF0`, light base `#F5F7FC`, sky `#8AD0FF`, marigold `#FFC93C`, muted text colours, card radius 14px, 2px navy borders, hard offset shadow. Load Bricolage Grotesque, DM Sans, JetBrains Mono and Caveat from Google Fonts with fallbacks and `display=swap`. Add `twilight` to the theme switch (`BAR_COLORS`, `?theme=twilight`), without making it the default yet.
Accept: `?theme=twilight` re-colours the existing layout with no overflow or unreadable text; default theme unchanged; build passes with CI=true; fonts fall back cleanly if blocked.

**T-02 Desktop shell: top navigation** (desktop, L, depends on T-01)
Replace the left profile sidebar and right menu rail with a sticky top bar: initials mark, name, five links with active underline, résumé button. Content becomes one centred column (max 1200px). Keep the shell behind the theme switch until T-21 so rollback stays one line.
Accept: all five routes reachable and highlight correctly; keyboard order and focus ring visible; a skip-to-content link; résumé link downloads the same PDF; no horizontal scroll from 1024 to 2560 px.

**T-03 Mobile shell: header and bottom tab bar** (mobile, L, depends on T-01)
Compact header (mark, name, résumé) and a bottom tab bar (Home, Work, Experience, Contact) with 44 px or larger targets, safe-area padding and active state. Certifications reachable from Experience and the home page. Drawers removed on this theme.
Accept: every route reachable by thumb; tab bar never covers content (padding-bottom) or the browser's bottom bar; works at 320 to 430 px; page scrolls to the real bottom.

**T-04 Move profile data into the page** (both, M, depends on T-02, T-03)
The left sidebar's data moves into a new "About" section on the home page and the footer: residence, city, age, languages with rings, all 11 skills with their percentages (as slim bars or chips with the value shown), the 7 knowledge lines, social links, résumé link. Nothing is dropped.
Accept: a before/after text diff (T-20) shows every skill label, percentage and knowledge line still present; the age is still computed live; the odd "80% bar with 90% label" entry is kept as is (flag it in the PR, do not silently fix).

**T-05 Footer, back-to-top and analytics parity** (both, S)
Navy footer with the existing year, back-to-top, and the handwritten sign-off. `PageTracker` untouched.
Accept: `page_view` still fires once per route change; back-to-top scrolls the right container.

### Phase 2: home page

**T-06 Hero** (both, L, depends on T-02, T-03, D-2, D-3)
Navy grain band; mono location line; headline "Hi, I'm Arnav. I take ideas from concept to deployment." with the hand-drawn highlighter under the last word; "Right now, call me a" plus the rotating title (existing `RotatingTitle`, same timing and sync); handwritten note; two buttons (See my work to `/projects`, Say hello to `/contact-me`); stats; photo polaroid and NOW note on desktop, smaller on mobile. Keep the typing-effect lines (`RotatingText`) somewhere visible.
Accept: first screen on a 390x844 phone shows headline, title and both buttons; title rotates and stays in sync with any other placement; photo has meaningful alt text; reduced motion stops the rotation animation (text still changes).

**T-07 Featured work (AI & RAG)** (both, M, depends on T-06)
Three tilted cards overlapping the hero band, fed by the pulled AI & RAG projects (not hard-coded), each with its image, description, tags and live-demo link.
Accept: cards come from `pulledProjects.json`; fewer or more than three projects handled; links, `target` and `rel` identical to Projects page; tilt disabled under reduced motion.

**T-08 More work rows** (both, M, depends on T-07)
Text rows for ML and Web & Mobile projects with dashed dividers and tags, a "See all projects" link.
Accept: titles, descriptions and links come from the same data as the Projects page (one source, no copy); rows stack cleanly on mobile.

**T-09 What I do** (both, S)
Four headline items in the design, plus all nine existing service descriptions kept (grouped under them, not deleted).
Accept: all nine service texts still on the page.

**T-10 Credentials** (both, M)
Restyle the badge carousel; keep the self-hosted images and every link; add the "all certifications" link.
Accept: all 13 badges present with their links; carousel works by touch, mouse and keyboard.

**T-11 Contact call-to-action and grid** (both, S)
Navy contact band; the existing five-tile contact grid keeps its links and odd-tile centring.
Accept: Kaggle, GitHub, Credly, LinkedIn and Email tiles unchanged in target.

### Phase 3: inner pages

**T-12 Projects page** (both, L, depends on T-07, T-08)
Navy header with the pill tabs, overlapping featured cards, then ML and Web sections as rows or compact cards. Keep the tab behaviour from the parity contract and the sidebar-style scrollbar.
Accept: all four tabs filter correctly; headings per tab unchanged; every project still reachable; deep link `/projects` unchanged.

**T-13 Experience (History) page** (both, M)
Timeline restyled in the new look; all five jobs and two degrees with their wording, dates and locations.
Accept: text diff shows no lost entries; dates and locations identical.

**T-14 Certifications page** (both, M)
Grouped cards in the new look.
Accept: every certification and its link present.

**T-15 Contact page** (both, M)
Restyled form and links; validation unchanged.
Accept: empty and invalid email show messages; Send disabled while errors show; mailto and profile links unchanged.

### Phase 4: quality and cutover

**T-16 Motion** (both, S): fade-ups, card hover lift, optional view transitions between pages; everything off under `prefers-reduced-motion`.
**T-17 Theme behaviour** (both, S): `?theme=` keeps working; decide the system-preference default (D-5).
**T-18 Accessibility pass** (both, M): WCAG 2.2 AA contrast, focus visibility, target size 24 px minimum (44 px on touch), landmarks, heading order.
**T-19 Performance** (both, M): LCP under 2.5 s and INP under 200 ms on a mid-range phone; font preloading; hero image sizing.
**T-20 Parity and regression checks** (both, M): a script that snapshots every link, text block and image on all five routes before and after (committed baseline from `master`), plus screenshots at 390, 768 and 1440 px with analytics blocked, and a check of the `page_view` event.
**T-21 Cutover and cleanup** (both, S): flip `DEFAULT_THEME` to `twilight` after sign-off; later remove the old sidebar and menu-rail code and unused SCSS once rollback is no longer needed.
**T-22 Photo upgrade** (both, S, blocked on D-2): replace the polaroid image with the sharper photo.

## Suggested order

T-01, T-02 and T-03 together unlock everything. Then T-04, T-05, T-06, T-07, then the rest of Phase 2, then Phase 3, then Phase 4. Run T-20 early and re-run on every PR.

## Delivery

Every ticket was built as a stacked pull request: each PR is based on the one before it, so merging them in order keeps each diff small. PR #29 (a certifications section under Education on the History page) was closed on purpose and is not part of this work: the History page has no certifications section, classic or Twilight.

| order | PR | tickets | what it adds |
| --- | --- | --- | --- |
| 1 | #33 | tickets, T-01 | This document and the Twilight theme (colors, fonts) |
| 2 | #34 | T-02, T-05 | Twilight shell: top navigation, footer, back-to-top |
| 3 | #35 | T-03 | Mobile shell: compact header and bottom tab bar |
| 4 | #36 | T-04 | About section (all sidebar data) |
| 5 | #37 | T-06 | Home hero |
| 6 | #38 | T-07, T-08 | Featured work and more work, shared project data |
| 7 | #39 | T-09 | What I do (all nine services) |
| 8 | #40 | T-10 | Credentials carousel, shared badge data |
| 9 | #41 | T-11 | Contact call-to-action |
| 10 | #42 | T-12 | Projects page |
| 11 | #43 | T-13 | Experience (History) page |
| 12 | #44 | T-14 | Certifications page |
| 13 | #45 | T-15 | Contact page, shared form validation |
| 14 | #46 | T-16 | Motion |
| 15 | #47 | T-18 | Accessibility pass |
| 16 | #48 | T-19 | Performance (lazy badges) |
| 17 | #49 | T-20 | `npm run parity` |
| 18 | this PR | T-21 (and T-17) | **Switches the default theme to Twilight** |

Merge 1 to 17 first: they change nothing for visitors, because Twilight is only reachable with `?theme=twilight` until the last PR. Test the whole stack at `?theme=twilight`, then merge this PR to go live.

T-17 (theme behaviour) needed no code: `?theme=ivory|dark|twilight|reset` keeps working, and the rollback is one line (see `public/index.html`). T-22 (sharper photo) is blocked on decision D-2.

### Follow-ups that need your call
- Retire the classic layout (the old sidebar, menu rail and their SCSS) and the unused Montserrat, Poppins and Courier Prime font links after a release or two without needing rollback (D-5).
- Decide D-1 to D-4 (see the table above); the defaults are what is built.

