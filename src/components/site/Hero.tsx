import { ArrowRight, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero-vehicles.jpg";
import tracker from "@/assets/tracker-device.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute -top-20 right-0 h-[500px] w-[500px] rounded-full bg-neon/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-neon">
            <ShieldCheck className="h-3.5 w-3.5" />
            Rastreamento Veicular Premium
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Mais segurança <br />
            para você ir <span className="neon-text">sempre mais longe</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Tecnologia GPS de ponta com identificação de motorista, tag chaveiro e
            monitoramento 24h. Proteção inteligente para o seu veículo, em tempo real.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/5531983181380"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-neon px-6 text-sm font-semibold text-neon-foreground neon-glow transition-transform hover:scale-105"
            >
              Solicitar proposta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex h-12 items-center rounded-full border border-border px-6 text-sm font-semibold text-foreground hover:border-neon/60 hover:text-neon"
            >
              Como funciona
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
            {[
              { k: "24h", v: "Monitoramento" },
              { k: "GPS", v: "Tempo real" },
              { k: "100%", v: "Confiabilidade" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-2xl font-bold text-neon">{s.k}</dt>
                <dd className="text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="glass relative overflow-hidden rounded-3xl">
            <img
              src={hero}
              alt="Caminhão e carro rastreados pela RB"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -left-6 hidden w-56 rotate-[-6deg] glass rounded-2xl p-4 sm:block">
            <img src={tracker} alt="Rastreador GPS RB" className="h-32 w-full rounded-xl object-cover" loading="lazy" />
            <p className="mt-3 text-xs font-semibold text-foreground">Rastreador GPS RB</p>
            <p className="text-xs text-muted-foreground">Compacto · Discreto · Preciso</p>
          </div>
        </div>
      </div>
    </section>
  );
}
