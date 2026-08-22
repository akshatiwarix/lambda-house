import { community, nextEvent } from "@/content/community";
import type { PublicLinks } from "@/lib/public-links";

const facts = [
  { key: "When", value: `Sun 06 Sep 2026 · ${nextEvent.timeLabel}` },
  { key: "Where", value: community.chapter },
  { key: "Cost", value: nextEvent.price },
  { key: "Who", value: "Any age, any level" },
];

export function Hero({ links }: { links: PublicLinks }) {
  const rsvpOpen = links.rsvpFormUrl !== null;

  return (
    <section className="container hero">
      <span className="hero__prompt" aria-hidden="true">
        λ<span className="hero__cursor" />
      </span>
      <h1 className="hero__title">{community.hero}</h1>
      <p className="hero__promise">{community.promise}</p>
      <div className="hero__actions">
        {/* While RSVP is closed, joining is the one real action. */}
        {rsvpOpen ? (
          <>
            <a
              className="btn btn-primary"
              href={links.rsvpFormUrl ?? undefined}
              target="_blank"
              rel="noreferrer"
            >
              Attend the first meetup
            </a>
            <a
              className="btn btn-secondary"
              href={links.joinFormUrl}
              target="_blank"
              rel="noreferrer"
            >
              Join Lambda House
            </a>
          </>
        ) : (
          <>
            <a
              className="btn btn-primary"
              href={links.joinFormUrl}
              target="_blank"
              rel="noreferrer"
            >
              Join Lambda House
            </a>
            <a className="btn btn-secondary" href="#event">
              See the first meetup
            </a>
          </>
        )}
      </div>
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
