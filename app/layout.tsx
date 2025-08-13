import type { Metadata } from "next";
import "./globals.css";
import { Kalam, Knewave } from "next/font/google";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const knewave = Knewave({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-knewave",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kalam",
});

export const metadata: Metadata = {
  title: {
    template: "%s / Rendez-Vous hotel",
    default: "Welcome / Rendez-Vous ",
  },
  description:
    "Experience top-notch hotel services and hospitality in Addis Ababa with Rendez-Vous. Book your stay for comfort, luxury, and authentic Ethiopian experiences.",
  keywords:
    "hotel services Addis Ababa, Ethiopia hotels, luxury accommodation Addis Ababa, Ethiopian hospitality, travel Ethiopia, hotel booking Addis Ababa",

  openGraph: {
    title: "Rendez-Vous / Premium Hotel Services in Addis Ababa, Ethiopia",
    description:
      "Experience top-notch hotel services and hospitality in Addis Ababa with Rendez-Vous. Book your stay for comfort, luxury, and authentic Ethiopian experiences.",
    url: "https://rendez-vous-seven.vercel.app",
    siteName: "Rendez-Vous",
    images: [
      {
        url: "https://rendez-vous-seven.vercel.app/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Rendez-Vous Hotel Services Addis Ababa",
      },
    ],
    locale: "en_ET",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rendez-Vous | Premium Hotel Services in Addis Ababa, Ethiopia",
    description:
      "Experience top-notch hotel services and hospitality in Addis Ababa with Rendez-Vous. Book your stay for comfort, luxury, and authentic Ethiopian experiences.",
    images: ["https://rendez-vous-seven.vercel.app/images/hero/hero.jpg"],
    site: "@RendezVous",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${kalam.variable} ${knewave.variable}`}>
      <body className="bg-[#FAF6F0] font-kalam">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
