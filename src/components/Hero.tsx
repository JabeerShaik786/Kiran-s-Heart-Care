"use client";

import { motion } from "framer-motion";
import { Calendar, Phone, UserCheck, HeartHandshake, Sparkles } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/lib/getAssetPath";

export default function Hero() {
  const scrollToAppointment = (e: React.MouseEvent<HTMLAnchorElement>) => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUpVariant = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const doctorVariant = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const rightStackVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const rightItemVariant = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center pt-28 pb-16 lg:pb-0 overflow-hidden bg-white"
    >
      {/* Extremely Subtle Editorial Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_60%,transparent_100%)] opacity-35 pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* 3-Column Desktop Grid: LEFT (4 cols) | CENTER DOCTOR (5 cols) | RIGHT BENEFITS (3 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          
          {/* ========================================================= */}
          {/* COLUMN 1: LEFT SIDE — MAIN CONTENT (lg:col-span-4 ~33%)    */}
          {/* ========================================================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-4 flex flex-col items-start text-left self-center py-6"
          >
            {/* Small Clinic Heading */}
            <motion.div variants={fadeUpVariant} className="flex flex-col items-start gap-1 mb-5">
              <span className="text-[11px] md:text-[12px] font-extrabold tracking-[0.2em] text-[#087CE2] uppercase leading-tight">
                V.R. DENTAL CARE
              </span>
              <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.15em] text-[#64748B] uppercase leading-none">
                & DENTAL IMPLANT CENTRE
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeUpVariant}
              className="font-serif text-4xl sm:text-5xl lg:text-[48px] xl:text-[54px] leading-[1.08] text-[#111111] tracking-tight font-bold mb-6"
            >
              Transforming Smiles,<br />
              <span className="text-[#087CE2] font-serif italic block mt-1">
                Transforming Lives
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              variants={fadeUpVariant}
              className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-md font-normal mb-8"
            >
              Providing professional, personalized, and comfortable dental care with modern technology and a patient-first approach.
            </motion.p>

            {/* Action Buttons (Appointment & Call) */}
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8"
            >
              <a
                href="#appointment"
                onClick={scrollToAppointment}
                className="px-6 py-3.5 bg-[#087CE2] text-white text-sm font-bold rounded-xl shadow-md shadow-[#087CE2]/15 hover:bg-[#066bbd] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Appointment</span>
              </a>

              <a
                href="tel:09885349798"
                className="px-5 py-3.5 bg-white border border-slate-200 text-[#0F172A] hover:text-[#087CE2] hover:border-[#087CE2]/40 text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#087CE2]" />
                <span>Call 098853 49798</span>
              </a>
            </motion.div>

            {/* Optional Subtle Clinic Quote */}
            <motion.div
              variants={fadeUpVariant}
              className="pt-4 border-t border-slate-200/80 w-full max-w-md"
            >
              <p className="text-xs italic text-slate-400 font-medium tracking-wide">
                "Every smile deserves thoughtful care."
              </p>
            </motion.div>
          </motion.div>

          {/* ========================================================= */}
          {/* COLUMN 2: CENTER — DOCTOR IMAGE (lg:col-span-5 ~42%)      */}
          {/* ========================================================= */}
          <motion.div
            variants={doctorVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative w-full flex flex-col items-center justify-end self-end mt-4 lg:mt-0"
          >
            {/* Subtle Soft Blue Glow behind Doctor */}
            <div className="absolute bottom-8 w-[75%] h-[65%] bg-[#087CE2]/12 rounded-full blur-[95px] pointer-events-none" />

            {/* Doctor Image Container (Bottom Aligned, Transparent PNG, Head-to-Torso visible) */}
            <div className="relative w-full h-[480px] sm:h-[550px] lg:h-[620px] xl:h-[660px] flex items-end justify-center z-10 overflow-visible">
              <Image
                src={getAssetPath("/doctor.png")}
                alt="Dr. V.R. Dental Care & Dental Implant Centre"
                width={560}
                height={700}
                className="object-contain object-bottom max-h-full drop-shadow-xl"
                priority
                unoptimized
              />
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* COLUMN 3: RIGHT SIDE — BENEFITS STACK (lg:col-span-3 ~25%)*/}
          {/* ========================================================= */}
          <motion.div
            variants={rightStackVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3 flex flex-col gap-4 self-center py-6 w-full max-w-md mx-auto lg:max-w-none"
          >
            {/* Information Block 1 */}
            <motion.div
              variants={rightItemVariant}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="p-5 rounded-2xl bg-white border border-slate-200/70 shadow-sm shadow-slate-100 flex items-start gap-4 transition-all duration-300 hover:border-[#087CE2]/30 hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-[#087CE2]/10 text-[#087CE2] flex items-center justify-center shrink-0 mt-0.5">
                <UserCheck className="w-5 h-5 text-[#087CE2]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-extrabold tracking-wider text-[#087CE2] uppercase leading-snug">
                  PERSONALIZED
                </span>
                <span className="text-sm font-bold text-[#111111] mt-0.5 leading-snug">
                  Dental Care
                </span>
              </div>
            </motion.div>

            {/* Information Block 2 */}
            <motion.div
              variants={rightItemVariant}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="p-5 rounded-2xl bg-white border border-slate-200/70 shadow-sm shadow-slate-100 flex items-start gap-4 transition-all duration-300 hover:border-[#087CE2]/30 hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-[#087CE2]/10 text-[#087CE2] flex items-center justify-center shrink-0 mt-0.5">
                <HeartHandshake className="w-5 h-5 text-[#087CE2]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-extrabold tracking-wider text-[#087CE2] uppercase leading-snug">
                  COMFORTABLE
                </span>
                <span className="text-sm font-bold text-[#111111] mt-0.5 leading-snug">
                  Patient Experience
                </span>
              </div>
            </motion.div>

            {/* Information Block 3 */}
            <motion.div
              variants={rightItemVariant}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="p-5 rounded-2xl bg-white border border-slate-200/70 shadow-sm shadow-slate-100 flex items-start gap-4 transition-all duration-300 hover:border-[#087CE2]/30 hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-[#087CE2]/10 text-[#087CE2] flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5 text-[#087CE2]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-extrabold tracking-wider text-[#087CE2] uppercase leading-snug">
                  ADVANCED
                </span>
                <span className="text-sm font-bold text-[#111111] mt-0.5 leading-snug">
                  Dental Technology
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
