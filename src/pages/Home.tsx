import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionRail } from "@/components/layout/SectionRail";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { FamilyPortal } from "@/components/sections/FamilyPortal";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
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
      <Testimonials />
      <Pricing />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
