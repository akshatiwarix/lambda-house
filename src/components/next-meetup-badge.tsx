import { nextEvent } from "@/content/community";

/**
 * A small pill above the headline, not a full-width strip pinned above the
 * whole page. Renders only while an RSVP link exists, so it disappears
 * rather than going stale when RSVP is not open.
 */
export function NextMeetupBadge({ rsvpUrl }: { rsvpUrl: string | null }) {
  if (!rsvpUrl) return null;

  return (
    <a
      className="meetup-badge"
      href={rsvpUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`RSVP on Luma for ${nextEvent.name}, ${nextEvent.dateLabel}, ${nextEvent.timeLabel}`}
    >
      <span className="meetup-badge__pulse" aria-hidden="true" />
      <span className="meetup-badge__label">First meetup</span>
      <span className="meetup-badge__meta">
        Sun 6 Sep · 4:00–6:00 PM · Kanpur
      </span>
      <span className="meetup-badge__cta">
        RSVP on Luma <span aria-hidden="true">→</span>
      </span>
    </a>
  );
}
