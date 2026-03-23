# Maillage interne — auditloi25.ca
> Généré le 2026-03-23

---

## Cartographie des pages

| Page | Contenu principal |
|---|---|
| `/` | Homepage — hero, formulaire pré-audit, fonctionnalités, pricing |
| `/offre` | Détail de l'offre d'audit, livrables, tarifs, FAQ |
| `/actualites` | Liste tous les articles |
| `/actualites/[slug]` | 7 articles individuels (voir liste ci-dessous) |
| `/ressources` | Index des 5 guides ressources |
| `/ressources/banniere-cookies-loi-25` | Guide bannière de cookies conforme |
| `/ressources/audit-loi-25-obnl` | Guide OBNL et Loi 25 |
| `/ressources/checklist-loi-25-site-web` | Checklist 12 points |
| `/ressources/penalites-loi-25-entreprise` | Guide amendes et sanctions CAI |
| `/ressources/sources-loi-25` | Références légales et institutionnelles |
| `/a-propos` | Présentation du service |
| `/politique-de-confidentialite` | Politique de confidentialité |
| `/merci` | Page confirmation (noindex) |

### Articles /actualites/

| Slug | Thème |
|---|---|
| `loi-25-quest-ce-que-cest-guide-pme` | Guide général Loi 25 |
| `cookies-consentement-loi-25-2026` | Cookies et consentement |
| `cai-inspection-site-web-comment-se-preparer` | Préparation inspection CAI |
| `politique-confidentialite-loi-25-rediger` | Rédaction politique de confidentialité |
| `banniere-cookies-loi-25-site-web` | Bannière cookies — exigences CAI |
| `loi-25-obnl-quebec-obligations` | Obligations OBNL |
| `cout-audit-loi-25-entreprise` | Coût et ROI d'un audit |

---

## Liens ajoutés (avant → après)

### Articles — relatedSlugs thématiques

| Article source | Articles liés (thématiques) |
|---|---|
| Guide PME | cookies-consentement, cai-inspection, politique-confidentialite |
| Cookies et consentement | **banniere-cookies** (nouveau), guide-pme, cai-inspection |
| Inspection CAI | **cout-audit** (nouveau), guide-pme, **banniere-cookies** (nouveau) |
| Politique de confidentialité | guide-pme, cookies-consentement, cai-inspection |
| **Bannière cookies (nouveau)** | cookies-consentement, cai-inspection, guide-pme |
| **OBNL (nouveau)** | **cout-audit** (nouveau), guide-pme, cai-inspection |
| **Coût audit (nouveau)** | guide-pme, cai-inspection, **obnl** (nouveau) |

> Avant : les 3 premiers articles arbitraires de BLOG_POSTS pour tous les articles.
> Après : 3 articles thématiquement proches via `relatedSlugs[]`.

---

### Pages ressources — liens vers articles ajoutés

| Page source | Articles ajoutés | Ancres |
|---|---|---|
| `/ressources/banniere-cookies-loi-25` | `banniere-cookies-loi-25-site-web` | "Bannière cookies Loi 25 : ce que la CAI exige exactement" |
| `/ressources/banniere-cookies-loi-25` | `cookies-consentement-loi-25-2026` | "Cookies et consentement en 2026 : ce que dit vraiment la Loi 25" |
| `/ressources/audit-loi-25-obnl` | `loi-25-obnl-quebec-obligations` | "Loi 25 et OBNL québécois : vos obligations expliquées simplement" |
| `/ressources/audit-loi-25-obnl` | `cout-audit-loi-25-entreprise` | "Coût d'un audit Loi 25 : pourquoi attendre revient plus cher" |
| `/ressources/checklist-loi-25-site-web` | `loi-25-quest-ce-que-cest-guide-pme` | "Loi 25 : le guide complet pour les PME québécoises en 2026" |
| `/ressources/checklist-loi-25-site-web` | `cai-inspection-site-web-comment-se-preparer` | "Inspection de la CAI : comment préparer votre site web" |
| `/ressources/penalites-loi-25-entreprise` | `cout-audit-loi-25-entreprise` | "Coût d'un audit Loi 25 : pourquoi attendre revient plus cher" |
| `/ressources/penalites-loi-25-entreprise` | `cai-inspection-site-web-comment-se-preparer` | "Inspection de la CAI : comment préparer votre site web" |
| `/ressources/sources-loi-25` | `loi-25-quest-ce-que-cest-guide-pme` | "Loi 25 : le guide complet pour les PME québécoises en 2026" |

### Liens CTA ajoutés aux ressources

| Page source | Page cible | Ancre |
|---|---|---|
| `/ressources/checklist-loi-25-site-web` | `/offre` | "Voir le détail de l'audit complet Loi 25" |
| `/ressources/sources-loi-25` | `/#formulaire` | "Demander mon pré-audit gratuit" |
| `/ressources/sources-loi-25` | `/offre` | "Voir l'audit complet à 450$" |

### Homepage — section "Derniers articles" ajoutée

| Page source | Pages cibles | Ancres |
|---|---|---|
| `/` | 3 articles les plus récents (tri par date) | Titres complets des articles |
| `/` | `/actualites` | "Tous les articles" |

---

## Nombre de liens internes par page

| Page | Avant | Après | Δ |
|---|---|---|---|
| `/` | 0 vers /actualites | 3 articles + /actualites | +4 |
| `/actualites/[slug]` (×7) | 3 arbitraires | 3 thématiques | = (qualité ↑) |
| `/ressources/banniere-cookies-loi-25` | 0 vers /actualites | 2 articles | +2 |
| `/ressources/audit-loi-25-obnl` | 0 vers /actualites | 2 articles | +2 |
| `/ressources/checklist-loi-25-site-web` | 0 vers /actualites, 0 vers /offre | 2 articles + /offre | +3 |
| `/ressources/penalites-loi-25-entreprise` | 0 vers /actualites | 2 articles | +2 |
| `/ressources/sources-loi-25` | 0 vers /actualites, 0 vers /offre | 1 article + /offre + /#formulaire | +3 |

**Total liens internes ajoutés : +16**

---

## Composants créés

| Composant | Fichier | Usage |
|---|---|---|
| `RelatedArticles` | `components/related-articles.tsx` | Bloc "Articles liés" réutilisable dans les pages ressources |
| `LatestArticles` | `components/sections/latest-articles.tsx` | Section "3 derniers articles" sur la homepage |

---

## Règles de maillage appliquées

| Règle | Statut |
|---|---|
| Chaque article → `/offre` | ✅ Existant dans le template `[slug]/page.tsx` |
| Chaque article → `/#formulaire` | ✅ Existant dans le template `[slug]/page.tsx` |
| Chaque article → 2-3 articles thématiques | ✅ Implémenté via `relatedSlugs[]` |
| Chaque `/ressources/` → au moins 1 article | ✅ Implémenté via `RelatedArticles` |
| `/offre` → ressources pertinentes | ✅ Existant (checklist + sources) |
| Homepage → 3 articles récents | ✅ Implémenté via `LatestArticles` |
| Ancres descriptives avec mots-clés | ✅ Titres complets des articles utilisés comme ancres |
