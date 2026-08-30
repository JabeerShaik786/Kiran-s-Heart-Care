"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Smile, Phone } from "lucide-react";

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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
              : "h-[80px] px-8 rounded-full bg-transparent border border-transparent"
          }`}
        >
          {/* Logo Section (Left Column) */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                <motion.div
                  animate={{
                    scale: [1, 1.12, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <Smile className="w-4 h-4 text-primary" />
                </motion.div>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading font-extrabold text-[12px] md:text-sm tracking-tight text-primary leading-tight uppercase">
                  [Dental Clinic Name]
                </span>
                <span className="font-sans font-medium text-[7px] tracking-[0.1em] text-gray-text uppercase leading-none mt-0.5">
                  Advanced Dental Care
                </span>
              </div>
            </a>
          </div>

          {/* Navigation Links (Center Column - Perfectly Centered) */}
          <nav className="hidden lg:flex items-center justify-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="relative py-1 text-[16px] font-sans font-medium text-[#334155] hover:text-primary transition-colors duration-200 group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Contact & CTA Section (Right Column) */}
          <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
            <a
              href="tel:[Clinic Phone Number]"
              className="flex items-center gap-2 text-[16px] font-sans font-medium text-[#334155] hover:text-primary transition-colors duration-200 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-slate-500" />
              <span>[Clinic Phone Number]</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="h-12 px-7 bg-primary text-white text-[16px] font-sans font-medium rounded-full shadow-sm hover:shadow-md hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group cursor-pointer whitespace-nowrap"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex lg:hidden items-center gap-4">
            <a
              href="tel:[Clinic Phone Number]"
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
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="py-2.5 px-4 text-base font-semibold text-dark-text/90 rounded-2xl hover:bg-primary/5 hover:text-primary transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <hr className="border-borders" />

            <div className="flex flex-col gap-4">
              <a
                href="tel:[Clinic Phone Number]"
                className="flex items-center justify-center gap-3 py-3 rounded-2xl border border-primary/20 text-primary font-semibold text-sm hover:bg-primary/5 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call [Clinic Phone Number]</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
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
