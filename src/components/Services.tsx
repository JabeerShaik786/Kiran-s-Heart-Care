"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Search,
  MessageSquare,
  TrendingUp,
  Layers,
  Smile,
  X,
  Calendar,
  CheckCircle,
  Clock,
} from "lucide-react";

interface Service {
  id: number;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  longDesc: string;
  indications: string[];
  preparation: string;
}

const SERVICES: Service[] = [
  {
    id: 1,
    icon: Activity,
    title: "Root Canal",
    shortDesc: "A root canal is a dental procedure that saves a tooth by removing infected or damaged nerve tissue and bacteria from inside the tooth.",
    longDesc: "A root canal is a dental procedure that saves a tooth by removing infected or damaged nerve tissue and bacteria from inside the tooth. The inner root canals are thoroughly cleaned, disinfected, and sealed to prevent any future bacterial infection, preserving your natural tooth structure.",
    indications: ["Severe persistent toothache", "Sensitivity to hot & cold", "Swelling or tenderness in gums", "Tooth discoloration"],
    preparation: "Eat a light meal before your appointment as local anesthesia will be administered. Take any prescribed medications.",
  },
  {
    id: 2,
    icon: Search,
    title: "Cavity Inspection",
    shortDesc: "A thorough examination to identify cavities and other oral health problems at an early stage.",
    longDesc: "A thorough examination to identify cavities and other oral health problems at an early stage. Our dental team performs tactile exams, low-exposure digital scanning, and visual assessments to locate decay early and prevent complex treatments.",
    indications: ["Tooth sensitivity to sweet, hot, or cold", "Visible holes or pits in teeth", "Pain when biting or chewing", "Routine preventive dental checkup"],
    preparation: "Brush and floss your teeth before your visit. Bring a list of any current medications.",
  },
  {
    id: 3,
    icon: MessageSquare,
    title: "Live Advisor",
    shortDesc: "Connect with dental professionals for guidance and answers to dental questions.",
    longDesc: "Connect with dental professionals for guidance and answers to dental questions. Receive professional dental guidance, symptom evaluations, and information regarding preparation for upcoming procedures from our team.",
    indications: ["General dental questions", "Oral health symptom queries", "Treatment options clarification", "Emergency dental guidance"],
    preparation: "Have your questions or previous dental history details prepared for an informative guidance session.",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Orthodontics",
    shortDesc: "Orthodontic treatment focuses on diagnosing and correcting improperly aligned teeth and bite problems.",
    longDesc: "Orthodontic treatment focuses on diagnosing and correcting improperly aligned teeth and bite problems. We use modern, custom-designed appliances to gently guide your teeth into their optimal alignment, supporting teeth function and facial symmetry.",
    indications: ["Crooked or crowded teeth", "Gaps between teeth", "Overbites, underbites, or crossbites", "Bite alignment difficulties"],
    preparation: "A comprehensive assessment including X-rays and digital impressions will be performed during your initial visit.",
  },
  {
    id: 5,
    icon: Layers,
    title: "Teeth Alignment",
    shortDesc: "Dental alignment treatments help improve the position of teeth and create a healthier, more balanced smile.",
    longDesc: "Dental alignment treatments help improve the position of teeth and create a healthier, more balanced smile. Our treatments utilize advanced custom clear aligners and modern techniques to straighten your teeth comfortably and discreetly.",
    indications: ["Rotated or shifted teeth", "Gaps between front teeth", "Mild teeth crowding", "Desire for a straighter, balanced smile"],
    preparation: "Avoid eating heavy sticky foods right before dental scanning or impression-taking.",
  },
  {
    id: 6,
    icon: Smile,
    title: "Cosmetic Dentistry",
    shortDesc: "Cosmetic dentistry focuses on improving the appearance and aesthetics of your smile, including treatments such as teeth whitening and dental bonding.",
    longDesc: "Cosmetic dentistry focuses on improving the appearance and aesthetics of your smile, including treatments such as teeth whitening and dental bonding. We design personalized cosmetic plans to restore tooth shapes, colors, and balance for a natural-looking smile.",
    indications: ["Tooth discoloration or staining", "Chipped, worn, or fractured teeth", "Slight gaps or uneven tooth heights", "Uneven smile line shapes"],
    preparation: "Brush your teeth thoroughly. Avoid eating heavy coloring foods (like coffee or berries) before your checkup.",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleBookService = () => {
    setSelectedService(null);
    // Smooth scroll to contact
    setTimeout(() => {
      const target = document.querySelector("#contact");
      if (target) {
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
            What We Provide
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-[48px] text-dark-text tracking-tight leading-tight">
            Our Services
          </h2>
          <div className="h-[3px] w-12 bg-primary rounded-full mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: Math.min(idx * 0.05, 0.4), ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group p-8 rounded-3xl bg-[#F8FAFC] border border-borders/50 hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between items-start text-left cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-extrabold text-xl text-dark-text tracking-tight mb-3 group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>
                </div>
                <button className="text-sm font-bold text-primary group-hover:text-secondary flex items-center gap-1.5 transition-colors duration-200">
                  <span>Learn More</span>
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              {/* Modal Card */}
              <motion.div
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-borders relative flex flex-col max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Banner */}
                <div className="p-6 md:p-8 bg-gradient-to-r from-primary to-secondary text-white relative">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center shadow-inner">
                      {(() => {
                        const Icon = selectedService.icon;
                        return <Icon className="w-6 h-6" />;
                      })()}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-white/70">
                        Dental Service
                      </span>
                      <h4 className="font-heading font-extrabold text-2xl text-white tracking-tight mt-0.5">
                        {selectedService.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Scrollable Body */}
                <div className="p-6 md:p-8 overflow-y-auto flex-1 flex flex-col gap-6 text-left">
                  {/* Detailed Description */}
                  <div>
                    <h5 className="text-xs font-bold uppercase text-primary tracking-wider mb-2">
                      About the Treatment
                    </h5>
                    <p className="text-sm md:text-base text-gray-text font-normal leading-relaxed">
                      {selectedService.longDesc}
                    </p>
                  </div>

                  {/* Common Indications */}
                  <div>
                    <h5 className="text-xs font-bold uppercase text-primary tracking-wider mb-3">
                      When is it recommended?
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedService.indications.map((ind, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-dark-text/90 font-medium">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span>{ind}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Preparations */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-borders/60 flex gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                        Patient Guidelines
                      </span>
                      <p className="text-xs md:text-sm text-gray-text mt-1 font-medium leading-relaxed">
                        {selectedService.preparation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 border-t border-borders/60 bg-slate-50 flex items-center justify-end gap-3 shrink-0">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-2.5 rounded-xl border border-borders bg-white font-semibold text-xs text-gray-text hover:bg-slate-50 transition-colors"
                  >
                    Close Details
                  </button>
                  <button
                    onClick={handleBookService}
                    className="px-6 py-2.5 bg-primary text-white font-semibold text-xs rounded-xl hover:bg-secondary shadow-md shadow-primary/10 transition-colors flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Service</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
