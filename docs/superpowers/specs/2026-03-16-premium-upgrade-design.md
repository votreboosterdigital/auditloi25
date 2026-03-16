# Premium UI Upgrade — auditloi25.ca
**Date:** 2026-03-16
**Status:** Approved

## Objectif

Passer le site auditloi25.ca d'un dark mode fonctionnel à un look "dark luxury SaaS" inspiré de Linear, Vercel et Resend — sans toucher à la copy ni aux routes existantes.

## Contraintes

- Stack : Next.js 16.1.6, TypeScript strict, Tailwind CSS v4
- Budget Magic MCP : 10 crédits (1 par composant)
- Aucune modification de copy ni de routes
- Compatibilité mobile : 375px, 768px, 1280px
- Accessibilité : `motion-safe:` / `motion-reduce:` conservés

## Système de design

### Typographie

| Usage | Police | Poids |
|-------|--------|-------|
| Headlines | Geist (variable) | 700–900 |
| Body | Inter | 400–600 |
| Badges / accents | Geist Mono | 400–500 |

Via `next/font/google` — remplace Plus Jakarta Sans.

### Tokens de couleur

```css
--bg-base:     #020817   /* plus sombre que slate-950 */
--bg-surface:  #0d1526   /* cards, surfaces */
--bg-raised:   #111827   /* hover states */
--border:      rgba(255,255,255,0.08)
--primary:     #38bdf8   /* sky-400 — inchangé */
--cta:         #10b981   /* emerald-500 — inchangé */
--text-muted:  #64748b
```

### Effets signature

- **Gradient mesh hero** : deux blobs blur-3xl sky + emerald en position absolute
- **Glow CTA** : `box-shadow: 0 0 40px rgba(16,185,129,0.3)` sur boutons primaires
- **Border shimmer** : `ring-1 ring-white/5 hover:ring-sky-500/30` sur cards
- **Backdrop blur navbar** : `bg-[#020817]/80 backdrop-blur-md` (affiné)

### Animations (Framer Motion)

- `fadeUp` : `opacity: 0 → 1`, `y: 24 → 0`, duration 600ms, easing easeOut
- Trigger : `whileInView` + `once: true` + `viewport: { margin: "-80px" }`
- Stagger enfants : 100ms entre items de liste/grid
- Micro-interactions buttons : `whileHover: { scale: 1.02 }`, `whileTap: { scale: 0.98 }`
- Durées micro : 200ms | section entrée : 600ms

## Composants — Magic MCP

| # | Fichier | Commande `/ui` | Crédit |
|---|---------|----------------|--------|
| 1 | `components/navbar.tsx` | `/ui sticky navbar backdrop blur dark minimal logo cta button` | 1 |
| 2 | `components/sections/hero.tsx` | `/ui hero section gradient mesh background dark animated headline cta` | 2 |
| 3 | `components/sections/trust-strip.tsx` | `/ui trust bar logos icons dark minimal animated` | 3 |
| 4 | `components/sections/how-it-works.tsx` | `/ui steps process section numbered dark cards` | 4 |
| 5 | `components/sections/features.tsx` | `/ui features grid icon cards hover glow dark luxury` | 5 |
| 6 | `components/sections/pricing.tsx` | `/ui pricing table three tiers highlighted card dark theme` | 6 |
| 7 | `components/sections/why-act-now.tsx` | `/ui stats cards dark metrics animated numbers` | 7 |
| 8 | `components/sections/faq.tsx` | `/ui faq accordion dark animated smooth` | 8 |
| 9 | `components/sections/cta-final.tsx` | `/ui cta section gradient dark full width button glow` | 9 |
| 10 | `components/footer.tsx` | `/ui footer dark minimal links copyright` | 10 |

## Fichiers modifiés

| Fichier | Changement |
|---------|------------|
| `package.json` | Ajouter `framer-motion` |
| `app/layout.tsx` | Remplacer Plus Jakarta Sans → Geist + Inter via next/font/google |
| `app/globals.css` | Nouveaux tokens CSS custom, bg-base |
| `components/navbar.tsx` | Magic MCP + adaptation copy |
| `components/footer.tsx` | Magic MCP + adaptation copy |
| `components/sections/*.tsx` (8 fichiers) | Magic MCP + adaptation copy + Framer Motion |

## Ordre d'implémentation

1. `npm install framer-motion geist`
2. Mise à jour `layout.tsx` (fonts) + `globals.css` (tokens)
3. Générer + adapter les 10 composants via Magic MCP (ordre tableau)
4. `npm run build` + `npm run lint`
5. Commit + push

## Critères de succès

- Build propre (0 erreurs TypeScript, 0 erreurs lint)
- Chaque composant adapté à la copy existante
- Mobile responsive à 375px, 768px, 1280px
- Animations respectent `prefers-reduced-motion`
- Look cohérent "dark luxury SaaS" sur l'ensemble des pages
