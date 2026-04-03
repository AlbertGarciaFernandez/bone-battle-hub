import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bone Battle Hub — Create · Collect · Battle",
  description:
    "Bone Battle is a community card game for pups. Create your card, collect the pack, and battle online in this underground trading card ecosystem.",
  keywords: ["bone battle", "pup card game", "trading cards", "puppy community", "card game"],
  openGraph: {
    title: "Bone Battle Hub",
    description: "Build your card. Collect the pack. Battle online.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts are loaded in globals.css via @import */}
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body style={{ background: "#0A0A0A" }}>{children}</body>
    </html>
  );
}
