import {
  FaSprayCan,
  FaFlask,
  FaMicroscope,
  FaIndustry,
  FaMicrochip,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { cloudinary, cloudinarySrcSet } from "../constants";
import useTimelineScroll from "../hooks/useTimelineScroll";

const USES = [
  {
    icon: FaSprayCan,
    image:
      "https://res.cloudinary.com/yy5fen2q/image/upload/v1790656314/sanitasi_tdtwsi.jpg",
    title: "Sanitasi",
    description:
      "Untuk kebutuhan sanitasi pada lingkungan kerja atau penggunaan sesuai kebutuhan, mengikuti prosedur yang tepat.",
  },
  {
    icon: FaFlask,
    image:
      "https://res.cloudinary.com/yy5fen2q/image/upload/v1790656318/sterilisasiAlat_vmnmar.jpg",
    title: "Sterilisasi Alat",
    description:
      "Untuk kebutuhan sterilisasi alat sesuai prosedur operasional dan penggunaan yang telah ditetapkan.",
  },
  {
    icon: FaMicroscope,
    image:
      "https://res.cloudinary.com/yy5fen2q/image/upload/v1790656299/kebutuhan_Lap_qatiuz.jpg",
    title: "Keperluan Lab",
    description:
      "Untuk keperluan lab — mendukung kebutuhan pembersihan permukaan dan peralatan laboratorium sesuai prosedur yang berlaku.",
  },
  {
    icon: FaIndustry,
    image:
      "https://res.cloudinary.com/yy5fen2q/image/upload/v1790656295/cleaningAreaProduksi_rfoo5p.jpg",
    title: "Cleaning Area Produksi",
    description:
      "Membantu kebutuhan cleaning pada area produksi dan lingkungan kerja yang membutuhkan penanganan rutin.",
  },
  {
    icon: FaMicrochip,
    image:
      "https://res.cloudinary.com/yy5fen2q/image/upload/v1790656288/elektronik_l4xnzy.jpg",
    title: "Elektronik",
    description:
      "Dapat digunakan untuk kebutuhan cleaning komponen atau permukaan elektronik tertentu karena sifatnya yang cepat menguap — gunakan sesuai panduan.",
  },
];

function Step({ use, index }) {
  const Icon = use.icon;
  const flipped = index % 2 === 1;

  return (
    <li
      data-timeline-row
      className="timeline-row relative grid items-center gap-7 md:grid-cols-2 md:gap-x-16"
    >
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-500 bg-wool-100 shadow-brand-sm md:block"
      />

      <figure
        className={`group relative order-1 aspect-[4/3] overflow-hidden rounded-3xl border border-ink-200/70 bg-wool-200 shadow-soft transition-[border-color,box-shadow] duration-500 hover:border-brand-400/70 hover:shadow-lift sm:aspect-video ${
          flipped ? "md:order-1" : "md:order-2"
        }`}
      >
        <img
          src={cloudinary(use.image, 960)}
          srcSet={cloudinarySrcSet(use.image)}
          sizes="(min-width: 768px) 50vw, 100vw"
          alt={`Penggunaan ENTRI Alkohol untuk ${use.title}`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-ink-950/5 to-transparent"
        />
        <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-ink-950/55 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
          <span
            className="h-1.5 w-1.5 rounded-full bg-brand-400"
            aria-hidden="true"
          />
          {use.title}
        </span>
      </figure>

      <div className={`order-2 ${flipped ? "md:order-2" : "md:order-1"}`}>
        <article className="glow-ring rounded-3xl border border-ink-200/70 bg-white p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 sm:p-8">
          <h3 className="flex items-center gap-3.5 font-display text-xl font-extrabold tracking-tight text-ink-900 sm:text-2xl">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-brand-md">
              <Icon className="text-lg" aria-hidden="true" />
            </span>
            {use.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-ink-600 sm:text-[15px]">
            {use.description}
          </p>
        </article>
      </div>
    </li>
  );
}

export default function UseCases() {
  const { listRef, fillRef } = useTimelineScroll();

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
      <div
        aria-hidden="true"
        className="mesh-blob -bottom-32 -left-24 h-72 w-72 bg-brand-300/20"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
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

        <div className="relative mt-14 sm:mt-20">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-ink-200 to-transparent md:block"
          >
            <div
              ref={fillRef}
              className="timeline-fill bg-gradient-to-b from-brand-400 via-brand-500 to-brand-600"
            />
          </div>

          <ul
            ref={listRef}
            className="grid list-none gap-12 md:gap-y-28 lg:gap-y-32"
          >
            {USES.map((use, i) => (
              <Step key={use.title} use={use} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
