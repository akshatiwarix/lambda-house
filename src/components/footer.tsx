import Link from "next/link";
import { community } from "@/content/community";
import type { PublicLinks } from "@/lib/public-links";

export function Footer({ links }: { links: PublicLinks }) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="mono-label" style={{ color: "var(--signal-red)" }}>
            {community.chapterMark}
          </p>
          <p className="site-footer__note">
            {community.descriptor} Started in {community.chapter}, {""}
            open to anyone curious about technology.
          </p>
        </div>
        <nav className="site-footer__links" aria-label="Footer">
          {links.rsvpFormUrl ? (
            <a href={links.rsvpFormUrl} target="_blank" rel="noreferrer">
              RSVP
            </a>
          ) : null}
          <a href={links.joinFormUrl} target="_blank" rel="noreferrer">
            Join
          </a>
          <a href={links.socialUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <Link href="/conduct">Conduct &amp; safety</Link>
          <Link href="/privacy">Privacy</Link>
          <a href={`mailto:${community.contactEmail}`}>Contact</a>
        </nav>
      </div>
    </footer>
  );
}
