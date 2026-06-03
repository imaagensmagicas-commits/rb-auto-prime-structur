import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="glass-card neon-border-glow group relative flex flex-col rounded-3xl p-8">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 text-neon transition-all duration-500 group-hover:bg-neon group-hover:text-neon-foreground group-hover:neon-glow group-hover:scale-110">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-neon">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
