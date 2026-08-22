import Link from "next/link";
import { BrandMark } from "./brand-mark";

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" aria-label="Lambda House home">
          <BrandMark />
        </Link>
        <nav className="site-nav" aria-label="Main">
          <Link href="/#about">About</Link>
          <Link href="/#who">Who it&rsquo;s for</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/conduct">Conduct</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>
    </header>
  );
}
