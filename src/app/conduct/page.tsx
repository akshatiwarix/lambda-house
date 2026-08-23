import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getPublicLinks } from "@/lib/public-links";

export const metadata: Metadata = {
  title: "Conduct and safety | Lambda House Kanpur",
  description: "The rules Lambda House runs on.",
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
      <Header />
      <main id="main-content">
        <article className="container policy">
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
