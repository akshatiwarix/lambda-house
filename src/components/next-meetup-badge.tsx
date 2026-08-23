import { nextEvent } from "@/content/community";

/**
 * A small pill above the headline, not a full-width strip pinned above the
 * whole page. Renders only while an RSVP link exists, so it disappears
 * rather than going stale when RSVP is not open.
 *
 * The full string needs more width than a phone has, so the parts a tap can
 * supply - the time, the city, the name of the RSVP host - sit in spans the
 * stylesheet drops on narrow screens. What survives is the frame, the date,
 * and the action. The aria-label below stays complete either way.
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
        Sun 6 Sep
        <span className="meetup-badge__rest"> · 4:00–6:00 PM · Kanpur</span>
      </span>
      <span className="meetup-badge__cta">
        <span>
          RSVP<span className="meetup-badge__rest"> on Luma</span>
        </span>
        <span aria-hidden="true">→</span>
      </span>
    </a>
  );
}
