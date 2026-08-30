import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "V.R. Dental Care | Transforming Smiles, Transforming Lives",
  description: "V.R. Dental Care provides professional and personalized dental services in a modern and comfortable environment.",
  keywords: [
    "V.R. Dental Care",
    "Dentist",
    "Dental Clinic",
    "Root Canal",
    "Cavity Inspection",
    "Orthodontics",
    "Teeth Alignment",
    "Cosmetic Dentistry",
    "General Dental Consultation",
  ],
  authors: [{ name: "V.R. Dental Care" }],
  openGraph: {
    title: "V.R. Dental Care | Transforming Smiles, Transforming Lives",
    description: "V.R. Dental Care provides professional and personalized dental services in a modern and comfortable environment.",
    type: "website",
    locale: "en_US",
    siteName: "V.R. Dental Care",
  },
  twitter: {
    card: "summary_large_image",
    title: "V.R. Dental Care",
    description: "Transforming Smiles, Transforming Lives. Providing professional, personalized, and comfortable dental care.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D9488",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-accent/30 font-sans">
        {children}
      </body>
    </html>
  );
}
