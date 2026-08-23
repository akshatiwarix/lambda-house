import { community } from "@/content/community";
import type { PublicLinks } from "@/lib/public-links";
import { NextMeetupBadge } from "./next-meetup-badge";

/**
 * Section 1: what Lambda House is. Just the identity, the founder's own
 * words, and one action. Event specifics (date, venue, capacity) live on the
 * Luma page linked from the badge above the headline - not duplicated here,
 * and not a full-width strip pinned above the whole page anymore either.
 *
 * The form sits under the button rather than beside it. Handing a phone
 * number to a stranger's group chat is a real barrier, and the people most
 * likely to feel it are the ones the conduct policy exists for. This is a way
 * in that costs less, without competing with the action we actually want.
 */
export function WhatItIs({ links }: { links: PublicLinks }) {
  return (
    <section className="container hero" id="about">
      <NextMeetupBadge rsvpUrl={links.rsvpFormUrl} />
      <span className="hero__prompt" aria-hidden="true">
        λ<span className="hero__cursor" />
      </span>
      <h1 className="hero__title">{community.hero}</h1>
      <p className="hero__story">{community.story}</p>
      <p className="hero__story-sign">{community.storySignature}</p>
      <p className="hero__story-ps">{community.storyPostscript}</p>
      <div className="hero__actions">
        <a
          className="btn btn-primary"
          href={community.whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          Join Lambda House
        </a>
      </div>
      <p className="hero__alt">
        Not on WhatsApp?{" "}
        <a href={links.joinFormUrl} target="_blank" rel="noreferrer">
          Leave your details instead.
        </a>
      </p>
    </section>
  );
}
