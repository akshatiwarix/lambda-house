import { community } from "@/content/community";
import { Wordmark } from "./wordmark";

/** Just the logo in the nav. The chapter mark lives in the footer instead. */
export function BrandMark() {
  return (
    <span className="brand-mark">
      <Wordmark className="brand-mark__wordmark" />
      <span className="sr-only">{community.name}</span>
    </span>
  );
}
