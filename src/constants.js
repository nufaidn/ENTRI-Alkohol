export const WHATSAPP_NUMBER_DISPLAY = "085174394123";

export const WA_BASE = "https://wa.me/6285174394123";

const DEFAULT_MESSAGE =
  "Halo ENTRI, saya ingin bertanya tentang produk ENTRI Alkohol (70% / 96%) dan ketersediaan kemasannya.";

const encode = (text) => encodeURIComponent(text);

export const waLink = (message = DEFAULT_MESSAGE) =>
  `${WA_BASE}?text=${encode(message)}`;

export const NAV_LINKS = [
  { label: "Produk", href: "#produk" },
  { label: "Kegunaan", href: "#kegunaan" },
  { label: "Tentang", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
];