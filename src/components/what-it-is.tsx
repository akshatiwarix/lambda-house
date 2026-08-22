import { community } from "@/content/community";

/**
 * Section 1: what Lambda House is. Just the identity, the founder's own
 * words, and one action. Event specifics (date, venue, capacity) live on the
 * Luma page linked from the banner above — not duplicated here.
 */
export function WhatItIs() {
  return (
    <section className="container hero" id="about">
      <span className="hero__prompt" aria-hidden="true">
        λ<span className="hero__cursor" />
      </span>
      <h1 className="hero__title">{community.hero}</h1>
      <p className="hero__story">{community.story}</p>
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
    </section>
  );
}
