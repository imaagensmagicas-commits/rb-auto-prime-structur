import { SectionHeading } from "./SectionHeading";
import { Cpu, Smartphone, Monitor, ShieldCheck } from "lucide-react";

const devices = [
  {
    title: "Rastreador 4G Veicular",
    description: "Equipamento compacto e discreto com tecnologia 4G LTE para maior velocidade e precisão.",
    image: "/telemetria-completa.jpg",
    icon: Cpu,
    specs: ["Conexão 4G LTE", "Backup de Bateria", "Antifurto Integrado"]
  },
  {
    title: "Módulo de Monitoramento",
    description: "Módulo avançado para gestão de frotas e telemetria veicular completa.",
    image: "/telemetria-completa.jpg",
    icon: Monitor,
    specs: ["Telemetria Avançada", "Corte de Combustível", "Alertas de Ignição"]
  },
  {
    title: "Dispositivo OBD-II 4G",
    description: "Instalação rápida e simplificada via porta OBD, ideal para monitoramento imediato.",
    image: "/telemetria-completa.jpg",
    icon: Smartphone,
    specs: ["Instalação Plug & Play", "Diagnóstico Remoto", "Sinal 4G Estável"]
  },
  {
    title: "Equipamento Blindado",
    description: "Proteção extra contra água e poeira (IP67), ideal para máquinas e veículos pesados.",
    image: "/telemetria-completa.jpg",
    icon: ShieldCheck,
    specs: ["Proteção IP67", "Resistente a Impactos", "Alta Durabilidade"]
  }
];

export function DeviceShowcase() {
  return (
    <section id="equipamentos" className="py-24 sm:py-32 relative overflow-hidden bg-surface/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Equipamentos Profissionais"
          title="Tecnologia de Rastreamento 4G"
          description="Conheça os dispositivos de última geração utilizados pela RB Rastreamento para garantir a segurança total do seu patrimônio."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {devices.map((device, index) => (
            <div 
              key={index} 
              className="glass-card group flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-neon/20 border border-white/10"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img 
                  src={device.image} 
                  alt={device.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neon/20 backdrop-blur-md border border-neon/30 text-neon">
                  <device.icon className="h-5 w-5" />
                </div>
              </div>
              
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-neon transition-colors">
                  {device.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {device.description}
                </p>
                <div className="mt-auto pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {device.specs.map((spec, sIndex) => (
                      <span key={sIndex} className="text-[10px] font-medium px-2 py-1 rounded-md bg-white/5 text-foreground/70 uppercase tracking-tight">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a 
            href="https://wa.me/5531995175657" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            Quero proteger meu veículo
          </a>
        </div>
      </div>
    </section>
  );
}
