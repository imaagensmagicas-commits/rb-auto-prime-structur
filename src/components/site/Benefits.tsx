import { MapPin, UserCheck, KeyRound, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { FeatureCard } from "./FeatureCard";

const benefits = [
  { icon: MapPin, title: "Rastreamento em tempo real", description: "Acompanhe a localização exata do seu veículo 24 horas por dia, com precisão GPS." },
  { icon: UserCheck, title: "Identificação de motorista", description: "Saiba quem está conduzindo o veículo em cada trajeto, com histórico completo." },
  { icon: KeyRound, title: "Tag chaveiro para desbloqueio", description: "Liberação inteligente do veículo apenas com a tag autorizada presente." },
  { icon: ShieldCheck, title: "Mais segurança para o veículo", description: "Bloqueio remoto, alertas e proteção antifurto para você dirigir tranquilo." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="Benefícios"
          title="Proteção inteligente em cada detalhe"
          description="Tudo o que você precisa para manter o controle total do seu veículo com a melhor tecnologia da RB Rastreamento Veicular."
        />
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 animate-fade-up">
          {benefits.map((b) => (
            <FeatureCard key={b.title} {...b} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5531997554556"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-neon/40 bg-neon/5 px-6 text-sm font-semibold text-neon transition-all hover:bg-neon hover:text-neon-foreground"
          >
            Conhecer todos os benefícios
          </a>
        </div>
      </div>
    </section>
  );
}
