import Link from "next/link";
import { audience } from "@/content/community";

const topics = [
  "software",
  "hardware",
  "AI",
  "cybersecurity",
  "gaming",
  "robotics",
  "electronics",
  "science",
  "design",
  "digital products",
  "gadgets",
  "open source",
  "tech careers",
  "personal projects",
];

/**
 * Section 2: who belongs here. Audience, the range of topics, and a one-line
 * pointer to the full conduct policy instead of repeating the rules list.
 */
export function WhoItsFor() {
  return (
    <section className="container section" id="who">
      <p className="mono-label section-head">Who it is for</p>
      <h2 className="section-title">Curiosity is the only requirement.</h2>
      <p className="lede">
        No credential check, no experience bar, no age limit. If technology
        makes you curious, that is the whole qualification.
      </p>
      <ul className="audience-grid audience-list">
        {audience.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul className="topics">
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
      <p className="lede safety-note">
        A short, enforced set of rules keeps this comfortable for everyone.{" "}
        <Link href="/conduct">Read the conduct and safety policy.</Link>
      </p>
    </section>
  );
}
