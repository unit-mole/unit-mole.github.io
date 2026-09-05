import { Download } from "lucide-react";
import { profile, withBasePath } from "@/src/data/profile";

const navItems = [
  ["RAG", "#rag-systems"],
  ["Work", "#selected-work"],
  ["Practice", "#practice"],
  ["Library", "#catalog"],
  ["Journey", "#trajectory"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Anmol Tripathi — home">
        <span>{profile.shortName}</span>
        <span className="brand-copy">Anmol Tripathi</span>
      </a>
      <nav aria-label="Primary navigation" className="primary-nav">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href={withBasePath(profile.resume)} download>
        <Download aria-hidden="true" size={16} />
        Resume
      </a>
    </header>
  );
}
