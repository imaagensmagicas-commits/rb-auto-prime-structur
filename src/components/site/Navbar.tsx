import logo from "/rb-logo-official.jpg";

const links = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#sobre", label: "Sobre" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-2xl transition-all duration-300">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="RB Rastreamento" className="h-12 w-12 rounded-full bg-white/95 p-0.5 shadow-[0_0_20px_rgba(255,255,255,0.2)]" loading="lazy" />
          <span className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
            RB <span className="text-neon">Rastreamento Veicular</span>
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
          href="https://wa.me/5531983181380"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center rounded-full bg-neon px-4 text-xs font-semibold text-neon-foreground transition-transform hover:scale-105"
        >
          Fale conosco
        </a>
      </nav>
    </header>
  );
}
