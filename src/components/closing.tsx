import { community } from "@/content/community";
import type { PublicLinks } from "@/lib/public-links";

export function Closing({ links }: { links: PublicLinks }) {
  return (
    <section className="container section closing" id="join">
      <p className="mono-label section-head">{community.chapterMark}</p>
      <h2 className="closing__title">
        No experience required. Curiosity is enough.
      </h2>
      <p className="lede" style={{ marginBottom: "2.25rem" }}>
        {links.rsvpFormUrl
          ? "RSVP for the September 6 hangout, or join the community and come to a later one. Both are free."
          : "Join the community now and you will get the RSVP link before anyone else. It is free, and you can come to any meetup."}
      </p>
      <div className="hero__actions">
        {links.rsvpFormUrl ? (
          <>
            <a
              className="btn btn-primary"
              href={links.rsvpFormUrl}
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
          <a
            className="btn btn-primary"
            href={links.joinFormUrl}
            target="_blank"
            rel="noreferrer"
          >
            Join Lambda House
          </a>
        )}
      </div>
    </section>
  );
}
