"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  treatment: string;
  rating: number;
  quote: string;
  date: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Amit Sharma",
    location: "New Delhi",
    treatment: "Emergency Primary Angioplasty",
    rating: 5,
    quote: "Dr. Kiran saved my life. I was rushed to the clinic with severe chest pain. He diagnosed a heart attack and performed an emergency primary angioplasty within 45 minutes. His prompt decision-making is why I am here today.",
    date: "2 weeks ago",
    initials: "AS",
  },
  {
    id: 2,
    name: "Priya Nair",
    location: "Gurugram",
    treatment: "Hypertension & Preventive Care",
    rating: 5,
    quote: "Highly recommend Dr. Kiran! The diagnostic tests (2D Echo and TMT) were conducted smoothly in the clinic. He explained the reports in detail and customized a preventive plan that has normalized my BP. Exceptional doctor!",
    date: "1 month ago",
    initials: "PN",
  },
  {
    id: 3,
    name: "Rajesh Patel",
    location: "Noida",
    treatment: "Coronary Angiography",
    rating: 5,
    quote: "The facilities are extremely modern and clean. My father had an angiography done here, and Dr. Kiran explained the findings with complete transparency. We felt safe, respected, and well-cared for throughout the journey.",
    date: "3 months ago",
    initials: "RP",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideLeft = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  }, []);

  const slideRight = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      slideRight();
    }, 6000);
    return () => clearInterval(timer);
  }, [slideRight]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#F8FAFC] to-[#F1F6FA] relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        {/* Header */}
        <div className="flex flex-col items-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
            Patient Stories
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-[48px] text-dark-text tracking-tight leading-tight">
            Loved and Trusted by Over 10,000+ Patients
          </h2>
          <div className="h-[3px] w-12 bg-primary rounded-full mt-6" />
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="text-sm font-bold text-dark-text">4.9 / 5.0 Rating</span>
          <span className="text-xs text-gray-text font-medium border-l border-borders pl-2.5">
            Verified Google Reviews
          </span>
        </div>

        {/* Carousel Slider Card */}
        <div className="relative w-full max-w-4xl mx-auto min-h-[380px] sm:min-h-[320px] flex items-center justify-center">
          <div className="w-full h-full relative overflow-hidden px-2 py-4">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full rounded-3xl p-8 md:p-12 bg-white border border-borders/60 shadow-xl shadow-primary/[0.02] flex flex-col md:flex-row gap-8 items-start md:items-center text-left relative"
              >
                {/* Quotation icon */}
                <Quote className="absolute top-8 right-8 w-24 h-24 text-primary/[0.03] rotate-180 shrink-0 pointer-events-none" />

                {/* Patient avatar bubble */}
                <div className="flex items-center gap-4 md:flex-col md:gap-3 shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-tr from-primary to-secondary text-white font-heading font-extrabold text-xl md:text-2xl flex items-center justify-center shadow-lg shadow-primary/10">
                    {current.initials}
                  </div>
                  <div className="flex flex-col md:items-center">
                    <span className="font-heading font-extrabold text-base md:text-lg text-dark-text leading-tight">
                      {current.name}
                    </span>
                    <span className="text-xs text-gray-text font-semibold mt-0.5">
                      {current.location}
                    </span>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="flex-1 flex flex-col">
                  {/* Rating Stars & Treatment Badge */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-extrabold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider">
                      {current.treatment}
                    </span>
                  </div>

                  <p className="text-base sm:text-lg text-dark-text/90 italic font-medium leading-relaxed mb-4">
                    "{current.quote}"
                  </p>
                  
                  <span className="text-xs text-gray-text font-semibold text-right sm:text-left self-end sm:self-start">
                    Verified Patient • {current.date}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={slideLeft}
            className="absolute left-[-20px] lg:left-[-60px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-borders shadow-lg hover:bg-slate-50 transition-colors z-20 cursor-pointer hidden sm:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-dark-text" />
          </button>
          <button
            onClick={slideRight}
            className="absolute right-[-20px] lg:right-[-60px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-borders shadow-lg hover:bg-slate-50 transition-colors z-20 cursor-pointer hidden sm:block"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-dark-text" />
          </button>
        </div>

        {/* Carousel Pagination dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? "w-8 bg-primary" : "w-2.5 bg-borders hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
