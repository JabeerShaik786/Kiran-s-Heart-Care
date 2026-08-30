"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";

interface BlogPost {
  id: number;
  image: string;
  category: string;
  title: string;
  shortDesc: string;
}

const ARTICLES: BlogPost[] = [
  {
    id: 1,
    image: "/healthy_smile.jpg",
    category: "Oral Hygiene",
    title: "5 Simple Ways to Keep Your Teeth Healthy",
    shortDesc: "Discover the best daily habits and tips for maintaining excellent oral hygiene and a bright smile between dental visits.",
  },
  {
    id: 2,
    image: "/dental_checkup.jpg",
    category: "Dental Advice",
    title: "When Do You Need a Root Canal?",
    shortDesc: "Learn about the common warning signs, symptoms, and indications that suggest you might need a root canal procedure to save a tooth.",
  },
  {
    id: 3,
    image: "/dental_checkup.jpg",
    category: "Prevention",
    title: "How Often Should You Visit a Dentist?",
    shortDesc: "Understand the critical importance of regular preventive dental checkups and how they save you from complex treatments later.",
  },
  {
    id: 4,
    image: "/healthy_smile.jpg",
    category: "Cosmetic Dentistry",
    title: "Teeth Whitening: What You Should Know",
    shortDesc: "Get the facts about professional teeth whitening, how it works, what to expect, and how to maintain your sparkling white smile.",
  },
  {
    id: 5,
    image: "/healthy_smile.jpg",
    category: "Oral Health",
    title: "How to Prevent Cavities",
    shortDesc: "A complete guide on simple eating and brushing habits that prevent tooth decay, protect enamel, and block cavity formation.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-[30%] left-[-10%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            Dental Health Blog
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-[48px] text-dark-text tracking-tight leading-tight">
            Latest Articles & Oral Tips
          </h2>
          <div className="h-[3px] w-12 bg-primary rounded-full mt-6" />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: Math.min(idx * 0.1, 0.4), ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl bg-white border border-borders/50 overflow-hidden shadow-lg shadow-primary/[0.01] hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image Container with zoom */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 text-[9px] font-extrabold bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full uppercase tracking-wider shadow-sm border border-white/40">
                    {article.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 text-left">
                  <h3 className="font-heading font-extrabold text-lg md:text-xl text-dark-text tracking-tight mb-3 leading-snug group-hover:text-primary transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed font-normal">
                    {article.shortDesc}
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 flex justify-start">
                <button className="text-sm font-bold text-primary group-hover:text-secondary flex items-center gap-1.5 transition-colors duration-200">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-200" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
