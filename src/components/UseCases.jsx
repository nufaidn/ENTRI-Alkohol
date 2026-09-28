import {
  FaSprayCan,
  FaFlask,
  FaMicroscope,
  FaIndustry,
  FaMicrochip,
} from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

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
    icon: FaMicroscope,
    title: "Keperluan Lab",
    description:
      "Untuk keperluan lab — mendukung kebutuhan pembersihan permukaan dan peralatan laboratorium sesuai prosedur yang berlaku.",
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

function Card({ use, index }) {
  const Icon = use.icon;
  return (
    <article className="glow-ring group flex h-full w-full flex-col rounded-3xl border border-ink-200/70 bg-white p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 sm:p-7">
      <div className="flex items-center gap-3.5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-brand-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="text-xl" aria-hidden="true" />
        </div>
        <span className="font-display text-3xl font-extrabold leading-none text-ink-200 transition-colors duration-300 group-hover:text-brand-200">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-ink-900">
        {use.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
        {use.description}
      </p>
    </article>
  );
}

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

        <ul className="mt-14 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {USES.map((use, i) => (
            <Reveal as="li" key={use.title} direction="up" delay={i * 70}>
              <Card use={use} index={i} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
