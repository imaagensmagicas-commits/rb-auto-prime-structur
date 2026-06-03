import { Satellite, Clock, Users, Navigation } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { FeatureCard } from "./FeatureCard";

const items = [
  { icon: Satellite, title: "Tecnologia GPS", description: "Equipamentos de última geração com cobertura nacional e alta precisão." },
  { icon: Clock, title: "Monitoramento 24h", description: "Central operacional ativa todos os dias, garantindo acompanhamento contínuo." },
  { icon: Users, title: "Controle de motoristas", description: "Identifique condutores, jornadas e comportamento ao volante com facilidade." },
  { icon: Navigation, title: "Localização em tempo real", description: "Acompanhe rotas, paradas e posicionamento atualizado a cada instante." },
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
