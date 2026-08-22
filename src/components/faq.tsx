import { faqs } from "@/content/community";

export function Faq() {
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
    </section>
  );
}
