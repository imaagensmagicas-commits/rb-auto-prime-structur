import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/5 bg-gradient-to-br from-primary/30 via-surface to-background p-10 sm:p-20 shadow-2xl animate-fade-up">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-neon/30 blur-[100px]" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Pronto para proteger <br />
                <span className="neon-text">o seu veículo?</span>
              </h2>
              <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
                Solicite uma proposta personalizada e descubra como a RB pode trazer mais
                segurança e controle para o seu dia a dia.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5531983181380"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-neon px-6 text-sm font-semibold text-neon-foreground neon-glow transition-transform hover:scale-105"
              >
                Solicitar proposta
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/5531986201766"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold hover:border-neon/60 hover:text-neon"
              >
                <Phone className="h-4 w-4" />
                Falar com consultor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
