# PROJECT.md

Product, design, content, and engineering principles for Joshua Sultan's personal
portfolio website. This document is the source of truth for *what* the site should
be and *why*. It should be read before making product, content, or design decisions.
It does not describe implementation status and should not need frequent updates.

---

## 1. Identity & Positioning

**Public name:** Joshua Sultan (never the full legal name on the public site).

**Primary professional identity:** Senior Mobile Engineer.

**Positioning statement:** Senior Mobile Engineer building beyond mobile.

- 14+ years of professional mobile engineering experience. Mobile is current,
  active work and the strongest area of expertise — not a past chapter.
- Product engineering and applied AI are areas of active exploration and growth,
  pursued through personal projects. Do not present these as an established
  second specialty or as a completed transition away from mobile.

## 2. Portfolio Philosophy

> Sell the work. Explain the experience. Let the evidence speak. Don't inflate
> the person.

- Sell experience without boasting or self-glorification.
- Communicate value through specific evidence, not adjectives ("exceptional,"
  "10x," "expert").
- Confident but grounded tone throughout.
- Show what was built or contributed to, rather than asserting quality.
- Be honest about ownership and contribution — personal projects vs.
  professional/client work are never blurred together.

## 3. Personal Projects

These are Joshua's own projects and can be shown as such.

### Ship-or-Skip
AI-assisted product decision engine for product teams. Evaluates feature ideas,
product changes, and strategic concepts, producing a structured Ship / Refine /
Skip decision. Already built and publicly deployed.

- Live: https://shiporskipbuild.vercel.app/
- Repo: https://github.com/joshuaearlsultan/ship-or-skip

### Pulse
A discipleship tracker with analytics, exploring how technology can help church
leaders understand participation, discipleship progress, engagement, and
follow-up needs.

- Do not describe current status or future roadmap unless explicitly instructed —
  this project may evolve significantly.

### Compass
Centered on leadership and organizational continuity — direction, continuity,
and care. A working V1 exists; development is currently paused while focus is
on Pulse.

- Do not describe as "merely a prototype" — a working V1 exists.
- Never expose private or sensitive church information: no private data, names,
  internal organizational details, or confidential specifics.

**Presentation constraint:** Project status labels (e.g. "In Development," "On
Hold," "Built & Shipped") are not required and should generally be avoided —
they go stale and become a maintenance burden. Use timeless descriptions
instead. Pulse and Compass don't have public landing pages yet; they're
presented via description and screenshots where appropriate, structured so
that linking to a future landing page later requires no redesign.

## 4. Professional Experience (Client/Company Work)

Client and employer work is professional experience, not personal project
work — never claim ownership or present it as a personal project.

- Do not name client products.
- Do not include confidential client information: no private screenshots,
  internal architecture, source code, customer data, internal metrics,
  roadmaps, or other proprietary information.

Communicate general categories of professional experience instead:

- Mobile application development
- Native iOS and Android development
- React Native and cross-platform development
- Mobile SDK development
- Authentication and security integrations (FIDO2, Passkeys, UMFA)
- CI/CD
- Application modernization and legacy codebases
- Reliability and long-term product maintenance
- Collaboration with product, design, backend, and platform teams

## 5. Writing — The Simple Engineer

Joshua writes at **The Simple Engineer**, covering software engineering,
simplicity, leadership, product thinking, and lessons learned from building
software.

- Feature a small number of representative articles; link out to the
  publication for more.
- Do not imply a fixed or weekly publishing schedule — publishing is not
  regular.

## 6. Creative Direction

**Concept:** Engineer's Workshop.

**Personality:** Professional + personal.

**Feel:** Thoughtful, technical, creative, calm, minimal, grounded, human.

**Avoid:**
- Neon developer aesthetics
- Excessive 3D
- Generic developer-portfolio layouts
- "10x engineer" language
- Excessive animation
- Flashy self-promotion
- Technology-logo walls
- Skill ratings/bars

Creativity should come from thoughtful visual design and interaction, not
decoration.

**Theme:** Adaptive light/dark mode. Light is the default.

## 7. Homepage

**Hero:**
> I build software, then try to make it simpler.

**Supporting identity:**
> Senior Mobile Engineer building beyond mobile.

The hero should communicate how Joshua thinks, what he does professionally,
and where he's growing — AI is not the primary identity.

**Sections (in order), kept concise overall:**
1. Hero
2. Selected Work
3. Engineering
4. The Simple Engineer
5. About / Connect

**Explicitly not included:** skills page, resume page, services page,
testimonials, current-status dashboard, contact form, "currently learning"
dashboard.

## 8. Selected Work

Shows: Ship-or-Skip, Pulse, Compass.

- No required status labels — use timeless descriptions (see §3).
- Ship-or-Skip can link to its live app and GitHub repo now.
- Pulse and Compass are presented via description/screenshots today, and
  should be structured so that adding a link to a future landing page doesn't
  require a redesign.

## 9. Engineering Section

**Core message:** Built on mobile. Growing beyond it.

Mobile should be clearly established as the professional foundation.
Potential categories (no skill ratings):

- **Mobile** — iOS, Android, React Native, Flutter
- **SDKs & Security** — Mobile SDKs, Authentication, FIDO2, Passkeys, UMFA
- **Engineering** — Architecture, CI/CD, Reliability, Modernization
- **Product** — Problem solving, UX, product thinking, end-to-end development

## 10. About

Concise and human. Communicates:

- 14+ years of engineering experience
- Deep mobile background
- Current mobile role/focus
- Exploration of product engineering and applied AI
- The Simple Engineer

Possible closing sentiment: *"Still building. Still learning."*

Not boastful.

## 11. Maintenance Philosophy

The site should stay useful and accurate with no updates for months at a time.

**Avoid content that requires upkeep:**
- Project status labels
- Current-activity dashboards
- "Currently working on..." sections
- Dynamic metrics
- Publication-schedule claims
- Any time-sensitive/temporary claims

Prefer timeless descriptions everywhere.

## 12. Technical Principles

- Use the simplest architecture that supports the site.
- Stack: Next.js (App Router), TypeScript, Tailwind CSS, deployed on Vercel.
- No backend, database, authentication, or CMS for V1.
- No unnecessary API routes.
- Prefer a static, content-driven architecture.
- Don't add dependencies without clear value.
- Priorities: performance, accessibility, responsive design, maintainability,
  SEO, simplicity.

### Working in this repository

- This project runs Next.js 16, which has breaking changes and conventions
  that may differ from prior training data (see `AGENTS.md`). Before writing
  App Router, routing, metadata, or data-fetching code, check
  `node_modules/next/dist/docs/` for current guidance rather than relying on
  memory. `src/app/layout.tsx` already uses the Next 16 typed-route-params
  convention (`LayoutProps<"/">`) as an example of this.
- No additional dependencies should be installed without clear value.
