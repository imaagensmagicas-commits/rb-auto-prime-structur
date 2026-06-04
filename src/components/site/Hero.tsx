import { ArrowRight, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero-vehicles.jpg";
import tracker from "@/assets/tracker-device.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 grid-pattern opacity-[0.15]" />
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-neon/15 blur-[120px] animate-pulse-soft" />
      <div className="absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px] animate-pulse-soft" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-neon shadow-[0_0_15px_rgba(125,211,252,0.1)]">
            <ShieldCheck className="h-3.5 w-3.5" />
            Rastreamento Veicular Premium
          </span>
          <h1 className="mt-8 font-display text-5xl font-bold leading-[1.1] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Segurança de elite <br />
            para o que é <span className="neon-text">seu por direito</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            A RB Auto Tracker oferece tecnologia GPS de alta precisão e monitoramento 24h. 
            Proteja seu veículo com a empresa que é referência em Belo Horizonte desde 2018.
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

        <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card relative overflow-hidden rounded-[2.5rem] p-3 shadow-2xl animate-float">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1551829142-d9b812ee3f23?auto=format&fit=crop&q=80&w=1200"
                alt="Veículo moderno sendo rastreado"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="absolute -bottom-10 -left-10 hidden w-64 rotate-[-6deg] glass-card rounded-2xl p-5 sm:block animate-float" style={{ animationDelay: '1s' }}>
            <img src={tracker} alt="Rastreador GPS RB" className="h-36 w-full rounded-xl object-cover" loading="lazy" />
            <p className="mt-4 text-sm font-bold text-foreground">Rastreador GPS RB</p>
            <p className="text-xs text-muted-foreground">Compacto · Discreto · Preciso</p>
          </div>
        </div>
      </div>
    </section>
  );
}
