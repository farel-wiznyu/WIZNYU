const rawSiteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").trim() ||
  "http://localhost:3000";
const siteUrl = (
  rawSiteUrl.startsWith("http") ? rawSiteUrl : `https://${rawSiteUrl}`
).replace(/\/+$/, "");

/**
 * Content source for the archive. Copy below is a draft for the owner to
 * revise; identity facts, links, and project data must not be invented.
 */
export const site = {
  alias: "WIZNYU",
  role: "Creative Technologist",
  archive: "001",
  year: "2026",
  title: "WIZNYU — Personal Archive 001",
  description:
    "Arsip personal WIZNYU: interface, eksperimen, dan hal-hal yang belum selesai.",
  positioning:
    "Arsip personal tentang interface, eksperimen, dan hal-hal yang belum selesai.",
  statement: [
    "Aku tertarik pada cara sebuah sistem menyimpan jejak: error, versi lama, dan hal-hal yang tidak sempat dibereskan.",
    "Arsip ini bukan tentang kesempurnaan. Ini tentang apa yang tetap tinggal.",
  ],
  about: [
    "Aku seorang Creative Technologist. Arsip ini menyimpan interface, eksperimen, dan hal-hal yang belum selesai—bukan daftar klien atau penghargaan.",
    "Aku lebih tertarik pada proses daripada hasil yang rapi. Sebagian besar isi arsip ini adalah versi yang belum selesai, dan itu memang disengaja.",
  ],
  contactIntro:
    "Kalau kamu ingin bicara soal kerja, ide, atau hal yang belum selesai, kirim sinyal.",
  contactPending:
    "Email dan tautan sosial belum dibuka di arsip ini. Aku tidak mau menaruh alamat palsu.",
  privacy: "Tidak ada pelacak. Tidak ada cookie. Tidak ada audio.",
  thirdPartyNote:
    "Rei Ayanami adalah karakter pihak ketiga. File 00R dipakai sebagai artefak personal, bukan branding.",
  siteUrl,
  // TODO: replace with the owner's real address before launch.
  email: null as string | null,
  // TODO: add real profile URLs before launch.
  socials: [] as { label: string; href: string; handle?: string }[],
  chapters: [
    { id: "works", label: "Works", number: "02" },
    { id: "manifest", label: "Manifest", number: "03" },
    { id: "about", label: "About", number: "04" },
    { id: "personal", label: "Personal", number: "04B" },
    { id: "signal", label: "Signal", number: "05" },
  ],
} as const;
