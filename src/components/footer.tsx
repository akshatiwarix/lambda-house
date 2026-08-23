import { community } from "@/content/community";
import type { PublicLinks } from "@/lib/public-links";
import { Wordmark } from "./wordmark";

export function Footer({ links }: { links: PublicLinks }) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__copyright">
          <Wordmark className="site-footer__wordmark" />
          <span className="sr-only">Lambda House</span>
          <span>
            © {new Date().getFullYear()} Lambda House. A home for people
            curious about technology.
          </span>
        </p>
        <nav className="site-footer__links" aria-label="Footer">
          <a href={links.socialUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={community.whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={`mailto:${community.contactEmail}`}>Email Us</a>
        </nav>
      </div>
    </footer>
  );
}
