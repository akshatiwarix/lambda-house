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
      <Header />
      <main id="main-content">
        <WhatItIs links={links} />
        <WhoItsFor />
        <Faq />
      </main>
      <Footer links={links} />
    </>
  );
}
