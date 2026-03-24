# ZéroAbo — Spec de redesign & nouvelles fonctionnalités

**Date :** 2026-03-17
**Projet :** zeroabo.fr
**Approche retenue :** Option B — Incrémental par priorité

---

## Contexte

ZéroAbo est un annuaire d'alternatives logicielles en achat unique, destiné aux francophones qui veulent arrêter de payer des abonnements mensuels. Le site existe et fonctionne avec ~20 outils, mais souffre de deux problèmes :
1. **Design peu professionnel** — le header n'a qu'un lien "À propos", l'expérience est pauvre
2. **Catalogue limité** — certains affiliés actifs ne sont pas encore intégrés

Ce redesign vise à corriger ces deux points et à ajouter des pages à haute valeur (calculateur viral, storytelling, blog SEO) pour augmenter le trafic organique et la connexion émotionnelle avec l'utilisateur.

---

## Périmètre (5 étapes)

### Étape 1 — Header & Top Bar

#### Top Bar (desktop uniquement)
- Fond `#0d1526`, texte `slate-400`, hauteur ~36px
- Contenu : `💡 Les utilisateurs ZéroAbo économisent en moyenne 280 €/an — Calcule tes économies →`
- Lien `emerald-400` souligné vers `/calculateur`
- Masquée sur mobile (`hidden md:flex`)

#### Header principal
- **Composant** : `"use client"` (nécessaire pour l'état hamburger mobile)
- **Stacking** : le composant `Header` englobe Top Bar + nav bar dans un seul `<div>` fixé. La Top Bar est la première enfant, le nav en dessous. Le tout est `fixed top-0 inset-x-0 z-50`. Hauteur totale desktop : ~36px (top bar) + ~64px (nav) = ~100px → les pages consommatrices utilisent `pt-[100px]` sur desktop et `pt-16` sur mobile (top bar masquée).
- Fond nav : `bg-[#020817]/85 backdrop-blur-md border-b border-white/5`
- **Gauche** : Logo `ZéroAbo` (Zéro `sky-400`, Abo `white`) + sous-titre `"Logiciels en achat unique, sans abonnement"` (`text-xs text-slate-500`)
- **Droite** : liens `Outils · Calculateur · Blog · Mon histoire` (`text-sm text-slate-400 hover:text-white transition-colors`) + bouton CTA `"Calculer mes économies"` (`href="/calculateur"`, `bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg px-4 py-2 text-sm font-semibold shadow-[0_0_20px_rgba(16,185,129,0.25)]`)
- **Mobile** : hamburger `☰` (état `isOpen: boolean`), top bar masquée, menu déroulant `absolute top-full` avec tous les liens + CTA, se ferme au clic d'un lien

#### Navigation — "Mon histoire" remplace "À propos"
- Le lien `"À propos"` est retiré du nav et remplacé par `"Mon histoire"` → `/mon-histoire`
- La page `/a-propos` est conservée (pas supprimée) mais n'est plus dans le nav principal

#### Refactorisation
- Créer `app/components/Header.tsx` (`"use client"`)
- Dans **chaque** fichier consommateur : supprimer le bloc `<header>...</header>` inline existant, importer et utiliser `<Header />`
- Fichiers à modifier : `app/page.tsx`, `app/outil/[slug]/ToolDetailClient.tsx`, `app/a-propos/page.tsx`
- **Ne pas** ajouter Header dans `app/layout.tsx` — il reste géré par page
- **Hors scope** : `app/mentions-legales/page.tsx` conserve son header actuel (page légale, pas dans le nav principal)
- **Footer** : les liens footer existants pointant vers `/a-propos` restent inchangés dans ce sprint — hors scope
- Ajuster les offsets de padding des `<main>` ou sections hero dans chaque page consommatrice :
  - `app/page.tsx` : hero section `pt-36` → `pt-[108px]` (desktop) / `pt-20` (mobile)
  - `app/outil/[slug]/ToolDetailClient.tsx` : `pt-28` → `pt-[108px]` (desktop) / `pt-20` (mobile)
  - `app/a-propos/page.tsx` : `pt-28` → `pt-[108px]` (desktop) / `pt-20` (mobile)

---

### Étape 2 — 3 nouveaux outils dans `app/data/tools.ts`

#### AOMEI Backupper
- **id/slug** : `aomei-backupper`
- **Remplace** : Acronis Cyber Protect Home, Carbonite (abonnement backup)
- **Affilié** : CJ Affiliate
- **Liens affiliés** :
  - Homepage : `https://www.kqzyfj.com/click-101699471-17143106`
  - Store -25% : `https://www.tkqlhce.com/click-101699471-17168804`
  - Store -10% : `https://www.dpbolvw.net/click-101699471-17168805`
  - Data Recovery : `https://www.jdoqocy.com/click-101699471-17232584`
- **Prix** : ~40 € licence perpétuelle (offres -25% via lien affilié)
- **Savings** : 120 (€ sur 3 ans)
- **motsCles** : `["sauvegarde", "backup", "partitionnement", "récupération données", "acronis"]`
- **logoDomain** : `aomei.com`

#### Kaspersky Standard FR
- **id/slug** : `kaspersky-standard`
- **Remplace** : Norton 360, McAfee Total Protection
- **Affilié** : Awin (awinmid=19485)
- **Lien affilié** : `https://www.awin1.com/cread.php?s=3125435&v=19485&q=435785&r=2795782`
- **Prix** : licence 1–2 ans à tarif réduit
- **Savings** : 100
- **motsCles** : `["antivirus", "sécurité", "norton", "mcafee", "protection", "kaspersky"]`
- **logoDomain** : `kaspersky.com`

#### Affinity Photo 2
- **id/slug** : `affinity-photo-2`
- **Remplace** : Adobe Photoshop (CC)
- **Affilié** : aucun — lien direct (gratuit depuis rachat Canva 2025)
- **lien** + **affiliateUrl** : `https://affinity.serif.com/fr/photo/`
- **Prix** : Gratuit
- **Savings** : 780 (€ sur 3 ans vs Photoshop ~260 €/an)
- **motsCles** : `["retouche photo", "photoshop", "adobe", "photo editing", "design"]`
- **logoDomain** : `affinity.serif.com`

---

### Étape 3 — Page Calculateur (`/calculateur`)

#### Fichiers
- `app/calculateur/page.tsx` — page principale (métadonnées + composant client)
- `app/calculateur/CalculateurClient.tsx` — composant React interactif
- `app/data/subscriptions.ts` — données statiques des abonnements

#### Structure `subscriptions.ts`
```ts
export type SubscriptionCategorie = 'creativite' | 'bureautique' | 'securite' | 'productivite' | 'autre';

export type Subscription = {
  id: string;
  nom: string;
  categorie: SubscriptionCategorie;
  prixAnnuel: number;          // en €/an
  alternativeSlug?: string;    // slug dans TOOL_ALTERNATIVES
  economie3ans: number;        // économie estimée sur 3 ans = prixAnnuel*3 - prixAlternative (ou override manuel)
};
```

**Calcul des économies** :
- `totalDepenseAnnuelle = selectedSubscriptions.reduce((acc, s) => acc + s.prixAnnuel, 0)`
- `totalEconomie3ans = selectedSubscriptions.reduce((acc, s) => acc + s.economie3ans, 0)`
- Le `economie3ans` est une valeur fixe pré-calculée sur le type, pas un calcul dynamique
- Quand l'utilisateur clique "Partager" → URL générée : `/calculateur?savings=${totalEconomie3ans}&apps=${selectedIds.join(',')}`
- `generateMetadata` reçoit `searchParams: { savings?: string }` → `Number(searchParams.savings)` pour l'OG

Abonnements à inclure (id, prixAnnuel, economie3ans) :
| id | prixAnnuel | economie3ans |
|---|---|---|
| adobe-creative-cloud | 660 | 1620 |
| photoshop | 260 | 780 |
| premiere-pro | 260 | 880 |
| acrobat-pro | 180 | 390 |
| microsoft-365 | 100 | 300 |
| google-workspace | 144 | 132 |
| norton-360 | 100 | 200 |
| mcafee | 90 | 170 |
| asana-premium | 120 | 240 |
| monday-com | 192 | 312 |
| loom-pro | 96 | 246 |
| notion-plus | 96 | 288 |
| mindmeister | 108 | 204 |
| streamyard | 600 | 1440 |
| dropbox-plus | 120 | 360 |

#### Mécanique UX
1. **Grille de sélection** : cartes cliquables par abonnement, affichant le nom + prix annuel + icône
2. **Panneau résultat** (sticky desktop, fixe en bas mobile) :
   - `"Vous dépensez X €/an en abonnements"`
   - `"Vous pourriez économiser Y € sur 3 ans"` (emerald, taille large)
   - Phrase d'équivalence (voir table ci-dessous)
   - Bouton `"Voir les alternatives →"`

#### Table d'équivalences (montant économisé sur 3 ans)
| Fourchette | Phrase |
|---|---|
| < 150 € | "c'est plusieurs sorties resto ou livraisons qui ne te coûtent plus rien 🍽️" |
| 150–300 € | "c'est un vrai week‑end pour souffler à deux ou en solo 🧳" |
| 300–600 € | "c'est une semaine de vacances simples mais complètes ☀️" |
| 600–1 200 € | "c'est de quoi remplacer un gros électroménager sans stress 🧺" |
| 1 200–2 500 € | "c'est un bon PC ou téléphone payé cash, sans crédit 💻📱" |
| > 2 500 € | "c'est un vrai matelas de sécurité pour les imprévus 🛟" |

#### Partage viral
- URL partageable avec params : `/calculateur?savings=2541&apps=adobe-creative-cloud,microsoft-365` (séparateur `,`, URL-encodé en `%2C` par `encodeURIComponent` — le parser split sur `,`)
- **Lecture des params** : `CalculateurClient.tsx` utilise `useSearchParams()` (hook client) — ce composant doit être enveloppé dans `<Suspense fallback={...}>` dans `app/calculateur/page.tsx` pour satisfaire Next.js 15 (requis sinon erreur de build)
- Au chargement, si `?savings` et `?apps` sont présents → pré-sélectionner les abonnements correspondants et afficher directement le résultat
- 4 boutons de partage : **X/Twitter**, **LinkedIn**, **WhatsApp**, **Copier le lien**
- Texte pré-rempli : `"J'économise {Y} € en 3 ans en arrêtant mes abonnements logiciels — toi aussi tu veux savoir combien ? 👇 {url}"`
- **OG dynamique** : `app/calculateur/page.tsx` est un Server Component qui exporte `generateMetadata({ searchParams })`. En Next.js 15, `searchParams` est une `Promise` → `const sp = await searchParams; const savings = Number(sp.savings)`. Si savings > 0 → titre `"Tu pourrais économiser {savings} € — ZéroAbo"`, sinon titre par défaut. `CalculateurClient.tsx` est importé en tant que composant client séparé, enveloppé dans `<Suspense>`.

---

### Étape 4 — Page "Mon histoire" (`/mon-histoire`)

#### Fichiers
- `app/mon-histoire/page.tsx`

#### Contenu (fourni par le propriétaire, légèrement optimisé)

Structure de page :
```
H1 : Mon histoire (et peut-être un peu la tienne)
Lead : Je ne suis pas un gourou de la finance…

H2 : La réalité : je payais pour une vie que je ne vivais pas
  [contenu section salle de sport + abonnements invisibles]

H2 : Le déclic : les abonnements invisibles
  [contenu choc du relevé bancaire]

H2 : La frustration : aucune ressource claire, surtout en français
  [recherche infructueuse, inspiration pour créer le site]

H2 : La découverte : un abonnement à la fois
  [processus de remplacement, chiffres réels]

H2 : Pourquoi j'ai créé ZéroAbo
  [mission, liste des bénéfices du site]

H2 : Si tu te reconnais là-dedans
  [appel à l'identification + CTA]

CTA final : bouton "Calculer mes économies →" → /calculateur
```

**Design** : typographie longue centrée (`max-w-2xl`), `blockquote` stylé sky-400 pour les citations fortes, fond `bg-[#020817]`, pas de sidebar, padding généreux.

---

### Étape 5 — Blog (`/blog` + `/blog/[slug]`)

#### Fichiers
- `app/blog/page.tsx` — liste avec filtres
- `app/blog/[slug]/page.tsx` — article individuel
- `app/data/blog.ts` — données des articles (TypeScript, pas de CMS)

#### Structure `blog.ts`
```ts
export type BlogCategorie = 'Créateurs' | 'Entrepreneurs' | 'Vie perso' | 'Outils';

export type BlogPost = {
  slug: string;
  titre: string;
  description: string;
  date: string;              // format "YYYY-MM-DD"
  categorie: BlogCategorie;  // valeur exacte utilisée dans les filtres (comparaison stricte)
  tempsLecture: number;      // en minutes
  contenu: string;           // HTML string rendu via dangerouslySetInnerHTML — pas de dépendance externe
  articlesLies: string[];    // slugs d'articles liés (tableau vide si aucun)
};
```

**Filtre** : `selectedCategorie === 'Tous' || post.categorie === selectedCategorie` — comparaison stricte avec les valeurs de `BlogCategorie`.

**Rendu contenu** : `<div dangerouslySetInnerHTML={{ __html: post.contenu }} className="prose prose-invert max-w-none" />` — les CTAs contextuels sont inclus directement dans le HTML de `contenu` sous forme de liens stylés.

**`BLOG_POSTS`** est exporté depuis `app/data/blog.ts` :
```ts
export const BLOG_POSTS: BlogPost[] = [ ... ]
```
`/blog/[slug]/page.tsx` utilise `generateStaticParams` qui importe `BLOG_POSTS` et retourne `BLOG_POSTS.map(p => ({ slug: p.slug }))` — même pattern que `/outil/[slug]/page.tsx`.
Les `articlesLies` sont résolus dans le composant : `BLOG_POSTS.filter(p => post.articlesLies.includes(p.slug)).slice(0, 3)`.

#### Page `/blog`
- **Architecture** : `app/blog/page.tsx` est un **Server Component** (pour `generateMetadata`). Il importe et rend `<BlogList />` — un **Client Component** `app/blog/BlogList.tsx` (`"use client"`) qui gère l'état du filtre actif
- Filtres thématiques dans `BlogList` : `Tous · Créateurs · Entrepreneurs · Vie perso · Outils`
- Grille de cartes (titre, date, extrait, tag catégorie, temps de lecture)
- Filtre côté client dans `BlogList` (état React, pas de routing)

#### Page `/blog/[slug]`
- Typographie centrée `max-w-2xl`
- Temps de lecture estimé affiché en header
- 1–2 CTAs contextuels dans le corps du texte (vers calculateur ou outil spécifique)
- CTA de fin d'article
- Bloc "Articles liés" : 3 cartes cliquables (titre + tag)

#### 2 articles d'exemple à générer
1. **`adobe-vs-alternatives-comparatif-couts`** — *"Adobe vs alternatives : le vrai comparatif des coûts sur 3 ans"* — catégorie `Créateurs`, comparatif chiffré en tableau
2. **`5-logiciels-remplacer-ce-weekend`** — *"5 logiciels que tu peux remplacer ce week-end (et arrêter de payer dès le mois prochain)"* — catégorie `Outils`, format liste actionnable

---

## Fichiers impactés

| Fichier | Action | Détail |
|---|---|---|
| `app/components/Header.tsx` | Créer | Composant partagé "use client", TopBar + nav |
| `app/page.tsx` | Modifier | Supprimer header inline, importer `<Header />`, ajuster pt- |
| `app/outil/[slug]/ToolDetailClient.tsx` | Modifier | Supprimer header inline, importer `<Header />`, ajuster pt- |
| `app/a-propos/page.tsx` | Modifier | Supprimer header inline, importer `<Header />`, ajuster pt- |
| `app/data/tools.ts` | Modifier | Ajouter 3 outils (AOMEI, Kaspersky, Affinity Photo 2) |
| `app/calculateur/page.tsx` | Créer | Server Component, generateMetadata, wraps CalculateurClient in Suspense |
| `app/calculateur/CalculateurClient.tsx` | Créer | "use client", useSearchParams, grille + résultat + partage |
| `app/data/subscriptions.ts` | Créer | SUBSCRIPTIONS array, SubscriptionCategorie type |
| `app/mon-histoire/page.tsx` | Créer | Server Component, contenu storytelling complet |
| `app/blog/page.tsx` | Créer | Server Component, generateMetadata, rend BlogList |
| `app/blog/BlogList.tsx` | Créer | "use client", filtres thématiques + grille de cartes |
| `app/blog/[slug]/page.tsx` | Créer | generateStaticParams + generateMetadata, rendu article |
| `app/data/blog.ts` | Créer | BLOG_POSTS array, BlogPost + BlogCategorie types |
| `app/sitemap.ts` | Modifier | Ajouter /calculateur, /mon-histoire, /blog, /blog/[slug] |

---

## Vérification

1. **Header** : naviguer sur home, page outil, à-propos → header identique partout, top bar visible sur desktop
2. **Outils** : les 3 nouveaux outils apparaissent dans la grille, leurs pages `/outil/[slug]` sont accessibles, liens affiliés corrects
3. **Calculateur** : sélectionner 3 abonnements → résultat + équivalence + bouton partage → copier l'URL → recharger → résultat pré-rempli → boutons X/LinkedIn/WhatsApp s'ouvrent avec texte pré-rempli
4. **Mon histoire** : page accessible à `/mon-histoire`, lien dans le header, CTA pointe vers `/calculateur`
5. **Blog** : `/blog` affiche la grille + filtres fonctionnels → cliquer un article → article affiché + CTAs contextuels + bloc articles liés
6. **Sitemap** : `npm run build` sans erreur, sitemap.ts inclut les nouvelles routes
