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
| Domain (GoDaddy) | thelambdahouse.com | Akshat | https://www.thelambdahouse.com | 2026-08-23 | Akshat | required | yes | confirmed (DNS not yet pointed at Vercel) |
| Vercel | lambda-house | Akshat (`akshat-tiwarix`) | assigned at first deploy | — | Akshat | required | yes | pending |
| GitHub | akshatiwarix/lambda-house | Akshat | https://github.com/akshatiwarix/lambda-house | 2026-08-23 | Akshat | required | yes | pending push |
| Instagram | @thelambdahouse | Akshat | https://www.instagram.com/thelambdahouse | 2026-08-23 | Akshat | required | yes | pending confirmation |
| Google account | joinlambdahouse@gmail.com | Akshat | — | 2026-08-23 | Akshat | required | no | pending |
| Google Form — join | Join Lambda House | joinlambdahouse@gmail.com | — | — | Akshat | inherited | yes | pending |
| Luma calendar | Lambda House | joinlambdahouse@gmail.com | — | — | Akshat | required | yes | pending |
| WhatsApp group | Lambda House · Tech Chat | Akshat | never published | — | Akshat | two-step on | **no** | pending |
| WhatsApp channel | Lambda House · Announcements | Akshat | — | — | Akshat | two-step on | yes | pending |

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
| `NEXT_PUBLIC_JOIN_FORM_URL` | — | **blocked** on the Google Form |
| `NEXT_PUBLIC_RSVP_FORM_URL` | — | **blocked** on the Luma event |

## DNS

`www.thelambdahouse.com` is canonical; the apex redirects to it. Records are
added in the GoDaddy DNS panel by Akshat after the Vercel project exists, using
the exact values Vercel prints. Nothing is guessed.

## Verification checklist

- [ ] Both registration links open in a signed-out browser and accept a test
      submission.
- [ ] Conduct and privacy links inside the forms resolve.
- [ ] Responses land only in the private owner sheet or Luma guest list.
- [ ] Luma guest list is set to hidden.
- [ ] Instagram URL opens publicly.
- [ ] No WhatsApp invite link appears on any public page.
- [ ] Vercel production URL recorded above.
- [ ] Reporting contact is controlled by Akshat.
- [ ] No placeholder URL remains in this file.
