import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import {
  FaLayerGroup,
  FaBoxes,
  FaUserCog,
  FaBroom,
  FaIndustry,
} from "react-icons/fa";

const ADVANTAGES = [
  {
    icon: FaLayerGroup,
    title: "Dua Konsentrasi Pilihan",
    description: "Tersedia Alkohol 70% dan 96% untuk disesuaikan dengan kebutuhan Anda.",
  },
  {
    icon: FaBoxes,
    title: "Kemasan Fleksibel",
    description: "Empat pilihan ukuran — 1L, 5L, 20L, hingga 200 Liter.",
  },
  {
    icon: FaUserCog,
    title: "Individu & Operasional",
    description: "Cocok untuk kebutuhan perorangan maupun operasional perusahaan.",
  },
  {
    icon: FaBroom,
    title: "Praktis untuk Cleaning",
    description: "Mendukung kebutuhan cleaning tertentu secara praktis dan efisien.",
  },
  {
    icon: FaIndustry,
    title: "Hingga 200 Liter",
    description: "Volume besar tersedia untuk mendukung kebutuhan industri dan produksi.",
  },
];

export default function Why() {
  return (
    <section
      id="keunggulan"
      className="relative overflow-hidden bg-gradient-to-b from-white to-brand-50/50 py-20 sm:py-28"
      aria-label="Keunggulan ENTRI Alkohol"
    >
      <div
        aria-hidden="true"
        className="mesh-blob -left-32 top-1/3 h-80 w-80 bg-brand-400/25"
      />
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            align="left"
            eyebrow="Kenapa ENTRI"
            title={
              <>
                Solusi Alcohol yang{" "}
                <span className="text-gradient">Praktis & Terpercaya</span>
              </>
            }
            description="ENTRI menyediakan alcohol dengan pilihan konsentrasi dan kemasan yang beragam — dari kebutuhan sederhana hingga operasional profesional."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {ADVANTAGES.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <Reveal key={adv.title} direction="up" delay={i * 70}>
                  <div className="glow-ring group flex h-full items-start gap-4 rounded-2xl border border-ink-200/70 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-brand-sm">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-brand-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                      <Icon className="text-lg" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-ink-900">
                        {adv.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                        {adv.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}