import type { Venue, nextEvent as NextEventContent } from "@/content/community";

/**
 * The content object is `as const`, which narrows `venue` to whichever variant
 * is currently set. Widening it back to `Venue` keeps both the pending and the
 * confirmed branch type-checked, so swapping in the real venue is a one-line
 * content change.
 */
type EventContent = Omit<typeof NextEventContent, "venue"> & { venue: Venue };

type Props = {
  event: EventContent;
  rsvpUrl: string;
};

export function NextEvent({ event, rsvpUrl }: Props) {
  const { venue } = event;

  return (
    <section className="container section" id="event">
      <p className="mono-label section-head">The next meetup</p>
      <div className="event-card">
        <div className="event-card__head">
          <p className="mono-label" style={{ color: "var(--signal-red)" }}>
            {event.format}
          </p>
          <h2 className="event-card__name">{event.name}</h2>
        </div>

        <dl className="event-card__grid">
          <div className="event-card__cell">
            <dt className="mono-label event-card__key">Date</dt>
            <dd className="event-card__value">
              <time dateTime={event.isoStart}>{event.dateLabel}</time>
            </dd>
          </div>
          <div className="event-card__cell">
            <dt className="mono-label event-card__key">Time</dt>
            <dd className="event-card__value">{event.timeLabel}</dd>
          </div>
          <div className="event-card__cell">
            <dt className="mono-label event-card__key">Cost</dt>
            <dd className="event-card__value">{event.price}</dd>
          </div>
          <div className="event-card__cell">
            <dt className="mono-label event-card__key">Capacity</dt>
            <dd className="event-card__value">{event.capacityLabel}</dd>
          </div>
          <div className="event-card__cell">
            <dt className="mono-label event-card__key">Venue</dt>
            <dd className="event-card__value">
              {venue.status === "pending" ? (
                venue.display
              ) : (
                <a href={venue.mapUrl} target="_blank" rel="noreferrer">
                  {venue.name}
                </a>
              )}
            </dd>
          </div>
          <div className="event-card__cell">
            <dt className="mono-label event-card__key">Accessibility</dt>
            <dd className="event-card__value">
              {venue.status === "confirmed"
                ? venue.accessibility
                : "Published once the venue is confirmed"}
            </dd>
          </div>
        </dl>

        <div className="event-card__foot">
          <a
            className="btn btn-primary"
            href={rsvpUrl}
            target="_blank"
            rel="noreferrer"
          >
            RSVP for this meetup
          </a>
          <p className="event-card__note">
            Come alone, bring nothing, leave when you like. An RSVP only helps
            us plan seating.
          </p>
        </div>
      </div>
    </section>
  );
}
