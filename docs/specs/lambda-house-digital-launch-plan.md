> **Historical.** This is the build plan that was executed to create the
> website, kept as a record of how it was made and why. It is not a description
> of the current site and should not be used as one: the homepage has since
> been cut from eight sections to three, the header lost its navigation links,
> the temporary `λ / KNP` chapter mark was replaced by the real wordmark, and
> the WhatsApp Community link is now published deliberately. For what is
> actually live, read `docs/site.md`.

# Lambda House digital launch implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Build, verify, and deploy the Lambda House public website and launch repository before outreach begins on August 25, 2026.

**Architecture:** Use a content-driven Next.js App Router site with no database, accounts, analytics, cookies, or custom form backend. Typed local content drives the pages; calls to action open externally managed joining and RSVP forms. Supporting community documents live in the same repository.

**Tech Stack:** Current stable Next.js App Router, React, TypeScript, Tailwind CSS, next/font, Vitest, React Testing Library, Playwright, @axe-core/playwright, npm, Vercel

**Spec:** docs/specs/lambda-house-community-blueprint.md

## Global constraints

- Public name: Lambda House.
- Descriptor: “A home for people curious about technology.”
- First chapter: Kanpur; chapter mark: λ / KNP.
- First event: Sunday, September 6, 2026, 4:00–6:00 PM.
- Curiosity is the only membership condition. Do not add age, education, profession, experience, or ability gates.
- Use carbon #070707, signal red #FF2A1A, warm white #F5F2EA, and steel grey #A7ABB5.
- Use Funnel Display for major display text, Inter for body/interface text, and Space Mono for short labels and metadata.
- Keep signal red to roughly 10–15% of the page and Space Mono to roughly 15–20% of visible text.
- Use black text on signal-red controls. Avoid small warm-white text on red and fine red text on black.
- Do not create or imply a finished logo. Use the approved chapter mark as a temporary favicon and identifier.
- Do not add accounts, profiles, a blog, project directory, event backend, advertising, behavioural analytics, cookie banners, stock photography, AI-generated crowds, or unapproved tracking.
- Main content and navigation must work without client-side JavaScript.
- Joining, RSVP, social, and production-site URLs are required deployment inputs. Never ship dummy links.
- Do not expose the direct WhatsApp invite publicly.
- Deployments, DNS changes, domain purchases, and external account mutations require Akshat’s explicit approval.
- Commit after each task.

## File map

    lambda-house/
    ├── .github/workflows/ci.yml
    ├── docs/
    │   ├── operations/
    │   └── specs/lambda-house-community-blueprint.md
    ├── e2e/
    │   ├── accessibility.spec.ts
    │   └── landing.spec.ts
    ├── public/social/lambda-house-kanpur-001.svg
    ├── src/
    │   ├── app/
    │   │   ├── conduct/page.tsx
    │   │   ├── privacy/page.tsx
    │   │   ├── globals.css
    │   │   ├── icon.svg
    │   │   ├── layout.tsx
    │   │   ├── page.tsx
    │   │   ├── robots.ts
    │   │   └── sitemap.ts
    │   ├── components/
    │   ├── content/community.ts
    │   ├── lib/public-links.ts
    │   └── styles/fonts.ts
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── playwright.config.ts
    ├── README.md
    ├── tsconfig.json
    ├── vitest.config.ts
    └── vitest.setup.ts

## Cross-plan inputs

The operations plan must produce four real values before release:

- NEXT_PUBLIC_JOIN_FORM_URL
- NEXT_PUBLIC_RSVP_FORM_URL
- NEXT_PUBLIC_SOCIAL_URL
- NEXT_PUBLIC_SITE_URL

The site may show “Kanpur · venue confirmation in progress” until Akshat confirms the venue.

---

### Task 1: Repository, spec, and test foundation

**Files:**

- Create: entire lambda-house repository
- Create: docs/specs/lambda-house-community-blueprint.md
- Create: vitest.config.ts, vitest.setup.ts, playwright.config.ts
- Modify: package.json, README.md

**Interfaces:**

- Consumes: /Users/akshat/Documents/Codex/2026-08-22/new-chat/outputs/lambda-house-community-blueprint.md
- Produces: lint, typecheck, unit-test, E2E-test, and build commands

- [ ] **Step 1: Scaffold the project**

    npx create-next-app@latest lambda-house --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
    cd lambda-house
    git init

Decline experimental features not required by this plan.

- [ ] **Step 2: Copy the approved spec**

    mkdir -p docs/specs docs/operations
    cp /Users/akshat/Documents/Codex/2026-08-22/new-chat/outputs/lambda-house-community-blueprint.md docs/specs/lambda-house-community-blueprint.md

- [ ] **Step 3: Install tests**

    npm install --save-dev vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @playwright/test @axe-core/playwright
    npx playwright install chromium

- [ ] **Step 4: Configure Vitest**

Create vitest.config.ts:

    import path from "node:path";
    import react from "@vitejs/plugin-react";
    import { defineConfig } from "vitest/config";

    export default defineConfig({
      plugins: [react()],
      test: {
        environment: "jsdom",
        globals: true,
        setupFiles: ["./vitest.setup.ts"],
      },
      resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
    });

Create vitest.setup.ts:

    import "@testing-library/jest-dom/vitest";

- [ ] **Step 5: Configure Playwright**

Create playwright.config.ts. Use desktop Chrome and Pixel 7 projects. The base URL is process.env.PLAYWRIGHT_BASE_URL when present, otherwise http://127.0.0.1:3000. The local web server must receive these isolated test fixtures:

    NEXT_PUBLIC_JOIN_FORM_URL=https://forms.google.com/join-test
    NEXT_PUBLIC_RSVP_FORM_URL=https://forms.google.com/rsvp-test
    NEXT_PUBLIC_SOCIAL_URL=https://www.instagram.com/joinlambdahouse
    NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3000

- [ ] **Step 6: Add package scripts**

    "dev": "next dev"
    "build": "next build"
    "start": "next start"
    "lint": "eslint ."
    "typecheck": "tsc --noEmit"
    "test": "npm run test:unit && npm run test:e2e"
    "test:unit": "vitest run"
    "test:unit:watch": "vitest"
    "test:e2e": "playwright test"

- [ ] **Step 7: Write README**

Document the purpose, commands, installed Node requirement, four environment variable names, spec path, no-tracking rule, and requirement for real production links.

- [ ] **Step 8: Verify and commit**

    npm run lint
    npm run typecheck
    npm run build
    git add .
    git commit -m "chore: initialize lambda house website"

Expected: all checks pass.

---

### Task 2: Typed community content

**Files:**

- Create: src/content/community.test.ts
- Create: src/content/community.ts

**Interfaces:**

- Produces: Venue, Faq, community, nextEvent, faqs, communityRules

- [ ] **Step 1: Write failing tests**

    import { community, communityRules, faqs, nextEvent } from "./community";

    describe("community content", () => {
      it("locks identity and first event", () => {
        expect(community.name).toBe("Lambda House");
        expect(community.chapterMark).toBe("λ / KNP");
        expect(nextEvent.isoStart).toBe("2026-09-06T16:00:00+05:30");
        expect(nextEvent.isoEnd).toBe("2026-09-06T18:00:00+05:30");
        expect(nextEvent.price).toBe("Free");
      });

      it("keeps access open and conversation technical", () => {
        expect(communityRules).toContain("Curiosity is enough. No gatekeeping.");
        expect(communityRules).toContain("Keep conversation related to technology.");
        expect(faqs.some((item) => item.question === "Do I need to know how to code?")).toBe(true);
      });
    });

- [ ] **Step 2: Verify failure**

    npm run test:unit -- src/content/community.test.ts

Expected: FAIL because community.ts does not exist.

- [ ] **Step 3: Implement the content**

Use this interface and exact approved values:

    export type Venue =
      | { status: "pending"; display: string }
      | {
          status: "confirmed";
          name: string;
          address: string;
          mapUrl: string;
          accessibility: string;
        };

    export type Faq = { question: string; answer: string };

    export const community = {
      name: "Lambda House",
      descriptor: "A home for people curious about technology.",
      chapter: "Kanpur",
      chapterMark: "λ / KNP",
      promise:
        "Meet people who can talk about technology for hours, discover interesting things together, and occasionally make something.",
      hero: "Kanpur, come talk tech with us.",
    } as const;

    export const nextEvent = {
      name: "Lambda House Kanpur #01",
      format: "Tech hangout",
      isoStart: "2026-09-06T16:00:00+05:30",
      isoEnd: "2026-09-06T18:00:00+05:30",
      dateLabel: "Sunday, September 6, 2026",
      timeLabel: "4:00–6:00 PM",
      price: "Free",
      capacityLabel: "Limited by venue capacity",
      venue: {
        status: "pending",
        display: "Kanpur · venue confirmation in progress",
      } satisfies Venue,
    } as const;

    export const communityRules = [
      "Curiosity is enough. No gatekeeping.",
      "Keep conversation related to technology.",
      "Disagree with ideas without attacking people.",
      "No harassment, discrimination, threats, doxxing, or invasive behaviour.",
      "Ask before privately messaging another member.",
      "Share your work to start a conversation, not to repeatedly advertise.",
      "Respect photography preferences and safeguards for younger members.",
    ] as const;

Add this exact FAQ array:

    export const faqs: Faq[] = [
      {
        question: "Do I need to know how to code?",
        answer: "No. If technology makes you curious, you belong here.",
      },
      {
        question: "Can school students attend?",
        answer: "Yes. Lambda House is open to every age, and anyone may attend independently.",
      },
      {
        question: "Is it free?",
        answer: "Yes. The first tech hangout is free.",
      },
      {
        question: "Do I need to bring a project?",
        answer: "No. Bring a question, a curiosity, or just yourself.",
      },
      {
        question: "Can I attend alone?",
        answer: "Yes. Most people are coming to meet someone new, and the opening round makes joining a conversation easier.",
      },
      {
        question: "What language will people speak?",
        answer: "Use whichever of Hindi or English makes the conversation comfortable. Technical terms can stay in the language people normally use for them.",
      },
    ];

- [ ] **Step 4: Verify and commit**

    npm run test:unit -- src/content/community.test.ts
    git add src/content
    git commit -m "feat: add typed community content"

Expected: PASS.

---

### Task 3: Required public-link configuration

**Files:**

- Create: src/lib/public-links.test.ts
- Create: src/lib/public-links.ts
- Modify: .gitignore

**Interfaces:**

- Consumes: four real environment values
- Produces: PublicLinks and getPublicLinks(source?: Partial<PublicLinks>): PublicLinks

- [ ] **Step 1: Write failing tests**

    import { getPublicLinks } from "./public-links";

    const valid = {
      joinFormUrl: "https://forms.google.com/join",
      rsvpFormUrl: "https://forms.google.com/rsvp",
      socialUrl: "https://www.instagram.com/joinlambdahouse",
      siteUrl: "https://joinlambdahouse.example",
    };

    it("returns valid links", () => {
      expect(getPublicLinks(valid)).toEqual(valid);
    });

    it("rejects missing values", () => {
      expect(() => getPublicLinks({ ...valid, joinFormUrl: "" }))
        .toThrow("Missing public URL: joinFormUrl");
    });

    it("rejects insecure production links", () => {
      expect(() =>
        getPublicLinks({ ...valid, socialUrl: "http://example.com/social" }),
      ).toThrow("Public URL must use HTTPS: socialUrl");
    });

- [ ] **Step 2: Verify failure**

    npm run test:unit -- src/lib/public-links.test.ts

- [ ] **Step 3: Implement validation**

    export type PublicLinks = {
      joinFormUrl: string;
      rsvpFormUrl: string;
      socialUrl: string;
      siteUrl: string;
    };

    function validate(key: keyof PublicLinks, value: string | undefined): string {
      if (!value) throw new Error("Missing public URL: " + key);
      const url = new URL(value);
      const local = url.hostname === "127.0.0.1" || url.hostname === "localhost";
      if (url.protocol !== "https:" && !local) {
        throw new Error("Public URL must use HTTPS: " + key);
      }
      return url.toString().replace(/\/$/, "");
    }

    export function getPublicLinks(source?: Partial<PublicLinks>): PublicLinks {
      const values = source ?? {
        joinFormUrl: process.env.NEXT_PUBLIC_JOIN_FORM_URL,
        rsvpFormUrl: process.env.NEXT_PUBLIC_RSVP_FORM_URL,
        socialUrl: process.env.NEXT_PUBLIC_SOCIAL_URL,
        siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
      };
      return {
        joinFormUrl: validate("joinFormUrl", values.joinFormUrl),
        rsvpFormUrl: validate("rsvpFormUrl", values.rsvpFormUrl),
        socialUrl: validate("socialUrl", values.socialUrl),
        siteUrl: validate("siteUrl", values.siteUrl),
      };
    }

- [ ] **Step 4: Protect local values, verify, and commit**

Ensure .gitignore contains .env*. Never commit .env.local.

    npm run test:unit -- src/lib/public-links.test.ts
    git add src/lib .gitignore README.md
    git commit -m "feat: validate public launch links"

Expected: PASS.

---

### Task 4: Brand foundation and semantic shell

**Files:**

- Create: src/styles/fonts.ts
- Create: src/components/brand-mark.test.tsx
- Create: src/components/brand-mark.tsx
- Create: src/components/header.tsx
- Create: src/components/footer.tsx
- Modify: src/app/globals.css, src/app/layout.tsx
- Create: src/app/icon.svg

**Interfaces:**

- Consumes: community
- Produces: font variables, colour tokens, BrandMark, Header, Footer

- [ ] **Step 1: Write failing brand test**

    import { render, screen } from "@testing-library/react";
    import { BrandMark } from "./brand-mark";

    it("renders the approved temporary chapter mark", () => {
      render(<BrandMark />);
      expect(screen.getByText("Lambda House")).toBeInTheDocument();
      expect(screen.getByText("λ / KNP")).toBeInTheDocument();
    });

- [ ] **Step 2: Verify failure**

    npm run test:unit -- src/components/brand-mark.test.tsx

- [ ] **Step 3: Configure fonts**

    import { Funnel_Display, Inter, Space_Mono } from "next/font/google";

    export const displayFont = Funnel_Display({
      subsets: ["latin"],
      variable: "--font-display",
      display: "swap",
    });
    export const bodyFont = Inter({
      subsets: ["latin"],
      variable: "--font-body",
      display: "swap",
    });
    export const monoFont = Space_Mono({
      subsets: ["latin"],
      weight: ["400", "700"],
      variable: "--font-mono",
      display: "swap",
    });

- [ ] **Step 4: Implement BrandMark**

    import { community } from "@/content/community";

    export function BrandMark() {
      return (
        <span
          className="brand-mark"
          aria-label={community.name + ", " + community.chapter + " chapter"}
        >
          <span>{community.name}</span>
          <span className="mono-label" aria-hidden="true">
            {community.chapterMark}
          </span>
        </span>
      );
    }

Create a header with a focusable skip link, brand mark, and text links to #about, #formats, #event, /conduct, and /privacy. Create a footer with descriptor, chapter mark, and approved links.

- [ ] **Step 5: Implement CSS baseline**

    @import "tailwindcss";

    :root {
      --carbon: #070707;
      --signal-red: #ff2a1a;
      --warm-white: #f5f2ea;
      --steel-grey: #a7abb5;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      color: var(--warm-white);
      background: var(--carbon);
      font-family: var(--font-body), system-ui, sans-serif;
    }
    a { color: inherit; }
    :focus-visible { outline: 3px solid var(--signal-red); outline-offset: 4px; }
    .display { font-family: var(--font-display), sans-serif; }
    .mono-label {
      font-family: var(--font-mono), monospace;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
    }

Add focused container, section, button, grid, card, details, skip-link, header, and footer styles. Use square or lightly rounded shapes. No gradients, glass effects, or decorative motion.

- [ ] **Step 6: Wire layout and icon**

Apply all three font variables to html lang="en". Set default title to Lambda House Kanpur. Create a carbon-square favicon with signal-red λ / KNP text and a comment that it is temporary.

- [ ] **Step 7: Verify and commit**

    npm run test:unit -- src/components/brand-mark.test.tsx
    npm run lint
    npm run typecheck
    npm run build
    git add src/app src/components src/styles
    git commit -m "feat: establish lambda house brand shell"

Expected: PASS.

---

### Task 5: Landing content and primary actions

**Files:**

- Create: hero, story, audience, event-formats, and next-event components
- Create: hero.test.tsx and next-event.test.tsx
- Modify: src/app/page.tsx
- Create locally: .env.local from the exact cross-plan receipt

**Interfaces:**

- Consumes: community, nextEvent, PublicLinks
- Produces: visitor-to-join and visitor-to-RSVP journeys

- [ ] **Step 1: Create .env.local with real values**

Use the four exact URLs produced by the operations plan. Stop and ask Akshat if any is missing. Do not invent values.

- [ ] **Step 2: Write failing Hero test**

    import { render, screen } from "@testing-library/react";
    import { Hero } from "./hero";

    const links = {
      joinFormUrl: "https://forms.google.com/join",
      rsvpFormUrl: "https://forms.google.com/rsvp",
      socialUrl: "https://instagram.com/joinlambdahouse",
      siteUrl: "https://joinlambdahouse.example",
    };

    it("offers joining and meetup actions", () => {
      render(<Hero links={links} />);
      expect(screen.getByRole("heading", {
        name: "Kanpur, come talk tech with us.",
      })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Attend the first meetup" }))
        .toHaveAttribute("href", links.rsvpFormUrl);
      expect(screen.getByRole("link", { name: "Join Lambda House" }))
        .toHaveAttribute("href", links.joinFormUrl);
    });

- [ ] **Step 3: Write failing event test**

    import { render, screen } from "@testing-library/react";
    import { nextEvent } from "@/content/community";
    import { NextEvent } from "./next-event";

    it("shows fixed practical details", () => {
      render(<NextEvent
        event={nextEvent}
        rsvpUrl="https://forms.google.com/rsvp"
      />);
      expect(screen.getByText("Sunday, September 6, 2026")).toBeInTheDocument();
      expect(screen.getByText("4:00–6:00 PM")).toBeInTheDocument();
      expect(screen.getByText("Free")).toBeInTheDocument();
      expect(screen.getByText(
        "Kanpur · venue confirmation in progress",
      )).toBeInTheDocument();
    });

- [ ] **Step 4: Verify failure**

    npm run test:unit -- src/components/hero.test.tsx src/components/next-event.test.tsx

- [ ] **Step 5: Implement five sections**

Hero contains chapter label, headline, descriptor, promise, “Attend the first meetup,” and “Join Lambda House.”

Story copy:

    I started Lambda House because I love technology and wanted people in
    Kanpur I could talk to without turning every conversation into formal
    networking. If you have ever wanted a local group that can happily
    discuss tools, ideas, gadgets, projects, and strange technical rabbit
    holes, this is for you.

Audience includes all ages, professions, experience levels, coders, designers, hardware enthusiasts, gamers, researchers, students, and curious beginners.

EventFormats uses the approved Tech hangout and Build together definitions.

NextEvent uses semantic time elements, pending/confirmed venue rendering, free price, capacity, and RSVP action.

All external links use target="_blank" and rel="noreferrer". Never expose the WhatsApp invite.

- [ ] **Step 6: Compose page**

Call getPublicLinks(). Render header, hero, story, audience, formats, event, and footer. Use main id="main-content" and stable section IDs.

- [ ] **Step 7: Verify and commit**

    npm run test:unit -- src/components/hero.test.tsx src/components/next-event.test.tsx
    npm run lint
    npm run typecheck
    npm run build
    git add src/app/page.tsx src/components
    git commit -m "feat: build public landing journey"

Expected: PASS; missing or invalid real URLs block release.

---

### Task 6: FAQ, conduct, privacy, and trust

**Files:**

- Create: src/components/faq.tsx
- Create: src/components/guidelines-preview.tsx
- Create: src/app/conduct/page.tsx
- Create: src/app/privacy/page.tsx
- Modify: src/app/page.tsx, src/components/footer.tsx

**Interfaces:**

- Consumes: faqs, communityRules, reporting contact
- Produces: complete FAQ, conduct, safety, and privacy surfaces

- [ ] **Step 1: Add safety regression test**

    it("retains safety promises", () => {
      expect(communityRules).toContain(
        "Ask before privately messaging another member.",
      );
      expect(communityRules).toContain(
        "Respect photography preferences and safeguards for younger members.",
      );
    });

Run the content test and expect PASS.

- [ ] **Step 2: Implement FAQ**

Use native details, summary, and paragraph elements. No client component or animation library.

- [ ] **Step 3: Implement guidelines preview**

Show seven public rules, immediate-removal warning for serious safety violations, and “Read the full conduct and safety policy.”

- [ ] **Step 4: Implement conduct page**

Include all ten approved rules; reminder, warning, removal, and immediate-removal levels; independent attendance; public staffed venues; two adult organizers; no closed-room one-to-one sessions; no community-arranged private transport involving minors; no adult-initiated private contact with minors; no identifiable under-18 photos by default; private reporting; and legally required escalation.

- [ ] **Step 5: Implement privacy page**

List each collected field and purpose, who can access it, 30-day event-data retention, deletion route, no sponsor sharing, no ad tracking, and the May 13, 2027 child-data review. End with: “This page describes Lambda House’s operating practice and is not legal advice.”

- [ ] **Step 6: Finish main page and footer**

Place FAQ and guidelines before the final invitation. Footer links: conduct, privacy, social, join, RSVP.

- [ ] **Step 7: Verify and commit**

    npm run test:unit
    npm run lint
    npm run typecheck
    npm run build
    git add src/app src/components src/content
    git commit -m "feat: add conduct privacy and faq pages"

Expected: PASS.

---

### Task 7: Metadata, launch asset, and browser verification

**Files:**

- Create: src/app/robots.ts, src/app/sitemap.ts
- Create: public/social/lambda-house-kanpur-001.svg
- Create: e2e/landing.spec.ts, e2e/accessibility.spec.ts
- Modify: src/app/layout.tsx

**Interfaces:**

- Consumes: getPublicLinks(), community, nextEvent
- Produces: crawlable metadata, editable event graphic, desktop/mobile tests

- [ ] **Step 1: Write E2E journey test**

    import { expect, test } from "@playwright/test";

    test("visitor understands and reaches both forms", async ({ page }) => {
      await page.goto("/");
      await expect(page).toHaveTitle(/Lambda House Kanpur/);
      await expect(page.getByRole("heading", {
        name: "Kanpur, come talk tech with us.",
      })).toBeVisible();
      await expect(page.getByText(
        "Sunday, September 6, 2026",
      )).toBeVisible();
      await expect(page.getByRole("link", {
        name: "Attend the first meetup",
      }).first()).toHaveAttribute(
        "href",
        "https://forms.google.com/rsvp-test",
      );
    });

    test("policy pages are reachable", async ({ page }) => {
      await page.goto("/conduct");
      await expect(page.getByRole("heading", {
        name: /conduct and safety/i,
      })).toBeVisible();
      await page.goto("/privacy");
      await expect(page.getByRole("heading", {
        name: /privacy/i,
      })).toBeVisible();
    });

- [ ] **Step 2: Write accessibility test**

    import AxeBuilder from "@axe-core/playwright";
    import { expect, test } from "@playwright/test";

    for (const path of ["/", "/conduct", "/privacy"]) {
      test(path + " has no detectable violations", async ({ page }) => {
        await page.goto(path);
        const results = await new AxeBuilder({ page }).analyze();
        expect(results.violations).toEqual([]);
      });
    }

- [ ] **Step 3: Add metadata and crawl files**

Title: Lambda House Kanpur | Come talk tech with us

Description: An open community for anyone curious about technology. Join the first Lambda House tech hangout in Kanpur on September 6, 2026.

Use NEXT_PUBLIC_SITE_URL for canonical and matching social metadata. robots.ts permits indexing and points to the sitemap. sitemap.ts emits /, /conduct, and /privacy.

- [ ] **Step 4: Create 1080×1350 SVG**

Use the approved palette and exactly this text:

    λ / KNP
    LAMBDA HOUSE
    KANPUR, COME TALK TECH WITH US.
    SUNDAY / 06 SEPTEMBER 2026
    16:00–18:00 / KANPUR
    NO EXPERIENCE REQUIRED. CURIOSITY IS ENOUGH.

Use Funnel Display for the headline, Space Mono for metadata, and Inter for the explanation. No logo, imagery, glitch distortion, sponsors, or unconfirmed venue.

- [ ] **Step 5: Run automated checks**

    npm run lint
    npm run typecheck
    npm run test
    npm run build

Expected: PASS on desktop and mobile Chromium and all three routes.

- [ ] **Step 6: Manual checks**

At 320, 390, 768, and 1440 px, confirm no horizontal scroll, correct focus order, visible CTAs, restrained red, restrained Space Mono, working links, and readable no-JavaScript content.

- [ ] **Step 7: Commit**

    git add src/app public/social e2e
    git commit -m "feat: add launch metadata and browser verification"

---

### Task 8: CI, preview, and production

**Files:**

- Create: .github/workflows/ci.yml
- Modify: README.md
- Modify after approval: src/content/community.ts

**Interfaces:**

- Consumes: real URLs, confirmed venue receipt, Git remote, Vercel approval
- Produces: passing CI, approved preview, verified production URL

- [ ] **Step 1: Add CI**

Use Ubuntu, Node 22, npm ci, Playwright Chromium, lint, typecheck, tests, and build. Use only the isolated test URLs from Task 1 in CI. Never copy them to production.

- [ ] **Step 2: Apply confirmed venue receipt**

Ask Akshat for exact venue name, public address, HTTPS map URL, and verified accessibility statement. Change nextEvent.venue to the confirmed Venue variant using only those values. Do not infer venue facts.

- [ ] **Step 3: Run release gate**

    npm ci
    npm run lint
    npm run typecheck
    npm run test
    npm run build
    git status --short

Expected: all checks pass; commit any planned change, then confirm a clean worktree.

- [ ] **Step 4: Commit deployment configuration**

    git add .github README.md src/content/community.ts
    git commit -m "chore: prepare verified launch deployment"

- [ ] **Step 5: Ask for preview approval**

Show Akshat the test result. Do not log in to Vercel or create a public project without approval.

- [ ] **Step 6: Link and deploy preview**

After approval:

    npx vercel link
    npx vercel env add NEXT_PUBLIC_JOIN_FORM_URL preview
    npx vercel env add NEXT_PUBLIC_RSVP_FORM_URL preview
    npx vercel env add NEXT_PUBLIC_SOCIAL_URL preview
    npx vercel env add NEXT_PUBLIC_SITE_URL preview
    npx vercel deploy

Enter real approved values and record the preview URL.

- [ ] **Step 7: Verify preview**

Set PLAYWRIGHT_BASE_URL in the shell to the exact HTTPS URL returned by Step 6, then run npm run test:e2e. Do not type an invented or example URL. Also inspect routes, metadata, forms, mobile layout, and deployment logs.

- [ ] **Step 8: Ask for production approval**

Send preview and checks. Do not promote without a clear yes.

- [ ] **Step 9: Configure and deploy production**

After approval:

    npx vercel env add NEXT_PUBLIC_JOIN_FORM_URL production
    npx vercel env add NEXT_PUBLIC_RSVP_FORM_URL production
    npx vercel env add NEXT_PUBLIC_SOCIAL_URL production
    npx vercel env add NEXT_PUBLIC_SITE_URL production
    npx vercel deploy --prod

Verify every public action. Domain purchase and DNS are a separate approval.

- [ ] **Step 10: Record release**

Add production URL and date to README, run npm run build, and commit:

    git add README.md
    git commit -m "docs: record lambda house launch"

## Digital definition of done

- Main, conduct, and privacy pages implement the blueprint.
- Lint, types, unit tests, browser tests, accessibility automation, and build pass.
- Real URLs exist only in local/Vercel configuration.
- Joining and RSVP work; direct WhatsApp invite is not public.
- Event date, time, cost, and confirmed venue are accurate.
- Mobile and desktop have no horizontal overflow.
- No analytics, cookies, accounts, database, custom form backend, final logo, or unapproved imagery exists.
- Akshat approves preview and production separately.

## Primary technical references

- Next.js App Router: https://nextjs.org/docs/app
- Next.js font module: https://nextjs.org/docs/app/api-reference/components/font
- Next.js testing guides: https://nextjs.org/docs/app/guides/testing
- Vercel CLI workflow: https://vercel.com/docs/projects/deploy-from-cli
