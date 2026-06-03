import logo from "@/assets/rb-logo.png";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="RB" className="h-10 w-10 rounded-full bg-white/95 p-0.5" loading="lazy" />
            <span className="font-display text-base font-bold">
              RB <span className="text-neon">Auto Tracker</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Rastreamento veicular premium com tecnologia GPS, identificação de motorista e
            monitoramento 24h.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Navegação
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#beneficios" className="hover:text-neon">Benefícios</a></li>
            <li><a href="#como-funciona" className="hover:text-neon">Como funciona</a></li>
            <li><a href="#diferenciais" className="hover:text-neon">Diferenciais</a></li>
            <li><a href="#sobre" className="hover:text-neon">Sobre</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Contato
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-neon" /> (31) 98318-1380</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-neon" /> (31) 98620-1766</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-neon" /> contato@rbautotracker.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-neon" /> Sua Cidade, BR</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-border/60 px-4 pt-6 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
        © {new Date().getFullYear()} RB Auto Tracker Rastreamento. Todos os direitos reservados.
      </div>
    </footer>
  );
}
