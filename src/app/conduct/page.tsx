import type { Metadata } from "next";
import { EventBanner } from "@/components/event-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { community } from "@/content/community";
import { getPublicLinks } from "@/lib/public-links";

export const metadata: Metadata = {
  title: "Conduct and safety | Lambda House Kanpur",
  description:
    "The rules Lambda House runs on, how they are enforced, and the safeguards that apply at every event.",
};

const rules = [
  "Curiosity is enough. Do not gatekeep by age, credentials, experience, employer, college, or technical ability.",
  "Keep conversation related to technology.",
  "Disagree with ideas without attacking people.",
  "No harassment, discrimination, threats, sexual content, doxxing, or invasive behaviour.",
  "Ask before privately messaging another member.",
  "Share your work to start a conversation, not to repeatedly advertise.",
  "No unsolicited recruiting, course promotion, fundraising, investment pitches, or mass forwards.",
  "Respect photography preferences and safeguards for younger members.",
  "Do not publish another member’s messages, identity, or contact information without permission.",
  "Organizers may remove content or members to protect the community.",
];

export default function ConductPage() {
  const links = getPublicLinks();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <EventBanner rsvpUrl={links.rsvpFormUrl} />
      <Header />
      <main id="main-content">
        <article className="container policy">
          <p className="mono-label" style={{ color: "var(--signal-red)" }}>
            {community.chapterMark}
          </p>
          <h1>Conduct and safety</h1>
          <p className="lede">
            Lambda House is open to every age and experience level. These rules
            are what make that possible.
          </p>

          <h2>The rules</h2>
          <ol>
            {rules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ol>

          <h2>How the rules are enforced</h2>
          <ul>
            <li>
              <strong>Minor first issue.</strong> A private reminder quoting the
              specific rule.
            </li>
            <li>
              <strong>Repeated or more serious issue.</strong> A written warning
              stating the behaviour and the change expected.
            </li>
            <li>
              <strong>Continued issue.</strong> Removal from the group and from
              events.
            </li>
            <li>
              <strong>
                Harassment, threats, predatory behaviour, doxxing, or a serious
                safety breach.
              </strong>{" "}
              Immediate removal, and reporting where the law requires it.
            </li>
          </ul>
          <p>
            Once a second organizer exists, serious decisions are taken by two
            organizers rather than one. Incidents are recorded privately. We do
            not debate identifiable incident details in public.
          </p>

          <h2>Attending independently</h2>
          <p>
            Anyone may register and attend on their own. A parent or guardian
            does not have to come along. The safeguards below apply to how
            organizers and members behave, not to who is allowed in.
          </p>

          <h2>Safeguards at every event</h2>
          <ul>
            <li>Events run only in public, staffed venues at reasonable hours.</li>
            <li>
              At least two adult organizers are present from setup through the
              official close.
            </li>
            <li>No closed-room one-to-one sessions.</li>
            <li>No home meetups and no overnight events.</li>
            <li>
              No community-arranged private transport involving people under 18.
            </li>
            <li>
              Adults may not use Lambda House to start private one-to-one contact
              with someone under 18. Help stays in visible group channels or
              public sessions.
            </li>
            <li>
              Identifiable photographs of attendees under 18 are not published by
              default. Attendance never depends on being photographed.
            </li>
            <li>
              Organizers and volunteers agree to a written child-safety and
              conduct policy.
            </li>
            <li>Walk-ins may attend, subject to venue capacity.</li>
          </ul>

          <h2>Reporting something</h2>
          <p>
            Write to{" "}
            <a href={`mailto:${community.contactEmail}`}>
              {community.contactEmail}
            </a>
            . Reports go to the organizer and are kept private. If you are in
            immediate danger, contact local emergency services first.
          </p>
          <p>
            When an incident happens, immediate safety comes first, then a
            private written record, then removal of access where needed, then any
            reporting the law requires.
          </p>

          <h2>Legal note</h2>
          <p>
            India’s Protection of Children from Sexual Offences Act treats anyone
            below 18 as a child, and certain known or suspected offences carry
            mandatory reporting obligations. This policy will be reviewed by an
            Indian legal professional before Lambda House runs youth-specific
            programs, private mentoring, or institutional partnerships involving
            children.
          </p>
          <p className="policy__disclaimer">
            This page describes Lambda House’s operating practice and is not
            legal advice.
          </p>
        </article>
      </main>
      <Footer links={links} />
    </>
  );
}
