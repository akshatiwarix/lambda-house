import { community } from "@/content/community";

export function BrandMark() {
  return (
    <span
      className="brand-mark"
      aria-label={community.name + ", " + community.chapter + " chapter"}
    >
      <span className="brand-mark__name">{community.name}</span>
      <span className="mono-label brand-mark__chapter" aria-hidden="true">
        {community.chapterMark}
      </span>
    </span>
  );
}
