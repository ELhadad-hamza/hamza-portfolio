import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const siteUrl = "https://hamzaelhadad.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "EL HADAD HAMZA | Ingénieur & Développeur Web",
  description:
    "Portfolio professionnel de EL HADAD HAMZA, élève ingénieur à l’EMSI, spécialisé en développement web, applications modernes et solutions logicielles.",
  keywords: [
    "Hamza El Hadad",
    "portfolio développeur",
    "portfolio ingénieur",
    "développeur web Maroc",
    "EMSI Rabat",
    "Next.js portfolio",
    "full stack developer",
  ],
  authors: [{ name: "EL HADAD HAMZA" }],
  creator: "EL HADAD HAMZA",
  publisher: "EL HADAD HAMZA",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EL HADAD HAMZA | Ingénieur & Développeur Web",
    description:
      "Découvrez le portfolio de EL HADAD HAMZA : projets web, compétences techniques, parcours académique et contact professionnel.",
    url: siteUrl,
    siteName: "EL HADAD HAMZA Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio EL HADAD HAMZA",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EL HADAD HAMZA | Ingénieur & Développeur Web",
    description:
      "Portfolio professionnel de EL HADAD HAMZA : projets, compétences et contact.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
 icons: {
  icon: "/icon.png",
  shortcut: "/icon.png",
  apple: "/icon.png",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}