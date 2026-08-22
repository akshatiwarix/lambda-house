import { nextEvent } from "@/content/community";

/**
 * Top-of-page strip pointing at the open RSVP. Renders only while an RSVP link
 * exists, so it disappears rather than going stale when RSVP is not open.
 */
export function EventBanner({ rsvpUrl }: { rsvpUrl: string | null }) {
  if (!rsvpUrl) return null;

  return (
    /* A landmark, so the strip is not page content stranded outside one. */
    <aside aria-label="Next event">
      <a
        className="event-banner"
        href={rsvpUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`RSVP on Luma for ${nextEvent.name}, ${nextEvent.dateLabel}, ${nextEvent.timeLabel}`}
      >
        <span className="event-banner__pulse" aria-hidden="true" />
        <span className="event-banner__label">First meetup</span>
        <span className="event-banner__divider" aria-hidden="true">
          ·
        </span>
        <span className="event-banner__meta">
          Sun 6 Sep · 4:00–6:00 PM · Kanpur
        </span>
        <span className="event-banner__cta">
          RSVP on Luma <span aria-hidden="true">→</span>
        </span>
      </a>
    </aside>
  );
}
