import { SectionHeading } from "./SectionHeading";
import { Activity, BarChart3, Fingerprint } from "lucide-react";

const info = [
  {
    icon: Eye,
    title: "Sensor de Fadiga",
    description: "Monitoramento por câmera inteligente que detecta sinais de cansaço, bocejos e distração do motorista em tempo real.",
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: BarChart3,
    title: "Telemetria Avançada",
    description: "Dados completos sobre o comportamento do veículo: velocidade, consumo, temperatura do motor e diagnósticos remotos.",
    image: "https://images.unsplash.com/photo-1551829142-d9b812ee3f23?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: Fingerprint,
    title: "Identificador de Motorista RFID",
    description: "Controle total sobre quem conduz o veículo através de cartões ou tags de identificação por radiofrequência.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800"
  }
];

import { Eye } from "lucide-react";

export function DetailSections() {
  return (
    <section className="py-24 bg-surface/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {info.map((item, idx) => (
            <div key={idx} className="glass-card rounded-3xl p-8 flex flex-col">
              <div className="h-12 w-12 rounded-2xl bg-neon/10 flex items-center justify-center text-neon mb-6">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-8 flex-1">
                {item.description}
              </p>
              <div className="aspect-video w-full overflow-hidden rounded-2xl">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
