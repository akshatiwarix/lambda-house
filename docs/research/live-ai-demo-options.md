# Live AI demo options for a build session

For the "build session" meetup format (see `operations/09-follow-up-and-metrics.md`
for the hangout/build-session cadence): a few minutes, in front of ~10-15
mostly non-technical people, showing "the power of building with AI." Not a
tutorial — something that materialises visibly from a sentence and is
impressive to *watch*, whether or not anyone follows the mechanics. Akshat's
own device and accounts; audience laptops/subscriptions are not required.

Researched September 2026, verified against each product's own site,
docs, or announcement post where a direct fetch was possible. A few vendor
pages (noted below) block automated fetching and are cited from Google's
indexed copy of the same URL instead of secondary blog writeups.

## What matters for this room

- **Wow per minute of setup.** The result has to appear in the two to five
  minutes available, and ideally build up visibly rather than land as a
  single static reveal.
- **Resilience to bad wifi.** Kanpur venue wifi is an unknown. Anything that
  needs a large upload/download, or a long-running generation, is a risk.
- **Zero mechanics required to appreciate it.** Non-technical audience — the
  value has to be legible without understanding prompts, code, or models.
- **Cost is Akshat's, not the audience's** — but cheaper/free still matters,
  since it's one less thing to keep paying for every meetup.

## Option A — Claude.ai Artifacts: build a tiny interactive app or game live in chat

**Tool:** Claude.ai (web or mobile), the Artifacts feature. Anthropic's own
description: Artifacts let you "instantly create shareable apps, tools, and
games" from a plain description, with no coding, and share the result as a
live link others can open.
[claude.com/blog/build-artifacts](https://claude.com/blog/build-artifacts)

**Time live:** A short prompt ("build me a one-screen game where tapping a
lambda symbol makes it grow, with a counter") renders a working, clickable
artifact in the side panel typically within a few tens of seconds to about a
minute, then can be refined by asking for one change at a time.

**Prep vs. live:** Test the exact prompt beforehand so timing is known, and
optionally have a saved/refined version ready to fall back to. The live part
is genuinely live — typing the prompt in front of the room and watching it
build.

**Internet/bandwidth risk:** Needs a live connection to Claude's servers, but
the payload is small (a prompt in, HTML/JS/SVG out) — much lighter than image
or video generation. A phone hotspot is a workable backup if venue wifi
fails. No offline mode exists for this feature.

**Cost:** Works on the **Free** plan — Artifacts is not gated to a paid tier.
Anthropic's plan comparison page confirms Claude Code and Claude Design
require Pro ($17-20/month), but does not list Artifacts as Pro-only; it has
been available to Free, Pro, and Max users since general availability.
[claude.com/blog/build-artifacts](https://claude.com/blog/build-artifacts),
[claude.com/pricing](https://claude.com/pricing)

**Why it lands:** The audience watches a sentence turn into something they
can literally tap and play with, on the spot — no code visible unless you
choose to show it. This is the most direct "I described it, and now it's a
real, working thing" moment on this list, which maps closest to "the power
of building with AI" rather than "AI made a picture."

## Option B — Claude Design: build a one-pager, poster, or mini-deck live

**Tool:** Claude Design (Anthropic Labs), a visual canvas of editable
"artboards" reached from claude.ai or, since August 2026, via the `/design`
skill in Claude Code. Powered by Claude Opus 4.7.
[anthropic.com/news/claude-design-anthropic-labs](https://www.anthropic.com/news/claude-design-anthropic-labs),
[code.claude.com/docs/en/whats-new/2026-w34](https://code.claude.com/docs/en/whats-new/2026-w34)

**Time live:** Describe the brief, Claude produces a first version, then you
refine it by chat, inline comments, or slider controls. Anthropic's own
announcement includes a case study framed exactly as this use case: going
"from a rough idea to a working prototype before anyone leaves the room,"
and cites a page that took 20+ prompts elsewhere needing only 2 in Claude
Design. [anthropic.com/news/claude-design-anthropic-labs](https://www.anthropic.com/news/claude-design-anthropic-labs)

**Prep vs. live:** Same pattern as Option A — rehearse the brief, keep the
live moment to typing it and picking/refining a result.

**Internet/bandwidth risk:** Live connection required; no official offline
mode. Payload is heavier than a chat artifact (a rendered visual canvas) but
still text-and-layout, not video.

**Cost:** Research preview, **Pro/Max/Team/Enterprise only** ($17-20/month
and up) — not available on the Free plan.
[anthropic.com/news/claude-design-anthropic-labs](https://www.anthropic.com/news/claude-design-anthropic-labs)

**Why it lands:** Very visual, and Anthropic is explicitly positioning it for
this exact "watch it happen in the room" moment. Slightly less "wow" than a
playable app for a non-technical crowd, since the output is a static-looking
poster/deck rather than something they can touch — but it's the safer,
more polished-looking choice if a flawless single visual matters more than
interactivity.

## Option C — Claude Code in the terminal

**Tool:** Claude Code CLI/desktop, building and running a small app locally
or deploying it.

**Time live:** Slower to land with this audience than Options A/B — the
visible process is scrolling terminal text, which reads as "typing
gibberish" to someone with zero coding background, until the final result
appears. The payoff is the same kind of app as Option A, but the journey to
get there is less legible to non-technical viewers.

**Prep vs. live:** Needs a local environment already set up and tested
(install, auth, a working project directory) — meaningfully more
pre-event setup risk than a browser tab.

**Internet/bandwidth risk:** Requires a live connection; also requires
Claude Code itself to be installed and authenticated in advance, which is
one more thing that can be broken on the day.

**Cost:** Requires a paid plan — **not available on Free**. Included
starting at Pro ($17/month annual, $20/month monthly).
[claude.com/pricing](https://claude.com/pricing)

**Why it's not the top pick here:** For an audience that's never seen code,
a terminal window doesn't read as visually exciting the way a chat prompt
turning into a live app does — the interesting part (the app) is identical
to Option A, but Option A gets there with less setup risk and a more legible
"words become a thing" moment. Worth using in a *later*, more technical
build session, not this one.

## Option D — Gamma: one-prompt AI slide deck

**Tool:** Gamma (gamma.app). Generates a full presentation, document, or
webpage from a single prompt or outline.
[gamma.app/ai-presentation-generator](https://gamma.app/ai-presentation-generator)

**Time live:** Public materials describe fast, one-prompt generation of a
complete deck; exact seconds aren't published, but this is one of the
faster options on this list for producing a multi-slide, finished-looking
artifact rather than a single element.
[gamma.app/ai-presentation-generator](https://gamma.app/ai-presentation-generator)

**Prep vs. live:** Pick the topic in advance (e.g., "Lambda House's next six
months," or something silly and local), type it live, let it generate, flip
through the result.

**Internet/bandwidth risk:** Needs a live connection. Gamma's own pricing
and product pages returned HTTP 403 to automated fetches during this
research (likely bot-blocking, not a content issue); details below are from
Google's indexed copy of the same pages.
[gamma.app/pricing](https://gamma.app/pricing)

**Cost:** Free plan gives a one-time starter pack of **400 AI credits, no
credit card required**, usable for presentations, webpages, and other
generated content; more credits can be earned by referring people. Paid
plans add newer models, more credits, and remove the Gamma badge.
[gamma.app/pricing](https://gamma.app/pricing)

**Why it lands (or not):** Reliable and polished, but a slide deck is a
familiar format — the "wow" is "it did my PowerPoint for me," which lands
fine but is a smaller leap for this audience than a working app or game
appearing from nothing. Good as a calm, low-risk backup.

**Note on Tome:** Tome was an early AI-deck-generation product but shut down
that product on April 30, 2025, pivoting the company to sales-automation
tooling — it is not a current 2026 option. Not usable, and not evaluated
further. (Public shutdown reporting corroborated across multiple 2026
"Tome alternatives" pieces; Tome's own presentation product no longer
exists to check against a primary source.)

## Option E — v0 / Bolt.new / Lovable: one-prompt website or app, deployed live

**Tools:** v0 by Vercel (v0.app), Bolt.new (StackBlitz), or Lovable
(lovable.dev) — each turns one text prompt into a deployed, working web app.

**Time live:** All three scaffold and preview an app from a prompt within
roughly a minute, and can be pushed to a live public URL with one click
(v0 deploys to Vercel from the free tier; Bolt.new and Lovable have their
own one-click deploy/hosting).
[v0.app/pricing](https://v0.app/pricing),
[bolt.new/pricing](https://bolt.new/pricing),
[lovable.dev/pricing](https://lovable.dev/pricing)

**Prep vs. live:** Same shape as Option A: rehearse the exact prompt, know
roughly how long generation takes, do the actual typing and reveal live.

**Internet/bandwidth risk:** All three need a live connection to build and
preview; Bolt.new's in-browser runtime (StackBlitz WebContainers) means the
app itself then runs client-side, which is a slightly better story on flaky
wifi once the initial generation has completed, since it doesn't need a
round trip for every interaction.

**Cost:**
- v0: Free plan gives $5/month of included credits and a 7-messages/day
  limit; deploys to Vercel and includes a visual "Design Mode." Paid tiers
  start at $30/user/month (Plus).
  [v0.app/pricing](https://v0.app/pricing)
- Bolt.new: Free tier gives 300K tokens/day, capped at 1M/month, no project
  export on Free. Paid starts at $25/month (Pro, 10M tokens/month).
  [bolt.new/pricing](https://bolt.new/pricing)
- Lovable: Free plan gives 5 build credits/day (~30/month) plus 20 monthly
  "Cloud" credits; hosting a small app costs nothing extra for most small
  apps. Paid tiers exist above that.
  [lovable.dev/pricing](https://lovable.dev/pricing)

**Why it lands:** Same core appeal as Option A (words become a working
thing), but the frame is "a website/app," which is arguably a more relatable
end product for a general audience than "a game." Worth considering as an
equally strong alternative to Option A if Akshat would rather show a small
useful tool (e.g., a one-page RSVP form, a simple calculator) than a game.
The trade-off versus Claude Artifacts is one more login/tool to manage and
keep working on the day, for a broadly similar payoff.

## Option F — AI image generation: fastest, lowest-bandwidth "wow"

**Tools:** Google Gemini app (Nano Banana Pro / Gemini 3 Pro Image) or
ChatGPT's built-in image generation (GPT Image 2, shipped April 21, 2026).
Midjourney is a weaker fit here — no free tier since March 2023, and it's a
separate paid subscription with no browser-free entry point.
[blog.google/innovation-and-ai/products/nano-banana-pro](https://blog.google/innovation-and-ai/products/nano-banana-pro/)

**Time live:** Single-image generation is the fastest thing on this list —
type a description, get a rendered image, typically well under a minute.

**Prep vs. live:** Almost entirely live-able: pick a fun, locally relevant
prompt (e.g., "Lambda House meetup as a retro Bollywood movie poster") and
type it in front of the room.

**Internet/bandwidth risk:** Lowest of the AI-generation options here — one
short request, one image response (a few hundred KB to a few MB), not a
sustained connection like an app build or a video render. The best fallback
if wifi is genuinely bad that day.

**Cost:** Both have usable free tiers. Gemini app: Gemini Basic (free) gets
up to 20 Nano Banana 2 images/day, with a handful of the higher-end Nano
Banana Pro generations/day before falling back to the standard model.
ChatGPT free tier: roughly 2-3 image generations per rolling 24-hour window
as of mid-2026, using the current GPT Image model.
[blog.google/innovation-and-ai/products/nano-banana-pro](https://blog.google/innovation-and-ai/products/nano-banana-pro/)

**Why it lands (or not):** Extremely low setup risk and genuinely fast, but
AI image generation is now mainstream — most attendees will likely have
already seen it via WhatsApp filters or social media trends, so it may not
register as a fresh demonstration of "building." Best used as the safety-net
option (see Recommendation) rather than the headline act.

## Video generation — considered and skipped

Sora (OpenAI), Veo (Google), and Runway can produce short AI video clips, but
none fit a few-minutes-in-a-room slot reliably: generation is slower than
image or app generation, access/quotas for Sora specifically have shifted
several times through 2026 per public reporting, and a failed or slow render
in front of the room is a worse look than a fallback image or app would be.
Not recommended for this format. (OpenAI's own Sora page blocked automated
fetching during this research, so its current access terms are cited from
public reporting rather than a primary source — treat this section as the
least-verified in this document.)

## Wifi risk and offline fallback

Venue wifi in Kanpur is the biggest single risk to any of the live options
above — all of them call out to a cloud model. Two mitigations:

1. **Bring a phone hotspot as backup connectivity.** Cheapest, most direct
   fix, and works for every option above.
2. **Have a screen recording of a successful run-through**, done in advance,
   ready to play with zero internet if the live attempt fails outright. This
   is the universal fallback regardless of which option is chosen.

A true offline option exists — a local LLM via Ollama, downloaded in advance
and run with no internet at all once the model is on disk
([ollama.com](https://ollama.com)) — but small local models are noticeably
worse at producing a polished one-shot visual app, deck, or image than the
frontier cloud tools above, so this is a last-resort contingency for a wifi
outage, not a first choice for the room.

## Cost summary

| Option | Free tier usable for this demo? | Cheapest paid tier |
| --- | --- | --- |
| Claude Artifacts (A) | Yes | n/a |
| Claude Design (B) | No — Pro+ only | $17-20/mo |
| Claude Code (C) | No — Pro+ only | $17-20/mo |
| Gamma (D) | Yes, 400 credits, no card | — |
| v0 (E) | Yes, $5 credit/mo, 7 msg/day | $30/user/mo |
| Bolt.new (E) | Yes, 300K tokens/day | $25/mo |
| Lovable (E) | Yes, ~5 credits/day | $25/mo |
| Gemini image gen (F) | Yes | Google AI Plus/Pro |
| ChatGPT image gen (F) | Yes, ~2-3 images/day | ChatGPT Plus |
| Midjourney (F) | No free tier | $10/mo |

## Recommendation

**Top pick: Option A, Claude.ai Artifacts.** Build a tiny interactive game
or toy live, from a one-sentence prompt, in the ordinary Claude.ai chat box.
It has the clearest "words become a real, working thing" moment on this
list, needs no paid subscription, has the lightest bandwidth footprint of
any app-building option, and needs zero pre-installed tooling — just a
browser tab. Rehearse the exact prompt and expected build time beforehand;
keep a saved good result ready in case the live attempt needs a rescue.

**Backup 1: Option B, Claude Design**, for a one-pager or mini-deck instead
of an app — same account, same "describe it and watch it build" shape, and
Anthropic's own materials frame it for exactly this scenario. Slightly
less interactive-feeling for the audience, and requires the paid plan
(likely already in place if Claude Code is in use).

**Backup 2 / wifi-failure fallback: Option F, AI image generation** (Gemini
app or ChatGPT). If the room's wifi turns out to be too weak for an app or
deck to build reliably, a single fast image generation is the lowest-risk
thing that still looks impressive, and both have workable free tiers.

Keep Option C (Claude Code in the terminal) in reserve for a *later*, more
technical build session — the terminal process itself doesn't read as
exciting to an audience that has never seen code, even though the payoff is
the same class of result as Option A.
