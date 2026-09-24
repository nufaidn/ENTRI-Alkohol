import SectionHeader from "./SectionHeader";
import { PRODUCTS, slugify } from "../products";

export default function Concentration() {
  return (
    <section id="produk" className="bg-white py-20 sm:py-28" aria-label="Produk ENTRI Alkohol">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <SectionHeader
          eyebrow="Produk ENTRI Alkohol"
          title={
            <>
              Empat Pilihan Volume, <span className="text-gradient">Satu Kualitas</span>
            </>
          }
          description="ENTRI menyediakan alcohol dalam empat pilihan volume — dari 1 Liter hingga 200 Liter — masing-masing dirancang untuk kebutuhan yang sesuai dengan penggunaannya."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="glow-ring group relative flex flex-col overflow-hidden rounded-3xl border border-ink-200/70 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lift"
            >
              <div className="relative overflow-hidden bg-gradient-to-b from-wool-100 to-wool-50">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgb(244_81_30/0.10),transparent_70%)]"
                />
                <div className="relative flex h-[230px] items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                    decoding="async"
                    width="690"
                    height="1599"
                    className="product-shadow relative z-10 h-[200px] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-3 py-1 text-xs font-bold text-white shadow-glow">
                  {product.id}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold text-ink-950">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-brand-600">
                  {product.tagline}
                </p>

                <ul className="mt-4 space-y-2">
                  {product.use.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-2.5 w-2.5" aria-hidden="true">
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

                <a
                  href={`#/produk/${slugify(product.id)}`}
                  aria-label={`Lihat detail ${product.name}`}
                  className="ripple-host mt-auto inline-flex h-11 w-11 items-center justify-center self-end rounded-full bg-ink-950 text-white transition-all duration-200 hover:bg-gradient-to-r hover:from-brand-600 hover:to-brand-500 hover:shadow-glow active:scale-95"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 0 1 0-1.06L11.9 9 7.2 4.29a.75.75 0 1 1 1.06-1.06L13.54 8.47a.75.75 0 0 1 0 1.06l-5.27 5.24a.75.75 0 0 1-1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}