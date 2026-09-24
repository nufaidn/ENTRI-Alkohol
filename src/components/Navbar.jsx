import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Marquee from "./Marquee";
import { NAV_LINKS, waLink } from "../constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);

      if (y > lastY.current + 4 && y > 120) setHidden(true);
      else if (y < lastY.current - 4 || y <= 8) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["top", "produk", "kegunaan", "keunggulan", "tentang", "faq"];
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = null;
        let maxVisibility = 0;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ratio = entry.intersectionRatio;
            if (ratio > maxVisibility) {
              maxVisibility = ratio;
              mostVisible = entry.target.id;
            }
          }
        });
        
        if (mostVisible) setActive(mostVisible);
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Marquee />
      <div className="px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          className={`mx-auto flex h-[68px] w-full max-w-[1200px] items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:px-6 ${
            scrolled
              ? "glass border-white/70 shadow-lift"
              : "border-white/60 bg-white/55 shadow-soft backdrop-blur-md"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2.5" aria-label="ENTRI — kembali ke atas">
            <img
              src="/img/alkohol/logo.png"
              alt="Logo ENTRI"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-9"
              width="600"
              height="156"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-700 hover:bg-wool-100 hover:text-brand-600"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="ripple-host inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-md active:scale-95"
            >
              <FaWhatsapp className="text-base" aria-hidden="true" />
              Hubungi Kami
            </a>
          </div>

          {/* Mobile toggles */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-glow active:scale-95"
              aria-label="Hubungi ENTRI via WhatsApp"
            >
              <FaWhatsapp className="text-lg" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg border border-ink-200 bg-white text-ink-800 transition-colors hover:border-brand-300 hover:text-brand-600"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            >
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[-1] bg-ink-950/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed bottom-0 right-0 top-0 z-40 w-[300px] max-w-[85vw] transform bg-white/95 shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-6">
          <div className="mb-8 flex items-center justify-between">
            <img
              src="/img/alkohol/logo.png"
              alt="Logo ENTRI"
              className="h-7 w-auto object-contain"
              width="600"
              height="156"
            />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-brand-300 hover:text-brand-600"
              aria-label="Tutup menu"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-1" aria-label="Navigasi mobile">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-ink-800 transition-all duration-300 hover:bg-brand-50 hover:text-brand-600"
                style={{ transitionDelay: `${isOpen ? i * 40 : 0}ms`, opacity: isOpen ? 1 : 0, transform: isOpen ? "translateX(0)" : "translateX(16px)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-4 pt-8">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="ripple-host flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-3.5 text-base font-semibold text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              <FaWhatsapp className="text-lg" aria-hidden="true" />
              Hubungi Kami
            </a>
            <p className="text-center text-xs text-ink-500">
              WhatsApp: 085174394123
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}