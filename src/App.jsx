import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Concentration from "./components/Concentration";
import UseCases from "./components/UseCases";
import Packaging from "./components/Packaging";
import Why from "./components/Why";
import Company from "./components/Company";
import FAQ from "./components/FAQ";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import useRipple from "./hooks/useRipple";
import { PRODUCTS, slugify } from "./products";

const getProductFromHash = () => {
  const match = window.location.hash.match(/^#\/produk\/(.+)$/);
  if (!match) return null;
  return (
    PRODUCTS.find((p) => slugify(p.id) === decodeURIComponent(match[1])) || null
  );
};

export default function App() {
  useRipple();
  const [product, setProduct] = useState(getProductFromHash);

  useEffect(() => {
    const onHash = () => {
      const p = getProductFromHash();
      setProduct(p);
      if (p) window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <>
      <ScrollProgress />
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="konten">
        {product ? (
          <ProductDetail product={product} />
        ) : (
          <>
            <Hero />
            <Concentration />
            <UseCases />
            <Why />
            <Company />
            <FAQ />
          </>
        )}
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}