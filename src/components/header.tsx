import Link from "next/link";
import { BrandMark } from "./brand-mark";

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" aria-label="Lambda House home">
          <BrandMark />
        </Link>
        <Link href="/" className="site-header__glyph" aria-label="Lambda House home">
          λ
        </Link>
      </div>
    </header>
  );
}
