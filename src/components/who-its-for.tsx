import Link from "next/link";
import { audience } from "@/content/community";

/**
 * Section 2: who belongs here. Just the audience grid and a minimal pointer
 * to the full conduct policy — no repeated rules list, no topic tag wall.
 */
export function WhoItsFor() {
  return (
    <section className="container section" id="who">
      <p className="mono-label section-head">Who it is for</p>
      <h2 className="section-title">
        Curiosity about technology is the only requirement.
      </h2>
      <ul className="audience-grid audience-list">
        {audience.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="safety-note">
        A short, enforced set of rules keeps this comfortable for everyone.{" "}
        <Link href="/conduct">Read the conduct and safety policy.</Link>
      </p>
    </section>
  );
}
