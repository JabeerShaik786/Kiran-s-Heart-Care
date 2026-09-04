"use client";

import { Smile, Mail, MapPin, Phone, MessageSquare, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const headerEl = document.querySelector("header");
      const navbarHeight = headerEl ? headerEl.getBoundingClientRect().height + 16 : 96;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 12;
      window.scrollTo({
        top: Math.max(0, targetPosition),
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
              <span className="font-heading font-extrabold text-sm tracking-tight text-white leading-tight uppercase">
                V.R. Dental Care
              </span>
              <span className="font-sans font-medium text-[8px] tracking-[0.05em] text-accent uppercase leading-none mt-0.5">
                & Dental Implant Centre
              </span>
            </div>
          </a>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm text-left">
            Transforming Smiles, Transforming Lives. Professional and personalized dental care in a modern and comfortable environment.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[12px] bg-primary/20 text-accent px-3.5 py-1 rounded-full font-semibold border border-primary/10 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Hours: Mon – Sat: 9 AM – 8 PM (Sun Closed)
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
              { name: "About", href: "#about" },
              { name: "Blog", href: "#blog" },
              { name: "Contact", href: "#contact" },
              { name: "Book Appointment", href: "#appointment" },
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
              { name: "Root Canal Treatment", href: "#services" },
              { name: "Cavity Inspection", href: "#services" },
              { name: "Dental Implants", href: "#services" },
              { name: "Orthodontics", href: "#services" },
              { name: "Teeth Alignment", href: "#services" },
              { name: "Cosmetic Dentistry", href: "#services" },
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
              <span>3rd Cross St, opposite GMC Balayogi Stadium, Zicria Nagar, Zicriya Nagar, Yanam, Andhra Pradesh 533464</span>
            </div>
            <div className="flex gap-3">
              <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <a href="tel:09885349798" className="hover:text-white transition-colors">
                098853 49798
              </a>
            </div>
            <div className="flex gap-3">
              <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <a
                href="mailto:VRdental.yanam@gmail.com"
                className="hover:text-white transition-colors"
              >
                VRdental.yanam@gmail.com
              </a>
            </div>
            <div className="flex gap-3">
              <MessageSquare className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <a
                href="https://wa.me/919885349798"
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
        <p>© {currentYear} V.R. Dental Care & Dental Implant Centre. All rights reserved.</p>
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
