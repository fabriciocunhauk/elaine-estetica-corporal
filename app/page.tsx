import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import BenefitsSection from "./components/BenefitsSection";
import About from "./components/About";
import { Reviews } from "./components/Reviews";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <BenefitsSection />
        <ServicesSection />
        <About />
        <Reviews />
        <FAQs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
