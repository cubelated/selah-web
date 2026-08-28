import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Selah — Pause. Reflect. Grow.",
  description:
    "A daily devotional companion that helps you pause, open a physical Bible, reflect, and grow.",
  icons: {
    icon: "/selah-logo.webp",
    shortcut: "/selah-logo.webp",
    apple: "/selah-logo.webp",
  },
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
