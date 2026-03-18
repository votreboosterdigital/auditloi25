export type BlogPost = {
  slug: string;
  titre: string;
  description: string;
  date: string;
  tempsLecture: number;
  contenu: string; // HTML
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "loi-25-quest-ce-que-cest-guide-pme",
    titre: "Loi 25 : le guide complet pour les PME québécoises en 2026",
    description:
      "Tout ce que les PME québécoises doivent savoir sur la Loi 25 : obligations, échéances et premières actions à poser.",
    date: "2026-03-18",
    tempsLecture: 6,
    contenu: `
<h2>Qu'est-ce que la Loi 25 ?</h2>
<p>La Loi 25 — officiellement intitulée <em>Loi modernisant des dispositions législatives en matière de protection des renseignements personnels</em> (L.Q. 2021, c. 25) — est la réforme la plus importante en matière de protection des données personnelles au Québec depuis les années 1990. Elle est entrée en vigueur progressivement entre 2022 et 2023 et s'applique à toutes les organisations qui collectent, utilisent ou communiquent des renseignements personnels dans le cadre de l'exercice d'une activité commerciale ou à but non lucratif au Québec.</p>

<h2>Qui est concerné par la Loi 25 ?</h2>
<p>La Loi 25 s'applique à toutes les entreprises et organisations du Québec, sans exception de taille. Que vous soyez :</p>
<ul>
  <li>une PME avec 5 employés et un site web de service,</li>
  <li>un OBNL qui gère des inscriptions en ligne,</li>
  <li>un cabinet professionnel avec un formulaire de prise de rendez-vous,</li>
  <li>une boutique en ligne qui traite des paiements,</li>
</ul>
<p>vous êtes soumis aux obligations de la Loi 25 dès que vous collectez des renseignements personnels — c'est-à-dire toute information qui permet d'identifier une personne physique : nom, courriel, numéro de téléphone, adresse IP, etc.</p>

<h2>Les 3 phases d'entrée en vigueur</h2>
<p>La Loi 25 s'est déployée en trois vagues successives :</p>
<ul>
  <li><strong>Septembre 2022 :</strong> Nomination d'un responsable de la protection des renseignements personnels, publication d'une politique de gouvernance, signalement des incidents de confidentialité à la CAI.</li>
  <li><strong>Septembre 2023 :</strong> Consentement explicite requis pour la collecte de données, droit à la portabilité, bannière de cookies conforme obligatoire, évaluation des facteurs relatifs à la vie privée (EFVP) pour les nouveaux projets à risque.</li>
  <li><strong>Septembre 2024 :</strong> Entrée en vigueur du droit à la désindexation et des règles sur les décisions automatisées basées sur les renseignements personnels.</li>
</ul>

<h2>Les obligations clés pour votre site web</h2>
<p>Pour un site web québécois en 2026, voici ce que la Loi 25 exige concrètement :</p>

<h3>1. Une bannière de cookies conforme</h3>
<p>Votre site doit afficher une bannière de consentement aux cookies avant le chargement de tout cookie non essentiel (analytics, publicité, réseaux sociaux). La bannière doit offrir un bouton « Refuser » aussi visible que le bouton « Accepter ». Les cookies ne doivent pas se déclencher avant que l'utilisateur ait fait son choix.</p>

<h3>2. Une politique de confidentialité à jour</h3>
<p>Votre politique de confidentialité doit être accessible depuis toutes les pages de votre site, rédigée en français clair, et couvrir : les types de renseignements collectés, les finalités de la collecte, la durée de conservation, les droits des personnes, les transferts à des tiers et les coordonnées du responsable.</p>

<h3>3. Des formulaires transparents</h3>
<p>Chaque formulaire qui collecte des données personnelles (contact, inscription, don, paiement) doit expliquer pourquoi ces données sont demandées et comment elles seront utilisées. Les cases liées à l'infolettre ne doivent pas être pré-cochées.</p>

<h3>4. Un responsable désigné</h3>
<p>Votre organisation doit désigner un responsable de la protection des renseignements personnels — souvent le dirigeant principal dans les PME. Ce nom doit être accessible sur votre site.</p>

<h2>Par où commencer ?</h2>
<p>Si vous ne savez pas par où commencer, la meilleure première étape est d'évaluer l'état actuel de votre site web : bannière de cookies, formulaires, politique de confidentialité. C'est précisément ce que permet notre pré-audit gratuit — un premier bilan clair, sans jargon, sous 48 heures.</p>
`,
  },
  {
    slug: "cookies-consentement-loi-25-2026",
    titre: "Cookies et consentement en 2026 : ce que dit vraiment la Loi 25",
    description:
      "La Loi 25 impose des règles strictes sur les cookies et le consentement des visiteurs. Voici ce que votre bannière doit vraiment faire.",
    date: "2026-03-18",
    tempsLecture: 5,
    contenu: `
<h2>Les cookies, au cœur de la conformité Loi 25</h2>
<p>Depuis septembre 2023, les exigences de la Loi 25 en matière de témoins de connexion (cookies) sont pleinement en vigueur. La Commission d'accès à l'information (CAI) a publié des lignes directrices claires sur ce que doit faire votre bannière — et ce qu'elle ne peut pas faire.</p>

<h2>Cookies essentiels vs cookies non essentiels : la distinction fondamentale</h2>
<p>La Loi 25 distingue deux grandes catégories de cookies :</p>
<ul>
  <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement technique du site (session de connexion, panier d'achat, préférences de langue). Ces cookies ne nécessitent pas de consentement préalable.</li>
  <li><strong>Cookies non essentiels :</strong> analytics (Google Analytics, Plausible en mode cookied), publicité (Meta Pixel, Google Ads), vidéos intégrées (YouTube), chat (Intercom, Tidio). Ces cookies nécessitent un consentement explicite <em>avant</em> d'être déposés.</li>
</ul>
<p>L'erreur la plus fréquente : charger tous les scripts dès l'ouverture du site, puis afficher la bannière en « décoration ». Si vos cookies non essentiels se déclenchent avant le choix de l'utilisateur, vous n'êtes pas conforme.</p>

<h2>Ce que doit faire votre bannière de consentement</h2>
<p>La CAI est explicite sur les exigences d'une bannière valide :</p>
<ul>
  <li>Un bouton « Refuser » aussi visible et accessible que le bouton « Accepter »</li>
  <li>Les cookies non essentiels sont bloqués jusqu'au consentement</li>
  <li>La bannière est rédigée en français, dans un langage clair et compréhensible</li>
  <li>Un lien vers votre politique de confidentialité est accessible depuis la bannière</li>
  <li>L'utilisateur peut modifier ses préférences à tout moment (lien dans le pied de page ou dans la politique)</li>
</ul>

<h2>Que faire si votre site n'a pas de bannière ?</h2>
<p>Si votre site n'affiche aucune bannière de cookies et qu'il utilise des outils tiers (Google Analytics, pixels sociaux, outils de formulaire, etc.), vous êtes en situation de non-conformité. Voici les étapes prioritaires :</p>
<ol>
  <li>Inventoriez tous les outils tiers utilisés sur votre site</li>
  <li>Installez une solution de gestion du consentement (CookieYes, Axeptio, Usercentrics) et configurez-la correctement</li>
  <li>Vérifiez que les scripts non essentiels sont bien bloqués avant consentement</li>
  <li>Mettez votre politique de confidentialité à jour pour y inclure la liste des cookies utilisés</li>
</ol>

<h2>Les 5 erreurs courantes en 2026</h2>
<ol>
  <li><strong>Bannière sans bouton de refus :</strong> un seul bouton « OK » ou « Compris » ne constitue pas un consentement valide.</li>
  <li><strong>Scripts qui se chargent avant le choix :</strong> le consentement doit précéder le dépôt des cookies, pas l'inverse.</li>
  <li><strong>Bannière en anglais seulement :</strong> la Loi 25 s'applique au Québec — votre bannière doit être en français.</li>
  <li><strong>Lien vers une politique absente ou périmée :</strong> la bannière renvoie vers une page vide ou un document rédigé avant 2022.</li>
  <li><strong>Pas de moyen de changer d'avis :</strong> si l'utilisateur a refusé ou accepté, il doit pouvoir modifier ses préférences ultérieurement.</li>
</ol>

<h2>Conclusion</h2>
<p>La conformité en matière de cookies n'est pas une question technique réservée aux développeurs. C'est une obligation légale concrète qui s'évalue directement sur votre site. Si vous n'êtes pas certain que votre bannière répond aux exigences de la CAI, un regard externe peut faire toute la différence.</p>
`,
  },
  {
    slug: "cai-inspection-site-web-comment-se-preparer",
    titre: "Inspection de la CAI : comment préparer votre site web",
    description:
      "La Commission d'accès à l'information peut inspecter votre site. Voici comment être prêt et éviter les sanctions.",
    date: "2026-03-18",
    tempsLecture: 5,
    contenu: `
<h2>La CAI peut inspecter votre site sans préavis</h2>
<p>La Commission d'accès à l'information du Québec (CAI) dispose de pouvoirs d'inspection et d'enquête élargis depuis l'entrée en vigueur de la Loi 25. Elle peut ouvrir un dossier à la suite d'une plainte d'un visiteur ou de sa propre initiative, sans avoir à vous en aviser à l'avance. Pour votre site web, cela signifie que tout ce qui est visible publiquement peut être analysé et documenté par la CAI à tout moment.</p>

<h2>Comment fonctionne une inspection CAI ?</h2>
<p>Une inspection débute généralement par l'une de ces deux voies :</p>
<ul>
  <li><strong>Plainte d'un tiers :</strong> un visiteur, un client ou même un concurrent peut déposer une plainte auprès de la CAI via son site web. La plainte décrit les pratiques problématiques observées sur votre site.</li>
  <li><strong>Enquête proactive :</strong> la CAI peut décider d'auditer un secteur ou un type d'organisations spécifique — par exemple, les cabinets professionnels, les OBNL ou les municipalités.</li>
</ul>
<p>Une fois le dossier ouvert, la CAI communique avec votre organisation pour obtenir des explications et des correctifs. Si les pratiques ne sont pas corrigées dans les délais impartis, des sanctions administratives peuvent être imposées.</p>

<h2>Ce que la CAI regarde en premier sur votre site</h2>
<p>L'expérience montre que les inspecteurs de la CAI analysent en priorité :</p>
<ul>
  <li><strong>La bannière de cookies :</strong> est-elle présente ? Offre-t-elle un vrai bouton de refus ? Les cookies non essentiels se chargent-ils avant le consentement ?</li>
  <li><strong>La politique de confidentialité :</strong> existe-t-elle ? Est-elle accessible depuis toutes les pages ? Est-elle rédigée en français et conforme aux exigences de la Loi 25 ?</li>
  <li><strong>Les formulaires :</strong> expliquent-ils pourquoi les données sont collectées ? Y a-t-il des cases pré-cochées pour l'infolettre ?</li>
  <li><strong>Les outils tiers :</strong> Google Analytics, pixels de réseaux sociaux, outils de chat — sont-ils déclarés dans votre politique et bloqués avant consentement ?</li>
</ul>

<h2>Les éléments à avoir en place avant une inspection</h2>
<p>Pour être dans une position défendable face à une inspection de la CAI, votre site doit avoir :</p>
<ol>
  <li>Une bannière de consentement aux cookies fonctionnelle, en français, avec bouton de refus visible</li>
  <li>Une politique de confidentialité à jour, accessible depuis toutes les pages (lien dans le pied de page)</li>
  <li>Des formulaires avec mentions d'information claires sur l'usage des données</li>
  <li>L'identité du responsable de la protection des renseignements personnels publiée sur le site</li>
  <li>Un registre interne des incidents de confidentialité (même vide — la tenue du registre est obligatoire)</li>
</ol>

<h2>Délai de mise en conformité</h2>
<p>Si la CAI vous contacte suite à une plainte, elle fixe généralement un délai pour corriger les pratiques identifiées — souvent entre 30 et 90 jours selon la nature des manquements. La bonne foi et les actions correctives concrètes sont des facteurs atténuants. En revanche, l'inaction ou les réponses vagues peuvent mener à une escalade du dossier.</p>
<p>La meilleure stratégie reste de ne pas attendre une plainte. Un audit préventif de votre site vous permet d'identifier les zones à risque avant qu'elles deviennent un problème.</p>
`,
  },
  {
    slug: "politique-confidentialite-loi-25-rediger",
    titre: "Rédiger une politique de confidentialité conforme à la Loi 25",
    description:
      "Les 8 éléments obligatoires d'une politique de confidentialité conforme à la Loi 25 selon la CAI.",
    date: "2026-03-18",
    tempsLecture: 4,
    contenu: `
<h2>Pourquoi votre politique de confidentialité est-elle insuffisante ?</h2>
<p>La majorité des PME et OBNL québécois ont une politique de confidentialité sur leur site — mais peu d'entre elles sont réellement conformes à la Loi 25. Soit elles ont été copiées d'un modèle générique trouvé en ligne, soit elles ont été rédigées avant 2022 et n'ont jamais été mises à jour. La CAI est explicite : une politique de confidentialité conforme à la Loi 25 doit couvrir huit éléments précis.</p>

<h2>Les 8 éléments obligatoires selon la CAI</h2>

<h3>1. Les catégories de renseignements personnels collectés</h3>
<p>Listez clairement quels types de renseignements vous collectez : nom, prénom, adresse courriel, numéro de téléphone, adresse postale, adresse IP, informations de paiement, etc. Soyez précis — « vos données personnelles » ne suffit pas.</p>
<p><em>Exemple de formulation conforme :</em> « Nous collectons les renseignements suivants via notre formulaire de contact : nom, prénom et adresse courriel. »</p>

<h3>2. Les finalités de la collecte</h3>
<p>Expliquez pourquoi vous collectez ces renseignements. La collecte doit être justifiée par une finalité légitime et précise. La collecte à des fins vagues comme « améliorer nos services » ne suffit pas.</p>
<p><em>Exemple :</em> « Nous utilisons votre adresse courriel pour répondre à vos demandes de renseignements et, avec votre consentement, pour vous envoyer notre infolettre mensuelle. »</p>

<h3>3. La durée de conservation</h3>
<p>Indiquez combien de temps vous conservez les renseignements personnels. La Loi 25 exige que la conservation ne dure pas au-delà de ce qui est nécessaire pour les finalités déclarées.</p>
<p><em>Exemple :</em> « Les renseignements transmis via notre formulaire de contact sont conservés pendant 24 mois, puis supprimés de nos systèmes. »</p>

<h3>4. Les droits des personnes concernées</h3>
<p>Expliquez les droits dont disposent vos visiteurs : droit d'accès à leurs renseignements, droit de rectification, droit de retrait du consentement, droit à la portabilité dans certains cas. Précisez comment exercer ces droits.</p>

<h3>5. Les transferts à des tiers</h3>
<p>Identifiez les principaux fournisseurs et partenaires qui reçoivent des renseignements de votre site : hébergeur, outil de formulaire, plateforme d'infolettre, outil de paiement, analytics. Si des données sont transmises à l'extérieur du Québec ou du Canada, vous devez le mentionner.</p>

<h3>6. Les coordonnées du responsable</h3>
<p>Indiquez le nom (ou le titre) et les coordonnées de la personne responsable de la protection des renseignements personnels au sein de votre organisation. Dans une PME, c'est souvent le dirigeant ou le directeur général.</p>

<h3>7. Les mécanismes de plainte</h3>
<p>Expliquez comment une personne peut porter plainte si elle estime que ses droits n'ont pas été respectés — auprès de votre organisation et, en dernier recours, auprès de la CAI.</p>

<h3>8. Les cookies et témoins de connexion</h3>
<p>Si votre site utilise des cookies, votre politique doit inclure une section dédiée qui liste les types de cookies utilisés (essentiels, analytiques, publicitaires), les outils correspondants (ex. : Google Analytics, Meta Pixel) et la façon dont l'utilisateur peut gérer ses préférences.</p>

<h2>Ce que votre politique ne devrait pas faire</h2>
<ul>
  <li>Utiliser un texte générique qui ne reflète pas vos pratiques réelles</li>
  <li>Être inaccessible (page introuvable, lien brisé, absent du pied de page)</li>
  <li>Être rédigée uniquement en anglais</li>
  <li>Ne pas avoir été mise à jour depuis l'entrée en vigueur de la Loi 25</li>
</ul>

<h2>Conclusion</h2>
<p>Une politique de confidentialité conforme à la Loi 25 n'est pas un document de 40 pages rédigé par un juriste — c'est un texte clair, honnête et à jour, qui reflète exactement ce que vous faites avec les données de vos visiteurs. Si vous n'êtes pas certain que la vôtre est à jour, un audit de votre site peut rapidement identifier les lacunes à corriger.</p>
`,
  },
];
