import { FaWhatsapp, FaChevronLeft } from "react-icons/fa";
import Reveal from "./Reveal";
import { waLink } from "../constants";

export default function ProductDetail({ product }) {
  return (
    <section className="relative overflow-hidden bg-wool-50 pb-20 pt-32 sm:pb-28 sm:pt-36 lg:pt-40" aria-label={`Detail ${product.name}`}>
      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <Reveal direction="up">
          <a
            href="#produk"
            className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-ink-700 shadow-soft backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 active:scale-95"
          >
            <FaChevronLeft className="text-xs" aria-hidden="true" />
            Kembali ke Produk
          </a>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-wool-100 to-wool-50 shadow-lift">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgb(244_81_30/0.12),transparent_70%)]"
              />
              <div className="relative flex items-center justify-center p-8 sm:p-12">
                <img
                  src={product.image}
                  alt={product.alt}
                  decoding="async"
                  width="690"
                  height="1599"
                  className="product-shadow relative z-10 h-[320px] w-auto object-contain sm:h-[420px]"
                />
              </div>
              <span className="absolute left-6 top-6 inline-flex items-center rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-1.5 text-sm font-bold text-white shadow-glow">
                {product.id}
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal direction="up">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700 shadow-brand-sm backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" aria-hidden="true" />
                Detail Produk
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-ink-950 sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-3 text-lg font-semibold text-brand-600">{product.tagline}</p>
              <p className="mt-5 text-base leading-relaxed text-ink-600">
                {product.description}
              </p>
            </Reveal>

            <Reveal direction="up" delay={120}>
              <ul className="mt-8 space-y-3">
                {product.use.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-ink-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 0 1 1.4-1.4L9 11.6l6.3-6.3a1 1 0 0 1 1.4 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={waLink(
                    `Halo ENTRI, saya ingin menanyakan produk ${product.name} dan pilihan kemasannya.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ripple-host inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-md active:scale-95"
                >
                  <FaWhatsapp className="text-lg" aria-hidden="true" />
                  Tanyakan via WhatsApp
                </a>
                <a
                  href="#produk"
                  className="ripple-host inline-flex items-center justify-center rounded-full border border-ink-200 bg-white/80 px-7 py-3.5 text-base font-semibold text-ink-700 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 active:scale-95"
                >
                  Lihat Produk Lainnya
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}