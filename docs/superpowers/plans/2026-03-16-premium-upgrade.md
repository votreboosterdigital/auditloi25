# Premium UI Upgrade Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade auditloi25.ca from a functional dark mode to a "dark luxury SaaS" aesthetic (Linear/Vercel/Resend inspired) using Geist typography, gradient mesh effects, Framer Motion animations, and 10 Magic MCP–generated components.

**Architecture:** Foundation first (deps + tokens + fonts), then components in visual order top-to-bottom. Each component is generated via Magic MCP `/ui` command, then adapted to existing copy. No copy changes. No route changes.

**Tech Stack:** Next.js 16.1.6, TypeScript strict, Tailwind CSS v4, Framer Motion, lucide-react, Magic MCP (21st.dev), next/font/google (Geist + Inter)

**Spec:** `docs/superpowers/specs/2026-03-16-premium-upgrade-design.md`

---

## Chunk 1: Foundation — deps, fonts, tokens, sticky CTA

### Task 1: Install framer-motion

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install dependency**

```bash
cd c:/Users/Admin/Documents/dev/auditloi25
npm install framer-motion
```

Expected: framer-motion added to `dependencies` in package.json, no peer dep errors.

- [ ] **Step 2: Verify build still passes**

```bash
npm run build 2>&1 | tail -5
```

Expected: same route list as before, 0 errors.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: install framer-motion for premium UI animations"
```

---

### Task 2: Update fonts in layout.tsx

**Files:**
- Modify: `app/layout.tsx`

The current layout uses `Plus_Jakarta_Sans` from `next/font/google`. Replace with `Geist`, `Geist_Mono`, and `Inter`.

- [ ] **Step 1: Read current layout**

```bash
# Read app/layout.tsx to understand current font setup
```

- [ ] **Step 2: Replace font imports and apply variables**

Replace the font section at the top of `app/layout.tsx`:

```tsx
import { Geist, Geist_Mono, Inter } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
```

Apply all three variables to `<html>`:

```tsx
<html lang="fr" className={`${geist.variable} ${geistMono.variable} ${inter.variable}`}>
```

Remove: any reference to `plus_jakarta_sans` or `plusJakarta`.

- [ ] **Step 3: Verify build**

```bash
npm run build 2>&1 | tail -5
```

Expected: 0 errors. Font variables available in DOM.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: replace Plus Jakarta Sans with Geist + Inter via next/font/google"
```

---

### Task 3: Update globals.css — design tokens

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Read current globals.css**

```bash
# Read app/globals.css (currently ~5 lines)
```

- [ ] **Step 2: Replace with full token set**

```css
@import "tailwindcss";

@theme inline {
  /* Fonts */
  --font-sans: var(--font-inter);
  --font-display: var(--font-geist);
  --font-mono: var(--font-geist-mono);

  /* Colors */
  --color-base: #020817;
  --color-surface: #0d1526;
  --color-raised: #111827;
  --color-border: rgba(255,255,255,0.08);
  --color-primary: #38bdf8;
  --color-cta: #10b981;
  --color-muted: #64748b;
}

body {
  background-color: #020817;
  color: #f8fafc;
}
```

- [ ] **Step 3: Update body className in layout.tsx**

In `app/layout.tsx`, find the `<body>` tag and replace `bg-slate-950` with `bg-base` so the CSS token takes effect (the Tailwind utility class would otherwise override the CSS rule):

```tsx
<body className="bg-base text-slate-50">
```

- [ ] **Step 4: Verify build**

```bash
npm run build 2>&1 | tail -5
```

Expected: 0 errors.

- [ ] **Step 5: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "feat: add Tailwind v4 design tokens (colors, fonts)"
```

---

### Task 4: Update sticky-mobile-cta.tsx (manual, no MCP credit)

**Files:**
- Modify: `components/sticky-mobile-cta.tsx`

- [ ] **Step 1: Read current component**

```bash
# Read components/sticky-mobile-cta.tsx
```

- [ ] **Step 2: Update visual style**

The existing component uses `md:hidden` on the outer wrapper (hides on 768px+). Keep `md:hidden` — do NOT change to `sm:hidden`.

Update the outer container className to:

```tsx
className="fixed bottom-0 inset-x-0 z-50 bg-[#020817]/90 backdrop-blur-md border-t border-white/5 px-4 py-3 md:hidden"
```

The CTA inside is an `<a>` tag (not a `<button>`). Update its className to add glow:

```tsx
className="w-full inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-colors hover:bg-emerald-400"
```

- [ ] **Step 3: Verify build**

```bash
npm run build 2>&1 | tail -5
```

- [ ] **Step 4: Commit**

```bash
git add components/sticky-mobile-cta.tsx
git commit -m "feat: update sticky mobile CTA to dark luxury style"
```

---

## Chunk 2: Navigation & Hero (Credits 1–3)

### Task 5: Navbar — Magic MCP credit 1

**Files:**
- Modify: `components/navbar.tsx`

- [ ] **Step 1: Run Magic MCP command**

In Claude Code terminal, run:
```
/ui sticky navbar backdrop blur dark minimal logo cta button
```

Wait for the generated component output from 21st.dev.

- [ ] **Step 2: Read current navbar.tsx**

```bash
# Read components/navbar.tsx to understand existing copy and links
```

- [ ] **Step 3: Adapt generated component**

Preserve from existing:
- `"use client"` directive
- Logo: `<ShieldIcon>` + "auditloi25.ca"
- Links: `{ href: "/offre", label: "Voir l'offre" }` and `{ href: "/ressources", label: "Ressources" }`
- CTA: `<a href="#formulaire">Pré‑audit gratuit</a>`
- Mobile overlay with `aria-expanded`, `aria-controls="mobile-nav-overlay"`
- `aria-label="Ouvrir le menu"` / `"Fermer le menu"`

Apply from generated component:
- Backdrop blur style: `bg-[#020817]/80 backdrop-blur-md`
- Border: `border-b border-white/5`
- Link hover states with new tokens
- Any shimmer or animated underline effects

- [ ] **Step 4: Verify build + lint**

```bash
npm run build 2>&1 | tail -8
npm run lint 2>&1 | tail -5
```

Expected: 0 errors, navbar renders with blur effect.

- [ ] **Step 5: Commit**

```bash
git add components/navbar.tsx
git commit -m "feat: upgrade navbar to dark luxury style (MCP #1)"
```

---

### Task 6: Hero — Magic MCP credit 2

**Files:**
- Modify: `components/sections/hero.tsx`

- [ ] **Step 1: Run Magic MCP command**

```
/ui hero section gradient mesh background dark animated headline cta
```

- [ ] **Step 2: Read current hero.tsx**

```bash
# Read components/sections/hero.tsx — note all copy strings, deliverables array, badge text
```

- [ ] **Step 3: Adapt generated component**

Preserve from existing:
- `"use client"` directive
- All copy: heroSubtitle, deliverables array (4 items), badge texts, CTA labels
- Form anchor link: `href="#formulaire"`
- Secondary link: `href="/offre"`
- Card footer link: `href="/ressources/checklist-loi-25-site-web"`
- `id="hero-heading"` on H1

Apply from generated component:
- Gradient mesh background (two blobs: sky + emerald, `blur-3xl`, `absolute`)
- Animated headline entrance (Framer Motion `fadeUp`)
- CTA button with `shadow-[0_0_40px_rgba(16,185,129,0.3)]`
- Card with `ring-1 ring-white/5` border shimmer

Add Framer Motion wrapper:

```tsx
"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
```

Wrap sections in `<motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>`.

- [ ] **Step 4: Verify build + lint**

```bash
npm run build 2>&1 | tail -8
```

- [ ] **Step 5: Commit**

```bash
git add components/sections/hero.tsx
git commit -m "feat: upgrade hero section with gradient mesh + Framer Motion (MCP #2)"
```

---

### Task 7: Trust Strip — Magic MCP credit 3

**Files:**
- Modify: `components/sections/trust-strip.tsx`

- [ ] **Step 1: Run Magic MCP command**

```
/ui trust bar icons dark minimal animated
```

- [ ] **Step 2: Read current trust-strip.tsx**

```bash
# Read components/sections/trust-strip.tsx — note 4 items and icon choices
```

- [ ] **Step 3: Adapt generated component**

Preserve: 4 trust items (Shield/MapPin/CheckCircle/Zap + labels).
Add `"use client"` if the generated component uses animations.
Apply border: `border-y border-white/5 bg-[#0d1526]/50`.

- [ ] **Step 4: Verify build**

```bash
npm run build 2>&1 | tail -5
```

- [ ] **Step 5: Commit**

```bash
git add components/sections/trust-strip.tsx
git commit -m "feat: upgrade trust strip (MCP #3)"
```

---

## Chunk 3: Content Sections (Credits 4–6)

### Task 8: How It Works — Magic MCP credit 4

**Files:**
- Modify: `components/sections/how-it-works.tsx`

- [ ] **Step 1: Run Magic MCP command**

```
/ui steps process section numbered dark cards
```

- [ ] **Step 2: Read current how-it-works.tsx**

Note: this component contains the lead form (state + submit logic). The form must be preserved exactly.

- [ ] **Step 3: Adapt generated component**

Preserve from existing:
- `"use client"` directive
- All form state: `name`, `email`, `siteUrl`, `mainPages` (4 fields — no `status` field)
- `handleChange` function (controls all 4 inputs)
- `handleSubmit` function (fetch to `/api/lead`, `useRouter` + `router.push("/merci")`)
- `import { useRouter } from "next/navigation"` (required for redirect)
- `id="formulaire"` on the form container div
- All form labels, placeholders, and privacy notice text
- 3 steps: titles and descriptions

Apply from generated:
- Step cards visual upgrade
- Section header style
- Framer Motion `fadeUp` on section header + each step card (stagger 100ms)
- Apply `useReducedMotion()` guard (see Notes)

- [ ] **Step 4: Verify build + lint**

```bash
npm run build 2>&1 | tail -8
npm run lint 2>&1 | tail -5
```

- [ ] **Step 5: Commit**

```bash
git add components/sections/how-it-works.tsx
git commit -m "feat: upgrade how-it-works section (MCP #4)"
```

---

### Task 9: Features Grid — Magic MCP credit 5

**Files:**
- Modify: `components/sections/features.tsx`

- [ ] **Step 1: Run Magic MCP command**

```
/ui features grid icon cards hover glow dark luxury
```

- [ ] **Step 2: Read current features.tsx**

Note 6 feature cards with their icons, titles, and descriptions.

- [ ] **Step 3: Adapt generated component**

Preserve: 6 cards with lucide icons (Cookie, FileText, BookOpen, ToggleLeft, Activity, BarChart2), all copy.
Add `"use client"` if needed.
Apply hover glow: `hover:ring-sky-500/30 hover:shadow-[0_8px_32px_rgba(56,189,248,0.1)]`.
Add staggered Framer Motion entrance (100ms between cards).
Apply `useReducedMotion()` guard (see Notes).

- [ ] **Step 4: Verify build**

```bash
npm run build 2>&1 | tail -5
```

- [ ] **Step 5: Commit**

```bash
git add components/sections/features.tsx
git commit -m "feat: upgrade features grid with hover glow (MCP #5)"
```

---

### Task 10: Pricing — Magic MCP credit 6

**Files:**
- Modify: `components/sections/pricing.tsx`

- [ ] **Step 1: Run Magic MCP command**

```
/ui pricing table three tiers highlighted card dark theme
```

- [ ] **Step 2: Read current pricing.tsx**

Note: 3 plans (Pré-audit/Audit complet/Audit+Accompagnement), all feature bullets, CTA labels, highlighted center card with `scale-105 ring-sky-500/60`.

- [ ] **Step 3: Adapt generated component**

Preserve: all plan data, pricing, feature lists, CTA links (`href="#formulaire"`).
Maintain: center card highlighted state.
Apply: glow on highlighted card `shadow-[0_0_60px_rgba(56,189,248,0.1)]`.
Add `"use client"` + Framer Motion fadeUp on section.
Apply `useReducedMotion()` guard (see Notes).

- [ ] **Step 4: Verify build**

```bash
npm run build 2>&1 | tail -5
```

- [ ] **Step 5: Commit**

```bash
git add components/sections/pricing.tsx
git commit -m "feat: upgrade pricing section (MCP #6)"
```

---

## Chunk 4: Bottom Sections & Footer (Credits 7–10)

### Task 11: Why Act Now — Magic MCP credit 7

**Files:**
- Modify: `components/sections/why-act-now.tsx`

- [ ] **Step 1: Run Magic MCP command**

```
/ui stats cards dark metrics animated numbers
```

- [ ] **Step 2: Read current why-act-now.tsx**

Note: 3 stat cards (25M$, 81%, "Maintenant"), icons (ShieldAlert, Users, Scale), source citations.

- [ ] **Step 3: Adapt generated component**

Preserve: all stats, icons, sources, section header copy.
Add `"use client"` + Framer Motion on stat numbers.
Apply card style: `bg-surface ring-1 ring-white/5`.
Apply `useReducedMotion()` guard (see Notes).

- [ ] **Step 4: Verify build**

```bash
npm run build 2>&1 | tail -5
```

- [ ] **Step 5: Commit**

```bash
git add components/sections/why-act-now.tsx
git commit -m "feat: upgrade why-act-now stats section (MCP #7)"
```

---

### Task 12: FAQ — Magic MCP credit 8

**Files:**
- Modify: `components/sections/faq.tsx`

- [ ] **Step 1: Run Magic MCP command**

```
/ui faq accordion dark animated smooth
```

- [ ] **Step 2: Read current faq.tsx**

Note: **11 Q&A items** (not 5), `useState<number | null>(null)` for open state, `max-h-0 → max-h-[400px]` CSS transition.

- [ ] **Step 3: Adapt generated component**

Preserve: `"use client"` directive, all **11 Q&A pairs**, accordion logic.
If generated uses Framer Motion `AnimatePresence` for accordion — adopt it (smoother than CSS max-h).
Preserve: section H2 copy.
Apply `useReducedMotion()` guard (see Notes).

- [ ] **Step 4: Verify build**

```bash
npm run build 2>&1 | tail -5
```

- [ ] **Step 5: Commit**

```bash
git add components/sections/faq.tsx
git commit -m "feat: upgrade FAQ accordion with smooth animation (MCP #8)"
```

---

### Task 13: CTA Final — Magic MCP credit 9

**Files:**
- Modify: `components/sections/cta-final.tsx`

- [ ] **Step 1: Run Magic MCP command**

```
/ui cta section gradient dark full width button glow
```

- [ ] **Step 2: Read current cta-final.tsx**

Note: H2, body copy, 2 CTAs (`#formulaire` primary + `/offre` secondary).

- [ ] **Step 3: Adapt generated component**

Preserve: all copy, both CTA links.
Apply: gradient background, glow button `shadow-[0_0_40px_rgba(16,185,129,0.3)]`.
Add `"use client"` + Framer Motion fadeUp.
Apply `useReducedMotion()` guard (see Notes).

- [ ] **Step 4: Verify build**

```bash
npm run build 2>&1 | tail -5
```

- [ ] **Step 5: Commit**

```bash
git add components/sections/cta-final.tsx
git commit -m "feat: upgrade final CTA section with glow (MCP #9)"
```

---

### Task 14: Footer — Magic MCP credit 10

**Files:**
- Modify: `components/footer.tsx`

- [ ] **Step 1: Run Magic MCP command**

```
/ui footer dark minimal links copyright
```

- [ ] **Step 2: Read current footer.tsx**

Note: micro À propos text, separator, nav links (Accueil/Offre/Ressources/Checklist/Bannière/Amendes/À propos/Politique), copyright.

- [ ] **Step 3: Adapt generated component**

This component is **static** (no `"use client"` needed).
Preserve: all nav links, micro À propos paragraph, copyright text.
Apply: new visual style from generated component.
Keep: `border-t border-white/5` separator style.

- [ ] **Step 4: Verify build + lint**

```bash
npm run build 2>&1 | tail -8
npm run lint 2>&1 | tail -5
```

- [ ] **Step 5: Commit**

```bash
git add components/footer.tsx
git commit -m "feat: upgrade footer (MCP #10) — all 10 MCP credits used"
```

---

## Chunk 5: Finalization

### Task 15: Full build + lint verification

**Files:** none (verification only)

- [ ] **Step 1: Full clean build**

```bash
cd c:/Users/Admin/Documents/dev/auditloi25
npm run build 2>&1
```

Expected: all 13+ routes listed as static (○) or dynamic (ƒ), 0 TypeScript errors, 0 lint errors.

- [ ] **Step 2: Lint check**

```bash
npm run lint 2>&1
```

Expected: "No ESLint warnings or errors".

- [ ] **Step 3: Check secondary pages compile**

Verify routes present in build output:
- `○ /offre`
- `○ /ressources`
- `○ /ressources/banniere-cookies-loi-25`
- `○ /ressources/penalites-loi-25-entreprise`
- `○ /ressources/audit-loi-25-obnl`
- `○ /a-propos`
- `○ /politique-de-confidentialite`

---

### Task 16: Final commit + push

- [ ] **Step 1: Git status check**

```bash
git status
git log --oneline -5
```

Expected: working tree clean (all changes committed in tasks 1–14).

- [ ] **Step 2: Push**

```bash
git push origin main
```

- [ ] **Step 3: Verify deployment**

Check that Vercel (or hosting) picks up the push and deploys successfully.

---

## Notes d'implémentation

### Pattern Framer Motion standard

Utiliser ce pattern dans chaque section :

```tsx
"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Pour les enfants en stagger :
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// Usage :
<motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
>
```

### Accessibilité motion

Toujours wrapper les animations dans `motion-safe:` ou utiliser le hook :

```tsx
import { useReducedMotion } from "framer-motion";

const prefersReducedMotion = useReducedMotion();
const animProps = prefersReducedMotion ? {} : { variants: fadeUp, initial: "hidden", whileInView: "visible" };
```

### Magic MCP workflow

Pour chaque `/ui` commande :
1. Copier le composant généré
2. Identifier les éléments visuels à garder vs. remplacer
3. Greffer la copy existante sur le shell visuel généré
4. Ajouter `"use client"` si absent et nécessaire
5. Ajouter Framer Motion animations manuellement si le généré n'en a pas
