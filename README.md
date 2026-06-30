# Yousef Shatnawi — Portfolio

Personal portfolio website for Yousef Shatnawi, Angular Front-End Developer. Built with Angular 21 using standalone components, signals, and a custom SCSS design system.

**Live:** [yousefshatnawi.dev](https://yousefshatnawi.dev)

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Angular 21 (standalone components) |
| Language | TypeScript |
| Styling | SCSS (custom design system) |
| State | Angular Signals |
| Animations | Angular Animations + IntersectionObserver |
| Icons | Bootstrap Icons 1.11 |
| Fonts | Inter · JetBrains Mono (Google Fonts) |

---

## Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── models/          # TypeScript interfaces (Project, Experience, StackGroup)
│   │   └── services/        # PortfolioService — single source of truth for all data
│   ├── shared/
│   │   └── directives/      # RevealDirective — scroll-triggered fade-in animations
│   ├── layout/
│   │   ├── header/          # Sticky navbar with smooth-scroll and mobile menu
│   │   └── footer/          # Copyright + social links
│   └── features/
│       ├── hero/            # Landing section with staggered Angular animations
│       ├── about/           # Bio, facts, philosophy
│       ├── projects/        # Featured work cards with alternating layout
│       ├── experience/      # Timeline of work history
│       ├── stack/           # Tech skills grouped by category
│       └── contact/         # Links to GitHub, LinkedIn, email, phone
└── styles/
    ├── _variables.scss      # Design tokens (colors, spacing, breakpoints)
    ├── _reset.scss          # Base CSS reset
    ├── _mixins.scss         # SCSS utility mixins
    └── _typography.scss     # Global type styles
```

---

## Architecture

- **All components** use `ChangeDetectionStrategy.OnPush` for optimal performance.
- **PortfolioService** is the single source of truth; all data lives in Angular signals and is injected into feature components via `inject()`.
- **RevealDirective** attaches an `IntersectionObserver` to any element, triggering a CSS opacity + translateY animation when the element enters the viewport. Respects `prefers-reduced-motion`.
- **HeroComponent** uses Angular's `@angular/animations` with a `stagger` query for the entry sequence on load.
- **No routing** — single-page layout with smooth-scroll navigation via `scrollIntoView`.

---

## Getting Started

**Prerequisites:** Node.js 18+ · Angular CLI 21

```bash
# Install dependencies
npm install

# Start dev server
ng serve
# → http://localhost:4200

# Production build
ng build
# → dist/portfolio/browser/
```

---

## Sections

| Section | ID | Description |
|---|---|---|
| Hero | `#hero` | Headline, CTA buttons, status, location |
| About | `#about` | Philosophy, background, quick facts |
| Projects | `#projects` | The Line, Hotels System, Guzlan Delivery |
| Experience | `#experience` | Timeline: Unlimited Innovation → Freelance → Ideal Innovation → Shahwan |
| Stack | `#stack` | Frontend · Architecture · Tooling · Concepts |
| Contact | `#contact` | GitHub · LinkedIn · Email · Phone |

---

## Key Design Decisions

- **Dark-only theme** — single color palette (`#09090B` base), no theme toggle.
- **No UI framework** — fully custom SCSS using BEM naming convention.
- **CV download** — served from `assets/cv/Yousef-Shatnawi-CV.pdf` via direct link.
- **NDA projects** — show a locked "Confidential" badge instead of GitHub/demo links.
- **Alternating project layout** — even projects show content-left / odd projects flip via `.project--reversed`.

---

## Contact

- **Email:** yousef.shatnawi@icloud.com
- **GitHub:** [github.com/yousefshatnawi](https://github.com/yousefshatnawi)
- **LinkedIn:** [linkedin.com/in/yousef-shatnawi-750b1a14b](https://www.linkedin.com/in/yousef-shatnawi-750b1a14b)
