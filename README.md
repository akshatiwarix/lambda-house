# Lambda House

A home for people curious about technology. First chapter: Kanpur (`λ / KNP`).

This repository holds the public website and the non-sensitive community
operating documents for Lambda House.

## Requirements

- Node.js 22 or newer (developed on Node 26).
- npm.

## Commands

    npm run dev            # local development server
    npm run build          # production build
    npm run start          # serve the production build
    npm run lint           # eslint
    npm run typecheck      # tsc --noEmit
    npm run test:unit      # vitest
    npm run test:e2e       # playwright (desktop + mobile chromium)
    npm run test           # unit then e2e

## Environment variables

Four public URLs are required. Real values live in `.env.local` locally and in
Vercel project settings for preview and production. They are never committed.

    NEXT_PUBLIC_JOIN_FORM_URL   # Google Form: join the community
    NEXT_PUBLIC_RSVP_FORM_URL   # Luma: RSVP for the next event
    NEXT_PUBLIC_SOCIAL_URL      # https://www.instagram.com/thelambdahouse
    NEXT_PUBLIC_SITE_URL        # https://www.thelambdahouse.com

The build fails if any value is missing or is not HTTPS. Placeholder or dummy
links must never be shipped.

## Registration split

- **Join** (ongoing community interest, WhatsApp invites) uses a Google Form.
  Contact details are optional.
- **RSVP** (dated events) uses a Luma calendar. Luma always collects an email
  address; this is disclosed on the privacy page.

## Documents

- Blueprint: `docs/specs/lambda-house-community-blueprint.md`
- Operations documents: `docs/operations/`
- Blank tracker templates: `templates/`

## Rules for this repository

- No analytics, cookies, ad trackers, accounts, member profiles, database, or
  custom form backend.
- No real member, prospect, incident, venue-negotiation, or private contact data
  in Git. Those records stay in the private operating spreadsheet.
- The public WhatsApp invite link is never published on the website.
- The `λ / KNP` chapter mark is a temporary identifier, not a final logo.
