<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/brand/lambda-house-wordmark-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="public/brand/lambda-house-wordmark-warm.svg">
    <img src="public/brand/lambda-house-wordmark-warm.svg" alt="Lambda House" width="420">
  </picture>
</p>

<p align="center">
  <strong>A home for people curious about technology.</strong><br>
  First chapter: Kanpur.
</p>

---

## What this is

Lambda House is a community for people who like talking about technology. Not a
course, not a startup, not a networking event. Just people who find this stuff
interesting, in a room together.

You do not need to write code. You do not need a job in tech, a degree, or
anything to show. Curiosity is genuinely the only requirement, and the site
says so because it is true.

The first meetup is **Sunday, 6 September 2026, 4:00–6:00 PM, in Kanpur**. It
is free.

## The website

<p align="center">
  <img src="docs/screenshot-home.png" alt="The Lambda House homepage: a red lambda and blinking cursor above the headline 'Bringing people together to talk tech', a short note from the organizer, and a red Join Lambda House button." width="900">
</p>

Three pages, and that is the whole thing:

- **Home** — what Lambda House is, who it is for, and the questions people ask
  before deciding to come.
- **[Conduct and safety](src/app/conduct/page.tsx)** — ten rules, enforced.
  They are what make an open-to-everyone room actually comfortable.
- **[Privacy](src/app/privacy/page.tsx)** — what gets collected, by whom, and
  for how long.

It collects nothing. No analytics, no cookies, no trackers, no accounts, no
database. Signing up happens on WhatsApp and Luma, which are ordinary services
run by other people, and the privacy page says exactly that.

## This repository

The website, plus the community's operating documents — how events run, what
the rules are, how moderation works, what the brand is.

| Where | What |
| --- | --- |
| [`docs/site.md`](docs/site.md) | Exactly what is on the site right now. Start here. |
| [`docs/operations/`](docs/operations/) | Running the community: forms, WhatsApp, venue, safety, the first event. |
| [`docs/specs/`](docs/specs/) | The blueprint, and the original build plans kept as history. |
| [`docs/brand-logo-pack.md`](docs/brand-logo-pack.md) | The wordmark, colours, and how to use them. |
| [`templates/`](templates/) | Blank trackers. |

No real member, prospect, incident, or private venue information is ever kept
in here. Those live in a private spreadsheet.

## Running it locally

Needs Node.js 22 or newer.

    npm install
    npm run dev

Other commands:

    npm run build       # production build
    npm run lint        # eslint
    npm run typecheck   # tsc --noEmit
    npm run test        # unit tests, then browser tests

You will also need a `.env.local` with four public URLs. They are never
committed, and the build refuses to start without them, so a placeholder link
cannot reach the live site by accident.

    NEXT_PUBLIC_SITE_URL        # the site's own address
    NEXT_PUBLIC_SOCIAL_URL      # Instagram
    NEXT_PUBLIC_JOIN_FORM_URL   # Google Form
    NEXT_PUBLIC_RSVP_FORM_URL   # Luma, optional — the meetup badge hides without it

[`docs/site.md`](docs/site.md) has the current values and the details.

## Come along

- **[Join on WhatsApp](https://chat.whatsapp.com/El6ybbYnyhL90MMudkbV1G)**
- **[RSVP for the first meetup](https://luma.com/3sew60e5)**
- **[Instagram](https://www.instagram.com/thelambdahouse)**
- Email: joinlambdahouse@gmail.com
