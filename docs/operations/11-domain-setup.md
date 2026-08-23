# Connecting thelambdahouse.com to Vercel

Status as of 2026-08-23: the domain is **bought and not connected**. The site
serves from `lambda-house.vercel.app`. Everything below is Akshat's to do; none
of it can be done from the repository.

## Why this is worth doing before any outreach

`NEXT_PUBLIC_SITE_URL` is already `https://www.thelambdahouse.com`. That value
becomes the canonical link tag, the sitemap entries, and every Open Graph and
Twitter image URL. Right now those all point at a domain that does not answer.

The practical effect: paste the Vercel link into WhatsApp, Instagram, or
LinkedIn today and the preview card tries to load its image from
`www.thelambdahouse.com`, which fails. Search engines are told the real address
is a domain that returns nothing. Connecting the domain fixes every one of
those at once, and no code change is needed.

## Decide first: which address is the real one

`www.thelambdahouse.com` is canonical, and the bare `thelambdahouse.com`
redirects to it. This is already what `NEXT_PUBLIC_SITE_URL` says, so keeping
it means nothing in the codebase changes.

If you would rather the bare domain be canonical, that is a fine choice, but it
is a decision to make **now**, not after: `NEXT_PUBLIC_SITE_URL` has to change
in Vercel and the site has to be redeployed, or the canonical tag will point at
the wrong one of the two.

## Step 1 — Add both domains in Vercel

1. Go to https://vercel.com/akshat-tiwarix/lambda-house/settings/domains
2. Enter `www.thelambdahouse.com` and add it. Choose the option that makes it
   the primary domain.
3. Enter `thelambdahouse.com` and add it. When Vercel offers to redirect it,
   point it at `www.thelambdahouse.com` with a 307 or 308.

Vercel now shows a "Invalid Configuration" warning and the exact DNS records it
wants. Leave this tab open. **Copy the values it prints rather than the values
below** — Vercel hands different projects different CNAME targets, and the
dashboard is the only authority on yours.

## Step 2 — Add the records at GoDaddy

Go to the DNS panel for `thelambdahouse.com` at GoDaddy. You need two records.
As of this writing Vercel's published values are:

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| `A` | `@` | `76.76.21.21` | 600 or the lowest offered |
| `CNAME` | `www` | `cname.vercel-dns-0.com` | 600 or the lowest offered |

Again: if the Vercel tab shows a different CNAME target, Vercel's is right.

Two things that go wrong here:

- **GoDaddy parking records.** A new domain usually ships with its own `A` record
  on `@` pointing at GoDaddy's parking page, and often a `CNAME` on `www`. Edit
  those existing records rather than adding a second set. Two `A` records on `@`
  will send visitors to the parking page about half the time.
- **Do not add a trailing dot or the full domain in the Name field.** GoDaddy
  wants `@` and `www`, not `thelambdahouse.com` and `www.thelambdahouse.com`.

Leave every unrelated record alone, particularly `MX` records if email is ever
set up on this domain.

## Step 3 — Wait, then verify

DNS usually takes minutes and is allowed to take up to 48 hours. The Vercel
domains page flips from "Invalid Configuration" to a green check on its own;
there is a refresh button.

From a terminal:

    dig www.thelambdahouse.com +short
    dig thelambdahouse.com +short

The first should return a Vercel CNAME target, the second `76.76.21.21`.

## Step 4 — Confirm the certificate

Vercel issues a Let's Encrypt certificate automatically once DNS resolves.
Wait for both domains to show "Valid Configuration" with a lock. Do not share
the link before this: an early visitor gets a browser security warning, which
is the worst possible first impression for a community asking strangers to
trust it.

## Step 5 — Check the real thing

- [ ] `https://www.thelambdahouse.com` loads the site.
- [ ] `https://thelambdahouse.com` redirects to the `www` address.
- [ ] `http://` versions redirect to `https://`.
- [ ] View source and confirm `<link rel="canonical">` matches the address you
      are actually on.
- [ ] `https://www.thelambdahouse.com/conduct` and `/privacy` load.
- [ ] `https://www.thelambdahouse.com/sitemap.xml` lists all three pages with
      the real domain.
- [ ] Paste the link into a WhatsApp chat with yourself and confirm the preview
      card shows the image and the right title.
- [ ] Update the Domain and Vercel rows in `01-external-resources.md`.

## If you change your mind about which address is canonical

1. Change `NEXT_PUBLIC_SITE_URL` in Vercel → Settings → Environment Variables,
   for Production and Preview.
2. Redeploy. The value is read at build time, so an existing deployment will
   not pick it up.
3. Swap which domain is primary and which redirects in the domains panel.
4. Re-run the checks above.
