import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Gallery from "@/components/site/Gallery";
import About from "@/components/site/About";
import Pricing from "@/components/site/Pricing";
import Booking from "@/components/site/Booking";
import Testimonials from "@/components/site/Testimonials";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Pricing />
        <Testimonials />
        <Booking />
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  );
}
