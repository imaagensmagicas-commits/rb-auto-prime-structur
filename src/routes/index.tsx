import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { Stats } from "@/components/site/Stats";
import { HowItWorks } from "@/components/site/HowItWorks";
import { AdvancedTechnology } from "@/components/site/AdvancedTechnology";
import { DeviceShowcase } from "@/components/site/DeviceShowcase";
import { Differentials } from "@/components/site/Differentials";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-neon/30 selection:text-neon">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Benefits />
        <HowItWorks />
        <AdvancedTechnology />
        <DeviceShowcase />
        <Differentials />
        <Testimonials />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
