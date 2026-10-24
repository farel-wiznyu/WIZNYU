export const rei = {
  label: "FILE 00R",
  name: "REI AYANAMI",
  kicker: "PERSONAL MIRROR",
  manifest: "NOT A CLIENT. NOT A WORK. A MIRROR.",
  note: "Rei bukan sekadar waifu. Dia adalah manifestasi dari bagian diriku yang tenang, tertutup, dan sulit dijelaskan dengan kata-kata. Kalau kamu membuka file ini, kamu sedang melihat salah satu cermin yang aku pilih untuk simpan.",
  portrait: {
    src: "/images/rei-portrait.webp",
    width: 596,
    height: 843,
    alt: "Ilustrasi hitam-putih Rei Ayanami dengan seragam sekolah.",
  },
  icon: {
    src: "/images/rei-icon.webp",
    width: 160,
    height: 160,
    alt: "Ikon hitam-putih Rei Ayanami.",
  },
  clip: {
    src: "/media/rei-signal.mp4",
    poster: "/media/rei-poster.webp",
    width: 498,
    height: 370,
    alt: "Klip pendek hitam-putih Rei Ayanami yang tersenyum dan bertepuk tangan.",
  },
};

export type Origin = {
  label: string;
  status: "REDACTED" | "MASKED";
  title: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  quote: string;
  meta: string;
};

export const origins: Origin[] = [
  {
    label: "ORIGIN / 000",
    status: "REDACTED",
    title: "Masa kecil",
    image: "/images/origin-000-redacted.webp",
    width: 1200,
    height: 1600,
    alt: "Foto masa kecil hitam-putih; kedua mata ditutup bar hitam bertanda REDACTED.",
    quote:
      "Ini bukan aku yang sekarang. Hanya pengingat bahwa aku pernah menjadi seperti ini. Waktu tidak menghapus; hanya menyimpan.",
    meta: "SUBJECT: WIZNYU / STATUS: ARCHIVED",
  },
  {
    label: "ORIGIN / 001",
    status: "MASKED",
    title: "SMP",
    image: "/images/origin-001-masked.webp",
    width: 1280,
    height: 1280,
    alt: "Foto siswa SMP berseragam memakai balaclava hitam bernomor 4; seluruh foto hitam-putih.",
    quote: "Wajahku sudah ditutup. Tetap aku simpan.",
    meta: "SMP / MASKED / ARCHIVED",
  },
];
