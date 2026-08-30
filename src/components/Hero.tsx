"use client";

import { motion } from "framer-motion";
import { Smile, Calendar, Phone } from "lucide-react";
import Image from "next/image";

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
              <Smile className="w-4 h-4 text-primary relative animate-pulse" />
            </div>
            <span className="text-sm font-semibold text-primary tracking-wide">
              Welcome to V.R. Dental Care
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-extrabold text-4xl md:text-5xl lg:text-[54px] tracking-tight text-dark-text leading-[1.08] mb-6"
          >
            Transforming Smiles,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Transforming Lives
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-text font-bold tracking-wide uppercase leading-relaxed max-w-xl mb-8"
          >
            We Are Best Dental Services
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
              href="#contact"
              onClick={scrollToContact}
              className="px-8 py-4 bg-white border border-borders text-primary text-base font-bold rounded-full shadow-sm hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Contact Us</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Premium Dental Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative w-full aspect-square max-w-[500px] lg:max-w-none mx-auto flex items-center justify-center"
        >
          {/* Glowing Ambient Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-accent/15 to-transparent rounded-full blur-2xl animate-pulse" />

          {/* Healthy Smile Image */}
          <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-white/60 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
            <Image
              src="/healthy_smile.jpg"
              alt="Healthy Dental Smile at [Dental Clinic Name]"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
