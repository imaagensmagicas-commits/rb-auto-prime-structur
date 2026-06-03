import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-neon/50">
      <div className="absolute inset-0 bg-gradient-to-br from-neon/0 to-neon/0 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neon/10 text-neon ring-1 ring-neon/30">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
