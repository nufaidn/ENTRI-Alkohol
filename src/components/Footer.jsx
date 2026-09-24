import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER_DISPLAY, waLink } from "../constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-800/10 bg-white" aria-label="Footer">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/img/alkohol/logo.png"
                alt="Logo ENTRI"
                loading="lazy"
                decoding="async"
                className="h-8 w-auto object-contain"
                width="600"
                height="156"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              PT Entri Jaya Makmur — Produk ENTRI Alkohol untuk kebutuhan sanitasi,
              sterilisasi alat, cleaning area produksi, dan kebutuhan profesional.
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-ink-900">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
              Produk
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { label: "ENTRI Alkohol 70%", href: "#produk" },
                { label: "ENTRI Alkohol 96%", href: "#produk" },
                { label: "Kemasan 1L · 5L · 20L · 200L", href: "#produk" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-ink-600 transition-colors hover:text-brand-600"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3 w-3 text-brand-500/70 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.2 14.8 12.6 10 7.2 5.2a.72.72 0 1 1 .95-1.09l5.9 5.15a.75.75 0 0 1 0 1.08l-5.9 5.15a.72.72 0 1 1-.95-1.1Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-ink-900">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
              Kontak
            </h3>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="ripple-host mt-4 inline-flex items-center gap-3 rounded-full border border-ink-200/70 bg-white px-5 py-3 text-sm font-semibold text-ink-800 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-600 hover:shadow-brand-sm active:scale-95"
            >
              <FaWhatsapp className="text-xl text-brand-600" aria-hidden="true" />
              WhatsApp: {WHATSAPP_NUMBER_DISPLAY}
            </a>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" aria-hidden="true" />
        <div className="flex flex-col items-center justify-between gap-3 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {year} PT Entri Jaya Makmur. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-xs text-ink-400">
            ENTRI Alkohol — <span className="text-brand-600">Alkohol 70% & 96%</span>
          </p>
        </div>
      </div>
    </footer>
  );
}