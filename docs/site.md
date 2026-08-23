# The website, as it stands

What is actually on the site right now. When a plan in `specs/` disagrees with
this file, this file is right and the plan is history.

Verified against the live production deployment on 2026-08-23.

## Where it lives

| Thing | Value |
| --- | --- |
| Production | https://www.thelambdahouse.com |
| Also serves | https://lambda-house.vercel.app, and `thelambdahouse.com` 308s to the `www` address |
| Repository | https://github.com/akshatiwarix/lambda-house |
| Vercel project | `lambda-house`, team `akshat-tiwarix`, Node 24.x |

The custom domain was connected on 2026-08-23. `NEXT_PUBLIC_SITE_URL` matches
it, so the canonical link tag, the sitemap, and every Open Graph and Twitter
image URL resolve. Link previews work.

DNS lives at GoDaddy: one `A` record on the apex to `216.198.79.1`, and a
`CNAME` on `www` to a project-specific Vercel target. `operations/11-domain-setup.md`
has the values and what to check if it ever breaks.

## Pages

Three, and no more:

| Path | Title | What it is |
| --- | --- | --- |
| `/` | Lambda House \| Come talk tech with us | The whole pitch |
| `/conduct` | Conduct and safety \| Lambda House | Ten numbered rules |
| `/privacy` | Privacy \| Lambda House | What is collected, by whom, and for how long |

`robots.ts` permits indexing and points at the sitemap. `sitemap.ts` emits
exactly those three paths.

## The homepage

Three sections. Earlier plans describe eight; those sections were built and
then deliberately cut.

**Header.** The wordmark, linking home, and a decorative red lambda on the
right. No navigation links. The wordmark is inlined as an SVG component so it
inherits the surrounding text colour.

**1. Hero** (`#about`)

- A pill above the headline linking to Luma: "First meetup · Sun 6 Sep ·
  4:00–6:00 PM · Kanpur · RSVP on Luma". It renders only while
  `NEXT_PUBLIC_RSVP_FORM_URL` is set, so it disappears rather than going stale.
- A large red `λ` followed by a blinking block cursor.
- Headline: **Bringing people together to talk tech**
- The founder's paragraph, in the first person, signed "— Akshat".
- One button: **Join Lambda House**, linking to the WhatsApp Community.

**2. Who it is for** (`#who`)

Heading: "Curiosity about technology is the only requirement." Then a
six-cell grid:

1. People who write code, and people who never have
2. Designers, hardware tinkerers, and gamers
3. Students, working people, and career changers
4. Researchers, product people, and self-taught builders
5. Anyone who reads about technology for fun
6. Complete beginners who just find this stuff interesting

Below it, one line pointing at `/conduct`.

**3. Questions people ask first** (`#faq`)

Heading: "Before you decide to come." Four expanding questions:

| Question | Answer |
| --- | --- |
| Can school students attend? | Yes. Lambda House is open to every age, and anyone may attend independently. |
| Do I need to bring a project? | No. Bring a question, a curiosity, or just yourself. |
| Can I attend alone? | Yes. Most people come to meet someone new. |
| What language will people speak? | Use whichever of Hindi or English makes the conversation comfortable. |

**Footer.** The wordmark, a copyright line, and three links: Instagram,
WhatsApp, Email Us.

## Every outbound link on the site

| Label | Destination | Where |
| --- | --- | --- |
| RSVP on Luma | https://luma.com/3sew60e5 | Hero badge |
| Join Lambda House | https://chat.whatsapp.com/El6ybbYnyhL90MMudkbV1G | Hero button |
| Instagram | https://www.instagram.com/thelambdahouse | Footer |
| WhatsApp | https://chat.whatsapp.com/El6ybbYnyhL90MMudkbV1G | Footer |
| Email Us | joinlambdahouse@gmail.com | Footer |
| Read the conduct and safety policy | `/conduct` | Who it is for |

The WhatsApp Community link is published deliberately. See
`operations/03-whatsapp-setup.md` for the reasoning and what it does not cover.

**The join Google Form is not linked from anywhere on the site.** The hero
button used to point at it and now points at WhatsApp directly.
`NEXT_PUBLIC_JOIN_FORM_URL` is still required by the build and still validated,
but nothing renders it. Either wire it back into a page or drop it from
`getPublicLinks`; leaving a required variable that nothing uses will confuse
whoever deploys this next.

## The event, as the site states it

| Field | Value |
| --- | --- |
| Name | Lambda House Kanpur #01 |
| Date | Sunday, September 6, 2026 |
| Time | 4:00–6:00 PM (Asia/Kolkata) |
| Venue | Kanpur · venue confirmation in progress |
| Price | Free |
| Capacity | Limited by venue capacity |

The venue is still `pending` in `src/content/community.ts`. No address is
published anywhere until it is booked.

## Environment variables

Four, all validated at build time. The build fails if any required one is
missing or is not HTTPS.

| Variable | Required | Current value |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | yes | https://www.thelambdahouse.com |
| `NEXT_PUBLIC_SOCIAL_URL` | yes | https://www.instagram.com/thelambdahouse |
| `NEXT_PUBLIC_JOIN_FORM_URL` | yes | Google Form — required but unused, see above |
| `NEXT_PUBLIC_RSVP_FORM_URL` | no | https://luma.com/3sew60e5 |

`NEXT_PUBLIC_RSVP_FORM_URL` is the only optional one. While it is empty the
meetup badge does not render at all.

## Motion

Deliberately small. Everything is CSS; no animation library, and no component
on the site is a client component.

| What | Behaviour |
| --- | --- |
| Hero cursor | Blinks, 1.15s |
| Meetup badge dot | A halo pulses outward every 2s |
| Buttons and the badge | Scale to 0.97 on press |
| FAQ answers | Expand over 260ms |
| Audience cells | Rise into view as you scroll to them |
| Links | Fade on hover |

`prefers-reduced-motion` makes all of it gentler rather than removing feedback,
`prefers-contrast: more` strengthens the hairlines, and
`prefers-reduced-transparency` drops the grain overlay. `e2e/motion.spec.ts`
guards this.

## What the site deliberately does not have

No analytics, cookies, ad trackers, accounts, member profiles, database, or
custom form backend. No blog, project directory, or event software. No stored
member data of any kind — everything that collects a person's details is an
external service (Luma, Google Forms, WhatsApp) owned by
`joinlambdahouse@gmail.com`.

## Checks

    npm run lint        npm run typecheck
    npm run test:unit   npm run test:e2e

The end-to-end suite covers the landing page, both policy pages, motion
behaviour, mobile overflow, the exact WhatsApp URL, and runs axe on all three
pages at desktop and Pixel 7 sizes.
