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
  title: "Kiran's Heart Care | Premium Cardiac Diagnostics & Advanced Cardiology Center",
  description: "Experience world-class cardiac care under Dr. Kiran. Specializing in advanced diagnostics, non-invasive cardiology, angiography, angioplasty, and patient-centered recovery. 25+ years of clinical excellence.",
  keywords: [
    "Kiran Heart Care",
    "Cardiologist",
    "Heart specialist",
    "Angiography",
    "Angioplasty",
    "2D Echo",
    "TMT test",
    "Holter monitoring",
    "Heart attack treatment",
    "Best cardiologist",
  ],
  authors: [{ name: "Dr. Kiran", url: "https://kiransheartcare.com" }],
  openGraph: {
    title: "Kiran's Heart Care | Advanced Cardiology Services",
    description: "Expert cardiac diagnostic and treatment options with a compassionate, patient-first approach. 25+ years of trusted cardiac care.",
    type: "website",
    locale: "en_US",
    siteName: "Kiran's Heart Care",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiran's Heart Care",
    description: "Advanced Cardiology & Compassionate Heart Care Services.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F4C81",
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
