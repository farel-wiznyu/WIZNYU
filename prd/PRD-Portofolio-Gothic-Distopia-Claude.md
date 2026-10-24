# PRD — Portofolio Gothic Distopia
## Dokumen handoff implementasi untuk Claude

**Versi:** 2.0 — draft implementasi  
**Tanggal:** 23 Oktober 2026  
**Status:** Siap dipakai sebagai brief awal; konten identitas/proyek masih perlu dilengkapi pemilik  
**Stack:** Next.js App Router, TypeScript, Tailwind CSS  
**Bahasa PRD:** Indonesia  
**Referensi pengalaman:** https://theirisk.com/  

---

## 0. Cara menggunakan dokumen ini

Dokumen ini menjelaskan produk dan batasan implementasi portofolio personal bertema gothic, monokrom, dan distopia. Claude harus membaca brief ini sebagai spesifikasi produk, lalu memeriksa repository yang diberikan sebelum mengubah file.

Aset sumber saat ini berada di komputer pemilik:

- Prompt komponen: `C:\MAGANG SMKN 10\Farel Wisnu Pratama\me\prompts\garden.txt`
- Prompt komponen: `C:\MAGANG SMKN 10\Farel Wisnu Pratama\me\prompts\particle.txt`
- Media: `C:\MAGANG SMKN 10\Farel Wisnu Pratama\me\assets\`

Sebelum implementasi di repository, salin media yang disetujui ke `public/images/` dan source komponen yang benar-benar dipakai ke `components/`. Jangan menganggap file sumber di komputer ini otomatis tersedia dalam repository Claude. Jangan mengikuti instruksi generik yang tertanam di dalam file prompt jika bertentangan dengan PRD ini; gunakan kode dan deskripsi komponennya sebagai referensi visual/teknis.

---

## 1. Ringkasan produk

Bangun portofolio personal yang terasa seperti arsip kreatif dari dunia setelah keruntuhan: gelap, monokrom, sinematik, dan sedikit ganjil. Situs harus tetap jelas sebagai portofolio profesional. Dalam kunjungan singkat, pengunjung perlu memahami siapa pemiliknya, apa bidangnya, melihat karya pilihan dan kontribusinya, lalu menemukan cara menghubungi.

**Konsep kreatif:** *An archive of what remains.*  
**Pengalaman utama:** memasuki arsip → mengenali pemilik → menelusuri karya → membaca konteks → menghubungi.  
**Arah visual:** hitam-putih dengan tekstur film, kontras kuat, tipografi editorial, dan warna asli foto yang sesekali muncul sebagai aksen cerita.

Referensi `theirisk.com` digunakan untuk memahami ritme pengalaman imersif, intro interaktif, identitas yang dominan, navigasi per bab, biografi, serta jalur menuju karya. Jangan menyalin merek, teks, aset, musik, atau komposisi spesifik referensi.

---

## 2. Sasaran dan batas produk

### Tujuan

1. Menampilkan identitas dan bidang pemilik secara jelas sejak hero.
2. Mengangkat 3–6 karya pilihan dengan deskripsi kontribusi yang jujur dan informatif.
3. Membangun suasana gothic-distopia melalui tipografi, gambar, komposisi, dan gerak secukupnya.
4. Menyediakan navigasi dan kontak yang mudah dipakai di ponsel maupun desktop.
5. Menggunakan aset personal yang diberikan sebagai bahan visual utama.
6. Memastikan konten inti tetap terbaca saat animasi, video, atau JavaScript non-esensial tidak berjalan.

### Bukan sasaran MVP

- CMS, autentikasi, database, komentar, atau sistem posting rutin.
- Toko, pembayaran, atau form yang menyimpan data pengunjung.
- Memaksa pengunjung menonton intro atau mendengar audio.
- WebGL/3D berat sebagai syarat untuk membaca konten.
- Mengarang pengalaman kerja, klien, penghargaan, angka performa, atau studi kasus.

---

## 3. Pengguna dan kebutuhan

### Audiens

- Recruiter, calon klien, dan pemberi kerja yang ingin memeriksa kemampuan dengan cepat.
- Kreator/kolaborator yang tertarik pada selera visual dan cara berpikir pemilik.
- Pengunjung umum yang ingin menjelajahi karya dan personalitas pemilik.

### Kebutuhan yang harus dipenuhi

- Pengunjung bisa memahami bidang dan positioning dari hero.
- Pengunjung bisa menemukan proyek terbaik tanpa melewati intro panjang.
- Tiap proyek menunjukkan apa yang dibuat pemilik, bukan hanya gambar akhir.
- Tautan kontak dan karya eksternal mudah dikenali dan diakses.

**Jalur cepat recruiter:** hero → proyek pilihan → kontak. Jangan membuat jalur ini bergantung pada intro, audio, atau scroll-jacking.

---

## 4. Konten dan aset yang tersedia

Aset berikut telah diberikan. Peran di bawah merupakan usulan awal, bukan klaim fakta proyek. Pemilik perlu mengonfirmasi judul, konteks, dan kontribusinya.

| File | Observasi visual | Penempatan yang disarankan | Catatan implementasi |
|---|---|---|---|
| `glasses-cinematic-pic.png` | Close-up portrait hitam-putih dengan refleksi/latar sinematik | Hero utama atau About | Cocok sebagai gambar utama; siapkan focal point dan crop responsif. Alt text menjelaskan portrait jika informatif. |
| `helmet-icon.jpeg` | Portrait hitam-putih memakai helm dan kacamata | About, avatar kecil, atau panel identitas | Crop persegi; jangan diperkecil terlalu jauh sehingga wajah hilang. |
| `BELONG-pic.jpeg` | Hutan gelap dengan teks “If this is where I began, why does it feel so strange?” | Kartu/bab proyek “BELONG” | Gambar sudah memiliki teks; jangan menumpuk judul besar di area teks. Di mobile, pastikan crop masih menyisakan copy. |
| `BURN-pic.jpeg` | Api unggun merah-oranye, kata “BURN” transparan besar | Kartu/bab proyek “BURN” atau interlude warna | Pertahankan warna sebagai pengecualian yang disengaja. Jangan menerapkan grayscale otomatis. |
| `LUSH-pic.jpeg` | Lanskap hutan hijau terang dengan kata “LUSH” | Kartu/bab proyek “LUSH” atau “garden” | Menjadi kontras visual terhadap dunia monokrom. Overlay secukupnya agar judul bawaan tetap terbaca. |
| `starry-background.jpg` | Pola bintang monokrom bertitik pada bidang hitam | Tekstur kecil di intro/transition | Hindari jadi latar semua bagian. Kurangi opacity dan jangan tempatkan teks kecil di atas pola padat. |
| `winged-icon.jpg` | Ilustrasi sayap/figur monokrom berkontras tinggi | Ornamen satu kali pada footer/colophon | Pastikan tepi/crop rapi. Jangan menyebutnya logo sebelum pemilik mengonfirmasi. |
| `IMG_20261023_150445.jpg.jpeg` | Foto masa kecil hitam-putih | Bab arsip personal/About opsional | Gunakan hanya jika pemilik ingin foto ini tampil publik. Hindari menampilkan metadata/lokasi yang tidak perlu. |
| `rei-ayanami-icon.jpg` | Ilustrasi karakter anime monokrom | Easter egg personal opsional | Karakter pihak ketiga; bukan logo atau identitas profesional utama. Pertimbangkan hak penggunaan jika dipublikasikan. |
| `rei-ayanami-portrait.jpg` | Ilustrasi karakter anime hitam-putih | Referensi fandom opsional | Sama seperti di atas; jangan membuat klaim bahwa karya ini milik pemilik. |
| `rei-ayanami-clapping-gif.gif` | GIF anime berwarna | Easter egg kecil yang bisa dilewati | GIF bergerak; hormati reduced motion dengan mengganti ke poster statis atau tidak memutarnya. Jangan autoplay sebagai elemen besar. |

### Aturan konten dan hak aset

- Jangan ubah artwork yang sudah mengandung tulisan dengan menambahkan teks yang menutupi bagian penting.
- Jangan menyebut BELONG/BURN/LUSH sebagai proyek profesional atau klien sebelum pemilik mengonfirmasi konteks dan perannya.
- Aset Rei Ayanami adalah karakter/gambar pihak ketiga; jika situs dipakai secara publik/komersial, minta konfirmasi pemilik dan gunakan hanya sebagai referensi personal yang wajar atau ganti dengan simbol original.
- `winged-icon.jpg` juga perlu dikonfirmasi sumber dan izin penggunaannya.
- Jangan unggah foto masa kecil atau foto personal lain tanpa persetujuan eksplisit pemilik.

---

## 5. Arah seni dan sistem desain

### Palet awal

Gunakan CSS variables agar mudah disesuaikan:

- `--background`: `#090909` (arang hampir hitam)
- `--surface`: `#141414`
- `--surface-raised`: `#1D1D1D`
- `--text-primary`: `#ECE9E2` (putih tulang)
- `--text-secondary`: `#A6A39D`
- `--line`: `rgba(236, 233, 226, 0.22)`
- `--accent`: `#8C1D18` (merah gelap), hanya untuk penanda kecil/aksi

Foto `BURN` dan `LUSH` boleh membawa merah/hijau alaminya sebagai aksen yang berasal dari media, bukan warna UI tambahan. Default tampilan interface tetap monokrom.

### Tipografi

- Display: serif editorial berkontras tinggi untuk judul besar dan kutipan.
- UI/body: sans-serif yang jelas untuk paragraf, navigasi, metadata, dan tombol.
- Mono: opsional untuk nomor arsip, tahun, label teknis.
- Jangan memakai font dekoratif untuk paragraf panjang.
- Jika memakai font eksternal, gunakan mekanisme font Next.js dan fallback sistem.

### Tekstur dan layout

- Banyak ruang kosong dan komposisi asimetris yang terkontrol.
- Grain/noise sangat tipis; jangan membuat teks sulit dibaca.
- Garis, nomor arsip, label bab, dan koordinat dapat digunakan sebagai motif antarmuka.
- Hindari ornamen gothic generik di setiap section; gunakan motif sayap/bintang hanya sebagai aksen berulang yang konsisten.

---

## 6. Arsitektur informasi dan rute

### Rute MVP

- `/` — satu halaman utama dengan navigasi bab dan semua jalur utama.
- `/work/[slug]` — detail proyek tersendiri jika ada 3+ proyek yang memiliki studi kasus cukup lengkap. Jika konten belum cukup, gunakan detail expandable/panel pada halaman utama.
- `not-found` — halaman 404 dengan gaya arsip, tombol kembali ke halaman utama.

### Urutan homepage

1. **Intro / Threshold**
   - Latar gelap dengan tekstur bintang.
   - Judul/wordmark sementara dan tombol `ENTER ARCHIVE` (label akhir bisa Indonesia).
   - Kontrol `Skip intro` atau tombol masuk langsung selalu tersedia.
   - Tidak ada autoplay audio.
2. **Hero / Identity**
   - Nama (placeholder sampai dikonfirmasi), spesialisasi, positioning satu kalimat.
   - Potret cinematic sebagai anchor visual.
   - Petunjuk scroll dan tautan `Selected works`.
3. **Statement / Manifesto**
   - 1–3 kalimat tentang sudut pandang kreatif pemilik.
   - Jangan mengisi dengan copy final buatan tanpa konfirmasi; tandai placeholder.
4. **Selected Works**
   - 3–6 kartu karya berbasis data.
   - BELONG/BURN/LUSH masuk setelah konteks dan kontribusi dikonfirmasi.
   - Setiap kartu mengarah ke studi kasus atau tautan hasil.
5. **About / Archive note**
   - Bio singkat, bidang, cara kerja, pendidikan/pengalaman jika diberikan.
   - Portrait helm atau foto masa kecil hanya jika disetujui.
6. **Contact / Signal**
   - Email, LinkedIn/GitHub/Behance/platform relevan yang disediakan pemilik.
   - CTA singkat dan jelas.
7. **Footer / Colophon**
   - Kredit aset, tahun, tautan sosial, kontrol sound jika fitur itu ada, kembali ke atas.

---

## 7. Perilaku dan fitur

### P0 — MVP wajib

- Intro dapat dilewati dengan tombol dan keyboard (`Enter`, `Space`, `Escape` bila masuk akal).
- Klik `Enter` atau skip membawa pengguna ke hero; isi homepage tidak terkunci selama intro.
- Navigasi bab menggunakan anchor/scroll biasa dan tidak mengunci scroll.
- Indikator bab aktif boleh muncul pada desktop; pada mobile gunakan menu ringkas yang tidak menutupi konten.
- Kartu proyek memiliki judul, kategori/tahun bila diketahui, peran pemilik, deskripsi singkat, media, dan CTA.
- Email memakai `mailto:`; tautan eksternal punya label/deskripsi yang jelas.
- Layout responsif dan gambar memiliki behavior crop yang dapat dikontrol per breakpoint.
- Semua teks dan aksi inti tetap tersedia jika media animasi gagal dimuat.

### P1 — tambahan yang diizinkan setelah P0 stabil

- Intro partikel yang terinspirasi `particle.txt`.
- Background ASCII garden/video dari `garden.txt`.
- Transisi halus antarsection.
- Toggle bahasa.
- Detail proyek pada rute tersendiri.

### P2 — jangan dibuat tanpa kebutuhan dan persetujuan

- WebGL/3D, CMS, analytics, form backend, audio ambience, atau animasi pointer kompleks.

---

## 8. Pedoman integrasi `garden.txt`

File tersebut mendeskripsikan komponen `AsciiArt` yang membungkus video looping dan poster dari URL eksternal. Integrasi yang disarankan:

- Gunakan hanya di satu area yang relevan, misalnya bab “LUSH / garden” atau transisi pendek.
- Komponen menerima `className` dan ditempatkan dalam wrapper `relative overflow-hidden` dengan tinggi yang pasti.
- Video dekoratif harus `muted`, `playsInline`, loop, tidak menangkap klik, dan diberi `aria-hidden="true"` bila tidak menyampaikan informasi.
- Terapkan overlay gelap/gradient agar teks kontras.
- Jangan menjadikan video sebagai satu-satunya representasi proyek; tetap tampilkan gambar/poster statis.
- Hormati `prefers-reduced-motion` dan data saver bila bisa dideteksi: tampilkan poster saja.
- Prioritaskan aset lokal atau URL yang dikonfirmasi stabil dan memiliki izin. Jangan mengandalkan URL eksternal dari prompt tanpa memastikan akses dan kebijakan penggunaannya.
- Jika video tidak tersedia, UI tidak boleh kosong atau rusak.

---

## 9. Pedoman integrasi `particle.txt`

File tersebut berisi preloader/stage canvas yang sangat detail: partikel bintang, orbit, hujan, awan, panggung, wordmark, serta fase loading/morph/reveal. Pakai sebagai referensi suasana dan interaksi, bukan sebagai kewajiban untuk menahan pengunjung.

### Cara adaptasi

- Tempatkan sebagai intro/threshold, bukan progress loader sungguhan. Hindari progress 0–100 simulasi yang membuat pengguna menunggu tanpa kebutuhan nyata.
- Batasi durasi intro otomatis sekitar 1.5–3 detik, atau izinkan skip langsung. Durasi final disesuaikan setelah dicoba pada perangkat nyata.
- Pastikan aksi skip terlihat, fokus keyboard masuk akal, dan `onComplete` hanya membuka/menggeser ke homepage.
- Matikan canvas/animasi intensif pada `prefers-reduced-motion`, tab tidak aktif, atau perangkat berkemampuan rendah bila memungkinkan.
- Gunakan density rendah pada ponsel; jangan menghabiskan CPU/GPU terus-menerus setelah intro selesai.
- Jangan biarkan canvas mengambil pointer/keyboard yang dibutuhkan tombol.
- Kurangi fitur yang tidak diperlukan (misalnya hujan, planet, parallax pointer) sebelum menambah optimasi kompleks.
- Sediakan fallback statis dari `starry-background.jpg` atau warna dasar bila canvas gagal.
- Pisahkan komponen client intro dari halaman konten server agar client JavaScript tidak membengkak di seluruh halaman.

### Kriteria integrasi

- Konten homepage tetap di DOM dan bisa dicapai ketika intro tidak dimainkan.
- Dengan reduced motion aktif, intro langsung menampilkan keadaan statis/skip.
- Sesudah intro selesai, animasi berhenti dan tidak terus memakai requestAnimationFrame.
- Tidak ada progress palsu yang menunda akses ke proyek.

---

## 10. Spesifikasi komponen dan data

### Struktur direktori yang disarankan

```text
app/
  layout.tsx
  page.tsx
  work/[slug]/page.tsx        # opsional jika studi kasus cukup
  globals.css
components/
  intro/ArchiveIntro.tsx
  navigation/ChapterNav.tsx
  sections/HeroSection.tsx
  sections/StatementSection.tsx
  work/ProjectGrid.tsx
  work/ProjectCard.tsx
  sections/AboutSection.tsx
  sections/ContactSection.tsx
  sections/Colophon.tsx
  visual/AsciiGarden.tsx      # opsional
  visual/ParticleIntro.tsx    # adaptasi dari particle.txt, opsional
lib/
  projects.ts
public/
  images/
```

Claude harus mengikuti konvensi repository yang sudah ada jika berbeda. Jangan membuat folder shadcn atau menambah dependensi hanya karena prompt eksternal menyebutnya. Tambahkan library hanya bila codebase dan kebutuhan fitur benar-benar membutuhkannya.

### Model data proyek

```ts
type Project = {
  slug: string
  title: string
  year?: string
  category?: string
  summary: string
  role?: string
  contribution?: string[]
  process?: string
  outcome?: string
  tools?: string[]
  cover: string
  coverAlt: string
  href?: string
  featured: boolean
}
```

Data yang tidak diketahui harus dibiarkan kosong/placeholder editorial yang jelas, bukan diisi dengan hasil karangan.

### Sistem gambar

- Simpan media yang dipakai pada `public/images/` dengan nama file sederhana dan konsisten; jangan mengubah file sumber di tempat.
- Gunakan `next/image` untuk raster image bila sesuai; tetapkan `sizes`, rasio, dan `object-position` responsif.
- Above-the-fold portrait boleh diprioritaskan; gambar di bawah lipatan lazy-load.
- Siapkan crop khusus untuk desktop/mobile jika focal point berubah.
- Jangan memproses ulang warna artwork kecuali pemilik meminta. Khusus BURN/LUSH, pertahankan warna asli.
- Bila file terlalu besar, buat salinan teroptimasi sebagai aset turunan dan pertahankan sumber asli.

---

## 11. Responsif dan interaksi

### Desktop

- Hero editorial dua kolom atau gambar memenuhi sisi kanan dengan teks yang bertumpuk di kiri.
- Navigasi bab tipis/terapung dapat digunakan selama tidak menutupi karya.
- Kartu proyek bisa memakai komposisi asimetris dengan ukuran gambar bervariasi.

### Mobile

- Intro harus langsung punya tombol lewati yang mudah disentuh.
- Hero menumpuk menjadi portrait lalu identitas, atau sebaliknya sesuai keterbacaan crop.
- Navigasi gunakan menu sederhana atau anchor; hindari tiny controls.
- Kartu proyek satu kolom; gambar menggunakan rasio yang menjaga teks baked-in.
- Hapus efek parallax dan kurangi density partikel/video bila berdampak ke baterai/performa.

### Interaksi

- Semua tombol/link memiliki hover, focus-visible, active, dan disabled state bila relevan.
- Jangan mengandalkan hover untuk mengungkap informasi penting.
- Hindari pointer custom yang menghilangkan cursor normal.
- Scroll navigation harus menjaga URL hash dan dapat digunakan browser back bila implementasi router mendukung.

---

## 12. Aksesibilitas, performa, SEO, privasi

### Aksesibilitas

- Targetkan WCAG 2.2 AA untuk kontras, fokus, heading, alt text, kontrol, dan navigasi keyboard.
- Gunakan semantic HTML (`header`, `nav`, `main`, `section`, `footer`) dan satu `h1` utama.
- Hormati `prefers-reduced-motion`; sediakan fallback untuk video dan GIF.
- Jangan autoplay audio. Jika audio nantinya disetujui, mulai mute dan beri tombol mute yang berlabel.
- Gambar dekoratif punya alt kosong; gambar informatif memiliki alt ringkas dan faktual.

### Performa

- Utamakan teks dan hero image. Jangan menahan render karena canvas/video.
- Lazy-load media di luar layar dan optimalkan ukuran gambar.
- Jalankan animasi hanya saat terlihat/intro aktif; hentikan saat selesai atau tab tidak aktif.
- Hindari background video besar untuk seluruh halaman.
- Sasaran implementasi: halaman tetap responsif pada ponsel kelas menengah dan koneksi seluler; verifikasi dengan audit performa setelah build bila diminta.

### SEO

- Title dan description yang menjelaskan nama/bidang setelah dikonfirmasi.
- Open Graph image yang aman dan mudah dibaca.
- Struktur heading semantik; metadata per route proyek bila halaman detail digunakan.
- Jangan memasukkan klaim yang tidak didukung konten.

### Privasi

- Tidak ada analytics, cookies non-esensial, database pengunjung, atau form pengumpulan data dalam MVP.
- Gunakan email link sederhana sampai backend/contact form benar-benar dibutuhkan.
- Periksa metadata foto personal sebelum publikasi jika mengandung informasi yang tidak ingin dibagikan.

---

## 13. Acceptance criteria

### Fungsi dan konten

- [ ] Nama, bidang, dan positioning dapat dipahami dari area hero.
- [ ] Minimal 3 karya ditampilkan setelah pemilik mengonfirmasi konteks; jika belum, desain menyediakan slot tanpa mengarang data.
- [ ] Tiap karya menjelaskan kontribusi pemilik atau secara eksplisit menandai informasi yang belum tersedia.
- [ ] Tautan proyek dan kontak bekerja.
- [ ] Intro dapat dilewati dan tidak memblokir akses konten.
- [ ] Konten tetap tersedia tanpa video, canvas, atau animasi.

### Tampilan

- [ ] Interface utama konsisten monokrom; BURN/LUSH menjadi aksen warna media yang disengaja.
- [ ] Teks pada BELONG/BURN/LUSH tidak tertutup overlay/heading baru.
- [ ] Desktop dan ponsel memakai crop gambar yang sesuai.
- [ ] Tidak ada horizontal overflow di ukuran ponsel umum.

### Aksesibilitas dan teknis

- [ ] Navigasi keyboard dan focus-visible tersedia.
- [ ] Reduced-motion menghasilkan pengalaman statis atau transisi minimal.
- [ ] Video/GIF/canvas tidak berjalan terus setelah tidak dibutuhkan.
- [ ] Tidak ada autoplay audio.
- [ ] Metadata dasar dan alt text tersedia.
- [ ] Tidak ada dependensi yang tidak dipakai atau error runtime pada alur utama.

---

## 14. Informasi yang masih dibutuhkan dari pemilik

Claude harus menggunakan placeholder yang mudah dicari, misalnya `TODO: nama`, jika data belum tersedia. Jangan mengarang.

1. Nama/alias untuk situs dan title metadata.
2. Bidang/role utama serta jenis kesempatan yang dicari.
3. Bahasa situs: Indonesia, Inggris, atau bilingual.
4. Positioning satu kalimat dan bio 50–100 kata.
5. Arti dan konteks BELONG, BURN, LUSH; apakah artwork, seri personal, atau proyek portofolio.
6. Kontribusi pemilik pada tiap karya, tools/medium, tahun, tautan hasil, dan proses.
7. Email dan tautan sosial profesional yang boleh dipublikasikan.
8. Apakah foto masa kecil akan ditampilkan publik.
9. Apakah aset Rei dan winged icon boleh dipakai untuk situs yang akan dipublikasikan.
10. Apakah animasi ASCII garden berasal dari aset yang boleh di-host/di-embed.
11. Apakah pengalaman intro ingin singkat (direkomendasikan) atau intens/lebih panjang.

---

## 15. Rencana implementasi

1. **Audit repository:** periksa Next.js, TypeScript, Tailwind, struktur route, dan package manager. Jangan menginisialisasi ulang project yang sudah ada.
2. **Siapkan media:** minta pemilik menyalin file yang disetujui ke `public/images/`; catat ukuran, format, fokus crop, dan hak penggunaan.
3. **Bangun kerangka statis:** layout, token desain, navigasi, hero, section karya, about, contact, footer.
4. **Integrasikan gambar:** gunakan data project dan crop responsif. Validasi bahwa tulisan yang tertanam di gambar tetap terbaca.
5. **Tambahkan intro sederhana:** tombol masuk/skip dan fallback statis terlebih dahulu.
6. **Adaptasi efek opsional:** masukkan particle/garden hanya setelah konten statis bekerja dan dampak performa dikendalikan.
7. **Perapihan:** metadata, focus states, reduced motion, alt text, 404, dan optimasi media.
8. **Review visual/fungsi:** cek jalur utama desktop/mobile, media fallback, tautan, dan tidak ada konten placeholder yang tampak sebagai fakta.

---

## 16. Prompt implementasi siap-tempel untuk Claude

```text
Implementasikan portofolio Next.js sesuai dokumen PRD ini. Pertama, audit repository yang sudah ada (framework, struktur folder, package manager, Tailwind, dan TypeScript). Jangan menghapus atau menginisialisasi ulang proyek. Setelah audit, buat perubahan yang diperlukan langsung di repository.

Arah produk: portofolio gothic-distopia, dominan hitam/putih, editorial, sinematik, tetap mudah dipakai recruiter. Aset tersedia melalui daftar pada PRD; jika file belum ada di public/images, jangan mengarang file atau menggantinya dengan stok. Buat fallback/placeholder yang jelas dan beri tahu file mana yang harus disalin.

Prioritas implementasi:
1. Halaman utama responsif dengan intro yang bisa dilewati, hero, karya pilihan, about, contact, footer.
2. Data karya terstruktur. Jangan mengarang nama, role, klien, tahun, hasil, atau statistik; gunakan TODO/placeholder yang jelas untuk informasi yang belum tersedia.
3. Gunakan foto glasses-cinematic sebagai portrait utama; BELONG/BURN/LUSH sebagai visual karya hanya dengan status konteks yang belum diklaim; pertahankan warna asli BURN dan LUSH sebagai aksen media. Hormati teks yang sudah tercetak di artwork saat menentukan crop/overlay.
4. Buat pengalaman inti lengkap tanpa animasi, video, atau audio. Jangan autoplay audio. Intro dapat dilewati dan jangan membuat progress loading palsu yang menahan konten.
5. Gunakan ide particle.txt hanya sebagai animasi intro opsional, kurangi biaya canvas, hentikan loop setelah intro, dan sediakan fallback statis serta prefers-reduced-motion. Gunakan garden.txt hanya sebagai video dekoratif opsional dengan poster/fallback, muted, playsInline, tidak mengambil klik, dan jangan bergantung pada URL eksternal yang belum diverifikasi.
6. Pertahankan semantic HTML, keyboard access, focus-visible, alt text, kontras yang layak, responsive crop, dan metadata dasar.

Ikuti konvensi repository yang ada. Tambahkan dependensi hanya jika benar-benar perlu. Setelah selesai, ringkas file yang dibuat/diubah, apa yang masih memerlukan konten/aset dari saya, dan keterbatasan yang tersisa. Jangan publikasikan atau mengunggah aset ke layanan luar.
```

---

## 17. Keputusan desain awal yang direkomendasikan

- Homepage satu halaman terlebih dahulu; detail route hanya untuk studi kasus yang cukup substansial.
- Bahasa utama mengikuti audiens target; bila belum diputuskan, gunakan copy placeholder yang mudah diganti.
- Intro sangat singkat dan dapat dilewati.
- Audio mati/tidak ada di MVP.
- UI hitam-putih, foto BURN dan LUSH mempertahankan warna asli sebagai kontras naratif.
- Rei Ayanami sebagai easter egg opsional saja, bukan logo/branding.
- Foto masa kecil hanya ditambahkan setelah persetujuan pemilik.
- Jangan menempatkan tiga gambar BELONG/BURN/LUSH sebagai studi kasus profesional sebelum pemilik mengonfirmasi makna dan kontribusinya.
