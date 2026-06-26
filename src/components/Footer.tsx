"use client";

import { Heart, Mail, MapPin, Phone, MessageSquare, ShieldAlert } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="w-full bg-[#0F172A] text-white/90 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <a href="#home" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-primary/20 text-accent flex items-center justify-center">
              <Heart className="w-5 h-5 fill-accent/20" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg tracking-tight text-white leading-tight">
                KIRAN
              </span>
              <span className="font-sans font-medium text-[10px] tracking-[0.15em] text-accent uppercase leading-none">
                Heart Care
              </span>
            </div>
          </a>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            Providing premium, compassionate, and advanced cardiology care under the supervision of Dr. Kiran. Committed to clinical excellence and a healthier heart for every patient.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[12px] bg-red-500/20 text-red-400 px-3.5 py-1 rounded-full font-semibold border border-red-500/10 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" />
              24/7 Cardiac Emergency Support
            </span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-5">
          <h4 className="font-heading font-bold text-base text-white tracking-wide uppercase">
            Quick Navigation
          </h4>
          <ul className="flex flex-col gap-3.5 text-sm text-white/60">
            {[
              { name: "Home", href: "#home" },
              { name: "About Dr. Kiran", href: "#about" },
              { name: "Heart Care Services", href: "#services" },
              { name: "Patient Stories", href: "#testimonials" },
              { name: "Frequently Asked Questions", href: "#faq" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-5">
          <h4 className="font-heading font-bold text-base text-white tracking-wide uppercase">
            Key Services
          </h4>
          <ul className="flex flex-col gap-3.5 text-sm text-white/60">
            {[
              { name: "Angiography & Angioplasty", href: "#services" },
              { name: "2D Echocardiography", href: "#services" },
              { name: "Treadmill Test (TMT)", href: "#services" },
              { name: "Holter Monitoring", href: "#services" },
              { name: "Preventive Cardiology", href: "#services" },
              { name: "Hypertension Management", href: "#services" },
              { name: "Diabetes & Heart Care", href: "#services" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-5">
          <h4 className="font-heading font-bold text-base text-white tracking-wide uppercase">
            Contact Clinic
          </h4>
          <div className="flex flex-col gap-4 text-sm text-white/60">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span>
                123, Luxury Medical Plaza, Sector 4,
                <br />
                Opposite Central Park, New Delhi - 110001
              </span>
            </div>
            <div className="flex gap-3">
              <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
                <a href="tel:+919876501234" className="hover:text-white transition-colors text-red-400 font-semibold mt-0.5">
                  +91 98765 01234 (Emergency)
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <a href="mailto:info@kiransheartcare.com" className="hover:text-white transition-colors break-all">
                info@kiransheartcare.com
              </a>
            </div>
            <div className="flex gap-3">
              <MessageSquare className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-white/10 max-w-[1440px] mx-auto px-6 md:px-12" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <p>© {currentYear} Kiran's Heart Care. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
