import { FaArrowDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";
import { PRODUCTS } from "../products";

const STATS = [
  { label: "Produk", value: <AnimatedCounter target={PRODUCTS.length} /> },
  { label: "Kegunaan", value: <AnimatedCounter target={5} /> },
  { label: "Konsentrasi", value: <>70% & 96%</> },
];

function HeroMobile() {
  return (
    <section
      id="top"
      className="relative w-screen overflow-hidden bg-wool-50 min-h-screen flex items-center md:hidden"
      aria-label="ENTRI Alkohol — perkenalan produk"
    >
      {/* Background image + aurora + grid backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/yy5fen2q/image/upload/v1790581452/tampilan_r00o1x.png')",
            backgroundPosition: "87% center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/50 to-ink-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-wool-50/25 via-transparent to-transparent" />
        <div className="mesh-blob -left-40 top-0 h-[460px] w-[460px] bg-brand-300/15" style={{ clipPath: "inset(0)" }} />
        <div
          className="mesh-blob -right-32 -top-24 h-[520px] w-[520px] bg-brand-400/10"
          style={{ animationDelay: "-5s", clipPath: "inset(0)" }}
        />
        <div
          className="mesh-blob bottom-[-35%] left-1/4 h-[420px] w-[420px] bg-ink-300/15"
          style={{ animationDelay: "-9s", clipPath: "inset(0)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_78%_20%,rgb(244_81_30/0.10),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.30]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(11 15 23 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(11 15 23 / 0.05) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 90% 70% at 50% 0%, #000 35%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 70% at 50% 0%, #000 35%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-5 py-8 sm:px-8 lg:py-16 overflow-visible">
        <div className="relative z-10 max-w-full">
          <Reveal direction="up" delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700 shadow-brand-sm backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" aria-hidden="true" />
              Produk PT Entri Jaya Makmur
            </span>
          </Reveal>

          <Reveal direction="up" delay={80}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.06] tracking-[-0.03em] text-white [text-shadow:0_2px_14px_rgb(11_15_23/0.55)] sm:text-5xl lg:text-[3.5rem]">
              Pilihan Tepat
              <br />
              <span className="text-gradient-hero">Kualitas Terjaga</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={160}>
            <p className="mt-6 text-base leading-relaxed text-white/90 [text-shadow:0_2px_12px_rgb(11_15_23/0.55)] sm:text-lg max-w-2xl" style={{ 
              paintOrder: "stroke fill",
              textAlign: "justify"
            }}>
              ENTRI Alkohol hadir dalam konsentrasi 70% dan 96% untuk sanitasi, sterilisasi alat, hingga kebutuhan teknis. Dengan pilihan kemasan dari 1 hingga 200 Liter.
            </p>
          </Reveal>

          <Reveal direction="up" delay={240}>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="#tentang"
                className="ripple-host inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-md active:scale-95"
              >
                Tentang Kami
              </a>
              <a
                href="#keunggulan"
                className="ripple-host inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-500 bg-transparent px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-500 active:scale-95"
              >
                Kenapa ENTRI?
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" delay={320}>
            <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 max-w-full justify-center">
              {STATS.map((stat, index) => (
                <li
                  key={stat.label}
                  className={`text-center ${index === 2 ? 'col-span-2' : ''}`}
                >
                  <span className="block font-display text-2xl font-extrabold leading-none tracking-tight text-white [text-shadow:0_2px_10px_rgb(11_15_23/0.5)] sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60 sm:mt-3 sm:text-xs">
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeroDesktop() {
  return (
    <section
      id="top"
      className="relative w-screen overflow-hidden bg-wool-50 min-h-screen flex items-center hidden md:flex"
      aria-label="ENTRI Alkohol — perkenalan produk"
    >
      {/* Background image + aurora + grid backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/yy5fen2q/image/upload/v1790581452/tampilan_r00o1x.png')",
            backgroundPosition: "100% 30px"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wool-50/25 via-transparent to-transparent" />
        <div className="mesh-blob -left-40 top-0 h-[460px] w-[460px] bg-brand-300/15" style={{ clipPath: "inset(0)" }} />
        <div
          className="mesh-blob -right-32 -top-24 h-[520px] w-[520px] bg-brand-400/10"
          style={{ animationDelay: "-5s", clipPath: "inset(0)" }}
        />
        <div
          className="mesh-blob bottom-[-35%] left-1/4 h-[420px] w-[420px] bg-ink-300/15"
          style={{ animationDelay: "-9s", clipPath: "inset(0)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_78%_20%,rgb(244_81_30/0.10),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.30]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(11 15 23 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(11 15 23 / 0.05) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 90% 70% at 50% 0%, #000 35%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 70% at 50% 0%, #000 35%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-5 py-8 sm:px-8 lg:py-16 overflow-visible">
        <div className="relative z-10 max-w-full sm:max-w-2xl">
          <Reveal direction="up" delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700 shadow-brand-sm backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" aria-hidden="true" />
              Produk PT Entri Jaya Makmur
            </span>
          </Reveal>

          <Reveal direction="up" delay={80}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.06] tracking-[-0.03em] text-ink-950 sm:text-5xl lg:text-[3.5rem]">
              Pilihan Tepat
              <br />
              <span className="text-gradient">Kualitas Terjaga</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={160}>
            <p className="mt-6 text-base leading-relaxed text-ink-800 sm:text-lg max-w-2xl" style={{ 
              paintOrder: "stroke fill",
              textAlign: "justify"
            }}>
              ENTRI Alkohol hadir dalam konsentrasi 70% dan <br /> 96% untuk sanitasi, sterilisasi alat, hingga kebutuhan <br /> teknis. Dengan pilihan kemasan dari 1 hingga 200 Liter.
            </p>
          </Reveal>

          <Reveal direction="up" delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#tentang"
                className="ripple-host inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-md active:scale-95"
              >
                Tentang Kami
              </a>
              <a
                href="#keunggulan"
                className="ripple-host inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-500 bg-transparent px-7 py-3.5 text-base font-semibold text-brand-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-500/10 active:scale-95"
              >
                Kenapa ENTRI?
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" delay={320}>
            <ul className="mt-10 flex justify-between max-w-md">
              {STATS.map((stat) => (
                <li
                  key={stat.label}
                  className="text-left"
                >
                  <span className="block font-display text-2xl font-extrabold leading-none tracking-tight text-ink-900 sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500 sm:mt-3 sm:text-xs">
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <>
      <HeroMobile />
      <HeroDesktop />
    </>
  );
}
