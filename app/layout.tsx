

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import du composant Navbar

// Métadonnées du site (SEO)
export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Portfolio personnel - Développeur Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {/* La Navbar apparaîtra sur toutes les pages */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}