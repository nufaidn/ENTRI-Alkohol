import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className = "",
}) {
  const alignClass =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <Reveal className={`max-w-2xl ${alignClass} ${className}`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest backdrop-blur-md ${
          dark
            ? "border-brand-500/30 bg-brand-500/10 text-brand-300"
            : "border-brand-200/70 bg-brand-50/70 text-brand-600"
        }`}
      >
        <span
          className={`h-1.5 w-1.5 animate-pulse rounded-full ${
            dark ? "bg-brand-400" : "bg-brand-500"
          }`}
          aria-hidden="true"
        />
        {eyebrow}
      </span>
      <h2
        className={`mt-5 font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl ${
          dark ? "text-white" : "text-ink-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            dark ? "text-white/60" : "text-ink-600"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}