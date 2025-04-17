import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialSection";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import BenefitsSection from "./components/BenefitsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <BenefitsSection />
        <ServicesSection />
        <TestimonialSection />
        <FAQs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
