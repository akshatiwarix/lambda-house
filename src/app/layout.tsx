import type { Metadata } from "next";
import { getPublicLinks } from "@/lib/public-links";
import { bodyFont, displayFont, monoFont } from "@/styles/fonts";
import "./globals.css";

const { siteUrl } = getPublicLinks();

const title = "Lambda House Kanpur | Come talk tech with us";
const description =
  "An open community for anyone curious about technology. Join the first Lambda House tech hangout in Kanpur on September 6, 2026.";
const socialImage = "/social/lambda-house-kanpur-001.svg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Lambda House",
    title,
    description,
    url: siteUrl,
    locale: "en_IN",
    images: [{ url: socialImage, width: 1080, height: 1350 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
