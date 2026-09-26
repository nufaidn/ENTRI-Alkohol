import { FaArrowDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="top"
      className="relative w-screen overflow-hidden bg-wool-50 min-h-screen flex items-center"
      aria-label="ENTRI Alkohol — perkenalan produk"
    >
      {/* Background image + aurora + grid backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/yy5fen2q/image/upload/v1790396723/bgimageherosection_vx2gme.jpg')",
            backgroundPosition: isMobile ? "50% center" : "35% center"
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

      <div className="relative mx-auto w-full max-w-[1200px] px-5 py-8 sm:px-8 lg:py-16 sm:overflow-visible overflow-visible">
        {/* Left: copy */}
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
              textShadow: "0 0 8px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(11, 15, 23, 0.3)",
              paintOrder: "stroke fill",
              textAlign: "justify"
            }}>
              <span className="sm:hidden block">ENTRI Alkohol hadir dalam konsentrasi 70% dan 96% untuk sanitasi, sterilisasi alat, hingga kebutuhan teknis. Dengan pilihan kemasan dari 1 hingga 200 Liter.</span>
              <span className="hidden sm:inline">ENTRI Alkohol hadir dalam konsentrasi 70% dan <br /> 96% untuk sanitasi, sterilisasi alat, hingga kebutuhan <br /> teknis. Dengan pilihan kemasan dari 1 hingga 200 Liter.</span>
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}