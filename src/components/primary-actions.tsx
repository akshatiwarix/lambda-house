import type { PublicLinks } from "@/lib/public-links";

/**
 * The RSVP-aware call-to-action pair, shared by the top section and the
 * closing block so the "RSVP not open yet" fallback only lives in one place.
 */
export function PrimaryActions({ links }: { links: PublicLinks }) {
  const rsvpOpen = links.rsvpFormUrl !== null;

  if (rsvpOpen) {
    return (
      <div className="hero__actions">
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
      </div>
    );
  }

  return (
    <div className="hero__actions">
      <a
        className="btn btn-primary"
        href={links.joinFormUrl}
        target="_blank"
        rel="noreferrer"
      >
        Join Lambda House
      </a>
    </div>
  );
}
