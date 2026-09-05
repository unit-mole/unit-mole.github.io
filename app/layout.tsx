import type { Metadata } from "next";
import { Analytics } from "@/components/site/analytics";
import { profile } from "@/src/data/profile";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || profile.siteUrl;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Anmol Tripathi — Data Scientist & Machine Learning Engineer",
  description:
    "Anmol Tripathi builds evaluated machine-learning and applied-AI systems across NLP, retrieval, deep learning, analytics, and decision support.",
  keywords: ["Anmol Tripathi", "Data Scientist", "Machine Learning Engineer", "Applied AI", "NLP", "Transformers", "Data Science"],
  authors: [{ name: "Anmol Tripathi" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Anmol Tripathi — Data Scientist & Machine Learning Engineer",
    description: "Applied AI, NLP, machine learning, evaluation, and decision systems.",
    url: siteUrl,
    siteName: "Anmol Tripathi — Engineering Portfolio",
    type: "website",
    images: [{ url: `${basePath}/og.png`, width: 1200, height: 630, alt: "Anmol Tripathi — AI/ML Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anmol Tripathi — Data Scientist & Machine Learning Engineer",
    description: "Applied AI, NLP, machine learning, evaluation, and decision systems.",
    images: [`${basePath}/og.png`],
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}<Analytics /></body>
    </html>
  );
}
