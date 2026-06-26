"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ShieldAlert, CheckCircle, Send, Calendar, Heart } from "lucide-react";
import Image from "next/image";

interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  service: string;
  message: string;
}

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  details: string;
  isEmergency?: boolean;
}

function ContactCard({ icon: Icon, title, details, isEmergency = false }: ContactCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`p-5 rounded-[18px] border transition-all duration-300 flex items-start gap-4 ${
        isEmergency
          ? "bg-red-500/5 border-red-500/20 shadow-md shadow-red-500/[0.02]"
          : "bg-white border-borders/50 shadow-sm hover:shadow-md hover:border-primary/10"
      }`}
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
          isEmergency ? "bg-red-500 text-white animate-pulse" : "bg-primary/5 text-primary"
        }`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex flex-col text-left">
        <span className={`text-[10px] font-bold uppercase tracking-wider ${isEmergency ? "text-red-500" : "text-gray-text"}`}>
          {title}
        </span>
        {isEmergency ? (
          <a
            href={`tel:${details.replace(/\s+/g, "")}`}
            className="text-lg font-extrabold text-red-600 mt-1 hover:underline"
          >
            {details}
          </a>
        ) : title === "Email" ? (
          <a
            href={`mailto:${details}`}
            className="text-sm font-semibold text-dark-text mt-1 hover:text-primary transition-colors"
          >
            {details}
          </a>
        ) : title === "Reception & Booking" ? (
          <a
            href={`tel:${details.replace(/\s+/g, "")}`}
            className="text-sm font-semibold text-dark-text mt-1 hover:text-primary transition-colors"
          >
            {details}
          </a>
        ) : (
          <span className="text-sm font-semibold text-dark-text mt-1 leading-relaxed">
            {details}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Appointment booked:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-28 bg-gradient-to-b from-[#F1F6FA] to-[#F8FAFC] relative overflow-hidden">
      {/* Decorative backdrop shapes */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      {/* SECTION 1: Doctor Image + Appointment Booking Form */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
            Appointment Booking
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-[48px] text-dark-text tracking-tight leading-tight">
            Schedule Your Cardiac Consultation
          </h2>
          <div className="h-[3px] w-12 bg-primary rounded-full mt-6" />
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column (40% width -> lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="lg:col-span-5 w-full flex justify-center lg:justify-start group transition-all duration-300 relative"
          >
            <div className="relative rounded-[24px] overflow-hidden border border-white/60 shadow-[0_30px_80px_rgba(15,23,42,0.12)] group-hover:shadow-[0_40px_90px_rgba(15,23,42,0.18)] transition-all duration-300 aspect-[4/5] w-full max-w-[420px]">
              <Image
                src="/doctor_portrait.png"
                alt="Dr. Kiran - Chief Cardiologist"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              {/* Floating glass info card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/85 backdrop-blur-md p-5 rounded-[20px] shadow-lg border border-white/30 flex items-start gap-3.5 z-10">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 fill-primary/20 text-primary" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base font-extrabold text-slate-800 leading-tight">Dr. Kiran</span>
                  <span className="text-xs text-slate-600 font-semibold mt-0.5">Chief Interventional Cardiologist</span>
                  <span className="text-[11px] text-slate-500 font-bold mt-0.5">DM Cardiology</span>
                  <span className="text-[11px] text-primary font-bold mt-1 tracking-wider uppercase">25+ Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (60% width -> lg:col-span-7) */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-[28px] p-8 md:p-12 bg-white border border-borders/60 shadow-xl shadow-primary/[0.01] relative min-h-[580px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-heading font-extrabold text-3xl text-dark-text tracking-tight mb-2 text-left">
                      Book an Appointment
                    </h3>
                    <p className="text-sm text-gray-text font-normal leading-relaxed text-left mb-8">
                      Select your preferred date and service. Our front desk will contact you via phone within 2 hours to confirm your consultation slot.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                      {/* Name */}
                      <div className="sm:col-span-2 flex flex-col">
                        <label htmlFor="fullName" className="text-xs font-bold text-dark-text uppercase tracking-wider mb-2">
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          placeholder="e.g. Rahul Verma"
                          className={`w-full h-14 px-5 rounded-2xl bg-[#F8FAFC] border text-sm font-semibold focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 ${
                            errors.fullName ? "border-red-500" : "border-borders/60"
                          }`}
                          {...register("fullName", { required: "Full name is required" })}
                        />
                        {errors.fullName && (
                          <span className="text-xs text-red-500 mt-1.5 font-bold">{errors.fullName.message}</span>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col">
                        <label htmlFor="phone" className="text-xs font-bold text-dark-text uppercase tracking-wider mb-2">
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="10-digit mobile number"
                          className={`w-full h-14 px-5 rounded-2xl bg-[#F8FAFC] border text-sm font-semibold focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 ${
                            errors.phone ? "border-red-500" : "border-borders/60"
                          }`}
                          {...register("phone", {
                            required: "Phone number is required",
                            pattern: { value: /^[6-9]\d{9}$/, message: "Please enter a valid 10-digit mobile number" },
                          })}
                        />
                        {errors.phone && (
                          <span className="text-xs text-red-500 mt-1.5 font-bold">{errors.phone.message}</span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col">
                        <label htmlFor="email" className="text-xs font-bold text-dark-text uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="e.g. rahul@example.com"
                          className={`w-full h-14 px-5 rounded-2xl bg-[#F8FAFC] border text-sm font-semibold focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 ${
                            errors.email ? "border-red-500" : "border-borders/60"
                          }`}
                          {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Please enter a valid email address" },
                          })}
                        />
                        {errors.email && (
                          <span className="text-xs text-red-500 mt-1.5 font-bold">{errors.email.message}</span>
                        )}
                      </div>

                      {/* Preferred Date */}
                      <div className="flex flex-col">
                        <label htmlFor="date" className="text-xs font-bold text-dark-text uppercase tracking-wider mb-2">
                          Preferred Date *
                        </label>
                        <input
                          id="date"
                          type="date"
                          className={`w-full h-14 px-5 rounded-2xl bg-[#F8FAFC] border text-sm font-semibold focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 ${
                            errors.date ? "border-red-500" : "border-borders/60"
                          }`}
                          {...register("date", { required: "Please select a date" })}
                        />
                        {errors.date && (
                          <span className="text-xs text-red-500 mt-1.5 font-bold">{errors.date.message}</span>
                        )}
                      </div>

                      {/* Service Category */}
                      <div className="flex flex-col">
                        <label htmlFor="service" className="text-xs font-bold text-dark-text uppercase tracking-wider mb-2">
                          Required Service *
                        </label>
                        <select
                          id="service"
                          className={`w-full h-14 px-5 rounded-2xl bg-[#F8FAFC] border text-sm font-semibold focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 ${
                            errors.service ? "border-red-500" : "border-borders/60"
                          }`}
                          defaultValue=""
                          {...register("service", { required: "Please select a service" })}
                        >
                          <option value="" disabled>Select cardiac service</option>
                          <option value="consultation">General Consultation</option>
                          <option value="angiography">Coronary Angiography</option>
                          <option value="angioplasty">Coronary Angioplasty (PCI)</option>
                          <option value="ecg">Electrocardiogram (ECG)</option>
                          <option value="echo">2D Echocardiography</option>
                          <option value="tmt">Treadmill Test (TMT)</option>
                          <option value="holter">Holter Monitoring (24-48h)</option>
                          <option value="hypertension">Hypertension Check</option>
                          <option value="preventive">Preventive Cardiology</option>
                        </select>
                        {errors.service && (
                          <span className="text-xs text-red-500 mt-1.5 font-bold">{errors.service.message}</span>
                        )}
                      </div>

                      {/* Message */}
                      <div className="sm:col-span-2 flex flex-col">
                        <label htmlFor="message" className="text-xs font-bold text-dark-text uppercase tracking-wider mb-2">
                          Symptoms / Remarks (Optional)
                        </label>
                        <textarea
                          id="message"
                          rows={3}
                          placeholder="Describe any symptoms, previous medical history, or referral notes..."
                          className="w-full p-5 rounded-2xl bg-[#F8FAFC] border border-borders/60 text-sm font-semibold focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 resize-none"
                          {...register("message")}
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="sm:col-span-2 pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-14 bg-gradient-to-r from-primary to-secondary hover:from-[#0B3D66] hover:to-[#1774C4] text-white font-bold text-base rounded-2xl shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-75 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                        >
                          {isSubmitting ? (
                            <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          ) : (
                            <>
                              <Send className="w-5 h-5 text-white" />
                              <span>Confirm Appointment Request</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 20 }}
                    className="flex flex-col items-center text-center p-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-6 shadow-sm shadow-green-500/5">
                      <CheckCircle className="w-10 h-10 stroke-[2.5]" />
                    </div>
                    
                    <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-dark-text tracking-tight mb-3">
                      Request Submitted!
                    </h3>
                    
                    <p className="text-base text-gray-text max-w-md leading-relaxed font-normal mb-8">
                      Thank you for choosing Kiran's Heart Care. Our clinical team has received your request and will call you back at your provided phone number within the next <strong>2 hours</strong> to confirm your slot.
                    </p>
                    
                    <div className="p-4 rounded-2xl bg-slate-50 border border-borders/60 flex items-center gap-3 text-left w-full max-w-sm mb-8">
                      <Calendar className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-xs md:text-sm font-semibold text-dark-text">
                        A confirmation SMS and email summary have been sent.
                      </span>
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl border border-borders bg-white font-bold text-xs text-gray-text hover:bg-slate-50 transition-all cursor-pointer"
                    >
                      Book Another Slot
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>

      {/* SECTION 2: Map + Contact Information Stack */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-8 border-t border-borders/60 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side (70% width -> lg:col-span-8) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 w-full rounded-[24px] overflow-hidden shadow-[0_15px_50px_rgba(15,23,42,0.05)] border border-borders relative h-[450px]"
          >
            <iframe
              title="Kiran Heart Care Clinic Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562013898165!2d77.21822357618956!3d28.613939075674287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sCentral%20Park!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Right Side (30% width -> lg:col-span-4) */}
          <div className="lg:col-span-4 w-full flex flex-col gap-5 text-left">
            <ContactCard
              icon={MapPin}
              title="Clinic Address"
              details="123, Luxury Medical Plaza, Sector 4, Opposite Central Park, New Delhi - 110001"
            />
            <ContactCard
              icon={Phone}
              title="Reception & Booking"
              details="+91 98765 43210"
            />
            <ContactCard
              icon={Mail}
              title="Email"
              details="info@kiransheartcare.com"
            />
            <ContactCard
              icon={Clock}
              title="Consultation Hours"
              details="Monday - Saturday: 9:00 AM - 7:00 PM | Sunday: Closed"
            />
            <ContactCard
              icon={ShieldAlert}
              title="Emergency Hotline"
              details="+91 98765 01234"
              isEmergency={true}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
