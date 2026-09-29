export const WHATSAPP_NUMBER_DISPLAY = "085174394123";

export const WA_BASE = "https://wa.me/6285174394123";

const DEFAULT_MESSAGE =
  "Halo ENTRI, saya ingin bertanya tentang produk ENTRI Alkohol (70% / 96%) dan ketersediaan kemasannya.";

const encode = (text) => encodeURIComponent(text);

export const waLink = (message = DEFAULT_MESSAGE) =>
  `${WA_BASE}?text=${encode(message)}`;

const CLOUDINARY_BREAKPOINTS = [640, 960, 1280];

/** Appends Cloudinary delivery transforms so we never ship the 2MB original. */
export const cloudinary = (url, width) => {
  const transform = `f_auto,q_auto:eco,c_limit,w_${width}`;
  return url.replace("/upload/", `/upload/${transform}/`);
};

export const cloudinarySrcSet = (url) =>
  CLOUDINARY_BREAKPOINTS.map(
    (w) => `${cloudinary(url, w)} ${w}w`
  ).join(", ");

export const NAV_LINKS = [
  { label: "Beranda", href: "#top" },
  { label: "Produk", href: "#produk" },
  { label: "Kegunaan", href: "#kegunaan" },
  { label: "Tentang", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
];