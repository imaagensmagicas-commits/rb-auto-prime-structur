import { Calendar, CheckCircle2, MapPin, Headset } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    label: "Desde 2018",
    value: "8 Anos",
    description: "Tradição e confiança",
  },
  {
    icon: CheckCircle2,
    label: "Empresa Ativa",
    value: "100%",
    description: "Compromisso total",
  },
  {
    icon: MapPin,
    label: "Belo Horizonte/MG",
    value: "Sede Própria",
    description: "Localização estratégica",
  },
  {
    icon: Headset,
    label: "Atendimento Especializado",
    value: "24h",
    description: "Sempre à disposição",
  },
];

export function Stats() {
  return (
    <section className="relative py-16 bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700"
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
