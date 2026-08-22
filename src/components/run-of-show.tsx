/**
 * The published run-of-show for the first hangout. Showing the actual shape of
 * the afternoon is the point: someone deciding whether to walk in alone should
 * be able to see exactly what happens and when.
 */
const schedule = [
  {
    time: "4:00",
    what: "People arrive",
    note: "Come whenever. Nothing starts on the dot.",
  },
  {
    time: "4:10",
    what: "Two-minute welcome",
    note: "What this is, and the few rules that keep it comfortable.",
  },
  {
    time: "4:15",
    what: "Names, and one thing you are curious about",
    note: "One sentence each. No job titles required, no pitch.",
  },
  {
    time: "4:30",
    what: "Open conversation",
    note: "The actual reason we are here. One circle, or a few tables.",
  },
  {
    time: "5:15",
    what: "Move seats if you want",
    note: "Optional. Talk to someone you have not met yet.",
  },
  {
    time: "6:00",
    what: "Official end",
    note: "Stay on if you are mid-conversation. Most people do.",
  },
];

export function RunOfShow() {
  return (
    <section className="container section" id="afternoon">
      <p className="mono-label section-head">How the afternoon goes</p>
      <h2 className="section-title">No surprises, no forced games.</h2>
      <p className="lede">
        You can read the whole plan before deciding to come. That is deliberate.
      </p>
      <ol className="runsheet">
        {schedule.map((slot) => (
          <li className="runsheet__row" key={slot.time}>
            <p className="runsheet__time">{slot.time}</p>
            <p className="runsheet__what">
              {slot.what}
              <span className="runsheet__note">{slot.note}</span>
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
