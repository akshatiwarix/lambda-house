import { eventFormats } from "@/content/community";

export function EventFormats() {
  return (
    <section className="container section" id="formats">
      <p className="mono-label section-head">Two formats, twice a month</p>
      <h2 className="section-title">
        One to talk. One to make something.
      </h2>
      <div className="format-grid">
        {eventFormats.map((format) => (
          <article className="format-card" key={format.name}>
            <p className="mono-label format-card__meta">{format.duration}</p>
            <h3 className="format-card__name">{format.name}</h3>
            <p>{format.summary}</p>
            <p>{format.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
