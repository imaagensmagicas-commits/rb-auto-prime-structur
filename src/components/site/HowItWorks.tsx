import { Wrench, Power, Activity, Headset } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { icon: Wrench, title: "Instalação", description: "Equipe técnica especializada instala o rastreador no seu veículo de forma rápida e discreta." },
  { icon: Power, title: "Ativação", description: "Ativamos o dispositivo e configuramos sua conta na plataforma web e aplicativo." },
  { icon: Activity, title: "Monitoramento", description: "Acompanhe localização, rotas, motorista e alertas em tempo real, 24 horas por dia." },
  { icon: Headset, title: "Suporte", description: "Atendimento especializado sempre disponível para garantir a melhor experiência." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Como funciona"
          title="Do primeiro contato ao monitoramento total"
          description="Um processo simples, rápido e seguro em quatro etapas desenvolvidas para sua comodidade."
        />
        <ol className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 animate-fade-up">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <div className="glass-card neon-border-glow relative h-full rounded-3xl p-8 transition-all">
                <div className="absolute -top-4 left-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-neon font-display text-sm font-bold text-neon-foreground neon-glow">
                  {i + 1}
                </div>
                <s.icon className="mt-2 h-7 w-7 text-neon" />
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
