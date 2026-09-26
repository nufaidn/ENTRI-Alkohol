import { useState } from "react";
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

const SLIDE_WIDTH =
  "w-[clamp(240px,78vw,340px)] sm:w-[clamp(280px,42vw,360px)] lg:w-[clamp(300px,29vw,368px)]";

const EDGE_FADE =
  "linear-gradient(to right, transparent 0%, #000 5%, #000 95%, transparent 100%)";

function Card({ use }) {
  const Icon = use.icon;
  return (
    <article className="glow-ring group flex h-full w-full flex-col rounded-3xl border border-ink-200/70 bg-white p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1.5">
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
  );
}

export default function UseCases() {
  const [paused, setPaused] = useState(false);
  const hold = () => setPaused(true);
  const release = () => setPaused(false);

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

        <Reveal direction="up" delay={0} className="mt-14">
          <div
            className="relative overflow-hidden"
            style={{ maskImage: EDGE_FADE, WebkitMaskImage: EDGE_FADE }}
            onMouseEnter={hold}
            onMouseLeave={release}
            onPointerDown={hold}
            onPointerUp={release}
            onPointerCancel={release}
            role="group"
            aria-roledescription="carousel"
            aria-label="Daftar kegunaan ENTRI Alkohol"
          >
            <div
              className="flex w-max animate-marquee items-stretch gap-6 py-1.5"
              style={{
                animationDuration: "42s",
                animationPlayState: paused ? "paused" : "running",
              }}
            >
              <div className="flex shrink-0 items-stretch gap-6">
                {USES.map((use) => (
                  <div key={use.title} className={SLIDE_WIDTH}>
                    <Card use={use} />
                  </div>
                ))}
              </div>
              <div className="flex shrink-0 items-stretch gap-6" aria-hidden="true">
                {USES.map((use) => (
                  <div key={use.title} className={SLIDE_WIDTH}>
                    <Card use={use} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
