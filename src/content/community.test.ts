import { describe, expect, it } from "vitest";
import { community, communityRules, faqs, nextEvent } from "./community";

describe("community content", () => {
  it("locks identity and first event", () => {
    expect(community.name).toBe("Lambda House");
    expect(community.chapterMark).toBe("λ / KNP");
    expect(nextEvent.isoStart).toBe("2026-09-06T16:00:00+05:30");
    expect(nextEvent.isoEnd).toBe("2026-09-06T18:00:00+05:30");
    expect(nextEvent.price).toBe("Free");
  });

  it("keeps access open and conversation technical", () => {
    expect(communityRules).toContain("Curiosity is enough. No gatekeeping.");
    expect(communityRules).toContain(
      "Keep conversation related to technology.",
    );
    expect(
      faqs.some((item) => item.question === "Do I need to know how to code?"),
    ).toBe(true);
  });

  it("retains safety promises", () => {
    expect(communityRules).toContain(
      "Ask before privately messaging another member.",
    );
    expect(communityRules).toContain(
      "Respect photography preferences and safeguards for younger members.",
    );
  });
});
