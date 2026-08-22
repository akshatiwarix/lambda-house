export type PublicLinks = {
  joinFormUrl: string;
  rsvpFormUrl: string;
  socialUrl: string;
  siteUrl: string;
};

function validate(key: keyof PublicLinks, value: string | undefined): string {
  if (!value) throw new Error("Missing public URL: " + key);
  const url = new URL(value);
  const local = url.hostname === "127.0.0.1" || url.hostname === "localhost";
  if (url.protocol !== "https:" && !local) {
    throw new Error("Public URL must use HTTPS: " + key);
  }
  return url.toString().replace(/\/$/, "");
}

export function getPublicLinks(source?: Partial<PublicLinks>): PublicLinks {
  const values = source ?? {
    joinFormUrl: process.env.NEXT_PUBLIC_JOIN_FORM_URL,
    rsvpFormUrl: process.env.NEXT_PUBLIC_RSVP_FORM_URL,
    socialUrl: process.env.NEXT_PUBLIC_SOCIAL_URL,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  };
  return {
    joinFormUrl: validate("joinFormUrl", values.joinFormUrl),
    rsvpFormUrl: validate("rsvpFormUrl", values.rsvpFormUrl),
    socialUrl: validate("socialUrl", values.socialUrl),
    siteUrl: validate("siteUrl", values.siteUrl),
  };
}
