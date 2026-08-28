import type { Metadata } from "next";
import LegalLayout from "../_components/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service — Selah",
  description:
    "Terms governing use of the Selah devotional companion and website.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="USE SELAH WITH UNDERSTANDING"
      title="Terms of Service"
      description="These terms explain the boundaries of Selah as a devotional aid and your responsibilities when using the app or website."
      updatedAt="August 28, 2026"
    >
      <p>
        These Terms of Service govern your use of Selah, a devotional companion
        designed to support Scripture reading, reflection, prayer, and personal
        journaling. By accessing or using Selah, you agree to these Terms.
      </p>

      <h2>Purpose of Selah</h2>
      <p>
        Selah provides structure and prompts for personal devotional time. It is
        intended to support—not replace—reading Scripture, prayer, participation
        in a church community, pastoral care, or professional guidance.
      </p>

      <h2>Not Professional or Pastoral Advice</h2>
      <p>
        Selah does not provide medical, mental-health, legal, financial,
        theological, counseling, crisis, or other professional advice. Devotional
        prompts and wellbeing check-ins are reflective tools and are not a
        diagnosis, treatment, or substitute for qualified care.
      </p>
      <p>
        If you are in immediate danger or experiencing a crisis, contact local
        emergency services or a qualified crisis-support provider in your area.
      </p>

      <h2>Using Selah</h2>
      <p>You agree to:</p>
      <ul>
        <li>Use Selah lawfully and responsibly</li>
        <li>Respect intellectual-property and third-party rights</li>
        <li>Not misuse, disrupt, reverse engineer, or interfere with the service</li>
        <li>Not attempt unauthorized access to Selah systems or other users&apos; data</li>
        <li>Use your own judgment when responding to devotional prompts</li>
      </ul>

      <h2>Your Content</h2>
      <p>
        You retain ownership of journal entries, reflections, and other content
        you create. Selah&apos;s current local-first design stores this content on
        your device rather than in a Selah account.
      </p>
      <p>
        You are responsible for your content and for maintaining any backups you
        need. Clearing app data, uninstalling Selah, losing a device, or changing
        devices may permanently remove locally stored content.
      </p>

      <h2>Scripture and Third-Party Content</h2>
      <p>
        Bible passages, translations, music, audio, links, or other materials may
        be subject to their respective owners&apos; rights and terms. Selah does not
        grant you ownership of third-party content displayed or referenced by the
        app.
      </p>

      <h2>Reminders and Device Features</h2>
      <p>
        Selah may schedule local devotional reminders or use device features such
        as audio, microphone access, and speech recognition when you enable them.
        Availability and delivery depend on device settings, permissions,
        operating-system behavior, and third-party platform services.
      </p>
      <p>
        We do not guarantee that every reminder, audio feature, or recognition
        result will be delivered or operate at an exact time or without error.
      </p>

      <h2>Availability and Changes</h2>
      <p>
        Selah is under active development. Features may be added, changed,
        limited, interrupted, or removed as the product evolves. We do not
        guarantee uninterrupted, error-free, or permanently available service.
      </p>

      <h2>Cost and Optional Support</h2>
      <p>
        Selah&apos;s core devotional experience is intended to remain available
        without locking essential features behind payment. Selah may offer an
        optional way to support development in the future. Any purchase terms,
        pricing, renewal behavior, and refund rules will be shown before a
        transaction and may also be governed by the applicable app store.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        Selah&apos;s software, design, branding, logo, original copy, and original
        media are protected by applicable intellectual-property laws. These
        Terms do not grant permission to copy, distribute, sell, or create
        derivative works from Selah except where the law or an applicable license
        permits it.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        Selah is provided on an &quot;as is&quot; and &quot;as available&quot;
        basis. To the extent permitted by law, we disclaim warranties that Selah
        will meet every expectation, operate without interruption, preserve all
        local data, or be free of defects.
      </p>

      <h2>Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, we are not responsible for:</p>
      <ul>
        <li>Loss of locally stored journals, reflections, settings, or progress</li>
        <li>Missed reminders or unavailable device features</li>
        <li>Decisions made based on devotional prompts or app content</li>
        <li>Service interruptions, device failures, or third-party services</li>
        <li>Indirect, incidental, consequential, or special damages</li>
      </ul>

      <h2>Termination</h2>
      <p>
        We may restrict access to Selah or its website when necessary to address
        unlawful use, abuse, security risks, or a material violation of these
        Terms.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms as Selah develops. Updated Terms will be
        published on this page with a new effective date. Continuing to use Selah
        after an update means you accept the revised Terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms may be sent to{" "}
        <a href="mailto:cubelated@gmail.com">cubelated@gmail.com</a>.
      </p>
    </LegalLayout>
  );
}
