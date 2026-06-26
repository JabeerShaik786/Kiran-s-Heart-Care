"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "What are the common warning signs of a heart attack?",
    answer: "Common warning signs include heavy chest pressure, squeezing or aching discomfort in the center of the chest, pain radiating to the jaw, neck, back, or left arm, shortness of breath, unexplained cold sweats, and dizziness. If you experience these symptoms, call our emergency hotline (+91 98765 01234) immediately.",
  },
  {
    id: 2,
    question: "How often should I get a cardiac health check-up?",
    answer: "For healthy adults above 35 years, an annual check-up including blood pressure, lipid profile, and an ECG is recommended. If you have risk factors such as diabetes, smoking, obesity, high cholesterol, or a family history of early heart attacks, you should get checked every 6 months or as prescribed by Dr. Kiran.",
  },
  {
    id: 3,
    question: "What is the difference between Angiography and Angioplasty?",
    answer: "Angiography is purely a diagnostic test where a contrast dye and X-rays are used to visualize and map blockages in the arteries. Angioplasty (PCI) is the actual treatment procedure where the detected blockages are opened using balloon expansion and stabilized by inserting a drug-eluting stent.",
  },
  {
    id: 4,
    question: "Is a referral required to book an appointment with Dr. Kiran?",
    answer: "No, a referral is not mandatory. You can directly book an appointment through our website or by calling our clinic. If you have been referred by another physician, please carry the referral letter and all previous lab reports for review.",
  },
  {
    id: 5,
    question: "What insurance plans do you accept for treatments?",
    answer: "We accept all major national health insurance providers and TPA desks. Cashless treatment facility is available for planned surgeries (like Angioplasty or Pacemaker implants) subject to pre-authorization approval from your insurer. Our desk handles the documentation for you.",
  },
  {
    id: 6,
    question: "How can I prepare for a Treadmill Test (TMT)?",
    answer: "To prepare for a TMT, wear comfortable walking shoes and loose-fitting athletic clothing. Do not eat a heavy meal, drink caffeine, or smoke for at least 2 hours before the test. Continue your regular medications unless Dr. Kiran specifically advises you to pause them (e.g., beta-blockers).",
  },
];

function AccordionItem({ question, answer, isOpen, onClick }: FAQItem & { isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-borders/60 last:border-none py-5">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left gap-4 font-heading font-extrabold text-base md:text-lg text-dark-text hover:text-primary transition-colors duration-200 cursor-pointer"
      >
        <span>{question}</span>
        <div className="w-8 h-8 rounded-full bg-slate-50 border border-borders/40 flex items-center justify-center shrink-0 text-gray-text group-hover:text-primary transition-all duration-200">
          {isOpen ? <Minus className="w-4 h-4 text-primary" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-gray-text text-sm md:text-base leading-relaxed pt-3 pb-1 font-normal">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
            FAQ
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-[48px] text-dark-text tracking-tight leading-tight mb-6">
            Frequently Asked Cardiac Questions
          </h2>
          <p className="text-gray-text text-base md:text-lg font-normal leading-relaxed mb-8">
            Can't find the answer you're looking for? Reach out to our front desk team at any time. We are here to assist you with scheduling, clinical questions, or insurance support.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#contact");
              if (target) {
                const offsetTop = target.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: offsetTop, behavior: "smooth" });
              }
            }}
            className="px-6 py-3 border border-primary/20 hover:border-primary text-primary text-sm font-bold rounded-full transition-all duration-300 hover:bg-primary/5 cursor-pointer"
          >
            Ask a Specific Question
          </a>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-7 w-full p-6 md:p-8 rounded-3xl bg-[#F8FAFC] border border-borders/50">
          <div className="flex flex-col">
            {FAQS.map((faq) => (
              <AccordionItem
                key={faq.id}
                {...faq}
                isOpen={openId === faq.id}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
