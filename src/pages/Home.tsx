import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionRail } from "@/components/layout/SectionRail";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { FamilyPortal } from "@/components/sections/FamilyPortal";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export function Home() {
  return (
    <main>
      <Header />
      <SectionRail />
      <Hero />
      <Features />
      <FamilyPortal />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
