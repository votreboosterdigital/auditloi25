-- Table pour stocker les rapports de conformité Loi 25
-- À exécuter dans Supabase Dashboard → SQL Editor

create table if not exists rapports (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- Info prospect
  name text not null,
  email text not null,
  site_url text not null,
  main_pages text,

  -- Résultats scan
  scanned_at timestamptz not null,
  score integer not null check (score >= 0 and score <= 100),
  zones jsonb not null default '[]',
  raw_signals jsonb not null default '{}',
  scan_error text,

  -- Analyse Claude
  "analyse" jsonb not null default '{}'
);

-- Index pour récupérer un rapport par id rapidement (déjà couvert par PK)
-- Index pour recherche par email (admin)
create index if not exists rapports_email_idx on rapports (email);

-- RLS : désactivé pour la table (accès via service_role_key côté serveur uniquement)
-- Ne jamais exposer cette table via anon key côté client
alter table rapports enable row level security;

-- Aucune policy publique — seul le service role peut lire/écrire
