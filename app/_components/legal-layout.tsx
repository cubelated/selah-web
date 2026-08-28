import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

type LegalLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  updatedAt: string;
  children: ReactNode;
};

export default function LegalLayout({
  eyebrow,
  title,
  description,
  updatedAt,
  children,
}: LegalLayoutProps) {
  return (
    <main className="legal-page">
      <div className="legal-glow legal-glow-one" aria-hidden="true" />
      <div className="legal-glow legal-glow-two" aria-hidden="true" />

      <nav className="legal-nav shell" aria-label="Legal page navigation">
        <a className="brand" href="/" aria-label="Selah home">
          <img src="/selah-logo.png" alt="" width="1024" height="1024" />
          <span>SELAH</span>
        </a>
        <a className="legal-back" href="/">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Selah
        </a>
      </nav>

      <header className="legal-hero shell">
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        <div className="legal-intro">
          <p>{description}</p>
          <span>Last updated {updatedAt}</span>
        </div>
      </header>

      <div className="legal-document shell">
        <article className="legal-prose">{children}</article>
        <aside className="legal-aside" aria-label="Selah legal resources">
          <span>SELAH RESOURCES</span>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/support">Support</a>
          <div>
            <p>Questions?</p>
            <a href="mailto:cubelated@gmail.com">cubelated@gmail.com</a>
          </div>
        </aside>
      </div>

      <footer className="legal-footer shell">
        <span>© {new Date().getFullYear()} Selah</span>
        <p>Pause. Reflect. Grow.</p>
      </footer>
    </main>
  );
}
