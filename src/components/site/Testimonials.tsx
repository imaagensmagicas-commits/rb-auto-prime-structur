import { Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    name: "Ricardo Oliveira",
    role: "Proprietário de Logística",
    content: "A RB Rastreamento Veicular mudou nossa forma de gerir a frota. A precisão do GPS e o atendimento 24h nos dão a segurança que precisávamos.",
    rating: 5,
  },
  {
    name: "Ana Paula Mendes",
    role: "Cliente Particular",
    content: "Instalei no meu carro e estou muito satisfeita. O aplicativo é intuitivo e saber que meu patrimônio está protegido em tempo real não tem preço.",
    rating: 5,
  },
  {
    name: "Marcos Vinícius",
    role: "Motorista de Aplicativo",
    content: "Para quem trabalha na rua, segurança é tudo. A tecnologia 4G da RB é extremamente estável e nunca me deixou na mão. Recomendo muito!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-neon/5 blur-[120px] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que nossos clientes dizem"
          description="Confira a experiência de quem já utiliza a tecnologia da RB Rastreamento Veicular para proteger seu patrimônio."
        />
        <div className="mt-20 grid gap-8 md:grid-cols-3 animate-fade-up">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card neon-border-glow rounded-[2rem] p-8 transition-all hover:scale-[1.02]">
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-neon text-neon" />
                ))}
              </div>
              <p className="text-muted-foreground italic leading-relaxed">"{t.content}"</p>
              <div className="mt-8">
                <p className="font-display font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-neon uppercase tracking-wider font-semibold">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
