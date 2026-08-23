# Connecting thelambdahouse.com to Vercel

**Done on 2026-08-23.** The site serves on `https://www.thelambdahouse.com`,
and `thelambdahouse.com` 308s to it. This is kept as the record of what was
changed and what to check if it ever breaks.

Final state at GoDaddy: one `A` record on `@` to `216.198.79.1`, and a `CNAME`
on `www` to `b7494d8ce686732a.vercel-dns-017.com`, both at a half-hour TTL. Both
GoDaddy parking `A` records (`3.33.130.190`, `15.197.148.33`) were removed, and
the `www` CNAME no longer points back at the apex. The `secureserver.net` email
and DKIM records were left untouched.

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
3. Enter only **one** of the two. Leave "Redirect apex domains to www"
   checked and Vercel expands it into both, so entering both rows is rejected
   with "Domain overlaps another row after adding apex and www variants".
   Set "Connect to an environment" to Production.

Vercel ends up with `www.thelambdahouse.com` on Production and
`thelambdahouse.com` issuing a 308 to it, which is what was wanted.

Vercel now shows a "Invalid Configuration" warning and the exact DNS records it
wants. Leave this tab open. **Copy the values it prints rather than the values
below** — Vercel hands different projects different CNAME targets, and the
dashboard is the only authority on yours.

## What is on the domain right now

Checked 2026-08-23:

| Record | Current value | What it is |
| --- | --- | --- |
| Nameservers | `ns53.domaincontrol.com`, `ns54.domaincontrol.com` | GoDaddy's own, so DNS is managed in the GoDaddy panel |
| `A` on `@` | `3.33.130.190` **and** `15.197.148.33` | Two records, both GoDaddy parking |
| `CNAME` on `www` | `thelambdahouse.com` | Points back at the apex, so `www` parks too |
| `CAA` | none | Good. A wrong `CAA` would stop Vercel issuing a certificate |
| `MX` | none | No email on this domain, so there is nothing to preserve |
| `TXT` | none | Nothing to preserve |

So both records you need already exist with the wrong values. This is an edit
job, not an add job, and there is nothing else on the domain worth protecting.

## Step 2 — Replace the records at GoDaddy

Go to the DNS panel for `thelambdahouse.com` at GoDaddy. You are changing the
three records above into these two:

These are the values Vercel issued for this project on 2026-08-23:

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| `A` | `@` | `216.198.79.1` | 600, or the lowest GoDaddy offers |
| `CNAME` | `www` | `b7494d8ce686732a.vercel-dns-017.com` | 600, or the lowest offered |

Both differ from the values Vercel publishes in its general documentation, which
are `76.76.21.21` and `cname.vercel-dns-0.com`. Vercel is expanding its IP range
and issues each project its own CNAME target; its own panel says the legacy
records still work, but there is no reason to use them. **The dashboard is the
authority. If it ever shows something different from the table above, the
dashboard is right.**

Enter the CNAME **without** the trailing dot. Vercel displays it as
`b7494d8ce686732a.vercel-dns-017.com.`; GoDaddy adds the dot itself.

Order of operations:

1. **Delete one** of the two `A` records on `@`, and **edit the other** to
   `216.198.79.1`. You must end with exactly one `A` record on `@`. Leaving both
   parking addresses in place alongside Vercel's would send roughly two out of
   three visitors to the parking page, and it would look intermittent rather
   than broken.
2. **Edit the `www` CNAME** from `thelambdahouse.com` to the Vercel target.
   Do not add a second one.

Two things that go wrong here:

- **GoDaddy Domain Forwarding.** Those parking addresses are what GoDaddy's
  forwarding and parking feature uses. If forwarding is switched on for this
  domain, GoDaddy will put its own records back and quietly undo your work.
  Find it under the domain's settings and turn it off **before** editing DNS.
- **The Name field takes `@` and `www`**, not `thelambdahouse.com` and
  `www.thelambdahouse.com`, and no trailing dot.

## Alternative: hand DNS to Vercel entirely

Instead of Steps 2, you can change the nameservers at GoDaddy to
`ns1.vercel-dns.com` and `ns2.vercel-dns.com`. Vercel then manages every record
and configures the site itself, so there is nothing to copy by hand.

It is the better option if you expect to add more records later, and the worse
one if you ever want email or another service on this domain managed at
GoDaddy, because the GoDaddy DNS panel stops being the place records live.
For one website and no email, the two records above are simpler and easier to
undo. Nameserver changes also take longer to propagate.

## Step 3 — Wait, then verify

DNS usually takes minutes and is allowed to take up to 48 hours. The Vercel
domains page flips from "Invalid Configuration" to a green check on its own;
there is a refresh button.

From a terminal:

    dig +short thelambdahouse.com A
    dig +short www.thelambdahouse.com

The first should return `216.198.79.1` **and nothing else**. If either
`3.33.130.190` or `15.197.148.33` still appears, a parking record survived the
edit, or GoDaddy forwarding put it back.

The second should return `b7494d8ce686732a.vercel-dns-017.com.` rather than
`thelambdahouse.com.`.

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
