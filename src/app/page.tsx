import { EventBanner } from "@/components/event-banner";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatItIs } from "@/components/what-it-is";
import { WhoItsFor } from "@/components/who-its-for";
import { getPublicLinks } from "@/lib/public-links";

export default function Home() {
  const links = getPublicLinks();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <EventBanner rsvpUrl={links.rsvpFormUrl} />
      <Header />
      <main id="main-content">
        <WhatItIs links={links} />
        <WhoItsFor />
        <Faq links={links} />
      </main>
      <Footer links={links} />
    </>
  );
}
