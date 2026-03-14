# auditloi25 — UI Redesign Design Spec
**Date:** 2026-03-14
**Approach:** Trust & Authority redesign (dark mode)
**Stack:** Next.js · React · Tailwind CSS v4

---

## 1. Context

auditloi25.ca is a SaaS service helping Quebec SMEs verify their compliance with Loi 25 (Act to modernize legislative provisions respecting the protection of personal information). Target clients: PMEs, OBNLs, local organizations with no dedicated legal or IT team.

The existing page (`app/page.tsx`) contains functional content but lacks visual structure, trust signals, and key sections (Fonctionnalités, Tarifs). This spec defines a complete redesign using the Trust & Authority pattern recommended by the ui-ux-pro-max skill.

---

## 2. Design System

### 2.1 Colors (5 tokens)

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `bg` | `#020617` | `slate-950` | Page background |
| `surface` | `#0F172A` | `slate-900` | Cards, forms, sections |
| `primary` | `#38BDF8` | `sky-400` | Links, labels, accents |
| `cta` | `#10B981` | `emerald-500` | Primary buttons, success states |
| `text` | `#F1F5F9` | `slate-100` | Body text |

**Derived accents:**
- `sky-400/15` — badge/pill backgrounds
- `emerald-500/10` — success pill backgrounds
- `slate-700` — borders
- `slate-400` — muted text
- `slate-500` — placeholder, footnotes

### 2.2 Typography — Plus Jakarta Sans

**Loading method: `next/font/google` (required for Next.js App Router)**

Do NOT use a raw `@import url(...)` in `globals.css` — it conflicts with Tailwind v4's PostCSS pipeline. Use Next.js built-in font optimisation instead:

```tsx
// app/layout.tsx
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={plusJakarta.variable}>
      ...
    </html>
  )
}
```

```css
/* app/globals.css — add after @import "tailwindcss" */
@theme inline {
  --font-sans: var(--font-plus-jakarta);
}
```

| Role | Size (mobile → desktop) | Weight | Tracking |
|------|--------------------------|--------|----------|
| Display / Hero H1 | 32px → 56px | 800 ExtraBold | -0.02em |
| H2 Section | 24px → 32px | 700 Bold | -0.01em |
| H3 Card title | 16px → 20px | 600 SemiBold | 0 |
| Body | 16px | 400 Regular | 0 |
| Label / Badge | 11px → 12px | 600 SemiBold | +0.12em uppercase |
| Price display | 32px → 36px | 800 ExtraBold | tabular-nums |

### 2.3 Border Radius

| Component | Value |
|-----------|-------|
| Buttons | `rounded-lg` (8px) |
| Cards | `rounded-2xl` (16px) |
| Sections | `rounded-3xl` (24px) |
| Badges / Pills | `rounded-full` |
| Form inputs | `rounded-lg` (8px) |

### 2.4 Shadows

| Level | CSS value |
|-------|-----------|
| Elevated card | `shadow-[0_24px_80px_rgba(15,23,42,0.9)]` |
| Card hover | `shadow-[0_8px_32px_rgba(56,189,248,0.08)]` |
| CTA glow | `shadow-[0_0_24px_rgba(16,185,129,0.25)]` |
| Trust badge | `shadow-[0_2px_8px_rgba(0,0,0,0.4)]` |

### 2.5 Spacing (4px base)

| Token | Value | Usage |
|-------|-------|-------|
| `gap-xs` | 8px | Inline elements |
| `gap-sm` | 16px | Within a card |
| `gap-md` | 24px | Between cards |
| `gap-lg` | 48px | Between sections |
| `gap-xl` | 80px | Hero section |
| `px-page` | 16px → 40px | Horizontal page padding |

---

## 3. Page Architecture

Pattern: **Trust & Authority + Conversion** (ui-ux-pro-max skill recommendation for legal/compliance SaaS)

```
1. NAVBAR
2. HERO
3. TRUST STRIP
4. COMMENT ÇA MARCHE
5. FONCTIONNALITÉS
6. TARIFS
7. POURQUOI AGIR MAINTENANT
8. FAQ
9. CTA FINAL
10. FOOTER
```

**Rationale for order:**
- Trust signals (strip, hero badges) appear before the solution to establish credibility
- Features before pricing reduces sticker shock
- "Pourquoi agir maintenant" (factual urgency) before FAQ to reinforce motivation
- FAQ addresses objections just before final CTA

---

## 4. Component Specifications

### 4.1 Navbar
- **Behavior:** Sticky, `bg-slate-950/80 backdrop-blur-md`, `border-b border-slate-800/60`
- **Left:** ShieldIcon (20px, sky-400, glow) + "auditloi25.ca" (semibold slate-100)
- **Right:** "Voir l'offre" (pill outline slate-700) + "Pré-audit gratuit" (pill emerald filled)
- **Mobile:** hamburger menu → full-screen overlay (not slide-in panel). `z-50`. State via `useState(isOpen)`. Close on backdrop click and on navigation. Hamburger button requires `aria-label="Ouvrir le menu"` and `aria-expanded={isOpen}`.
- **File:** `components/navbar.tsx`

### 4.2 Hero
- **Layout:** 2-column grid (3fr / 2.4fr) desktop, stacked mobile
- **Left column:**
  - Badge pill: ShieldIcon + "Audit Loi 25 · Aligné CAI" (sky-400/15, ring sky-500/30)
  - H1 (ExtraBold, -0.02em): *"Votre site web est-il conforme à la Loi 25 ?"*
  - Body (18px): 2-line subheading explaining the service
  - CTA row: `[Demander mon pré-audit gratuit]` (emerald, glow shadow) + `"Voir l'offre détaillée →"` (sky link)
  - Trust pills: "Service indépendant" · "Pré-audit gratuit" · "Retour 48h"
  - Price note card: surface/70, ring slate-800 — "Pré-audit gratuit · Audit à partir de 450 $"
- **Right column:**
  - Card: `surface`, ring `slate-700`, elevated shadow
  - Label: "CE QUE VOUS OBTENEZ" (uppercase, sky-400, 11px)
  - 4 checkmark bullets (emerald check SVG + slate-200 text)
  - Footer: link to checklist Loi 25
- **File:** `components/sections/hero.tsx`

### 4.3 Trust Strip
- **Layout:** Full-width `surface/50`, `py-4`, horizontal flex with separators
- **4 items** (Lucide SVG icons, not emojis):
  - `Shield` — "Service privé indépendant"
  - `MapPin` — "Basé au Québec"
  - `CheckCircle` — "Aligné exigences CAI"
  - `Zap` — "Pré-audit gratuit"
- **Style:** icon sky-400 16px, text slate-300 13px, separator `|` slate-700
- **File:** `components/sections/trust-strip.tsx`

### 4.4 Comment ça marche
- **Layout:** Left header column + right 3-step list (desktop), stacked (mobile)
- **Steps:** Numbered circle (emerald/10, ring emerald/40) + title bold + description slate-400
- **Connector:** dashed horizontal line `slate-700` between steps (desktop only). Use Tailwind arbitrary variant on a `<span>` separator: `hidden md:block flex-1 border-t border-dashed border-slate-700 mt-3.5`
- **Right column (form):** The lead capture form (4 fields: name, email, siteUrl, mainPages) lives as the **right column of this section**, co-located in `how-it-works.tsx`. It submits to `/api/lead` and redirects to `/merci`. Anchor `id="formulaire"` stays on this column so Hero and CTA Final `href="#formulaire"` links work.
- **Footer note:** xs slate-500 disclaimer about scope vs legal advice
- **File:** `components/sections/how-it-works.tsx`

### 4.5 Fonctionnalités
- **Layout:** 3×2 grid desktop, 1×6 mobile
- **Each card:** `surface`, `rounded-2xl`, ring `slate-700/50`
  - Icon square: `sky-400/10` bg, Lucide icon `sky-400` 24px
  - H3 SemiBold slate-100
  - Description 14px slate-400
  - Hover: ring `sky-500/30` + shadow sky glow, transition 200ms
- **6 features:**
  1. `Cookie` — Analyse cookies & scripts tiers
  2. `FileText` — Formulaires & parcours de consentement
  3. `BookOpen` — Contenus légaux (politique, mentions)
  4. `ToggleLeft` — Bannière de cookies & opt-out
  5. `Activity` — Scripts tiers & outils de suivi
  6. `BarChart2` — Rapport priorisé avec score de risque
- **File:** `components/sections/features.tsx`

### 4.6 Tarifs
- **Layout:** 3-column desktop, stacked mobile
- **Center card "Audit complet" highlighted:** ring `sky-500/60`, `scale-105` desktop, badge "Le plus populaire" pill emerald
- **Card anatomy:** plan name (label uppercase) · price (ExtraBold 36px) · price note (xs slate-400) · divider · feature list (check icons) · CTA button
- **3 plans:**

| | Pré-audit | Audit complet | Audit + Accompagnement |
|--|-----------|---------------|----------------------|
| Prix | **Gratuit** | **À partir de 450 $** | **Sur devis** |
| Note prix | — | selon taille du site | adapté à vos besoins |
| Badge | — | "Le plus populaire" | "Sur mesure" |
| CTA | "Demander" (outline sky) | "Commencer" (emerald filled) | "Nous contacter" (outline slate) |
| Items | 3 | 5 | 6+ |

**Feature list content per plan:**

*Pré-audit (Gratuit)*
- Analyse des cookies et scripts détectés
- Vérification de la bannière de consentement
- Premier portrait des zones à risque sur votre site

*Audit complet (à partir de 450 $)*
- Tout ce qui est inclus dans le pré-audit
- Analyse approfondie des formulaires et parcours de consentement
- Vérification des contenus légaux (politique, mentions)
- Rapport synthèse avec score de risque par zone
- Plan d'action priorisé adapté à vos ressources

*Audit + Accompagnement (sur devis)*
- Tout ce qui est inclus dans l'audit complet
- Session de travail avec votre équipe ou fournisseur web
- Révision des correctifs après mise en œuvre
- Synthèse transmissible à votre direction ou conseil d'administration
- Coordination avec vos partenaires juridiques ou TI
- Suivi personnalisé selon vos échéances

- **File:** `components/sections/pricing.tsx`

### 4.7 Pourquoi agir maintenant
- **Replaces testimonials section** — 3 factual cards, no fake quotes
- **Layout:** 3-column grid, same card style as features
- **Section label:** "POURQUOI AGIR MAINTENANT" (uppercase sky-400)
- **H2:** "Les risques sont réels pour votre organisation"
- **3 cards:**

| Card | Icon | Stat | Content | Source |
|------|------|------|---------|--------|
| Amendes réelles | `ShieldAlert` sky | **25 M$** | ou 4 % du CA mondial pour les infractions les plus graves | Loi 25, art. 90-92 |
| Confiance clients | `Users` sky | **81 %** | des consommateurs québécois préoccupés par l'usage de leurs données | Sondage CAI 2023 |
| Obligation active | `Scale` sky | **Actif** | La CAI surveille les sites web — PME et OBNL ne sont pas exemptés | CAI, lignes directrices 2023 |

- Stat displayed in `sky-400` or `emerald-400`, large (28px bold)
- Source: `text-xs slate-500` bottom of card
- **File:** `components/sections/why-act-now.tsx`

### 4.8 FAQ
- **5 questions**, accordion pattern, `useState` (no external lib)
- Each item: `border-b border-slate-700`, H3 clickable + `ChevronDown` Lucide (rotates 180° on open, transition 200ms)
- Answer: `slate-400`, expands with CSS max-height transition. Use `max-h-0 overflow-hidden` (closed) → `max-h-[400px]` (open) with `transition-all duration-300`. The `400px` bound is sufficient for all FAQ answers; do not use `max-h-full` (no animation).
- **Questions:**
  1. Est-ce que cet audit me rend « conforme Loi 25 » à lui seul ?
  2. Quels sont les risques si on ne fait rien ?
  3. Combien de temps prend un pré-audit et un audit complet ?
  4. À qui s'adresse ce service ?
  5. Quelle est la différence entre un pré-audit et un audit complet ?
- **File:** `components/sections/faq.tsx`

### 4.9 CTA Final
- Full-width, `rounded-3xl`, gradient `from-sky-500/10 via-bg to-emerald-500/10`, ring `sky-500/20`
- H2 centered (28px bold) + body (slate-200, max-w-xl) + emerald CTA button (glow) + secondary sky link
- **File:** `components/sections/cta-final.tsx`

### 4.10 Footer
- Divider line gradient `via-slate-700/70`
- Left: logo + "Service privé indépendant, basé à Montréal, Québec." + copyright
- Right: nav links (Accueil · Offre · Checklist Loi 25 · Politique de confidentialité)
- **File:** `components/footer.tsx`

---

## 5. Files to Create / Modify

### New components
```
components/
  navbar.tsx                          (new)
  footer.tsx                          (new — extract from page.tsx)
  sections/
    hero.tsx                          (new — extract + redesign)
    trust-strip.tsx                   (new)
    how-it-works.tsx                  (new — extract + redesign)
    features.tsx                      (new)
    pricing.tsx                       (new)
    why-act-now.tsx                   (new)
    faq.tsx                           (new — extract + redesign)
    cta-final.tsx                     (new — extract)
```

### Modified files
```
app/page.tsx                          (refactor: import sections, remove inline JSX)
app/layout.tsx                        (add Plus_Jakarta_Sans via next/font/google, apply variable to <html>)
app/globals.css                       (add --font-plus-jakarta to @theme inline;
                                       REMOVE: --font-sans: var(--font-geist-sans)
                                       REMOVE: body { font-family: Arial, Helvetica, sans-serif }
                                       REMOVE: @media (prefers-color-scheme: dark) block — dark only product)
```

### Existing (unchanged)
```
components/shield-icon.tsx            (keep as-is)
app/api/lead/route.ts                 (keep as-is)
app/merci/page.tsx                    (keep as-is)
app/offre/page.tsx                    (keep as-is)
app/ressources/checklist-loi-25-site-web/page.tsx  (keep as-is)
```

---

## 6. UX & Accessibility Checklist (from ui-ux-pro-max skill)

- [ ] No emojis as icons — use SVG Lucide throughout
- [ ] All interactive elements: `cursor-pointer`
- [ ] Hover states: smooth transitions 150–300ms
- [ ] Text contrast ≥ 4.5:1 (WCAG AA) on dark backgrounds
- [ ] Focus rings visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected on animations — use Tailwind `motion-safe:transition-*` and `motion-reduce:transition-none` variants on all animated elements (FAQ accordion, card hovers, navbar backdrop)
- [ ] Responsive: 375px · 768px · 1024px · 1440px
- [ ] Touch targets ≥ 44px height on mobile
- [ ] Form labels visible (not placeholder-only)
- [ ] `aria-label` on icon-only buttons

---

## 7. Out of Scope

- Backend / API changes (`/api/lead` unchanged)
- Other pages (offre, merci, checklist, politique de confidentialité)
- Dark/light mode toggle (dark mode only)
- Animations beyond CSS transitions (no Framer Motion)
- CMS or data fetching for testimonials
- **"À propos" section** — intentionally removed. Personal credibility content is replaced by the Trust Strip + "Pourquoi agir maintenant" factual cards, which convey authority without requiring a dedicated about section on the main page.
