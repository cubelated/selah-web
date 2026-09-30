import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://selah.cubelated.com"),
  applicationName: "Selah",
  title: "Selah | Guided Bible Devotional Companion",
  description:
    "Selah gently guides you to pause, open your physical Bible, reflect, pray, and carry Scripture into your day.",
  icons: {
    icon: [
      {
        url: "/selah-logo.webp",
        type: "image/webp",
        sizes: "any",
      },
    ],
    shortcut: "/selah-logo.webp",
    apple: "/selah-logo.webp",
  },
  openGraph: {
    title: "Selah | Guided Bible Devotional Companion",
    description:
      "A quiet devotional rhythm that guides you back to Scripture, reflection, and prayer.",
    url: "https://selah.cubelated.com",
    siteName: "Selah",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Selah | Guided Bible Devotional Companion",
    description:
      "A quiet devotional rhythm that guides you back to Scripture, reflection, and prayer.",
  },
};

export const viewport: Viewport = {
  themeColor: "#111216",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
