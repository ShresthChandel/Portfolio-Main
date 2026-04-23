# Next.js Portfolio Implementation Plan for Shresth Singh Chandel

This plan details the end-to-end implementation of a premium, modern, and highly personalized portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. 

## User Review Required

> [!IMPORTANT]
> **Spline Integration**: The plan involves using `@splinetool/react-spline`. Do you have a specific Spline scene URL ready to use, or should I create a placeholder/default abstract 3D scene?
> 
> **Habit Tracker API**: You mentioned setting `HABIT_API_URL` and `HABIT_API_KEY`. I will set up the proxy endpoints, but we'll need to make sure your deployed habit tracker endpoints match the expected structure (`/today` and `/streak`) and we'll configure these environment variables during deployment or in `.env.local` for testing.
> 
> **Images/PDFs**: You will need to provide `resume.pdf` for the download button, and any specific images or logos for the projects and experiences to go in the `public/` directory.

## Open Questions

1. Do you want to use `lucide-react` for standard UI icons (GitHub, LinkedIn, Email, etc.), or do you prefer another icon library?
2. Do you have a preference for the form submission backend? The prompt mentions Formspree, which is a great choice. I will set it up expecting a `NEXT_PUBLIC_FORMSPREE_ID` environment variable.

## Proposed Changes

### Setup & Dependencies
- Scaffold Next.js 14 App Router project (TypeScript, Tailwind).
- Install `framer-motion`, `@splinetool/react-spline`, `lucide-react`, `clsx`, `tailwind-merge`.

---

### Design System & Global Layout

#### [NEW] `tailwind.config.ts`
- Define custom color palette (deep blacks `#0a0a0f`, electric cyan `#00bcd4`, off-white `#e8e8e0`, muted `#6b6b6b`).
- Define typography tokens for `Syne` and `JetBrains Mono`.

#### [MODIFY] `src/app/globals.css`
- Apply near-black background and global text styles.
- Add subtle grain/noise texture overlay via CSS base64 or SVG pattern.
- Customize scrollbar for a sleek look.

#### [NEW] `src/app/layout.tsx`
- Implement custom magnetic cursor (hidden on mobile).
- Add top cyan progress bar indicating scroll depth.
- Include sticky, frosted-glass Navbar.
- Include minimal Footer.
- Apply Next.js fonts (`Syne` and `JetBrains Mono`/`DM Sans`).

---

### Data Layer

#### [NEW] `src/data/experience.ts`
- Export an array of experience objects (Varnet Solutions, Catalysis'T).

#### [NEW] `src/data/projects.ts`
- Export categorized project objects (Enterprise RAG Chatbot, F.R.I.D.A.Y., InternMitra, etc.) with `featured` flags.

#### [NEW] `src/data/skills.ts`
- Export skills grouped by categories (Languages, Frontend, Backend, AI/ML, Tools, Cloud/DevOps).

#### [NEW] `src/data/achievements.ts`
- Export achievements (Eureka Case Study 1st Place).

#### [NEW] `src/data/currentBuild.ts`
- Export current focus/project name.

---

### UI Components

#### [NEW] `src/components/ui/CustomCursor.tsx`
- Magnetic cursor using Framer Motion.

#### [NEW] `src/components/ui/GlowBorder.tsx`
- Animated cyan border effect for the featured project card.

#### [NEW] `src/components/ui/AnimatedText.tsx`
- For staggered typing effect and letter-by-letter reveal.

---

### Page Sections

#### [NEW] `src/components/sections/HeroSection.tsx`
- Spline 3D background wrapper.
- Animated name reveal and typing effect for roles.
- CTA buttons (See Work, Download Resume).
- Live activity preview floating card (Desktop only).

#### [NEW] `src/components/sections/AboutSection.tsx`
- Bio and live "Currently Building" badge.
- Animated cascading tech stack grid.

#### [NEW] `src/components/sections/ExperienceSection.tsx`
- Vertical alternating timeline.

#### [NEW] `src/components/sections/ProjectsSection.tsx`
- Filter tabs and animated grid layout using Framer Motion `AnimatePresence`.

#### [NEW] `src/components/sections/ActivitySection.tsx`
- 52-week GitHub heatmap and Habit Tracker integration with SWR polling.

#### [NEW] `src/components/sections/SkillsSection.tsx`
- Tag cloud with hover lift and glow effects.

#### [NEW] `src/components/sections/AchievementsSection.tsx`
- Trophy-style cards with asymmetric layouts.

#### [NEW] `src/components/sections/ContactSection.tsx`
- Social links and Formspree contact form.

#### [MODIFY] `src/app/page.tsx`
- Assemble all sections with smooth scroll logic and viewport-triggered animations.

---

### API Integrations

#### [NEW] `src/app/api/github/route.ts`
- Fetch GitHub GraphQL API to generate 52-week contribution heatmap and streak data. Cached with ISR (1-hour).

#### [NEW] `src/app/api/habits/route.ts` & `src/app/api/habits/streak/route.ts`
- Secure proxy endpoints that fetch data from `HABIT_API_URL` using `HABIT_API_KEY`. Applies 5-minute `Cache-Control`.

## Verification Plan

### Automated Tests
- Run Next.js build locally (`npm run build`) to ensure there are no TypeScript or linting errors.
- Verify API proxy endpoints by mocking environment variables locally.

### Manual Verification
- Test viewport-triggered animations by scrolling through each section.
- Verify the Custom Cursor logic smoothly handles interactive element hovers.
- Verify mobile responsiveness (stacked layout on About/Experience sections, mobile navigation drawer).
- Test GitHub integration using my own or a provided GitHub token to ensure the heatmap renders.
- Verify Habit Tracker fallback state displays correctly when the external API is not configured or fails.
