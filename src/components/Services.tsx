"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Search,
  Layers,
  TrendingUp,
  Smile,
  Award,
  Sparkles,
  Shield,
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
    title: "Root Canal Treatment",
    shortDesc: "Professional treatment to save infected or damaged teeth and restore oral health.",
    longDesc: "A root canal treatment removes infected or damaged pulp from inside a tooth, cleans and sanitizes the inner root canals, and seals them. This stops the spread of infection, relieves pain, and saves your natural tooth structure.",
    indications: ["Severe or persistent toothache", "Sensitivity to hot or cold temperatures", "Swelling or tenderness in surrounding gums", "Tooth discoloration"],
    preparation: "Eat a light meal prior to your appointment. Keep a list of any current medications and review them with the dentist.",
  },
  {
    id: 2,
    icon: Search,
    title: "Cavity Inspection",
    shortDesc: "Thorough examination to identify cavities and other dental problems at an early stage.",
    longDesc: "A comprehensive inspection utilizing manual probes and digital X-rays to locate dental decay, enamel erosion, and structural cracks early on, preventing more complex dental conditions.",
    indications: ["Tooth sensitivity to sweet or temperature changes", "Visible pits or holes in teeth", "Mild tooth discomfort while biting", "Routine checkups"],
    preparation: "Brush and floss your teeth before your visit. Arrive early to complete registration details.",
  },
  {
    id: 3,
    icon: Layers,
    title: "Dental Implants",
    shortDesc: "Reliable and natural-looking solutions for replacing missing teeth.",
    longDesc: "Dental implants are titanium posts surgically placed into the jawbone, acting as artificial tooth roots. Once integrated, they support custom crowns, providing structural stability and a natural appearance.",
    indications: ["Single or multiple missing teeth", "Uncomfortable or loose dentures", "Desire to preserve jawbone structure and facial shape"],
    preparation: "Requires a prior 3D CBCT digital scan to assess bone density. Discuss any health conditions affecting bone healing.",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Orthodontics",
    shortDesc: "Treatment to improve tooth alignment and correct bite-related problems.",
    longDesc: "Orthodontic therapies diagnose and correct crowded, misaligned, or crooked teeth and bite problems. Custom appliances are used to gently align your teeth over time, improving function and appearance.",
    indications: ["Crooked or crowded teeth", "Gaps between teeth", "Bite issues like overbites, underbites, or crossbites"],
    preparation: "Comprehensive diagnostic X-rays and mouth impressions will be taken during your consult.",
  },
  {
    id: 5,
    icon: Smile,
    title: "Teeth Alignment",
    shortDesc: "Modern solutions to help achieve properly aligned teeth and a healthier smile.",
    longDesc: "Modern clear aligners offer a comfortable, removable, and transparent way to straighten teeth. These custom aligners gradually shift your teeth into the correct position without traditional brackets.",
    indications: ["Mild teeth crowding or spacing gaps", "Desire for transparent alignment options", "Correcting minor shifts in teeth position"],
    preparation: "Maintain excellent oral hygiene. Cleanings are recommended prior to aligner mapping.",
  },
  {
    id: 6,
    icon: Award,
    title: "Cosmetic Dentistry",
    shortDesc: "Dental treatments focused on improving the appearance and aesthetics of your smile.",
    longDesc: "Cosmetic dentistry enhances your smile using composite bonding, porcelain veneers, and gum reshaping. We analyze facial symmetry to design a balanced, natural-looking aesthetic.",
    indications: ["Chipped, worn, or slightly fractured teeth", "Minor gaps in front teeth", "Irregular tooth shapes or surface textures"],
    preparation: "A smile design consultation is held to align on expectations and explore treatment options.",
  },
  {
    id: 7,
    icon: Sparkles,
    title: "Teeth Whitening",
    shortDesc: "Professional whitening treatment for a brighter and more confident smile.",
    longDesc: "Professional whitening utilizes safe bleaching agents activated by clinical lights to remove deep-set stains on tooth enamel. It brightens your smile by multiple shades in one visit.",
    indications: ["Tooth yellowing or discoloration", "Dietary stains from coffee, tea, or red wine", "Aesthetic enhancement for upcoming events"],
    preparation: "It is recommended to have professional scaling done first for uniform whitening results.",
  },
  {
    id: 8,
    icon: Shield,
    title: "General Dentistry",
    shortDesc: "Routine dental examinations, preventive care, and treatment for common oral health problems.",
    longDesc: "General dentistry covers regular examinations, cleanings, preventive sealant applications, and tooth fillings. Regular general care is the best way to prevent cavities and maintain healthy gums.",
    indications: ["Routine dental examinations (every 6 months)", "Minor sensitivity or mouth discomfort", "Plaque and tartar removal"],
    preparation: "Brush your teeth before your visit. Bring details of any medical history or allergies.",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleBookService = () => {
    setSelectedService(null);
    setTimeout(() => {
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
    }, 100);
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
            Comprehensive Dental Care for Your Smile
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
                className="group p-8 rounded-3xl bg-[#F8FAFC] border border-borders/50 hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between items-start text-left cursor-pointer min-h-[250px]"
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
                        Dental Treatment
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
