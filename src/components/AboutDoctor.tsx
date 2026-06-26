"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, GraduationCap, Heart, CheckCircle2, ShieldAlert } from "lucide-react";
import Image from "next/image";

type TabType = "bio" | "education" | "awards" | "memberships";

export default function AboutDoctor() {
  const [activeTab, setActiveTab] = useState<TabType>("bio");

  const tabs = [
    { id: "bio", label: "Biography" },
    { id: "education", label: "Education & Career" },
    { id: "awards", label: "Awards & Honors" },
    { id: "memberships", label: "Memberships" },
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
            {/* The Doctor Portrait */}
            <div className="relative rounded-[24px] overflow-hidden border border-white/60 shadow-[0_30px_80px_rgba(15,23,42,0.12)] group-hover:shadow-[0_40px_90px_rgba(15,23,42,0.18)] transition-all duration-300 aspect-[4/5] w-full max-w-[420px]">
              <Image
                src="/doctor_portrait.png"
                alt="Dr. Kiran - Chief Cardiologist"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/85 backdrop-blur-md p-5 rounded-[20px] shadow-lg border border-white/30 flex items-start gap-3.5 z-10">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 fill-primary/20 text-primary" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base font-extrabold text-slate-800 leading-tight">Dr. Kiran</span>
                  <span className="text-xs text-slate-600 font-semibold mt-0.5">Chief Interventional Cardiologist</span>
                  <span className="text-[11px] text-primary font-bold mt-1 tracking-wider uppercase">25+ Years Experience</span>
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
              Meet Dr. Kiran
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-[48px] text-dark-text tracking-tight leading-tight mb-6">
              A Lifelong Commitment to Heart Health
            </h2>

            {/* Mission statement card */}
            <div className="w-full p-6 rounded-2xl bg-gradient-to-r from-primary/[0.03] to-secondary/[0.03] border-l-4 border-primary mb-8">
              <p className="text-base italic text-primary/95 font-medium leading-relaxed">
                "Our mission is to combine cutting-edge technology with compassionate care to heal hearts and restore life. Every heartbeat is a promise of life, and our goal is to protect it."
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
            <div className="w-full min-h-[260px] relative">
              <AnimatePresence mode="wait">
                {activeTab === "bio" && (
                  <motion.div
                    key="bio"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-4 text-gray-text text-base md:text-lg leading-relaxed font-normal"
                  >
                    <p>
                      Dr. Kiran is a highly acclaimed, board-certified Senior Consultant Interventional Cardiologist with over 25 years of experience in managing complex cardiovascular conditions.
                    </p>
                    <p>
                      Recognized for his patient-centered approach, Dr. Kiran has performed over 10,000 successful procedures including coronary angiographies, complex angioplasties (PCI), pacemaker implantations, and device closures. He believes in evidence-based medicine, focusing equally on preventive cardiology and advanced clinical intervention.
                    </p>
                    <p>
                      He is dedicated to making high-quality cardiovascular treatments accessible to all segments of society, and frequently lectures at national and international cardiac conferences.
                    </p>
                  </motion.div>
                )}

                {activeTab === "education" && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-6"
                  >
                    {[
                      {
                        year: "1998 - Present",
                        title: "Chief Interventional Cardiologist",
                        institution: "Kiran's Heart Care Clinic & Diagnostic Center",
                      },
                      {
                        year: "1995 - 1998",
                        title: "DM in Cardiology",
                        institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
                      },
                      {
                        year: "1992 - 1995",
                        title: "MD in General Medicine",
                        institution: "Maulana Azad Medical College (MAMC), New Delhi",
                      },
                      {
                        year: "1986 - 1991",
                        title: "MBBS (Graduation)",
                        institution: "King George's Medical College (KGMC), Lucknow",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex flex-col items-center shrink-0">
                          <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                            <GraduationCap className="w-5 h-5" />
                          </div>
                          {idx !== 3 && <div className="w-[2px] h-12 bg-borders mt-1" />}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.year}</span>
                          <span className="text-base font-bold text-dark-text mt-0.5">{item.title}</span>
                          <span className="text-sm text-gray-text">{item.institution}</span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "awards" && (
                  <motion.div
                    key="awards"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {[
                      { title: "Best Cardiologist of the Year", desc: "Awarded by the National Health Association for clinical excellence." },
                      { title: "Lifesaver Gold Medal", desc: "For performing over 1,000 successful emergency angioplasties in a single year." },
                      { title: "Outstanding Research Award", desc: "Recognized for publications on preventive heart health in South Asian populations." },
                      { title: "Distinguished Service Award", desc: "For conducting over 200 free rural cardiac health screening camps." },
                    ].map((award, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-borders/60 hover:border-primary/20 hover:bg-slate-50/50 transition-all duration-200 flex gap-3.5">
                        <Award className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                        <div className="flex flex-col">
                          <h4 className="font-heading font-bold text-sm text-dark-text leading-snug">{award.title}</h4>
                          <p className="text-xs text-gray-text mt-1 leading-relaxed">{award.desc}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "memberships" && (
                  <motion.div
                    key="memberships"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base font-semibold text-dark-text/80"
                  >
                    {[
                      "Fellow of the Cardiological Society of India (CSI)",
                      "Member of the European Society of Cardiology (ESC)",
                      "Associate of the American College of Cardiology (ACC)",
                      "Life Member of the Association of Physicians of India (API)",
                      "Executive Board Member - National Cardiac Forum",
                      "International Member - Society for Cardiovascular Angiography & Interventions (SCAI)",
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
