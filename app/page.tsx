import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickCards from "@/components/QuickCards";
import ClientsMarquee from "@/components/ClientsMarquee";
import About from "@/components/About";
import Stats from "@/components/Stats";
import AdvancedServices from "@/components/AdvancedServices";
import WhyUs from "@/components/WhyUs";
import FrameworksMarquee from "@/components/FrameworksMarquee";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickCards />
        <ClientsMarquee />
        <About />
        <Stats />
        <AdvancedServices />
        <WhyUs />
        <FrameworksMarquee />
        <Industries />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
