import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Company() {
  return (
    <section id="tentang" className="relative overflow-hidden bg-white py-20 sm:py-28" aria-label="Tentang PT Entri Jaya Makmur">
      <div
        aria-hidden="true"
        className="mesh-blob -right-32 bottom-0 h-80 w-80 bg-brand-400/25"
      />
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <SectionHeader
              align="left"
              eyebrow="Tentang Kami"
              title="PT Entri Jaya Makmur"
              description="PT Entri Jaya Makmur adalah perusahaan yang menyediakan produk ENTRI Alkohol untuk kebutuhan profesional dan operasional. Kami fokus menghadirkan produk alcohol yang praktis digunakan — dari kebutuhan sanitasi, sterilisasi alat, cleaning area produksi, hingga kebutuhan teknis tertentu."
            />
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-600">
              Dengan pilihan kemasan yang fleksibel, ENTRI menyesuaikan kebutuhan Anda — mulai
              dari skala individu hingga kebutuhan operasional dalam volume besar.
            </p>
          </Reveal>

          <Reveal direction="left" delay={120}>
            <div className="glow-ring relative overflow-hidden rounded-3xl border border-ink-200/70 bg-gradient-to-br from-wool-50 to-white p-8 shadow-lift sm:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-50 blur-2xl"
              />
              <img
                src="/img/alkohol/logo.png"
                alt="Logo PT Entri Jaya Makmur"
                loading="lazy"
                decoding="async"
                width="1200"
                height="311"
                className="relative h-14 w-auto object-contain sm:h-16"
              />
              <div className="relative mt-8 border-t border-ink-800/10 pt-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-2.5 w-2.5 animate-pulse rounded-full bg-brand-500" aria-hidden="true" />
                  <p className="text-sm font-semibold text-ink-800">
                    Produk untuk kebutuhan profesional & operasional
                  </p>
                </div>
              </div>
              <div className="relative mt-4 grid grid-cols-2 gap-4">
                {[
                  { label: "Alkohol 70%", value: "Sanitasi & cleaning harian" },
                  { label: "Alkohol 96%", value: "Kebutuhan teknis & operasional" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-ink-200/70 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200"
                  >
                    <p className="font-display text-sm font-bold text-ink-900">{item.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink-500">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}