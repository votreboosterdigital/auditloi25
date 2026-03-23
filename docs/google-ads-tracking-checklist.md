# Google Ads Tracking — Checklist de vérification

## Variables d'environnement à ajouter dans Vercel

Aller dans **Vercel → Project → Settings → Environment Variables** et ajouter :

| Variable | Description | Exemple |
|---|---|---|
| `NEXT_PUBLIC_GADS_ID` | ID de mesure Google Ads | `AW-123456789` |
| `NEXT_PUBLIC_GADS_CONVERSION_SUBMIT` | Label de conversion — soumission formulaire | `AbCdEfGhIjK` |
| `NEXT_PUBLIC_GADS_CONVERSION_CLICK` | Label de conversion — clic vers /offre | `XyZaBcDeFgH` |

> **Où trouver ces valeurs :** Google Ads → Outils → Suivi des conversions → sélectionner la conversion → "Balise" → le label est la partie après le `/` dans `send_to`.

---

## Événements implémentés

### 1. Conversion principale — Soumission formulaire pré-audit
- **Fichier :** `components/sections/how-it-works.tsx`
- **Déclenchement :** Après réception d'une réponse HTTP 200 de `/api/lead` (jamais sur clic, jamais en cas d'erreur)
- **Event gtag :** `gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXX/YYYYYYY' })`
- **Variable :** `NEXT_PUBLIC_GADS_CONVERSION_SUBMIT`

### 2. Conversion secondaire — Clic vers /offre
- **Fichiers :** `components/sections/hero.tsx` (2 liens), `components/sections/pricing.tsx` (1 lien)
- **Déclenchement :** onClick sur les liens pointant vers `/offre`
- **Event gtag :** `gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXX/ZZZZZZZ' })`
- **Variable :** `NEXT_PUBLIC_GADS_CONVERSION_CLICK`

### 3. Page view (remarketing automatique)
- **Fichier :** `app/layout.tsx`
- **Déclenchement :** Automatiquement à chaque chargement de page via `gtag('config', 'AW-XXXXXXXXX')`
- **Aucune action requise** — la config gtag inclut le tracking remarketing

---

## Consentement — Consent Mode v2

Le tracking respecte CookieYes (déjà intégré sur le site) :

| Catégorie CookieYes | Signal gtag |
|---|---|
| `advertisement` | `ad_storage`, `ad_user_data`, `ad_personalization` |
| `analytics` | `analytics_storage` |

- **Avant consentement :** tous les signaux sont `denied` — aucune donnée envoyée
- **Après acceptation :** signaux mis à jour via `cookieyes_consent_update`
- **Consent Mode v2 activé :** Google modélise les conversions même pour les refus (données agrégées)

---

## Vérification avec Google Tag Assistant

### Étape 1 — Installer l'extension
- Chrome Web Store → "Google Tag Assistant Companion"
- Ou utiliser [tagassistant.google.com](https://tagassistant.google.com)

### Étape 2 — Vérifier le tag Google Ads
1. Ouvrir auditloi25.ca dans Chrome
2. Ouvrir Tag Assistant → "Add domain" → entrer `auditloi25.ca`
3. Vérifier que le tag `AW-XXXXXXXXX` apparaît dans la liste
4. Vérifier le statut : vert = tag détecté et fonctionnel

### Étape 3 — Tester la conversion soumission formulaire
1. Dans Tag Assistant → ouvrir l'onglet "Events"
2. Remplir et soumettre le formulaire de pré-audit sur la page d'accueil
3. Vérifier qu'un event `conversion` apparaît avec `send_to: AW-XXXXXXXXX/YYYYYYY`
4. ⚠️ Accepter d'abord les cookies dans la bannière CookieYes — sinon l'event ne se déclenche pas

### Étape 4 — Tester la conversion clic /offre
1. Cliquer sur "Voir l'offre d'audit Loi 25" (hero ou pricing)
2. Vérifier l'event `conversion` avec `send_to: AW-XXXXXXXXX/ZZZZZZZ`

### Étape 5 — Tester le Consent Mode
1. Ouvrir le site en navigation privée (pas de consentement préalable)
2. Dans Tag Assistant → vérifier que `ad_storage: denied` est actif
3. Accepter les cookies dans CookieYes
4. Vérifier que `ad_storage` passe à `granted` dans les events

---

## Checklist avant lancement campagne Google Ads

- [ ] Variables d'environnement ajoutées dans Vercel (production)
- [ ] Redéploiement Vercel déclenché après ajout des variables
- [ ] Tag Google Ads visible dans Tag Assistant (tag vert)
- [ ] Event `conversion` déclenché à la soumission du formulaire
- [ ] Event `conversion` déclenché au clic sur /offre
- [ ] Consent Mode visible dans Tag Assistant (denied par défaut, granted après acceptation)
- [ ] Conversions visibles dans Google Ads → Outils → Suivi des conversions (délai 24-48h)
- [ ] Campagne "AuditLoi25 - Search Quebec" créée selon `google-ads-setup.md`
