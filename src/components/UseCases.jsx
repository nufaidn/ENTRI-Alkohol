import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import {
  FaSprayCan,
  FaFlask,
  FaIndustry,
  FaMicrochip,
} from "react-icons/fa";

const USES = [
  {
    icon: FaSprayCan,
    title: "Sanitasi",
    description:
      "Untuk kebutuhan sanitasi pada lingkungan kerja atau penggunaan sesuai kebutuhan, mengikuti prosedur yang tepat.",
  },
  {
    icon: FaFlask,
    title: "Sterilisasi Alat",
    description:
      "Untuk kebutuhan sterilisasi alat sesuai prosedur operasional dan penggunaan yang telah ditetapkan.",
  },
  {
    icon: FaIndustry,
    title: "Cleaning Area Produksi",
    description:
      "Membantu kebutuhan cleaning pada area produksi dan lingkungan kerja yang membutuhkan penanganan rutin.",
  },
  {
    icon: FaMicrochip,
    title: "Elektronik",
    description:
      "Dapat digunakan untuk kebutuhan cleaning komponen atau permukaan elektronik tertentu karena sifatnya yang cepat menguap — gunakan sesuai panduan.",
  },
];

export default function UseCases() {
  return (
    <section
      id="kegunaan"
      className="relative overflow-hidden bg-wool-100 py-20 sm:py-28"
      aria-label="Kegunaan ENTRI Alkohol"
    >
      <div
        aria-hidden="true"
        className="mesh-blob -right-24 -top-24 h-72 w-72 bg-brand-400/25"
      />
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <SectionHeader
          eyebrow="Use Case"
          title={
            <>
              Digunakan untuk{" "}
              <span className="text-gradient">Berbagai Kebutuhan</span>
            </>
          }
          description="Dari kebutuhan harian hingga operasional industri, ENTRI Alkohol hadir untuk mendukung pekerjaan Anda."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {USES.map((use, i) => {
            const Icon = use.icon;
            return (
              <Reveal key={use.title} direction="up" delay={i * 90}>
                <article className="glow-ring group flex h-full flex-col rounded-3xl border border-ink-200/70 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lift active:scale-[0.99]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-brand-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="text-xl" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold tracking-tight text-ink-900">
                    {use.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {use.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}