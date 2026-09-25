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
          description="ENTRI menyediakan alcohol dalam empat pilihan volume — dari 1 Liter hingga 200 Liter. Masing-masing dirancang untuk kebutuhan yang sesuai dengan penggunaannya."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => {
            const is200L = product.id === "200 L";
            return (
              <article
                key={product.id}
                className={`glow-ring group relative flex flex-col overflow-hidden rounded-3xl border border-ink-200/70 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lift ${
                  is200L ? "lg:w-[calc(100%+80px)]" : ""
                }`}
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

              <div className="flex flex-1 flex-col items-between justify-between p-6">
                <h3 className="font-display text-xl font-bold text-ink-950">
                  {product.name}
                </h3>

                <a
                  href={`#/produk/${slugify(product.id)}`}
                  aria-label={`Lihat detail ${product.name}`}
                  className="ripple-host mt-auto inline-flex items-center gap-2 text-sm font-semibold text-ink-700 transition-all duration-200 hover:text-brand-600 active:scale-95"
                >
                  Lihat Selengkapnya →
                </a>
              </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}