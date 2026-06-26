import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutDoctor from "@/components/AboutDoctor";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import PatientJourney from "@/components/PatientJourney";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import AppointmentCTA from "@/components/AppointmentCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow overflow-x-hidden">
        <Hero />
        <TrustBar />
        <AboutDoctor />
        <WhyChooseUs />
        <Services />
        <PatientJourney />
        <Testimonials />
        <FAQ />
        <AppointmentCTA />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
