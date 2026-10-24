export type StackItem = {
  name: string;
  note?: string;
  usedIn?: string[];
};

export type StackGroup = {
  label: string;
  items: StackItem[];
};

/**
 * Fill this with the owner's real stack. Empty groups render as an honest
 * "AWAITING INPUT" state, never as invented skills or proficiency scores.
 */
export const operatorStack: StackGroup[] = [];

export const stackCategories = ["Languages", "Frameworks", "Tools", "Design"];

export const siteBuild = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Sharp",
  "FFmpeg",
];

export const workbench = {
  note: "Meja tempat arsip ini dirawat.",
  caseImage: {
    src: "/images/workbench-keyboard-01.webp",
    width: 2000,
    height: 1500,
    alt: "Keyboard mekanik di dalam case abu-abu, dengan kabel dan alat di atas meja kayu.",
  },
  keysImage: {
    src: "/images/workbench-keyboard-02.webp",
    width: 1600,
    height: 2133,
    alt: "Close-up keyboard mekanik dengan keycaps gelap dan krem, serta layar kecil yang menyala.",
  },
  video: {
    src: "/media/workbench-loop.mp4",
    poster: "/media/workbench-poster.webp",
    width: 1280,
    height: 720,
    alt: "Rekaman meja kerja hitam-putih.",
  },
};
