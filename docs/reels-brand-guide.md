# Lambda House — Reels & Shorts Brand Guide

A working reference for anyone cutting vertical video for Lambda House: Instagram Reels, YouTube Shorts, WhatsApp status. Built from the same tokens as thelambdahouse.com, so video and web never drift apart.

## What Lambda House is

A community for people curious about technology, first chapter in Kanpur. Not a course, not a startup, not a networking event. The tagline: **Bringing people together to talk tech.** The one rule: **Curiosity about technology is the only requirement.**

Every video should feel like it's from the same person who wrote the site's founder note — direct, warm, first-person, zero corporate polish.

## Colour

| Name | Hex | Role |
| --- | --- | --- |
| Carbon | `#070707` | Dominant background, ~85% of any frame |
| Warm white | `#F5F2EA` | Primary text and the reversed logo, ~85% with carbon |
| Signal red | `#FF2A1A` | Accent only — 10–15% of a frame. CTAs, key words, the λ mark |
| Steel grey | `#A7ABB5` | Secondary text, captions, timestamps |

**Rule of thumb:** if a frame has more red than a headline word or one graphic element, it's off-brand. Red marks the one thing you want the eye to land on — never a full-screen wash, never a gradient.

Background stays carbon or warm white, never both split-screen, never a stock gradient or duotone.

## Type

Three families, each with one job. Same as the site.

- **Funnel Display (bold)** — big on-screen statements, hook text, section titles. Tight tracking, tight leading.
- **Inter** — anything read at length: spoken-word captions, longer on-screen sentences.
- **Space Mono** — labels, tags, timestamps, CTA buttons. Always uppercase, always letter-spaced (~0.1–0.14em). This is the "terminal" voice — `λ / KNP`, dates, the blinking-cursor motif.

Don't substitute a system font. Don't use more than these three in one video.

## The mark

- The wordmark is horizontal only. Never stack it, stretch it, outline it, rotate it, or bolt a location onto it.
- Clear space around it is at least the height of its own lowercase letters.
- Never render the full wordmark under ~120px wide in the final export. Below that, use the standalone λ favicon mark instead.
- On carbon, use the warm-white/dark wordmark. On a warm-white card or end slate, use the carbon wordmark. Don't recolour it anything else.
- `λ / KNP` (the chapter mark) is fair game as a small corner bug or outro tag — it's already the site's shorthand for "Lambda House, Kanpur chapter."

Source files: `public/brand/` — `lambda-house-wordmark-{transparent,warm,dark,monochrome}.svg` plus PNG exports at 2x.

## Voice

First person, plural where it's about the group. The site's own words are the calibration:

> "I wanted people in Kanpur I could talk tech with. So I am starting the group I was looking for."

> "Come for the conversation, stay because you found someone worth talking to."

- Say what it costs and what it needs: free, no project required, come alone if you want.
- Never say "networking," "ecosystem," "synergy," or anything that sounds like a startup pitch deck.
- Short sentences. Contractions are fine. It's a person talking, not a brand account.
- Humour is dry, not jokey. No exclamation-point energy.

## Frame safe zones (1080×1920)

Reels and Shorts both cover the top and bottom of the frame with platform UI. Keep anything essential — the hook line, the CTA, the wordmark — inside the middle:

- Top exclusion: top ~250px (profile row, follow button)
- Bottom exclusion: bottom ~250px (caption, like/share rail, audio ticker)
- Safe title-safe box: roughly the centre 1080×1420

Background art (the grain texture, a red λ watermark) can bleed to the full frame — only text and the logo need to respect the safe zone.

## Motion

The site's own rule: *"Deliberately small... one curve and three durations for everything that moves... a decelerating curve only, nothing needs a spring."* Carry that into video:

- Cuts and hard edits over cross-dissolves. If something eases, it eases out (decelerate), never bounces or overshoots.
- Text enters the way the site's audience grid does: a small rise + fade, not a slide-in or a spin.
- The one recurring motif worth reusing: the **blinking block cursor** after a line of mono text — it's the site's hero moment, and it reads instantly as "Lambda House" even muted.
- No confetti, no glitch transitions, no whooshes. If it wouldn't happen in CSS on the site, don't animate it in the edit.

## Structuring a reel

Borrow the site's own pillars instead of inventing new hooks each time:

1. **Hook (0–2s).** One line in Funnel Display, mono-cursor treatment optional. Pull from the site's own headline or FAQ questions — e.g. "Can I come alone?", "Do I need to bring a project?"
2. **Body.** Answer it the way the FAQ does: short, plain, no hedging. Or use the audience grid as a list format — "designers, hardware tinkerers, gamers, complete beginners."
3. **CTA (last 2–3s).** Wordmark + one line, mono uppercase: **JOIN LAMBDA HOUSE**. Link goes to the WhatsApp community — that's the one CTA the site itself uses for "come in."

Content sources already written and approved for reuse: the FAQ table, the audience list, the founder story, and the event basics — all in `docs/site.md` and `src/content/community.ts`.

## Don't

- Don't invent a new colour, gradient, or font "just for this video."
- Don't put the location in the logo. Location goes in copy or the `λ / KNP` tag, never welded to the wordmark.
- Don't use stock corporate B-roll (handshakes, skyline timelapses, generic "tech" montages). If there's no real footage, hold on type instead.
- Don't oversell it. No "don't miss out," no urgency countdowns — the site doesn't do that and the videos shouldn't either.

## Assets

| File | Use |
| --- | --- |
| `public/brand/lambda-house-wordmark-transparent.svg` | Overlay on any background you control |
| `public/brand/lambda-house-wordmark-warm.svg` | Wordmark on carbon (light-on-dark) |
| `public/brand/lambda-house-wordmark-dark.svg` | Wordmark on warm white (dark-on-light) |
| `public/brand/lambda-house-favicon.svg` | Small λ mark for corner bugs, sub-120px placements |
| `public/brand/lambda-house-instagram-profile-1080.png` | Profile image, already circular-crop-safe |

Full asset rules: `docs/brand-logo-pack.md`. Full site copy and structure: `docs/site.md`.
