"use client";

import { motion } from "framer-motion";
import { Heart, Calendar, Phone, Activity } from "lucide-react";

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center pt-28 pb-28 overflow-hidden bg-gradient-to-b from-[#F0F6FA] via-[#F8FAFC] to-[#F8FAFC]"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-accent/20 blur-[120px] -z-10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-primary/5 blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 shadow-sm shadow-primary/5 mb-6"
          >
            <div className="relative flex items-center justify-center text-primary">
              <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-red-500 animate-ping opacity-75" />
              <Heart className="w-4 h-4 fill-primary/10 text-primary relative" />
            </div>
            <span className="text-sm font-semibold text-primary tracking-wide">
              Trusted Cardiac Care Clinic
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-extrabold text-4xl md:text-5xl lg:text-[64px] tracking-tight text-dark-text leading-[1.08] mb-6"
          >
            Advanced Cardiology for a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Healthier Heart
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-text font-normal leading-relaxed max-w-xl mb-8"
          >
            Experience world-class heart care with 25+ years of clinical expertise. Offering state-of-the-art diagnostics, non-invasive therapies, and personalized cardiac rehabilitation.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-0"
          >
            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-8 py-4 bg-primary text-white text-base font-bold rounded-full overflow-hidden shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span>Book Appointment</span>
            </a>
            <a
              href="tel:+919876543210"
              className="px-8 py-4 bg-white border border-borders text-primary text-base font-bold rounded-full shadow-sm hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span>Call Now</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Premium SVG Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative w-full aspect-square max-w-[500px] lg:max-w-none mx-auto flex items-center justify-center"
        >
          {/* Glowing Ambient Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-accent/15 to-transparent rounded-full blur-2xl animate-pulse" />

          {/* SVG Healthcare Art */}
          <svg
            className="w-full h-full relative z-10 filter drop-shadow-2xl"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Definitions for gradients and shadows */}
            <defs>
              <linearGradient id="heartGrad" x1="150" y1="100" x2="350" y2="400" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1E88E5" />
                <stop offset="100%" stopColor="#0F4C81" />
              </linearGradient>
              <linearGradient id="glowGrad" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0F4C81" stopOpacity="0" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Premium Circular Grid / Diagnostic Interface */}
            <circle cx="250" cy="250" r="180" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" />
            <circle cx="250" cy="250" r="140" stroke="#CBD5E1" strokeWidth="1" />
            <circle cx="250" cy="250" r="100" stroke="#1E88E5" strokeWidth="1.5" strokeOpacity="0.2" />

            {/* Glowing Tech Ring */}
            <motion.circle
              cx="250"
              cy="250"
              r="140"
              stroke="#38BDF8"
              strokeWidth="2"
              strokeDasharray="40 180"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              style={{ transformOrigin: "250px 250px" }}
            />
            <motion.circle
              cx="250"
              cy="250"
              r="100"
              stroke="#0F4C81"
              strokeWidth="1"
              strokeDasharray="80 120"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              style={{ transformOrigin: "250px 250px" }}
            />

            {/* Floating Info-Nodes */}
            <motion.g
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <circle cx="100" cy="180" r="24" fill="white" filter="drop-shadow(0px 8px 16px rgba(15, 76, 129, 0.08))" />
              <path d="M93 180h14M100 173v14" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round" />
            </motion.g>

            <motion.g
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
            >
              <circle cx="400" cy="220" r="28" fill="white" filter="drop-shadow(0px 8px 16px rgba(15, 76, 129, 0.08))" />
              {/* Small SVG ECG inside node */}
              <path d="M384 220h10l4-8 4 16 4-12 2 4h12" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </motion.g>

            <motion.g
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
            >
              <circle cx="340" cy="380" r="20" fill="white" filter="drop-shadow(0px 8px 16px rgba(15, 76, 129, 0.08))" />
              <circle cx="340" cy="380" r="6" fill="#16A34A" />
            </motion.g>

            {/* Central Heart Shape - Luxury Double Outline */}
            <motion.g
              animate={{
                scale: [1, 1.05, 1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "250px 240px" }}
            >
              {/* Outer Glow */}
              <path
                d="M250 310c-35-30-70-65-70-105 0-25 15-40 40-40 18 0 25 12 30 20 5-8 12-20 30-20 25 0 40 15 40 40 0 40-35 75-70 105z"
                fill="url(#heartGrad)"
                opacity="0.1"
                filter="url(#glow)"
              />
              {/* Inner Solid Heart */}
              <path
                d="M250 300c-30-26-60-56-60-90 0-20 12-32 32-32 15 0 22 10 28 17 6-7 13-17 28-17 20 0 32 12 32 32 0 34-30 64-60 90z"
                fill="url(#heartGrad)"
                filter="drop-shadow(0px 12px 24px rgba(15, 76, 129, 0.25))"
              />
              {/* Subtle accent light reflection on heart */}
              <path
                d="M200 185c-10 0-15 8-15 17 0 10 8 20 15 28"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.25"
              />
            </motion.g>

            {/* Looping ECG Wave line overlaid across the canvas */}
            <svg x="0" y="210" width="500" height="80" viewBox="0 0 500 80">
              <path
                d="M 0 40 L 150 40 L 165 40 L 175 25 L 185 60 L 195 10 L 205 48 L 215 40 L 230 40 L 320 40 L 330 25 L 340 60 L 350 10 L 360 48 L 370 40 L 500 40"
                stroke="#E2E8F0"
                strokeWidth="2"
                fill="none"
              />
              <motion.path
                d="M 0 40 L 150 40 L 165 40 L 175 25 L 185 60 L 195 10 L 205 48 L 215 40 L 230 40 L 320 40 L 330 25 L 340 60 L 350 10 L 360 48 L 370 40 L 500 40"
                stroke="#38BDF8"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="url(#glow)"
                initial={{ strokeDasharray: "1000", strokeDashoffset: "1000" }}
                animate={{ strokeDashoffset: [1000, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }}
              />
            </svg>
          </svg>

          {/* Floating Widget: Emergency Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute bottom-4 left-4 z-20 glassmorphism py-3.5 px-5 rounded-2xl flex items-center gap-3 shadow-lg border border-white/50"
          >
            <div className="p-2.5 rounded-xl bg-red-500/10 text-red-500 animate-pulse">
              <Activity className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold tracking-wider text-red-500 uppercase">
                Cardiac Emergency
              </span>
              <span className="text-sm font-extrabold text-dark-text">
                Available 24/7
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
