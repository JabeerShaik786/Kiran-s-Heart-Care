"use client";

import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";

export default function FloatingButtons() {
  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#appointment");
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
    <>
      {/* Floating WhatsApp Button - Desktop & Mobile */}
      <motion.a
        href="https://wa.me/919885349798"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-20 right-4 sm:right-6 lg:bottom-6 lg:right-6 z-50 flex items-center justify-center w-[54px] h-[54px] bg-[#25D366] rounded-full shadow-lg shadow-black/15 text-white cursor-pointer hover:bg-[#20bd5a] transition-all duration-200"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-7 h-7 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.638 1.97 14.162.945 11.53.945c-5.423 0-9.848 4.37-9.852 9.8.001 1.724.475 3.407 1.378 4.885L2.01 21.905l6.39-1.674-.01.008c-.732-.429-1.451-.95-2.022-1.517zM18.15 15.6c-.33-.165-1.951-.963-2.251-1.073-.302-.109-.521-.165-.74.165-.219.33-.849 1.073-1.04 1.293-.191.219-.382.247-.712.082-.33-.165-1.393-.513-2.653-1.638-.98-.874-1.642-1.953-1.834-2.282-.192-.33-.02-.508.145-.671.148-.147.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.412-.027-.577-.082-.165-.74-1.787-1.013-2.447-.267-.64-.539-.554-.74-.564-.191-.01-.41-.01-.63-.01-.22 0-.577.082-.88.413-.302.33-1.155 1.127-1.155 2.75 0 1.623 1.182 3.19 1.346 3.41.165.22 2.327 3.553 5.637 4.978.788.34 1.402.543 1.882.697.791.251 1.512.215 2.081.129.635-.096 1.951-.797 2.225-1.568.275-.77.275-1.43.192-1.568-.083-.138-.303-.22-.633-.385z" />
        </svg>
      </motion.a>

      {/* Sticky Call & Book Buttons on Mobile Only */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-t border-borders px-4 py-3 flex gap-3 shadow-2xl">
        <a
          href="tel:09885349798"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-white border border-primary/20 text-primary font-bold text-xs rounded-2xl hover:bg-primary/5 active:bg-primary/10 transition-all duration-200"
        >
          <Phone className="w-4 h-4 text-primary" />
          <span>Call Now</span>
        </a>
        <a
          href="#appointment"
          onClick={handleScrollToBooking}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-white font-bold text-xs rounded-2xl shadow-lg shadow-primary/20 hover:bg-secondary active:scale-[0.98] transition-all duration-200"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span>Book Appointment</span>
        </a>
      </div>
    </>
  );
}
