import { community, nextEvent, type Venue } from "@/content/community";
import type { PublicLinks } from "@/lib/public-links";
import { PrimaryActions } from "./primary-actions";

/**
 * `nextEvent` is `as const`, which narrows `venue` to whichever variant is
 * currently set. Widening it back to `Venue` keeps both branches type-checked,
 * so swapping in the confirmed venue later is a one-line content change.
 */
function venueFact(): string {
  const venue = nextEvent.venue as Venue;
  return venue.status === "confirmed" ? venue.name : venue.display;
}

const facts = [
  { key: "When", value: `Sun 06 Sep 2026 · ${nextEvent.timeLabel}` },
  { key: "Venue", value: venueFact() },
  { key: "Cost", value: nextEvent.price },
  { key: "Twice a month", value: "Tech hangout · Build together" },
];

/**
 * Section 1: what Lambda House is. Identity, the promise, the practical facts,
 * and the primary actions, all in one scroll — no separate story, formats, or
 * event-card sections to click past first.
 */
export function WhatItIs({ links }: { links: PublicLinks }) {
  return (
    <section className="container hero" id="about">
      <span className="hero__prompt" aria-hidden="true">
        λ<span className="hero__cursor" />
      </span>
      <h1 className="hero__title">{community.hero}</h1>
      <p className="hero__promise">{community.promise}</p>
      <p className="founder-note">
        I started it because I wanted people in Kanpur to talk tech with, no
        pitch deck required. — Akshat, organizer
      </p>
      <PrimaryActions links={links} />
      <dl className="factstrip">
        {facts.map((fact) => (
          <div className="factstrip__pair" key={fact.key}>
            <dt className="factstrip__key">{fact.key}</dt>
            <dd className="factstrip__value">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
