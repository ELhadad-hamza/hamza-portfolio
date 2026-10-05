import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Hamza El Hadad | Software Engineer & Full-Stack Developer",
    template: "%s | Hamza El Hadad",
  },

  description:
    "Portfolio de Hamza El Hadad, élève ingénieur et développeur full-stack spécialisé dans la conception d’applications web et logicielles modernes.",

  metadataBase: new URL("https://hamzaelhadad.com"),

  openGraph: {
    title: "Hamza El Hadad | Software Engineer & Full-Stack Developer",
    description:
      "Découvrez mon parcours, mes compétences et mes projets en développement web et ingénierie logicielle.",
    url: "https://hamzaelhadad.com",
    siteName: "Hamza El Hadad",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Hamza El Hadad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hamza El Hadad | Software Engineer & Full-Stack Developer",
    description:
      "Portfolio, projets et parcours de Hamza El Hadad.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}