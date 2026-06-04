import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/5 bg-gradient-to-br from-primary/30 via-surface to-background p-10 sm:p-20 shadow-2xl animate-fade-up">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-neon/30 blur-[100px]" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

            <div className="relative text-center">
              <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Proteja seu veículo com <br />
                <span className="neon-text">quem entende de segurança.</span>
              </h2>
              <p className="mt-8 mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            A tecnologia certa da RB Rastreamento Veicular para acompanhar, monitorar e proteger seu patrimônio em tempo real.
          </p>
              
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/5531983181380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-neon px-10 text-base font-bold text-neon-foreground neon-glow transition-all hover:scale-105"
                >
                  Solicitar Orçamento Agora
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://wa.me/5531986201766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-10 text-base font-bold hover:border-neon/40 hover:text-neon transition-all"
                >
                  <Phone className="h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
