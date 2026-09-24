const ITEMS = [
  "Alkohol 70%",
  "Alkohol 96%",
  "Kemasan 1L – 200L",
  "Sanitasi",
  "Sterilisasi Alat",
  "Cleaning Area Produksi",
  "Kebutuhan Teknis",
];

export default function Marquee() {
  const row = (ariaHidden) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
      {ITEMS.map((item) => (
        <div key={item} className="flex items-center">
          <span className="px-5 text-[11px] font-bold uppercase tracking-widest text-white/80 sm:text-xs">
            {item}
          </span>
          <span className="text-[9px] text-brand-500" aria-hidden="true">
            ✦
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden border-b border-brand-500/20 bg-ink-950" aria-label="Highlight produk ENTRI Alkohol">
      <div className="flex w-max animate-marquee py-2 sm:py-2.5">
        {row(false)}
        {row(true)}
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent"
      />
    </div>
  );
}