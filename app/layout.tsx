import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EL HADAD HAMZA | Ingénieur & Développeur",
  description:
    "Portfolio professionnel de EL HADAD HAMZA, ingénieur et développeur spécialisé dans la création de solutions web modernes.",
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