import { Satellite, Clock, Users, Navigation } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { FeatureCard } from "./FeatureCard";

const items = [
  { icon: Satellite, title: "Monitoramento em Tempo Real", description: "Acompanhe cada movimento do seu veículo com precisão absoluta e atualizações instantâneas." },
  { icon: Clock, title: "Tecnologia GPS de Alta Precisão", description: "Equipamentos de última geração que garantem localização exata mesmo em condições adversas." },
  { icon: Users, title: "Controle Total do Veículo", description: "Gestão completa de rotas, velocidades e alertas de segurança diretamente no seu smartphone." },
  { icon: Navigation, title: "Atendimento Especializado", description: "Suporte técnico e operacional humanizado disponível 24h para sua total tranquilidade." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neon/5 blur-[120px] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que escolher a RB Rastreamento Veicular"
          description="Tecnologia, suporte e confiança que fazem a diferença na sua proteção com soluções de última geração."
        />
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 animate-fade-up">
          {items.map((b) => (
            <FeatureCard key={b.title} {...b} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5531997554556"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-neon px-8 text-sm font-semibold text-neon-foreground neon-glow transition-transform hover:scale-105"
          >
            Quero proteger meu veículo agora
          </a>
        </div>
      </div>
    </section>
  );
}
