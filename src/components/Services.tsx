"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Sparkles,
  Activity,
  Layers,
  Smile,
  Tv,
  TrendingUp,
  Award,
  Users,
  Clock,
  X,
  Calendar,
  CheckCircle,
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
    icon: Shield,
    title: "General Dentistry",
    shortDesc: "Complete preventive and routine dental care for patients of all ages.",
    longDesc: "General dentistry focuses on routine examinations, cleanings, fillings, and preventive care. Regular visits help detect decay, gum disease, and other oral health issues early, preventing the need for complex restorative procedures.",
    indications: ["Routine dental checkups", "Minor tooth sensitivity", "Prevention of tooth decay", "Gum health evaluations"],
    preparation: "Brush and floss your teeth before your visit. Bring a record of your medical history and current medications.",
  },
  {
    id: 2,
    icon: Sparkles,
    title: "Teeth Cleaning & Polishing",
    shortDesc: "Professional cleaning for healthier, stain-free, and cleaner teeth.",
    longDesc: "Scaling and polishing remove plaque, hardened tartar, and surface stains that regular brushing cannot resolve. This professional treatment is essential to prevent gingivitis, bad breath, and periodontal disease.",
    indications: ["Tartar and plaque build-up", "Bleeding or swollen gums", "Surface stains from coffee, tea, or smoking", "Persistent bad breath"],
    preparation: "No special preparations needed. Avoid eating highly staining foods right before your cleaning.",
  },
  {
    id: 3,
    icon: Activity,
    title: "Root Canal Treatment",
    shortDesc: "Modern, painless treatment to save infected or severely damaged teeth.",
    longDesc: "A root canal treatment saves a tooth that has been severely damaged or infected. The procedure involves removing the damaged pulp tissue, cleaning and disinfecting the inner root canals, and sealing it to prevent future bacterial infection.",
    indications: ["Severe, throbbing toothaches", "Prolonged sensitivity to hot or cold", "Gum swelling or tenderness", "Darkening of an infected tooth"],
    preparation: "Eat a light meal prior to your appointment as local anesthesia will be administered. Take any pre-medications as prescribed.",
  },
  {
    id: 4,
    icon: Layers,
    title: "Dental Implants",
    shortDesc: "Natural-looking, long-term replacement for single or multiple missing teeth.",
    longDesc: "Dental implants are medical-grade titanium posts surgically placed into the jawbone, acting as sturdy anchors for custom crowns. They function, look, and feel exactly like natural teeth, preserving jawbone density.",
    indications: ["Single or multiple missing teeth", "Alternative to uncomfortable dentures", "Desire for stable, permanent restorations", "Loss of facial volume due to missing teeth"],
    preparation: "Requires a 3D CBCT digital scan. Share your full medical background, especially regarding bone healing conditions.",
  },
  {
    id: 5,
    icon: Smile,
    title: "Teeth Whitening",
    shortDesc: "Professional clinic treatment for a brighter, stain-free, and more confident smile.",
    longDesc: "Professional teeth whitening utilizes safe, concentrated whitening agents activated by specialized dental lights to lift deep organic stains. It brightens your tooth enamel by several shades in a single clinic visit.",
    indications: ["Tooth enamel yellowing or discoloration", "Dietary stains from coffee, tea, or red wine", "Desire to improve smile aesthetics for events"],
    preparation: "We recommend scheduling a scaling (cleaning) session prior to teeth whitening to ensure even results.",
  },
  {
    id: 6,
    icon: Tv,
    title: "Crowns & Bridges",
    shortDesc: "Restore damaged or missing teeth with strong, natural-looking restorations.",
    longDesc: "Crowns reinforce weakened or cracked teeth, while bridges bridge the gaps left by missing teeth. Crafted from premium zirconium or porcelain, they are customized to match your natural tooth shapes and bite patterns.",
    indications: ["Severely decayed or fractured teeth", "Protecting a tooth after root canal therapy", "Replacing missing teeth between anchor teeth"],
    preparation: "Requires tooth preparation and digital impressions. A temporary restoration is placed during the fabrication period.",
  },
  {
    id: 7,
    icon: TrendingUp,
    title: "Braces & Aligners",
    shortDesc: "Modern solutions, including clear invisible aligners, for properly aligned teeth.",
    longDesc: "Orthodontic treatment corrects crowded, crooked, or misaligned teeth and bite issues. We offer traditional metal braces, ceramic braces, and modern transparent clear aligners (invisible braces) for teens and adults.",
    indications: ["Crooked, crowded, or rotated teeth", "Uneven spaces or gaps in teeth", "Overbites, underbites, or bite alignment issues"],
    preparation: "Comprehensive digital impressions, X-rays, and orthodontic consultation are required before custom brace setup.",
  },
  {
    id: 8,
    icon: Award,
    title: "Cosmetic Dentistry",
    shortDesc: "Improve the appearance, symmetry, and overall aesthetics of your smile.",
    longDesc: "Cosmetic dentistry transforms your smile using porcelain veneers, cosmetic composite bonding, and gum contouring. We analyze your facial symmetry to design a balanced, natural-looking smile that boosts self-confidence.",
    indications: ["Chipped, worn, or uneven teeth", "Slight gaps between front teeth", "Irregularly shaped or slightly rotated teeth"],
    preparation: "A smile design consultation and digital preview are conducted to align on your aesthetic goals.",
  },
  {
    id: 9,
    icon: Users,
    title: "Pediatric Dentistry",
    shortDesc: "Gentle, child-friendly dental care to protect early teeth development.",
    longDesc: "Pediatric dentistry focuses on children's oral health from infancy through adolescence. We offer fluoride treatments, dental sealants to prevent cavities, gentle fillings, and growth tracking in a fun, gentle clinic setting.",
    indications: ["Child's routine dental checkup (from age 1)", "Cavity prevention and sealant applications", "Habit counseling (thumb sucking, tongue thrusts)"],
    preparation: "Talk to your child about the dentist in a positive manner. Avoid scheduling appointments during their usual nap times.",
  },
  {
    id: 10,
    icon: Clock,
    title: "Wisdom Tooth Treatment",
    shortDesc: "Diagnosis, monitoring, and gentle treatment of problematic wisdom teeth.",
    longDesc: "Wisdom teeth can become impacted, grow at painful angles, or cause infections due to lack of space in the jaw. We provide precise, gentle surgical extractions to resolve pain, swelling, and protect neighboring teeth.",
    indications: ["Pain or swelling in the back corners of the jaw", "Impacted or partially erupted wisdom teeth", "Crowding of existing teeth due to wisdom teeth"],
    preparation: "A panoramic X-ray (OPG) is taken to map root positions. Plan for a light recovery period post-extraction.",
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
            Services
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-[48px] text-dark-text tracking-tight leading-tight">
            Advanced Dental Services & Treatments
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
                      About the Procedure
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
                        Patient Preparation Guidelines
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
