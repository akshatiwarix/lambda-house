import { describe, expect, it } from "vitest";
import { getPublicLinks } from "./public-links";

const valid = {
  joinFormUrl: "https://forms.gle/AWaG97XPs3LoUaXW9",
  rsvpFormUrl: "https://lu.ma/thelambdahouse",
  socialUrl: "https://www.instagram.com/thelambdahouse",
  siteUrl: "https://www.thelambdahouse.com",
};

describe("public links", () => {
  it("returns valid links", () => {
    expect(getPublicLinks(valid)).toEqual(valid);
  });

  it("rejects missing values", () => {
    expect(() => getPublicLinks({ ...valid, joinFormUrl: "" })).toThrow(
      "Missing public URL: joinFormUrl",
    );
  });

  it("rejects insecure production links", () => {
    expect(() =>
      getPublicLinks({ ...valid, socialUrl: "http://example.com/social" }),
    ).toThrow("Public URL must use HTTPS: socialUrl");
  });

  it("allows local http only for loopback development", () => {
    expect(
      getPublicLinks({ ...valid, siteUrl: "http://127.0.0.1:3000" }).siteUrl,
    ).toBe("http://127.0.0.1:3000");
  });

  it("strips a trailing slash so links compose predictably", () => {
    expect(
      getPublicLinks({ ...valid, siteUrl: "https://www.thelambdahouse.com/" })
        .siteUrl,
    ).toBe("https://www.thelambdahouse.com");
  });

  // The RSVP platform opens closer to the event, so the site has to ship and
  // stay honest while it does not exist yet.
  it("treats a missing RSVP link as not-yet-open rather than an error", () => {
    expect(getPublicLinks({ ...valid, rsvpFormUrl: "" }).rsvpFormUrl).toBeNull();
  });

  it("still validates the RSVP link once it exists", () => {
    expect(() =>
      getPublicLinks({ ...valid, rsvpFormUrl: "http://lu.ma/insecure" }),
    ).toThrow("Public URL must use HTTPS: rsvpFormUrl");
  });
});
