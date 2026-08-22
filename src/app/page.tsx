import { Audience } from "@/components/audience";
import { EventFormats } from "@/components/event-formats";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { NextEvent } from "@/components/next-event";
import { RunOfShow } from "@/components/run-of-show";
import { Story } from "@/components/story";
import { nextEvent } from "@/content/community";
import { getPublicLinks } from "@/lib/public-links";

export default function Home() {
  const links = getPublicLinks();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero links={links} />
        <Story />
        <Audience />
        <EventFormats />
        <RunOfShow />
        <NextEvent event={nextEvent} rsvpUrl={links.rsvpFormUrl} />
      </main>
      <Footer links={links} />
    </>
  );
}
