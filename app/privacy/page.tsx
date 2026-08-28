import type { Metadata } from "next";
import LegalLayout from "../_components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy — Selah",
  description:
    "Learn how Selah handles devotional reflections, journal entries, device information, and local app data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="YOUR DATA, TREATED WITH CARE"
      title="Privacy Policy"
      description="Selah is designed around quiet reflection, not data collection. This policy explains what the app may process and what remains on your device."
      updatedAt="August 28, 2026"
    >
      <p>
        Welcome to Selah. Selah is a devotional companion that helps you pause,
        read Scripture, reflect, pray, and journal. This Privacy Policy explains
        how information is handled when you use Selah.
      </p>

      <div className="legal-highlight">
        <strong>The short version</strong>
        <p>
          Selah is local-first. Your devotional journal, reflections, mood
          check-ins, session progress, and preferences are stored on your device
          and are not uploaded to a Selah account or cloud database.
        </p>
      </div>

      <h2>Information Stored on Your Device</h2>
      <p>Depending on the features you use, local app data may include:</p>
      <ul>
        <li>Mood or wellbeing check-in selections</li>
        <li>Journal entries and written reflections</li>
        <li>Devotional session progress and completion history</li>
        <li>Reminder preferences and scheduled local notifications</li>
        <li>Audio, ambience, language, theme, and accessibility preferences</li>
        <li>Other information you choose to enter into the app</li>
      </ul>
      <p>
        This information remains under your control on your device unless you
        choose to copy, export, back up, or share it using another service.
      </p>

      <h2>Information Selah Does Not Require</h2>
      <p>The current version of Selah does not require:</p>
      <ul>
        <li>A Selah account</li>
        <li>Your name or email address to use devotional features</li>
        <li>Cloud synchronization of journals or reflections</li>
        <li>Payment card information</li>
        <li>Advertising identifiers</li>
      </ul>

      <h2>Device Permissions</h2>
      <p>
        Selah may request limited device permissions when they are needed for a
        feature you choose to use.
      </p>

      <h3>Notifications</h3>
      <p>
        If you enable devotional reminders, Selah may schedule local
        notifications on your device. You can disable or change notification
        access at any time through your device settings.
      </p>

      <h3>Microphone and Speech Recognition</h3>
      <p>
        If a reading or reflection feature uses voice input, Selah will request
        microphone or speech-recognition permission first. Audio or speech may be
        processed by your operating system or its speech service according to
        that provider&apos;s privacy terms. Selah does not use voice input for
        advertising or user profiling.
      </p>

      <h3>Local Storage</h3>
      <p>
        Selah uses device storage to save your preferences and devotional data.
        Your operating system may include this data in a device backup if you
        have system backups enabled. Those backups are controlled by your device
        and platform provider, not Selah.
      </p>

      <h2>Website Information</h2>
      <p>
        When you visit the Selah website, the hosting provider may process
        standard technical information needed to deliver and protect the site,
        such as an IP address, browser type, request time, and security logs.
        Selah does not use the website to collect devotional journal content.
      </p>

      <h2>How Information Is Used</h2>
      <p>Local information is used only to provide the features you request:</p>
      <ul>
        <li>Continue and personalize devotional sessions</li>
        <li>Show your locally stored reflections and journey progress</li>
        <li>Schedule reminders you configure</li>
        <li>Remember app, language, audio, and accessibility preferences</li>
        <li>Support optional voice-based interactions</li>
      </ul>

      <h2>Data Sharing and Sale</h2>
      <p>
        Selah does not sell personal information. Selah does not share your local
        journal entries, reflections, or mood check-ins with advertisers or data
        brokers.
      </p>
      <p>
        Information may be disclosed only when required by law, needed to protect
        users or the service from harm, or handled by a technical provider solely
        to operate a feature you explicitly use.
      </p>

      <h2>Data Retention and Deletion</h2>
      <p>
        Locally stored data remains on your device until you delete it, clear the
        app&apos;s data, or uninstall Selah. Because Selah does not maintain a
        cloud account containing your devotional content, there is no separate
        Selah account record to delete.
      </p>
      <p>
        Before removing the app, save anything you want to keep. Uninstalling or
        clearing app data may permanently remove journals and reflections and may
        not be reversible.
      </p>

      <h2>Security</h2>
      <p>
        Selah uses reasonable safeguards appropriate to a local-first app.
        However, no device or electronic storage method can be guaranteed to be
        completely secure. Protect your device with an appropriate passcode and
        keep its operating system up to date.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Selah is not directed to children under 13, and we do not knowingly
        collect personal information from children under 13. If you believe a
        child has provided personal information through a support request,
        contact us so we can address it.
      </p>

      <h2>Future Features</h2>
      <p>
        Selah may introduce optional features in the future. If a new feature
        changes how information is collected, stored, or shared, this policy will
        be updated before or when that feature becomes available.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy as Selah develops or legal requirements
        change. The latest version will be published on this page with a revised
        effective date.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions or concerns, email{" "}
        <a href="mailto:cubelated@gmail.com">cubelated@gmail.com</a>.
      </p>
    </LegalLayout>
  );
}
