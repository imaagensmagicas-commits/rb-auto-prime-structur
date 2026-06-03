import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Differentials } from "@/components/site/Differentials";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RB Auto Tracker — Rastreamento Veicular Premium" },
      { name: "description", content: "Rastreamento veicular com GPS em tempo real, identificação de motorista, tag chaveiro e monitoramento 24h. Mais segurança para o seu veículo." },
      { property: "og:title", content: "RB Auto Tracker — Rastreamento Veicular Premium" },
      { property: "og:description", content: "Tecnologia GPS, segurança e inteligência para você ir sempre mais longe." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Differentials />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
