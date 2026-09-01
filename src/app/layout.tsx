import type { Metadata, Viewport } from "next";
import { Manrope, Inter, Playfair_Display } from "next/font/google";
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "V.R. Dental Care & Dental Implant Centre | Yanam",
  description: "V.R. Dental Care & Dental Implant Centre in Yanam provides professional dental care, dental implants, root canal treatment, orthodontics, cosmetic dentistry, teeth whitening, and comprehensive oral healthcare.",
  keywords: [
    "V.R. Dental Care",
    "V.R. Dental Care & Dental Implant Centre",
    "Yanam Dentist",
    "Dentist in Yanam",
    "Dental Clinic in Yanam",
    "Dental Implants Yanam",
    "Root Canal Treatment",
    "Cavity Inspection",
    "Orthodontics",
    "Teeth Alignment",
    "Cosmetic Dentistry",
    "General Dentistry",
    "Teeth Whitening",
  ],
  authors: [{ name: "V.R. Dental Care & Dental Implant Centre" }],
  openGraph: {
    title: "V.R. Dental Care & Dental Implant Centre | Yanam",
    description: "V.R. Dental Care & Dental Implant Centre in Yanam provides professional dental care, dental implants, root canal treatment, orthodontics, cosmetic dentistry, teeth whitening, and comprehensive oral healthcare.",
    type: "website",
    locale: "en_US",
    siteName: "V.R. Dental Care & Dental Implant Centre",
  },
  twitter: {
    card: "summary_large_image",
    title: "V.R. Dental Care & Dental Implant Centre | Yanam",
    description: "V.R. Dental Care & Dental Implant Centre in Yanam provides professional dental care, dental implants, root canal treatment, orthodontics, cosmetic dentistry, teeth whitening, and comprehensive oral healthcare.",
  },
};

export const viewport: Viewport = {
  themeColor: "#087CE2",
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
      className={`${manrope.variable} ${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#0F172A] selection:bg-primary/30 font-sans">
        {children}
      </body>
    </html>
  );
}
