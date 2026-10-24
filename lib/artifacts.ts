export type Artifact = {
  id: string;
  title: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  note: string;
  meta: string;
  fullWidth?: boolean;
};

export const artifacts: Artifact[] = [
  {
    id: "ART.001",
    title: "BELONG",
    image: "/images/artifact-belong.webp",
    width: 2000,
    height: 1128,
    alt: "Hutan gelap dengan teks di tengah gambar: 'If this is where I began, why does it feel so strange?'",
    note: "Personal artwork. Teks di dalam gambar adalah bagian dari karya.",
    meta: "PERSONAL ARTWORK / [YEAR PENDING]",
    fullWidth: true,
  },
  {
    id: "ART.002",
    title: "BURN",
    image: "/images/artifact-burn.webp",
    width: 2000,
    height: 1500,
    alt: "Api unggun besar di malam hari dengan siluet orang-orang dan kata BURN yang tembus pandang.",
    note: "Personal artwork. Warna asli dipertahankan.",
    meta: "PERSONAL ARTWORK / [YEAR PENDING]",
  },
  {
    id: "ART.003",
    title: "LUSH",
    image: "/images/artifact-lush.webp",
    width: 2000,
    height: 1500,
    alt: "Lanskap hutan hijau terang dengan kata LUSH yang tembus pandang.",
    note: "Personal artwork. Warna asli dipertahankan.",
    meta: "PERSONAL ARTWORK / [YEAR PENDING]",
  },
];
