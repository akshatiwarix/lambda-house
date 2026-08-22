import Link from "next/link";
import { communityRules } from "@/content/community";

export function GuidelinesPreview() {
  return (
    <section className="container section" id="rules">
      <p className="mono-label section-head">How we behave here</p>
      <h2 className="section-title">A short list, enforced.</h2>
      <ol className="rules">
        {communityRules.map((rule, index) => (
          <li key={rule}>
            <span className="rules__num">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{rule}</span>
          </li>
        ))}
      </ol>
      <p className="lede" style={{ marginTop: "1.75rem" }}>
        Harassment, threats, predatory behaviour, and doxxing mean immediate
        removal, and reporting where the law requires it.
      </p>
      <p style={{ marginTop: "1.25rem" }}>
        <Link className="btn btn-secondary" href="/conduct">
          Read the full conduct and safety policy
        </Link>
      </p>
    </section>
  );
}
