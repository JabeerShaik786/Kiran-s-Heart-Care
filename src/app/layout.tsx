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
  title: "[Dental Clinic Name] | Premium Dental Care & Smile Center",
  description: "Experience modern, comfortable, and personalized dental care at [Dental Clinic Name]. Specializing in preventive hygiene, teeth cleaning, root canal therapy, dental implants, teeth whitening, clear aligners, and aesthetic smile design.",
  keywords: [
    "[Dental Clinic Name]",
    "Dentist",
    "Dental Clinic",
    "Root Canal Treatment",
    "Dental Implants",
    "Teeth Whitening",
    "Teeth Cleaning & Polishing",
    "Clear Aligners & Braces",
    "Cosmetic Dentistry",
    "Pediatric Dentist",
  ],
  authors: [{ name: "[Dental Clinic Name]" }],
  openGraph: {
    title: "[Dental Clinic Name] | Advanced Dental Care & Smile Center",
    description: "Expert dental diagnostic and treatment options with a compassionate, patient-first approach.",
    type: "website",
    locale: "en_US",
    siteName: "[Dental Clinic Name]",
  },
  twitter: {
    card: "summary_large_image",
    title: "[Dental Clinic Name]",
    description: "Advanced Dental Care & Smile Center.",
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
