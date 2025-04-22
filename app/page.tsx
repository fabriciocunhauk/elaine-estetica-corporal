import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import BenefitsSection from "./components/BenefitsSection";
import About from "./components/About";
import { Reviews } from "./components/Reviews";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

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
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
