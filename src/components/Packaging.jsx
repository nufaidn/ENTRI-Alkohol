import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { waLink } from "../constants";

const SIZES = [
  {
    volume: "1 L",
    image: "/img/alkohol/1l.webp",
    alt: "ENTRI Alkohol kemasan 1 Liter",
    note: "Botol 1 Liter",
    featured: false,
  },
  {
    volume: "5 L",
    image: "/img/alkohol/5l.webp",
    alt: "ENTRI Alkohol kemasan 5 Liter",
    note: "Jerigen 5 Liter",
    featured: false,
  },
  {
    volume: "20 L",
    image: "/img/alkohol/20l.webp",
    alt: "ENTRI Alkohol kemasan 20 Liter",
    note: "Jerigen 20 Liter",
    featured: false,
  },
  {
    volume: "200 L",
    image: "/img/alkohol/200l.webp",
    alt: "ENTRI Alkohol kemasan 200 Liter",
    note: "Drum 200 Liter",
    featured: true,
  },
];

export default function Packaging() {
  return (
    <section
      id="kemasan"
      className="relative overflow-hidden bg-ink-950 py-20 sm:py-28"
      aria-label="Pilihan kemasan ENTRI Alkohol"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_45%_at_50%_0%,rgb(244_81_30/0.10),transparent_70%)]"
      />
      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <SectionHeader
          dark
          eyebrow="Kemasan"
          title="Pilihan Kemasan dari 1L hingga 200L"
          description="ENTRI melayani kebutuhan dari volume kecil hingga operasional berskala besar."
        />

        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {SIZES.map((size, i) => (
            <Reveal key={size.volume} direction="up" delay={i * 90}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 ${
                  size.featured
                    ? "border-brand-500/60 bg-gradient-to-b from-white/[0.09] to-white/[0.03] shadow-glow hover:border-brand-400"
                    : "border-white/10 bg-white/[0.05] hover:border-brand-500/40 hover:bg-white/[0.08]"
                }`}
              >
                <div className="relative flex h-[260px] items-center justify-center p-4">
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-6 bottom-2 top-8 rounded-full blur-2xl ${
                      size.featured ? "bg-brand-500/25" : "bg-ink-800/60"
                    }`}
                  />
                  <img
                    src={size.image}
                    alt={size.alt}
                    loading="lazy"
                    decoding="async"
                    width="690"
                    height="1599"
                    className="relative z-10 h-[220px] w-auto max-w-full object-contain drop-shadow-[0_24px_30px_rgb(0_0_0/0.45)] transition-transform duration-500 group-hover:scale-[1.08]"
                  />
                  {size.featured && (
                    <span className="absolute right-3 top-3 z-20 animate-pulse rounded-full bg-brand-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                      Volume Besar
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col items-center px-5 pb-6 pt-2 text-center">
                  <p className="font-display text-2xl font-extrabold text-white">
                    {size.volume}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                    {size.note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center" direction="up" delay={200}>
          <p className="text-sm text-white/60">
            Butuh volume tertentu atau pemesanan rutin untuk operasional?
          </p>
          <a
            href={waLink(
              "Halo ENTRI, saya ingin menanyakan ketersediaan kemasan ENTRI Alkohol (1L / 5L / 20L / 200L) dan harga pemesanannya."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="ripple-host mt-5 inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-400 px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-md active:scale-95"
          >
            Tanyakan Ketersediaan
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M4.6 10a.75.75 0 0 1 .75-.75h7.69l-2.72-2.72a.75.75 0 1 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H5.35A.75.75 0 0 1 4.6 10Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}