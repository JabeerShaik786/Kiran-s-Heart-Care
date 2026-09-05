"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { getAssetPath } from "@/lib/getAssetPath";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["home", "about", "services", "blog", "contact", "appointment"];

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      const headerEl = document.querySelector("header");
      const navbarHeight = headerEl ? headerEl.getBoundingClientRect().height + 16 : 96;
      const padding = 12;

      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - navbarHeight - padding;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6 flex justify-center pointer-events-none"
      >
        <div
          className={`w-full max-w-[1320px] transition-all duration-300 ease-in-out flex items-center justify-between pointer-events-auto ${
            scrolled
              ? "h-[72px] px-8 rounded-full bg-white/90 backdrop-blur-[20px] border border-white/40 shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
              : "h-[80px] px-8 rounded-full bg-white/70 backdrop-blur-[12px] border border-white/30"
          }`}
        >
          {/* Logo Section (Left Column) */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <Image
                src={getAssetPath("/logo.png")}
                alt="V.R. Dental Care & Dental Implant Centre"
                width={180}
                height={48}
                className="h-10 md:h-12 w-auto object-contain"
                priority
                unoptimized
              />
            </a>
          </div>

          {/* Navigation Links (Center Column) */}
          <nav className="hidden lg:flex items-center justify-center gap-8">
            {NAV_ITEMS.map((item) => {
              const itemId = item.href.replace("#", "");
              const isActive =
                activeSection === itemId ||
                (itemId === "contact" && (activeSection === "contact" || activeSection === "appointment"));

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative py-1 text-[15px] font-sans font-semibold transition-colors duration-200 group whitespace-nowrap ${
                    isActive ? "text-primary font-bold" : "text-[#334155] hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Contact & CTA Section (Right Column) */}
          <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
            <a
              href="tel:09885349798"
              className="flex items-center gap-2 text-[15px] font-sans font-medium text-[#334155] hover:text-primary transition-colors duration-200 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-slate-500" />
              <span>098853 49798</span>
            </a>
            <a
              href="#appointment"
              onClick={(e) => scrollToSection(e, "#appointment")}
              className="h-11 px-6 bg-primary text-white text-[15px] font-sans font-semibold rounded-full shadow-sm hover:shadow-md hover:bg-secondary transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group cursor-pointer whitespace-nowrap"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex lg:hidden items-center gap-4">
            <a
              href="tel:09885349798"
              className="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-dark-text hover:bg-black/5 rounded-full transition-colors duration-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-4 top-[88px] z-40 bg-white/95 backdrop-blur-[20px] border border-white/60 shadow-2xl rounded-3xl p-6 lg:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => {
                const itemId = item.href.replace("#", "");
                const isActive =
                  activeSection === itemId ||
                  (itemId === "contact" && (activeSection === "contact" || activeSection === "appointment"));

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`py-2.5 px-4 text-base font-semibold rounded-2xl transition-all duration-200 ${
                      isActive ? "bg-primary/10 text-primary font-bold" : "text-dark-text/90 hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            <hr className="border-borders" />

            <div className="flex flex-col gap-4">
              <a
                href="tel:09885349798"
                className="flex items-center justify-center gap-3 py-3 rounded-2xl border border-primary/20 text-primary font-semibold text-sm hover:bg-primary/5 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call 098853 49798</span>
              </a>
              <a
                href="#appointment"
                onClick={(e) => scrollToSection(e, "#appointment")}
                className="w-full py-3.5 bg-primary text-white text-center font-bold text-sm rounded-2xl shadow-lg shadow-primary/20 hover:bg-secondary transition-colors duration-200"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
