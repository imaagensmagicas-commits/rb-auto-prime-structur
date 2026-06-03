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
    <section id="diferenciais" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que escolher a RB Auto Tracker"
          description="Tecnologia, suporte e confiança que fazem a diferença na sua proteção."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((b) => (
            <FeatureCard key={b.title} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}
