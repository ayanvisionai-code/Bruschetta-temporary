import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bruschetta by Food Cabaret | Coffee, Brunch & Café in Leeds",
  description:
    "Discover specialty coffee, pastries, brunch and globally inspired food at Bruschetta by Food Cabaret in Leeds Corn Exchange. Explore the menu and find us in Leeds.",
  keywords: [
    "Bruschetta Leeds",
    "Food Cabaret",
    "Leeds Corn Exchange cafe",
    "specialty coffee Leeds",
    "brunch Leeds",
    "pistachio croissant Leeds",
    "chakchouka Leeds",
  ],
  authors: [{ name: "Bruschetta by Food Cabaret" }],
  openGraph: {
    title: "Bruschetta by Food Cabaret | Coffee, Brunch & Café in Leeds",
    description:
      "Specialty coffee, handmade pastries, vibrant brunch and globally inspired flavours in Leeds Corn Exchange.",
    url: "https://foodcabaret.com/",
    siteName: "Bruschetta by Food Cabaret",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#211C19] font-sans antialiased pb-16 lg:pb-0">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
