import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { community } from "@/content/community";
import { getPublicLinks } from "@/lib/public-links";

export const metadata: Metadata = {
  title: "Privacy | Lambda House Kanpur",
  description:
    "What Lambda House collects, why, who can see it, how long it is kept, and how to have it deleted.",
};

export default function PrivacyPage() {
  const links = getPublicLinks();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <article className="container policy">
          <p className="mono-label" style={{ color: "var(--signal-red)" }}>
            {community.chapterMark}
          </p>
          <h1>Privacy</h1>
          <p className="lede">
            We collect the least we can get away with, keep it briefly, and
            never pass it on.
          </p>

          <h2>What this website does</h2>
          <p>
            This site has no accounts, no member profiles, no advertising
            trackers, no behavioural analytics, and no cookie banner, because it
            sets no cookies. Nothing you do here is tracked or profiled.
          </p>

          <h2>Joining the community</h2>
          <p>
            The joining form is a Google Form. It collects:
          </p>
          <ul>
            <li>
              <strong>Display name</strong> — so we know what to call you.
            </li>
            <li>
              <strong>City</strong> — to know who can reach a Kanpur meetup.
            </li>
            <li>
              <strong>Age range</strong> — a band, never a date of birth, so the
              right safeguards apply.
            </li>
            <li>
              <strong>What you are curious about</strong> — to introduce you to
              people with overlapping interests.
            </li>
            <li>
              <strong>How you want to take part</strong> — so we do not send you
              things you did not ask for.
            </li>
            <li>
              <strong>A contact detail, optional</strong> — only if you want a
              WhatsApp invitation or a reminder.
            </li>
          </ul>

          <h2>RSVPing to an event</h2>
          <p>
            Event RSVPs run on Luma, which acts as a second processor alongside
            Google Forms. Luma always requires an email address to register and
            that requirement cannot be switched off, so an RSVP means giving
            Luma your email. The joining form keeps contact details optional.
          </p>
          <p>Beyond the email Luma requires, an RSVP collects:</p>
          <ul>
            <li>
              <strong>Display name</strong> and <strong>age range</strong>.
            </li>
            <li>
              <strong>Whether you plan to attend</strong> — to estimate seating.
            </li>
            <li>
              <strong>What you are currently curious about</strong> — to make
              introductions on the day.
            </li>
            <li>
              <strong>Anything that would make the venue easier to use</strong> —
              so we can fix it or tell you in advance.
            </li>
            <li>
              <strong>Your photography preference</strong> — which we follow.
            </li>
          </ul>
          <p>
            Luma stores this under its own privacy policy. We use its guest list
            in hidden mode, so other attendees cannot see who has registered.
          </p>

          <h2>What we never collect</h2>
          <p>
            Exact dates of birth, identity documents, home addresses, school
            names, employer names, and financial information. Do not send these,
            and we will not ask.
          </p>

          <h2>Who can see your information</h2>
          <p>
            The organizer and one designated operator. Nobody else. Member
            information is never shared with sponsors, venues, partners, or other
            members, and it is never sold.
          </p>

          <h2>How long it is kept</h2>
          <ul>
            <li>
              <strong>Event data</strong> is deleted 30 days after the event,
              unless you separately joined the community.
            </li>
            <li>
              <strong>Community membership data</strong> is kept while you are a
              member, and deleted on request or after a long period of
              inactivity.
            </li>
          </ul>

          <h2>Photographs</h2>
          <p>
            We record your photography preference at RSVP and follow it.
            Identifiable photographs of attendees under 18 are not published by
            default. You can change your mind at any time, including after an
            event, and we will take the photograph down.
          </p>

          <h2>Seeing, correcting, or deleting your data</h2>
          <p>
            Write to{" "}
            <a href={`mailto:${community.contactEmail}`}>
              {community.contactEmail}
            </a>{" "}
            and ask. You do not need to give a reason, and asking does not affect
            your place in the community.
          </p>

          <h2>Children’s data</h2>
          <p>
            The child-data provisions of India’s Digital Personal Data Protection
            Act and its related rules are currently scheduled to take effect on
            May 13, 2027. Before that date, Lambda House will review how it
            handles the digital data of members under 18 and put verifiable
            parental consent in place where it is required. This is a separate
            question from attending an event independently, which remains open to
            everyone.
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
