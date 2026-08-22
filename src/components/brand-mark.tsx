import { community } from "@/content/community";
import { Wordmark } from "./wordmark";

/**
 * The wordmark carries the name. The brand pack forbids attaching a location to
 * the logo, so the chapter mark is a separate metadata label beside it rather
 * than part of the mark.
 */
export function BrandMark() {
  return (
    <span className="brand-mark">
      <Wordmark className="brand-mark__wordmark" />
      <span className="sr-only">{community.name}</span>
      <span className="mono-label brand-mark__chapter">
        {community.chapterMark}
      </span>
    </span>
  );
}
