# Premium UI Upgrade — auditloi25.ca
**Date:** 2026-03-16
**Status:** Approved

## Objectif

Passer le site auditloi25.ca d'un dark mode fonctionnel à un look "dark luxury SaaS" inspiré de Linear, Vercel et Resend — sans toucher à la copy ni aux routes existantes.

## Contraintes

- Stack : Next.js 16.1.6, TypeScript strict, Tailwind CSS v4
- Budget Magic MCP : 10 crédits (1 par composant) — budget serré, 0 marge pour retry
- Aucune modification de copy ni de routes
- Compatibilité mobile : 375px, 768px, 1280px
- Accessibilité : `motion-safe:` / `motion-reduce:` conservés
- Framer Motion requiert `"use client"` — tous les composants animés deviennent Client Components

## Système de design

### Typographie

| Usage | Police | Import |
|-------|--------|--------|
| Headlines | Geist (700–900) | `import { Geist, Geist_Mono } from "next/font/google"` |
| Body | Inter (400–600) | `import { Inter } from "next/font/google"` |
| Badges / accents | Geist Mono (400–500) | inclus ci-dessus |

**Font loading : `next/font/google` uniquement** — pas de package npm `geist` séparé.
Subset : latin. Variables CSS exposées : `--font-geist`, `--font-geist-mono`, `--font-inter`.

### Tokens de couleur

Déclarés dans `@theme inline {}` de `globals.css` pour être disponibles en tant que classes Tailwind :

```css
@import "tailwindcss";

@theme inline {
  --font-sans: var(--font-inter);
  --font-display: var(--font-geist);
  --font-mono: var(--font-geist-mono);

  --color-base: #020817;
  --color-surface: #0d1526;
  --color-raised: #111827;
  --color-border: rgba(255,255,255,0.08);
  --color-primary: #38bdf8;
  --color-cta: #10b981;
  --color-muted: #64748b;
}
```

Utilisation en classes Tailwind : `bg-base`, `bg-surface`, `text-muted`, etc.
Pour les opacités et variantes arbitraires : `bg-[#020817]/80`, `ring-white/5`.

### Effets signature

- **Gradient mesh hero** : deux blobs blur-3xl sky + emerald en `position: absolute`
- **Glow CTA** : `shadow-[0_0_40px_rgba(16,185,129,0.3)]` sur boutons primaires
- **Border shimmer** : `ring-1 ring-white/5 hover:ring-sky-500/30` sur cards
- **Backdrop blur navbar** : `bg-[#020817]/80 backdrop-blur-md`

### Animations (Framer Motion)

- `fadeUp` : `opacity: 0→1`, `y: 24→0`, duration 600ms, ease easeOut
- Trigger : `whileInView` + `once: true` + `viewport: { margin: "-80px" }`
- Stagger enfants : 100ms entre items de liste/grid
- Micro-interactions : `whileHover: { scale: 1.02 }`, `whileTap: { scale: 0.98 }`
- **Tous les composants animés ont `"use client"` en première ligne**

## Composants — Magic MCP

| # | Fichier | Commande `/ui` | use client | Crédit |
|---|---------|----------------|-----------|--------|
| 1 | `components/navbar.tsx` | `/ui sticky navbar backdrop blur dark minimal logo cta button` | oui (existant) | 1 |
| 2 | `components/sections/hero.tsx` | `/ui hero section gradient mesh background dark animated headline cta` | oui (existant) | 2 |
| 3 | `components/sections/trust-strip.tsx` | `/ui trust bar icons dark minimal animated` | oui (nouveau) | 3 |
| 4 | `components/sections/how-it-works.tsx` | `/ui steps process section numbered dark cards` | oui (existant) | 4 |
| 5 | `components/sections/features.tsx` | `/ui features grid icon cards hover glow dark luxury` | oui (nouveau) | 5 |
| 6 | `components/sections/pricing.tsx` | `/ui pricing table three tiers highlighted card dark theme` | oui (nouveau) | 6 |
| 7 | `components/sections/why-act-now.tsx` | `/ui stats cards dark metrics animated numbers` | oui (nouveau) | 7 |
| 8 | `components/sections/faq.tsx` | `/ui faq accordion dark animated smooth` | oui (existant) | 8 |
| 9 | `components/sections/cta-final.tsx` | `/ui cta section gradient dark full width button glow` | oui (nouveau) | 9 |
| 10 | `components/footer.tsx` | `/ui footer dark minimal links copyright` | non (statique) | 10 |

### sticky-mobile-cta.tsx (hors budget MCP)
Mise à jour manuelle (pas de crédit MCP) : ajuster `bg-sky-600` → `bg-[#020817]/90 backdrop-blur-md` + glow emerald sur le bouton CTA pour cohérence visuelle.

## Fichiers modifiés

| Fichier | Changement |
|---------|------------|
| `package.json` | Ajouter `framer-motion` |
| `app/layout.tsx` | Remplacer Plus Jakarta Sans → Geist + Geist Mono + Inter via next/font/google |
| `app/globals.css` | Tokens `@theme inline`, fond `--color-base` |
| `components/navbar.tsx` | Magic MCP + adaptation copy + "use client" |
| `components/footer.tsx` | Magic MCP + adaptation copy (statique) |
| `components/sticky-mobile-cta.tsx` | Mise à jour couleurs manuelle |
| `components/sections/*.tsx` (8 fichiers) | Magic MCP + adaptation copy + "use client" + Framer Motion |

## Pages secondaires (propagation automatique)

Les pages `/offre`, `/ressources/*`, `/a-propos`, `/politique-de-confidentialite` importent `Navbar` et `Footer` depuis les composants partagés. Elles hériteront automatiquement du nouveau design. Un test visuel rapide sur ces pages est inclus dans les critères de succès.

## Fichiers supprimés (avant implémentation)

- `app/page ACTIVEHUMANADVE 09_03_2026 09_56_28.tsx` ✅ déjà supprimé
- `app/page ACTIVEHUMANADVE 09_03_2026 10_14_04.tsx` ✅ déjà supprimé

## Ordre d'implémentation

1. `npm install framer-motion`
2. Mise à jour `layout.tsx` (Geist + Inter via next/font/google)
3. Mise à jour `globals.css` (tokens @theme inline)
4. Mise à jour manuelle `sticky-mobile-cta.tsx` (couleurs)
5. Générer + adapter les 10 composants via Magic MCP (ordre tableau)
6. `npm run build` + `npm run lint`
7. Test visuel pages secondaires
8. Commit + push

## Critères de succès

- Build propre (0 erreurs TypeScript, 0 erreurs lint)
- Chaque composant adapté à la copy existante
- Mobile responsive à 375px, 768px, 1280px
- Animations respectent `prefers-reduced-motion`
- Pages secondaires (/offre, /ressources, /a-propos) visuellement cohérentes
- Look "dark luxury SaaS" uniforme sur toutes les pages
