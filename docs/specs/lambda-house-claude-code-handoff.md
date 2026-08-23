> **Historical.** The briefing that started this project, kept as a record of
> the original instructions. It has been carried out. Several of its working
> rules were later overridden by explicit decisions: a real wordmark replaced
> the temporary chapter mark, and the WhatsApp Community invite link is now
> published on the site. The "Read first" paths below point at files on
> Akshat's machine that are not part of this repository; the blueprint they
> refer to lives at `docs/specs/lambda-house-community-blueprint.md`. For the
> current state of the site, read `docs/site.md`.

# Claude Code handoff for Lambda House

You are building and preparing the launch of Lambda House, an open technology community beginning in Kanpur.

## Read first

Read these source documents in order:

1. /Users/akshat/Documents/Codex/2026-08-22/new-chat/outputs/lambda-house-community-blueprint.md
2. /Users/akshat/Documents/Codex/2026-08-22/new-chat/outputs/lambda-house-digital-launch-plan.md
3. /Users/akshat/Documents/Codex/2026-08-22/new-chat/outputs/lambda-house-community-operations-plan.md

The blueprint defines intent and approved decisions. The two plans define execution. If a plan conflicts with the blueprint, stop and show Akshat the conflict rather than choosing silently.

## Objective

Create one repository named lambda-house containing:

- The approved blueprint at docs/specs/lambda-house-community-blueprint.md.
- The Next.js website and automated checks from the digital plan.
- The non-sensitive operations documents and empty CSV templates from the operations plan.
- A verified Vercel preview.
- A production deployment only after Akshat approves the preview.
- No real prospect, member, incident, or private venue data in Git.

## Execution order

1. Complete operations Task 1 far enough to obtain real form, social, reporting-contact, and Vercel inputs. Ask Akshat to perform or approve every external account action.
2. Complete digital Tasks 1–4.
3. Complete operations Tasks 2–5 while the visual shell is being built.
4. Complete digital Tasks 5–7 using the real external inputs.
5. Run every local verification command.
6. Ask Akshat before creating a Vercel preview.
7. Complete digital Task 8 through preview verification.
8. Ask Akshat before production deployment, DNS changes, domain purchase, publishing posts, sending messages, creating WhatsApp groups, or committing venue spend.
9. Complete operations Tasks 6–8 according to their calendar.

## Working rules

- Track progress by checking off plan steps in a copy stored inside the repository.
- Use test-first steps exactly where the digital plan specifies them.
- Make one focused commit per task with the listed commit message.
- Preserve the approved content, date, time, access policy, safety rules, privacy limits, colours, and typography.
- Do not create a final logo. The λ / KNP chapter mark is temporary.
- Do not add a database, accounts, analytics, cookies, member profiles, custom event backend, or public WhatsApp invite.
- Do not add libraries or features merely because they may be useful later.
- Do not invent URLs, venue facts, accessibility information, personal contacts, account receipts, registration numbers, or deployment success.
- Never put real member, prospect, child, incident, or private contact data in the repository.
- Use public test fixtures only in automated tests and CI.
- When an external action needs Akshat, present one clear action with the reason and the exact information you need back.
- Report the latest passing checks and current blocker after each task.

## Completion report

At the end, provide:

- Production URL, if Akshat approved production.
- Preview URL.
- Git commit list.
- Automated test results.
- Manual mobile and desktop verification result.
- External surfaces created, with receipts stored outside public Git.
- Venue status.
- Outreach and registration status.
- Remaining Akshat-owned actions before September 6.
- Any divergence from the blueprint or plans.

