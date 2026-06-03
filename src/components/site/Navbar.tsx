import logo from "@/assets/rb-logo.png";

const links = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#sobre", label: "Sobre" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="RB Rastreamento" className="h-9 w-9 rounded-full bg-white/95 p-0.5" />
          <span className="font-display text-sm font-bold tracking-wide text-foreground sm:text-base">
            RB <span className="text-neon">Auto Tracker</span>
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-neon">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#cta"
          className="inline-flex h-9 items-center rounded-full bg-neon px-4 text-xs font-semibold text-neon-foreground transition-transform hover:scale-105"
        >
          Fale conosco
        </a>
      </nav>
    </header>
  );
}
