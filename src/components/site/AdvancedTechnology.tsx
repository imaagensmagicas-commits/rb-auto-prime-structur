import { Eye, ShieldAlert, Zap, Radio } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { FeatureCard } from "./FeatureCard";

const advancedTech = [
  {
    icon: Eye,
    title: "Sensor de Fadiga com Câmera Inteligente",
    description: "Tecnologia preventiva que monitora o motorista em tempo real, detectando sinais de sonolência e distração para garantir uma condução segura.",
    badge: "Inovação",
    features: ["Monitoramento do motorista", "Detecção de sonolência", "Tecnologia preventiva", "Mais segurança na condução"],
    image: "/sensor-fadiga-camera.jpeg"
  },
  {
    icon: Radio,
    title: "Rastreadores 4G",
    description: "Equipamentos de última geração com conectividade 4G, garantindo maior estabilidade de sinal e cobertura ampliada em todo o território nacional.",
    badge: "Alta Performance",
    features: ["Maior estabilidade", "Localização em tempo real", "Cobertura ampliada", "Tecnologia atualizada"],
    image: "/rastreadores-4g.jpeg"
  }
];

export function AdvancedTechnology() {
  return (
    <section id="tecnologia" className="relative py-28 sm:py-36 bg-surface/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tecnologia de Ponta"
          title="Soluções avançadas para segurança máxima"
          description="Investimos nas tecnologias mais modernas do mercado para oferecer proteção inteligente e monitoramento de alta performance."
        />
        
        <div className="mt-20 grid gap-10 lg:grid-cols-2 animate-fade-up">
          {advancedTech.map((tech, i) => (
            <div key={i} className="glass-card neon-border-glow group relative overflow-hidden rounded-[2.5rem] p-10 transition-all hover:scale-[1.01]">
              <div className="absolute top-6 right-6">
                <span className="rounded-full bg-neon/10 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-neon border border-neon/20">
                  {tech.badge}
                </span>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neon/10 text-neon mb-8">
                <tech.icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">{tech.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {tech.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tech.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-foreground/80">
                    <Zap className="h-3.5 w-3.5 text-neon" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 pt-10 border-t border-white/5">
                <div className="aspect-video w-full overflow-hidden rounded-2xl relative">
                  <img 
                    src={tech.image} 
                    alt={tech.title}
                    className={`h-full w-full ${tech.title === "Rastreadores 4G" ? "object-contain bg-white/5" : "object-cover"} transition-transform duration-700 group-hover:scale-110`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
