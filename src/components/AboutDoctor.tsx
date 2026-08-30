"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Sparkles, Smile, CheckCircle2, Shield } from "lucide-react";
import Image from "next/image";

type TabType = "about" | "highlights" | "technology" | "approach";

export default function AboutDoctor() {
  const [activeTab, setActiveTab] = useState<TabType>("about");

  const tabs = [
    { id: "about", label: "About Clinic" },
    { id: "highlights", label: "Clinical Highlights" },
    { id: "technology", label: "Modern Technology" },
    { id: "approach", label: "Care Approach" },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image with premium frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="lg:col-span-5 relative w-full flex justify-center lg:justify-start group transition-all duration-300"
          >
            {/* The Dentist Portrait */}
            <div className="relative rounded-[24px] overflow-hidden border border-white/60 shadow-[0_30px_80px_rgba(15,23,42,0.12)] group-hover:shadow-[0_40px_90px_rgba(15,23,42,0.18)] transition-all duration-300 aspect-[4/5] w-full max-w-[420px]">
              <Image
                src="/dentist_portrait.jpg"
                alt="[Dental Clinic Name] Dentist"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/85 backdrop-blur-md p-5 rounded-[20px] shadow-lg border border-white/30 flex items-start gap-3.5 z-10">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Smile className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base font-extrabold text-slate-800 leading-tight">[Dental Clinic Name]</span>
                  <span className="text-xs text-slate-600 font-semibold mt-0.5">Advanced Dental Care & Smile Center</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Tabbed Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
              About Our Clinic
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-[48px] text-dark-text tracking-tight leading-tight mb-6">
              Your Smile, Our Commitment
            </h2>

            {/* Mission statement card */}
            <div className="w-full p-6 rounded-2xl bg-gradient-to-r from-primary/[0.03] to-secondary/[0.03] border-l-4 border-primary mb-8">
              <p className="text-base italic text-primary/95 font-medium leading-relaxed">
                "Our mission is to provide modern, comfortable, and personalized dental care. We combine advanced dental technology with a gentle, patient-focused approach for healthier and cleaner teeth."
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-borders w-full pb-3 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    activeTab === tab.id
                      ? "text-primary bg-primary/5"
                      : "text-gray-text hover:text-dark-text hover:bg-slate-50"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-[-13px] inset-x-0 h-[2px] bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Panels */}
            <div className="w-full min-h-[260px] relative text-left">
              <AnimatePresence mode="wait">
                {activeTab === "about" && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-4 text-gray-text text-base md:text-lg leading-relaxed font-normal"
                  >
                    <p>
                      At [Dental Clinic Name], we are committed to providing dental treatments in a comfortable and stress-free environment. Our experienced dental professionals prioritize your oral health using state-of-the-art diagnostic and clinical equipment.
                    </p>
                    <p>
                      We believe in a patient-first model of care, taking the time to listen to your concerns and explain treatment options transparently. From preventive care to cosmetic restorations, we customize every care plan to fit your goals.
                    </p>
                  </motion.div>
                )}

                {activeTab === "highlights" && (
                  <motion.div
                    key="highlights"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {[
                      { title: "Experienced Professionals", desc: "A team of skilled dental practitioners committed to continuous education." },
                      { title: "Personalized Care", desc: "We formulate tailored care paths matching your specific clinical requirements." },
                      { title: "Comfortable Environment", desc: "Suites designed with ergonomics and soothing textures to reduce anxiety." },
                      { title: "Clean & Sterile Standard", desc: "Strict, multi-layered sterilization protocols exceeding global medical benchmarks." },
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-borders/60 hover:border-primary/20 hover:bg-slate-50/50 transition-all duration-200 flex gap-3.5">
                        <Smile className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                        <div className="flex flex-col">
                          <h4 className="font-heading font-bold text-sm text-dark-text leading-snug">{item.title}</h4>
                          <p className="text-xs text-gray-text mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "technology" && (
                  <motion.div
                    key="technology"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-6"
                  >
                    {[
                      {
                        title: "Low-Radiation Digital X-Rays",
                        desc: "Provides instant high-resolution imaging of tooth structures and jawbones with minimal exposure.",
                      },
                      {
                        title: "Intraoral Cameras",
                        desc: "Allows patients to see exactly what the dentist sees, aiding clear diagnostics and understanding.",
                      },
                      {
                        title: "Modern Restorative Materials",
                        desc: "Utilizing strong, BPA-free, and natural-looking composite materials for bridges, crowns, and fillings.",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex flex-col items-center shrink-0">
                          <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                            <Sparkles className="w-5 h-5" />
                          </div>
                          {idx !== 2 && <div className="w-[2px] h-12 bg-borders mt-1" />}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-base font-bold text-dark-text">{item.title}</span>
                          <span className="text-sm text-gray-text mt-0.5">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "approach" && (
                  <motion.div
                    key="approach"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base font-semibold text-dark-text/80"
                  >
                    {[
                      "Strong focus on preventive education",
                      "Restorative treatments to preserve natural teeth",
                      "Cosmetic dentistry for self-confidence",
                      "Gentle and child-friendly dental care",
                      "Evidence-based treatment protocols",
                      "Continuous tracking and follow-up support",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl border border-borders/40">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-semibold">{item}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
