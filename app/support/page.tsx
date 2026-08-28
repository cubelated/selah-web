import type { Metadata } from "next";
import {
  ArrowLeft,
  BookOpen,
  Bug,
  CheckCircle2,
  HardDrive,
  HelpCircle,
  Mail,
  MessageCircleQuestion,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import type { ReactNode } from "react";

const supportEmail = "cubelated@gmail.com";

const supportMailto = `mailto:${supportEmail}?subject=${encodeURIComponent(
  "Selah Support Request",
)}&body=${encodeURIComponent(`Hello Selah Support,

I need help with:

Device and operating system:
Selah app version (if known):
What happened:

Thank you.`)}`;

const bugMailto = `mailto:${supportEmail}?subject=${encodeURIComponent(
  "Selah Bug Report",
)}&body=${encodeURIComponent(`Hello Selah Support,

I found an issue in Selah.

Device and operating system:
Selah app version (if known):
Steps to reproduce:
What I expected:
What happened:

Thank you.`)}`;

export const metadata: Metadata = {
  title: "Support — Selah",
  description:
    "Get help with Selah, report a problem, or learn how local devotional data is handled.",
};

export default function SupportPage() {
  return (
    <main className="support-page">
      <div className="legal-glow legal-glow-one" aria-hidden="true" />
      <div className="legal-glow legal-glow-two" aria-hidden="true" />

      <nav className="legal-nav shell" aria-label="Support navigation">
        <a className="brand" href="/" aria-label="Selah home">
          <img src="/selah-logo.webp" alt="" width="512" height="512" />
          <span>SELAH</span>
        </a>
        <a className="legal-back" href="/">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Selah
        </a>
      </nav>

      <header className="support-hero shell">
        <div>
          <p className="support-eyebrow">
            <HelpCircle size={15} aria-hidden="true" />
            SELAH SUPPORT
          </p>
          <h1>How can we help?</h1>
          <p>
            Whether something is not working or you have a question about your
            devotional data, you can reach the person building Selah directly.
          </p>
        </div>
        <div className="support-mark" aria-hidden="true">
          <img src="/selah-logo.webp" alt="" width="512" height="512" />
        </div>
      </header>

      <section className="support-actions shell" aria-label="Contact options">
        <SupportCard
          icon={<Mail size={24} aria-hidden="true" />}
          eyebrow="GENERAL SUPPORT"
          title="Ask a question"
          description="Get help with the devotional flow, reminders, audio, journaling, or another part of Selah."
          label="Email support"
          href={supportMailto}
          primary
        />
        <SupportCard
          icon={<Bug size={24} aria-hidden="true" />}
          eyebrow="BUG REPORT"
          title="Tell us what broke"
          description="Share the device, app version, and steps that led to the issue so it can be reproduced."
          label="Report a bug"
          href={bugMailto}
        />
      </section>

      <section className="support-info shell">
        <div className="support-info-heading">
          <p>BEFORE YOU WRITE</p>
          <h2>Quick answers about Selah</h2>
        </div>

        <div className="support-info-grid">
          <InfoCard
            icon={<HardDrive size={22} aria-hidden="true" />}
            title="Where is my journal?"
          >
            Your journal, reflections, check-ins, progress, and preferences are
            stored locally on your device. Selah does not currently maintain a
            cloud account containing that content.
          </InfoCard>
          <InfoCard
            icon={<Smartphone size={22} aria-hidden="true" />}
            title="How do I delete my data?"
          >
            Delete entries inside Selah where that option is available, or clear
            the app&apos;s storage through your device settings. Uninstalling the
            app may also remove local data permanently.
          </InfoCard>
          <InfoCard
            icon={<BookOpen size={22} aria-hidden="true" />}
            title="Does Selah replace my Bible?"
          >
            No. Selah intentionally guides you to set the phone down and open a
            physical Bible. The app supports the rhythm of devotion; Scripture
            remains central.
          </InfoCard>
          <InfoCard
            icon={<ShieldCheck size={22} aria-hidden="true" />}
            title="Is my devotional data private?"
          >
            Selah does not upload local journal entries or mood check-ins to a
            Selah cloud database. Read the Privacy Policy for device permissions,
            backups, and website details.
          </InfoCard>
        </div>
      </section>

      <section className="support-note shell">
        <div className="support-note-icon">
          <MessageCircleQuestion size={24} aria-hidden="true" />
        </div>
        <div>
          <h2>What should a useful bug report include?</h2>
          <p>
            Include your device model, operating-system version, Selah version,
            what you expected, what happened instead, and the steps needed to
            reproduce it. Screenshots are useful when they do not contain private
            journal content.
          </p>
        </div>
        <div className="support-response">
          <CheckCircle2 size={18} aria-hidden="true" />
          <span>
            Support email
            <a href={supportMailto}>{supportEmail}</a>
          </span>
        </div>
      </section>

      <footer className="legal-footer shell">
        <div className="support-footer-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
        <p>Pause. Reflect. Grow.</p>
      </footer>
    </main>
  );
}

type SupportCardProps = {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  label: string;
  href: string;
  primary?: boolean;
};

function SupportCard({
  icon,
  eyebrow,
  title,
  description,
  label,
  href,
  primary = false,
}: SupportCardProps) {
  return (
    <article className={primary ? "support-card support-card-primary" : "support-card"}>
      <div className="support-card-icon">{icon}</div>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={href}>
        {label}
        <Mail size={16} aria-hidden="true" />
      </a>
    </article>
  );
}

type InfoCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

function InfoCard({ icon, title, children }: InfoCardProps) {
  return (
    <article className="support-info-card">
      <div>{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
