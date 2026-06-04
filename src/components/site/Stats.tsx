import { Calendar, CheckCircle2, MapPin, Headset } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    label: "Mercado desde 2018",
    value: "Referência",
    description: "Tradição em BH",
  },
  {
    icon: CheckCircle2,
    label: "RB Rastreamento",
    value: "Ativa",
    description: "CNPJ 31.495.657/0001-09",
  },
  {
    icon: MapPin,
    label: "Belo Horizonte/MG",
    value: "Savassi",
    description: "Localização estratégica",
  },
  {
    icon: Headset,
    label: "Suporte Técnico",
    value: "24h",
    description: "Atendimento Especializado",
  },
];

export function Stats() {
  return (
    <section className="relative py-20 bg-surface/20 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center opacity-0 animate-fade-up"
              style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'both' }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-neon/10 text-neon">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="font-display text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-neon uppercase tracking-wider">{stat.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
