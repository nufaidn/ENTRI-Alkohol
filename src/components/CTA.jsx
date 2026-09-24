import { FaWhatsapp } from "react-icons/fa";
import Reveal from "./Reveal";
import { waLink } from "../constants";

export default function CTA() {
  return (
    <section id="kontak" className="relative overflow-hidden bg-wool-50 py-20 sm:py-28" aria-label="Hubungi ENTRI">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <Reveal direction="zoom">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink-950 px-6 py-16 text-center shadow-lift sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgb(244_81_30/0.25),transparent_70%)]"
            />
            <div
              aria-hidden="true"
              className="mesh-blob -bottom-24 -left-16 h-64 w-64 bg-brand-600/40"
            />
            <div
              aria-hidden="true"
              className="mesh-blob -right-20 -top-20 h-64 w-64 bg-brand-500/35"
              style={{ animationDelay: "-7s" }}
            />

            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-400" aria-hidden="true" />
                Konsultasi & Pemesanan
              </span>
              <h2 className="mt-6 font-display text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">
                Siap Menentukan{" "}
                <span className="text-gradient">Kebutuhan Alcohol Anda?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60">
                Hubungi ENTRI untuk mendapatkan informasi produk dan pilihan kemasan yang
                sesuai dengan kebutuhan Anda.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={waLink(
                    "Halo ENTRI, saya ingin informasi produk ENTRI Alkohol dan pilihan kemasan yang sesuai dengan kebutuhan saya."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ripple-host inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand-500 to-brand-400 px-8 py-4 text-base font-semibold text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-md active:scale-95 sm:w-auto sm:text-lg"
                >
                  <FaWhatsapp className="text-2xl" aria-hidden="true" />
                  Hubungi ENTRI via WhatsApp
                </a>
                <a
                  href="#produk"
                  className="ripple-host inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white/85 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white active:scale-95 sm:w-auto"
                >
                  Lihat Produk
                </a>
              </div>
              <p className="mt-6 text-xs text-white/40">
                WhatsApp: 085174394123 · Respon cepat untuk konsultasi produk
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}