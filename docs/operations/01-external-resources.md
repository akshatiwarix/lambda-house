# External resources

Receipt of every external surface Lambda House depends on. A row is only filled
in after the service returns a real URL or confirmation. Nothing here is
predicted, and no placeholder is ever promoted to a public message.

## Status legend

- `confirmed` — exists, opened, and verified.
- `pending` — decided, not yet created.
- `blocked` — waiting on something named in the notes.

## Accounts and surfaces

| Service | Display name | Owner | Public URL | Created | Recovery owner | 2FA | Publishable | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Domain (GoDaddy) | thelambdahouse.com | Akshat | https://www.thelambdahouse.com | 2026-08-23 | Akshat | required | yes | confirmed, serving — connected 2026-08-23 |
| Vercel | lambda-house | Akshat (`akshat-tiwarix`) | https://lambda-house.vercel.app | 2026-08-23 | Akshat | required | yes | confirmed, deploying from `main` |
| GitHub | akshatiwarix/lambda-house | Akshat | https://github.com/akshatiwarix/lambda-house | 2026-08-23 | Akshat | required | yes | confirmed, CI green on `main` |
| Instagram | @thelambdahouse | Akshat | https://www.instagram.com/thelambdahouse | 2026-08-23 | Akshat | required | yes | pending confirmation |
| Google account | joinlambdahouse@gmail.com | Akshat | — | 2026-08-23 | Akshat | required | no | pending |
| Google Form — join | Join Lambda House | joinlambdahouse@gmail.com | https://forms.gle/AWaG97XPs3LoUaXW9 | 2026-08-23 | Akshat | inherited | yes | confirmed, **not linked from the site** |
| Luma event | Lambda House Kanpur #01 | joinlambdahouse@gmail.com | https://luma.com/3sew60e5 | 2026-08-23 | Akshat | required | yes | confirmed, live on the site |
| WhatsApp Community | Lambda House | Akshat | https://chat.whatsapp.com/El6ybbYnyhL90MMudkbV1G | 2026-08-23 | Akshat | two-step on | **yes, by explicit decision** | confirmed |
| WhatsApp group (within the Community) | Lambda House · Tech Chat | Akshat | not individually advertised | — | Akshat | two-step on | no | pending |
| WhatsApp channel (within the Community) | Lambda House · Announcements | Akshat | not individually advertised | — | Akshat | two-step on | no | pending |

## Reporting and privacy contact

`joinlambdahouse@gmail.com` is the single contact for conduct reports, privacy
requests, venue conversations, and form ownership. It is published on the
website. No personal phone number is published.

## Handles

`thelambdahouse` was taken on Instagram and matches the domain, so it is the
handle across surfaces. The earlier candidates (`joinlambdahouse`,
`lambdahousetech`, `lambdahousecommunity`) are not in use.

Instagram is the only branded social page for the pilot. Distribution otherwise
uses Akshat's personal LinkedIn and Reddit communities that permit it. No
duplicate official pages.

## Deployment inputs

The website build fails unless all four are real and HTTPS:

| Variable | Value | Status |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | https://www.thelambdahouse.com | confirmed |
| `NEXT_PUBLIC_SOCIAL_URL` | https://www.instagram.com/thelambdahouse | confirmed |
| `NEXT_PUBLIC_JOIN_FORM_URL` | https://forms.gle/AWaG97XPs3LoUaXW9 | confirmed, but nothing on the site renders it |
| `NEXT_PUBLIC_RSVP_FORM_URL` | https://luma.com/3sew60e5 | confirmed, live |

`NEXT_PUBLIC_RSVP_FORM_URL` is the one optional variable. While it is empty the
meetup badge does not render at all. It is now set, so the badge is live.

`NEXT_PUBLIC_JOIN_FORM_URL` is still required by the build but is no longer
used by any page: the "Join Lambda House" button points straight at the
WhatsApp Community. Either link the form from somewhere or drop the variable
from `getPublicLinks`, so a required value is not left with no purpose.

`NEXT_PUBLIC_SITE_URL` matches the domain the site actually serves on, so the
canonical tag, the sitemap, and social preview images all resolve. If the
canonical address ever changes, this value has to change in Vercel **and** the
site has to be redeployed; it is read at build time.

## Open items on the join form

Verified live on 2026-08-23. Three deviations from `02-form-specifications.md`:

1. **"How would you like to take part?" is a single-choice question, not
   checkboxes.** Someone who wants WhatsApp *and* meetups *and* build sessions
   can only pick one. Change the question type to Checkboxes.
2. **The rules and privacy consent checkbox is missing.** The privacy page
   states that members agree to the rules and privacy notice, and there is
   currently no recorded consent. Add a required checkbox linking to
   `/conduct` and `/privacy`.
3. **Age bands were collapsed** from six to four (Under 18 / 18-24 / 25-34 /
   35+). Collecting less is consistent with the privacy design and the
   safeguards are binary at 18, so this is acceptable, with one caveat: WhatsApp
   and Google both require users to be 13 or older, so an "Under 13" band is
   operationally useful for knowing whether someone can be added to the group
   at all.

## DNS

`www.thelambdahouse.com` is canonical; the apex redirects to it. The Vercel
project exists, so this is unblocked and outstanding. Full steps, including the
GoDaddy parking records that have to be edited rather than added around, are in
`11-domain-setup.md`. Use the exact values Vercel prints. Nothing is guessed.

## Verification checklist

- [ ] Both registration links open in a signed-out browser and accept a test
      submission.
- [ ] Conduct and privacy links inside the forms resolve.
- [ ] Responses land only in the private owner sheet or Luma guest list.
- [ ] Luma guest list is set to hidden.
- [ ] Instagram URL opens publicly.
- [ ] The published WhatsApp link is the Community link (`.../El6ybbYnyhL90MMudkbV1G`), not a bare group or channel invite.
- [x] Vercel production URL recorded above.
- [ ] Reporting contact is controlled by Akshat.
- [x] No placeholder URL remains in this file.
- [x] Custom domain connected and serving (`11-domain-setup.md`).
