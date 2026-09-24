export const slugify = (id) => id.toLowerCase().replace(/\s+/g, "-");

export const PRODUCTS = [
  {
    id: "1 L",
    name: "ENTRI Alkohol 1 Liter",
    image: "https://res.cloudinary.com/yy5fen2q/image/upload/v1790150025/ENTRIALKOHOL1L-removebg-preview_l0yzxf.png",
    alt: "ENTRI Alkohol 70% kemasan 1 Liter",
    tagline: "Kemasan praktis untuk kebutuhan harian",
    description:
      "Botol 1 Liter cocok untuk kebutuhan sanitasi dan cleaning pada lingkungan kerja sesuai prosedur penggunaan yang tepat.",
    use: [
      "Sanitasi lingkungan kerja",
      "Kebutuhan cleaning harian",
      "Penggunaan praktis",
    ],
  },
  {
    id: "5 L",
    name: "ENTRI Alkohol 5 Liter",
    image: "/img/alkohol/5l.webp",
    alt: "ENTRI Alkohol 96% kemasan 5 Liter",
    tagline: "Ukuran menengah yang serbaguna",
    description:
      "Jerigen 5 Liter memberikan konsentrasi lebih tinggi — pilihan yang sesuai untuk kebutuhan teknis dan operasional tertentu.",
    use: [
      "Kebutuhan teknis profesional",
      "Sterilisasi alat sesuai prosedur",
      "Operasional berskala lebih besar",
    ],
  },
  {
    id: "20 L",
    name: "ENTRI Alkohol 20 Liter",
    image: "https://res.cloudinary.com/yy5fen2q/image/upload/v1790150025/ENTRIALKOHOL20L-removebg-preview_llyrqi.png",
    alt: "ENTRI Alkohol 70% kemasan 20 Liter",
    tagline: "Volume besar untuk operasional usaha",
    description:
      "Jerigen 20 Liter menjadi pilihan ekonomis untuk kebutuhan rutin usaha kecil dan menengah yang membutuhkan pasokan lebih.",
    use: [
      "Kebutuhan operasional usaha",
      "Pasokan rutin berkala",
      "Lebih hemat per volume",
    ],
  },
  {
    id: "200 L",
    name: "ENTRI Alkohol 200 Liter",
    image: "https://res.cloudinary.com/yy5fen2q/image/upload/v1790150025/ENTRIALKOHOL200L-removebg-preview_rgzkq6.png",
    alt: "ENTRI Alkohol 96% kemasan 200 Liter",
    tagline: "Skala besar untuk kebutuhan industri",
    description:
      "Drum 200 Liter ditujukan untuk kebutuhan industri berskala besar yang membutuhkan pasokan dalam jumlah banyak dan berkelanjutan.",
    use: [
      "Kebutuhan industri berskala besar",
      "Suplai berkelanjutan",
      "Efisiensi biaya terbaik",
    ],
  },
];