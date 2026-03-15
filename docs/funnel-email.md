# Funnel email — Pré-audit Loi 25

## Séquence résumée

| # | Fichier | Timing | Objectif | Call-to-action principal |
|---|---------|--------|----------|--------------------------|
| 1 | `01-confirmation.md` | Immédiat après soumission | Rassurer, confirmer le délai, zéro friction | Aucun (message transactionnel) |
| 2 | `02-rapport-pre-audit.md` | < 48 h ouvrables | Livrer le pré-audit, présenter l'audit complet | Répondre au courriel pour demander un devis |
| 3 | `03-relance.md` | J+3 à J+5 après email 2 | Lever les objections prix/urgence/ressources | Répondre pour recevoir le devis en 24 h |
| 4 | `04-dernier-rappel.md` | J+7 à J+10 après email 2 | Dernière chance, clôture douce du dossier | Répondre avant clôture du dossier |

---

## Notes sur le contenu

- Les emails 1 et 4 sont courts et légers — pas de pression, friction minimale.
- L'email 2 contient des placeholders `[...]` à remplir manuellement lors de chaque livraison de pré-audit.
- L'email 3 répond aux 3 objections les plus fréquentes : urgence, ressources internes, budget.
- Tous les emails sont personnalisables avec le prénom et l'URL du site.

---

## Intégration technique (options)

### Option A — Manuel (court terme)
`/api/lead` enregistre la demande dans une base de données ou Google Sheets.
Les emails sont envoyés manuellement en utilisant les fichiers `.md` comme modèles.

### Option B — Semi-automatisé via webhook
Ajouter dans `/api/lead` un appel webhook vers **Make (ex-Integromat)** ou **Zapier** :
```ts
// Dans /api/lead, après l'enregistrement
await fetch(process.env.WEBHOOK_URL!, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, siteUrl }),
});
```
Make/Zapier déclenche :
- Email 1 immédiatement (via SendGrid, Brevo, Mailchimp, etc.)
- Email 3 et 4 après délai si aucune réponse (via logique conditionnelle)
- Email 2 reste manuel (livraison du pré-audit)

### Option C — Automatisation complète (moyen terme)
Intégrer un outil d'emailing avec API (Brevo recommandé pour les PME québécoises) :
- Créer une séquence d'automatisation dans Brevo
- Déclencher depuis `/api/lead` via l'API Brevo
- Email 2 peut être semi-automatisé avec un template à compléter par l'auditeur

### Variables à passer dans le webhook / API
```json
{
  "name": "Marie Tremblay",
  "email": "marie@exemple.ca",
  "siteUrl": "https://www.monsite.ca",
  "mainPages": "Accueil, Services, Contact",
  "submittedAt": "2026-03-14T15:30:00Z"
}
```

---

## Outils compatibles
- **Brevo** (ex-Sendinblue) — RGPD / Loi 25 friendly, serveurs au Canada disponibles
- **Mailchimp** — simple pour démarrer, limites pour les séquences avancées
- **Make / Zapier** — pour orchestrer la logique sans toucher au backend
- **Resend** — pour les emails transactionnels (email 1) via API Next.js native
