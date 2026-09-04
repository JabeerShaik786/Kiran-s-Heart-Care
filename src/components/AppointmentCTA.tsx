"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, Smile } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/lib/getAssetPath";

export default function AppointmentCTA() {
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
    <section className="py-12 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-primary to-secondary text-white py-16 px-8 md:p-20 shadow-xl shadow-primary/10">
        {/* Background Decorative Rings */}
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute bottom-[-30%] left-[20%] w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Content Column */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            {/* Pulsing badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
              <Smile className="w-4 h-4 text-white animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Prioritize Your Dental Health
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl md:text-5xl leading-tight tracking-tight max-w-2xl mb-6">
              Take the First Step Towards a Healthier Smile
            </h2>
            
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl font-normal mb-10">
              Schedule a comprehensive dental consultation with our clinical team today. Whether you need routine cleanings or specialized treatment plans, we provide the highest standard of oral care.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#appointment"
                onClick={handleScrollToBooking}
                className="px-8 py-4 bg-white hover:bg-slate-100 text-primary text-base font-bold rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-primary" />
                <span>Book Appointment</span>
              </a>
              <a
                href="tel:09885349798"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base font-bold rounded-full transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-5 h-5 text-white" />
                <span>Call Us: 098853 49798</span>
              </a>
            </div>
          </div>

          {/* Doctor Portrait Column */}
          <div className="lg:col-span-4 relative flex items-center justify-center h-[320px] md:h-[380px] lg:h-[420px] w-full overflow-hidden">
            <Image
              src={getAssetPath("/doctor.png")}
              alt="Dr. V.R. Dental Care & Dental Implant Centre"
              width={380}
              height={480}
              className="object-contain object-center max-h-full drop-shadow-2xl"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
