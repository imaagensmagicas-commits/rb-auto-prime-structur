import { MapPin, Award, Building2 } from "lucide-react";
import logo from "/rb-logo-official.jpg";

export function About() {
  return (
    <section id="sobre" className="relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative animate-fade-up">
          <div className="glass-card relative aspect-square max-w-md overflow-hidden rounded-[3rem] p-12 shadow-2xl">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative flex h-full items-center justify-center">
              <img src={logo} alt="RB Rastreamento" className="h-64 w-64 rounded-full bg-white/95 p-4 neon-glow animate-float" loading="lazy" />
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
            Sua segurança é a <span className="neon-text">nossa prioridade</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Fundada em 13 de setembro de 2018, a RB Rastreamento Veicular consolidou-se no mercado de Belo Horizonte como sinônimo de excelência e inovação. 
            Com sede na Savassi, combinamos anos de experiência com tecnologia GPS de última geração para oferecer proteção real ao seu patrimônio.
          </p>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Nosso compromisso vai além do rastreamento: entregamos tranquilidade através de um atendimento humanizado e suporte especializado 24 horas por dia. 
            Utilizamos infraestrutura de ponta e sistemas robustos para garantir que você tenha o controle total do seu veículo na palma da mão.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-neon" />
              <div>
                <p className="font-semibold">RB Tracker Rastreamento e Tecnologia e Eventos Ltda</p>
                <p className="text-sm text-muted-foreground">CNPJ: 31.495.657/0001-09</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-neon" />
              <div>
                <p className="font-semibold">Localização Estratégica</p>
                <p className="text-sm text-muted-foreground">Savassi, Belo Horizonte - MG</p>
              </div>
            </li>
          </ul>
          
          <div className="mt-10">
            <a
              href="https://wa.me/5531983181380"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-neon px-8 text-sm font-semibold text-neon-foreground neon-glow transition-transform hover:scale-105"
            >
              Falar com nossa equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
