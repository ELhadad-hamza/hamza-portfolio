import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}