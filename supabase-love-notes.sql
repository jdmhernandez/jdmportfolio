-- Run this in Supabase → SQL Editor (free tier works)
-- Enables shared sticky notes between you and Angela on the live site

create table if not exists love_notes (
  id uuid primary key default gen_random_uuid(),
  room_key text not null,
  author text not null check (author in ('angela', 'justin')),
  body text not null,
  color text not null default 'lemon',
  created_at timestamptz not null default now()
);

alter table love_notes enable row level security;

create policy "love_notes_all" on love_notes
  for all
  using (room_key = 'angela-justin')
  with check (room_key = 'angela-justin');
