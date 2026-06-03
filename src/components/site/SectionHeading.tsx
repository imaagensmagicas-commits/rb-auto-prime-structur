interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`max-w-3xl animate-fade-up ${centered ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-neon mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
