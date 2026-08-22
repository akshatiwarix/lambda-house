import type { Metadata } from "next";
import { bodyFont, displayFont, monoFont } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lambda House Kanpur",
  description:
    "An open community for anyone curious about technology. Join the first Lambda House tech hangout in Kanpur on September 6, 2026.",
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
