"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Stethoscope, ClipboardList, ShieldPlus, Heart, Activity } from "lucide-react";

interface Step {
  id: number;
  icon: React.ElementType;
  title: string;
  desc: string;
}

const STEPS: Step[] = [
  {
    id: 1,
    icon: CalendarCheck,
    title: "Book Appointment",
    desc: "Easily schedule your consultation online or call our dedicated emergency cardiac helpline.",
  },
  {
    id: 2,
    icon: Stethoscope,
    title: "Consultation",
    desc: "Meet Dr. Kiran for an in-depth review of your medical history, symptoms, and lifestyle.",
  },
  {
    id: 3,
    icon: ClipboardList,
    title: "Precision Diagnosis",
    desc: "Undergo high-precision diagnostic tests (ECG, 2D Echo, TMT) right inside our modern facility.",
  },
  {
    id: 4,
    icon: ShieldPlus,
    title: "Tailored Treatment",
    desc: "Receive an evidence-based care plan, spanning medications, life therapy, or interventional stenting.",
  },
  {
    id: 5,
    icon: Heart,
    title: "Supervised Recovery",
    desc: "Follow a personalized cardiac rehabilitation program with step-by-step guidance.",
  },
  {
    id: 6,
    icon: Activity,
    title: "Follow-Up Care",
    desc: "Attend regular follow-up checks to monitor progress and maintain long-term cardiac wellness.",
  },
];

export default function PatientJourney() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        
        {/* Header */}
        <div className="flex flex-col items-center max-w-2xl mx-auto mb-20">
          <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
            Patient Path
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-[48px] text-dark-text tracking-tight leading-tight">
            Your Journey to a Stronger, Healthier Heart
          </h2>
          <div className="h-[3px] w-12 bg-primary rounded-full mt-6" />
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative w-full px-6 py-10">
          {/* Horizontal connecting SVG Line */}
          <div className="absolute top-[80px] left-[10%] right-[10%] h-[4px] -z-10 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent origin-left"
            />
          </div>

          <div className="grid grid-cols-6 gap-6 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step bubble */}
                  <div className="relative w-20 h-20 rounded-full bg-white border-2 border-slate-100 text-primary flex items-center justify-center shadow-lg group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 cursor-pointer">
                    <Icon className="w-8 h-8" />
                    
                    {/* Index Indicator */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-secondary text-white font-heading font-extrabold text-[11px] flex items-center justify-center border-2 border-white shadow-sm">
                      {step.id}
                    </div>
                  </div>

                  {/* Step description */}
                  <h3 className="font-heading font-extrabold text-base text-dark-text tracking-tight mt-6 mb-2 group-hover:text-primary transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-gray-text text-xs leading-relaxed max-w-[180px] font-normal">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Stepper */}
        <div className="lg:hidden flex flex-col gap-10 items-stretch relative pl-8 text-left">
          {/* Vertical connecting line */}
          <div className="absolute top-4 bottom-4 left-[20px] w-[3px] -z-10 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-b from-primary via-secondary to-accent origin-top"
            />
          </div>

          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="flex gap-5 relative group"
              >
                {/* Bubble */}
                <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 text-primary flex items-center justify-center shrink-0 shadow-md relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-secondary text-white font-heading font-bold text-[9px] flex items-center justify-center border border-white">
                    {step.id}
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col pt-1">
                  <h3 className="font-heading font-extrabold text-base text-dark-text tracking-tight group-hover:text-primary transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed mt-1.5 font-normal">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
