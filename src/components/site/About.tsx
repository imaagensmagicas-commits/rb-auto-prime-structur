import { MapPin, Award, Building2 } from "lucide-react";
import logo from "@/assets/rb-logo.png";

export function About() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="glass relative aspect-square max-w-md overflow-hidden rounded-3xl p-10">
            <div className="absolute inset-0 grid-pattern opacity-40" />
            <div className="relative flex h-full items-center justify-center">
              <img src={logo} alt="RB Rastreamento" className="h-56 w-56 rounded-full bg-white/95 p-3 neon-glow" loading="lazy" />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-4 hidden glass rounded-2xl p-4 sm:block">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-neon" />
              <div>
                <p className="font-display text-sm font-bold">Empresa certificada</p>
                <p className="text-xs text-muted-foreground">Tecnologia homologada</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-neon">
            Sobre a empresa
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Especialistas em <span className="neon-text">rastreamento veicular</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            A RB Auto Tracker é referência em soluções de rastreamento e telemetria veicular,
            oferecendo tecnologia de ponta com atendimento próximo e personalizado. Nosso
            compromisso é levar mais segurança, controle e tranquilidade para você e seu veículo.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-neon" />
              <div>
                <p className="font-semibold">Sede</p>
                <p className="text-sm text-muted-foreground">RB Rastreamento Veicular · CNPJ mockado</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-neon" />
              <div>
                <p className="font-semibold">Localização</p>
                <p className="text-sm text-muted-foreground">Av. Exemplo, 1234 · Centro · Sua Cidade, BR</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
