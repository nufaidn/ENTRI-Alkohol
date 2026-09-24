import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const FAQS = [
  {
    q: "Apa saja konsentrasi ENTRI Alkohol?",
    a: "ENTRI Alkohol tersedia dalam dua konsentrasi: 70% dan 96%. Pilih sesuai kebutuhan penggunaan Anda.",
  },
  {
    q: "Berapa pilihan kemasan yang tersedia?",
    a: "ENTRI melayani kebutuhan dari volume kecil hingga operasional berskala besar — mulai dari 1 Liter, 5 Liter, 20 Liter, hingga 200 Liter.",
  },
  {
    q: "Untuk kebutuhan apa ENTRI Alkohol digunakan?",
    a: "ENTRI Alkohol digunakan untuk kebutuhan sanitasi, sterilisasi alat, cleaning area produksi, serta kebutuhan teknis dan operasional tertentu.",
  },
  {
    q: "Bagaimana cara memesan atau bertanya produk?",
    a: "Silakan hubungi tim ENTRI pada bagian Kontak. Kami siap membantu informasi produk dan pilihan kemasan yang sesuai kebutuhan Anda.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-28" aria-label="Pertanyaan umum">
      <div className="mx-auto w-full max-w-[1000px] px-5 sm:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Pertanyaan yang{" "}
              <span className="text-gradient">Sering Diajukan</span>
            </>
          }
          description="Temukan jawaban atas pertanyaan seputar produk ENTRI Alkohol."
        />

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 80}>
                <div
                  className={`glow-ring overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "is-active border-brand-200 bg-brand-50/40 shadow-brand-sm"
                      : "border-ink-200/70 bg-white hover:border-brand-200 hover:bg-wool-50"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
                  >
                    <span className="font-display text-base font-bold text-ink-900 sm:text-lg">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-brand-500 bg-brand-500 text-white"
                          : "border-ink-200 text-ink-500"
                      }`}
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 text-sm leading-relaxed text-ink-600 sm:px-7 sm:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}