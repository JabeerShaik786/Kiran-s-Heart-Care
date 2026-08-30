"use client";

import { Smile, Mail, MapPin, Phone, MessageSquare, Clock } from "lucide-react";

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
              <Smile className="w-5 h-5 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg tracking-tight text-white leading-tight uppercase">
                [Dental Clinic Name]
              </span>
              <span className="font-sans font-medium text-[9px] tracking-[0.1em] text-accent uppercase leading-none mt-0.5">
                Advanced Smile Center
              </span>
            </div>
          </a>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm text-left">
            [Dental Clinic Name] — Advanced Dental Care & Smile Center. Providing modern, comfortable, and personalized dental care for healthier smiles.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[12px] bg-primary/20 text-accent px-3.5 py-1 rounded-full font-semibold border border-primary/10 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Hours: Mon – Sat (9am – 8pm)
            </span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-5 text-left">
          <h4 className="font-heading font-bold text-base text-white tracking-wide uppercase">
            Navigation
          </h4>
          <ul className="flex flex-col gap-3.5 text-sm text-white/60">
            {[
              { name: "Home", href: "#home" },
              { name: "Services", href: "#services" },
              { name: "About Us", href: "#about" },
              { name: "Blog / Articles", href: "#blog" },
              { name: "Contact Us", href: "#contact" },
              { name: "Book Appointment", href: "#contact" },
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
        <div className="flex flex-col gap-5 text-left">
          <h4 className="font-heading font-bold text-base text-white tracking-wide uppercase">
            Services
          </h4>
          <ul className="flex flex-col gap-3.5 text-sm text-white/60">
            {[
              { name: "General Dentistry", href: "#services" },
              { name: "Teeth Cleaning & Polishing", href: "#services" },
              { name: "Root Canal Treatment", href: "#services" },
              { name: "Dental Implants", href: "#services" },
              { name: "Teeth Whitening", href: "#services" },
              { name: "Crowns & Bridges", href: "#services" },
              { name: "Braces & Aligners", href: "#services" },
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
        <div className="flex flex-col gap-5 text-left">
          <h4 className="font-heading font-bold text-base text-white tracking-wide uppercase">
            Contact Us
          </h4>
          <div className="flex flex-col gap-4 text-sm text-white/60">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span>[Clinic Address]</span>
            </div>
            <div className="flex gap-3">
              <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <a href="tel:[Clinic Phone Number]" className="hover:text-white transition-colors">
                [Clinic Phone Number]
              </a>
            </div>
            <div className="flex gap-3">
              <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <a href="mailto:[Clinic Email]" className="hover:text-white transition-colors break-all">
                [Clinic Email]
              </a>
            </div>
            <div className="flex gap-3">
              <MessageSquare className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <a
                href="https://wa.me/[Clinic Phone Number]"
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
        <p>© {currentYear} [Dental Clinic Name]. All rights reserved.</p>
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
