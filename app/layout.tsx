import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://selah.cubelated.com"),
  applicationName: "Selah",
  title: "Selah | Pause. Praise. Pray.",
  description:
    "Build your daily devotional habit with God. Pause. Praise. Pray. Guided gratitude, Bible reading, reflection, prayer, and journaling.",
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
    title: "Selah | Pause. Praise. Pray.",
    description:
      "Build your daily devotional habit with God. Pause. Praise. Pray. Read your Bible, reflect, journal, and grow one day at a time.",
    url: "https://selah.cubelated.com",
    siteName: "Selah",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Selah | Pause. Praise. Pray.",
    description:
      "Build your daily devotional habit with God. Pause. Praise. Pray. Read your Bible, reflect, journal, and grow one day at a time.",
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
