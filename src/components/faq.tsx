import { faqs } from "@/content/community";
import type { PublicLinks } from "@/lib/public-links";
import { PrimaryActions } from "./primary-actions";

/** The last section on the page, so it carries the closing call to action too. */
export function Faq({ links }: { links: PublicLinks }) {
  return (
    <section className="container section" id="faq">
      <p className="mono-label section-head">Questions people ask first</p>
      <h2 className="section-title">Before you decide to come.</h2>
      <div className="faq">
        {faqs.map((item) => (
          <details className="faq__item" key={item.question}>
            <summary className="faq__q">{item.question}</summary>
            <p className="faq__a">{item.answer}</p>
          </details>
        ))}
      </div>
      <div className="faq__closing">
        <p className="lede">No experience required. Curiosity is enough.</p>
        <PrimaryActions links={links} />
      </div>
    </section>
  );
}
