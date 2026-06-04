import { SectionHeading } from "./SectionHeading";
import { Activity, BarChart3, Fingerprint, Eye } from "lucide-react";

const info = [
  {
    icon: Eye,
    title: "Sensor de Fadiga",
    description: "Monitoramento por câmera inteligente que detecta sinais de cansaço, bocejos e distração do motorista em tempo real.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: BarChart3,
    title: "Telemetria Avançada",
    description: "Dados completos sobre o comportamento do veículo: velocidade, consumo, temperatura do motor e diagnósticos remotos.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: Fingerprint,
    title: "Identificador de Motorista RFID",
    description: "Controle total sobre quem conduz o veículo através de cartões ou tags de identificação por radiofrequência.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800"
  }
];

export function DetailSections() {
  return (
    <section className="py-24 bg-surface/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {info.map((item, idx) => (
            <div key={idx} className="glass-card rounded-3xl p-8 flex flex-col group">
              <div className="h-12 w-12 rounded-2xl bg-neon/10 flex items-center justify-center text-neon mb-6 group-hover:bg-neon group-hover:text-neon-foreground transition-all duration-300">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold mb-4 group-hover:text-neon transition-colors">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-8 flex-1">
                {item.description}
              </p>
              <div className="aspect-video w-full overflow-hidden rounded-2xl relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          <div className="glass-card rounded-3xl p-8 flex flex-col group">
            <div className="h-12 w-12 rounded-2xl bg-neon/10 flex items-center justify-center text-neon mb-6 group-hover:bg-neon group-hover:text-neon-foreground transition-all duration-300">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4 group-hover:text-neon transition-colors">Gestão de Frota</h3>
            <p className="text-muted-foreground text-sm mb-8">
              Monitoramento simultâneo de múltiplos veículos com central de controle e sistema avançado de gerenciamento.
            </p>
            <div className="aspect-video w-full overflow-hidden rounded-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80&w=1200" 
                alt="Gestão de Frota" 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 flex flex-col group">
            <div className="h-12 w-12 rounded-2xl bg-neon/10 flex items-center justify-center text-neon mb-6 group-hover:bg-neon group-hover:text-neon-foreground transition-all duration-300">
              <Activity className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4 group-hover:text-neon transition-colors">Instalação Profissional</h3>
            <p className="text-muted-foreground text-sm mb-8">
              Técnicos especializados realizam a configuração e instalação discreta do equipamento no seu veículo.
            </p>
            <div className="aspect-video w-full overflow-hidden rounded-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&q=80&w=1200" 
                alt="Instalação Profissional" 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}