# PRD — Portofolio Gothic Distopia

**Status:** Draft v1 untuk diskusi  
**Tanggal:** 23 Oktober 2026  
**Stack pilihan:** Next.js (App Router) + TypeScript + Tailwind CSS  
**Referensi pengalaman:** [theirisk.com](https://theirisk.com/)

---

## 1. Ringkasan produk

Portofolio personal yang terasa seperti memasuki arsip dari dunia setelah keruntuhan: hitam-putih, sinematik, sunyi, dan sedikit ganjil. Situs tetap harus berfungsi sebagai portofolio profesional—pengunjung dapat memahami siapa pemiliknya, melihat karya pilihan, membaca konteks tiap proyek, dan menghubungi pemilik—namun penyajiannya berbentuk perjalanan editorial yang imersif.

Inspirasi dari referensi adalah ritme pengalaman dan cara menyusun konten: ajakan masuk/interaksi, identitas yang tampil dominan, perpindahan antarbab, lalu biografi dan akses ke karya. Portofolio ini akan mengambil prinsip tersebut tanpa meniru nama, teks, musik, ilustrasi, aset, atau tata letak spesifik situs referensi.

**Kalimat konsep:** *A living archive from a world that almost ended.*

## 2. Masalah dan peluang

Portofolio generik sering terlihat seperti kumpulan kartu proyek. Portofolio ini perlu punya identitas kuat dan mudah diingat, sekaligus tidak membiarkan atmosfer menghalangi fungsi utama: menunjukkan kualitas kerja dan membuka peluang kolaborasi.

Peluangnya adalah memakai dunia gothic-distopia sebagai bingkai cerita, sedangkan proyek tetap menjadi bukti kemampuan yang konkret dan mudah dipindai.

## 3. Tujuan

1. Menyampaikan identitas, spesialisasi, dan karakter kreatif pemilik dalam beberapa detik pertama.
2. Menampilkan 3–6 proyek pilihan dengan peran, proses, dan hasil yang jelas.
3. Memberi pengalaman visual yang khas melalui tipografi, komposisi, transisi, dan detail atmosfer.
4. Memastikan kontak dan tautan profesional mudah ditemukan.
5. Menjaga aksesibilitas, performa, dan kegunaan di ponsel meski visualnya eksperimental.

### Bukan tujuan untuk versi pertama

- Membuat aplikasi dengan CMS atau akun pengguna.
- Menyediakan toko, blog rutin, atau sistem komentar.
- Mengharuskan audio, WebGL, atau animasi berat agar konten utama bisa dipahami.
- Menggunakan efek glitch terus-menerus yang mengganggu keterbacaan.

## 4. Pengguna dan kebutuhan

### Pengunjung utama

- **Recruiter / calon klien:** ingin cepat tahu bidang, kualitas, peran, dan cara menghubungi pemilik.
- **Kolaborator kreatif:** ingin memahami sudut pandang dan proses kerja, bukan hanya hasil akhir.
- **Pengunjung umum:** ingin mengalami situs yang menarik dan mudah dinavigasi.

### Kebutuhan utama

- “Dalam satu layar, beri tahu gue siapa lo dan apa yang lo kerjakan.”
- “Tunjukkan beberapa proyek terbaik, bukan semua hal yang pernah dibuat.”
- “Beri konteks yang cukup supaya kontribusi dan hasil proyek bisa dipercaya.”
- “Buat kontak atau membuka tautan karya terasa gampang.”

## 5. Prinsip desain dan inspirasi

| Aspek | Arah portofolio |
|---|---|
| Atmosfer | Gothic kontemporer dan distopia; sunyi, monumental, seperti arsip atau ruang pamer yang ditinggalkan |
| Palet | Hitam arang, putih tulang, abu-abu kabut; satu aksen opsional berupa merah gelap atau perak |
| Tipografi | Serif kontras untuk judul; sans yang bersih untuk informasi dan isi |
| Citra | Foto/visual monokrom, grain halus, bayangan keras, tekstur kertas atau batu; aset harus milik sendiri atau berlisensi |
| Gerak | Reveal lambat, perpindahan bab yang terasa seperti membalik arsip, hover yang informatif |
| Suara | Opsional, selalu dimulai dalam keadaan mati dan hanya aktif setelah tindakan pengguna |
| Keunikan | Copy, karya, citra, simbol, dan narasi milik pemilik portofolio sendiri |

Referensi menekankan pengalaman imersif, prompt interaksi di awal, tipografi identitas yang besar, navigasi “Back/Next”, biografi, dan pintu keluar menuju karya. Pola ini cocok diterjemahkan menjadi “membuka arsip → menelusuri bab → melihat bukti karya → menghubungi”, dengan kontrol navigasi yang jelas dan pengalaman tanpa suara yang tetap lengkap. Sumber: [theirisk.com](https://theirisk.com/).

## 6. Struktur informasi

### Rute

- `/` — halaman utama berbentuk pengalaman satu halaman.
- `/work/[slug]` — detail proyek, bila jumlah/kedalaman proyek membutuhkannya. Untuk MVP, detail dapat berupa panel atau bagian di halaman utama; keputusan akhir mengikuti jumlah konten.
- `/colophon` — kredit aset dan informasi singkat, opsional.

### Bab halaman utama

1. **Threshold / pembuka** — judul konsep, status “arsip terbuka”, tombol `Enter the archive` atau padanan Bahasa Indonesia. Tombol melewati intro; tidak ada konten yang terkunci di balik audio.
2. **Hero / identitas** — nama, peran utama, satu kalimat positioning, dan petunjuk scroll/navigasi.
3. **Manifesto singkat** — 2–4 kalimat tentang pendekatan atau hal yang dipercaya pemilik.
4. **Selected works** — 3–6 proyek. Setiap item menampilkan judul, tahun, kategori/peran, ringkasan, visual, dan CTA ke detail/hasil.
5. **About / biografi** — bio ringkas, lokasi atau zona waktu jika relevan, spesialisasi, dan fakta profesional yang memang ingin dibagikan.
6. **Capabilities / proses** — layanan atau kemampuan yang ditawarkan dan cara bekerja; hanya jika membantu tujuan profesional.
7. **Contact / sinyal keluar** — email, LinkedIn, GitHub/Behance/Instagram sesuai profesi, serta CTA kolaborasi.
8. **Footer / end card** — kredit, tahun, kontrol suara bila ada, dan kembali ke atas.

## 7. Persyaratan fungsional

### P0 — wajib untuk MVP

- Pengunjung dapat mencapai hero dan konten utama tanpa menunggu animasi atau memberi izin audio.
- Navigasi anchor/bab bekerja dengan klik, keyboard, dan sentuhan.
- Menu menyediakan indikator posisi atau bab aktif dan cara jelas untuk kembali/maju.
- Proyek menampilkan judul, ringkasan, kontribusi pemilik, tahun, teknologi/peran yang relevan, media, dan tautan bila tersedia.
- Email dan tautan eksternal memiliki label yang jelas dan bekerja.
- Layout responsif untuk lebar ponsel, tablet, dan desktop.
- Konten inti dapat dibaca ketika JavaScript atau animasi non-esensial gagal.
- Tautan eksternal membuka tujuan yang benar; gambar memiliki teks alternatif yang bermakna.

### P1 — setelah MVP

- Transisi antarbagian yang lebih sinematik dengan prefers-reduced-motion.
- Galeri proyek atau halaman detail tersendiri.
- Musik/ambience opsional dengan tombol mute/unmute dan status yang persisten selama sesi.
- Toggle Bahasa Indonesia / English jika memang dibutuhkan audiens.
- Metadata sosial, favicon, dan halaman 404 bertema.

### P2 — hanya bila ada alasan konten

- WebGL/3D untuk satu adegan pembuka yang ringan dan dapat dilewati.
- Filter kategori karya.
- CMS untuk pembaruan rutin.

## 8. Alur pengguna utama

1. Pengunjung membuka situs dan langsung melihat identitas/ajakan masuk.
2. Pengunjung memilih masuk atau langsung scroll; keduanya membawa ke konten yang sama.
3. Pengunjung membaca positioning dan melihat proyek pilihan.
4. Pengunjung membuka detail atau tautan hasil untuk proyek yang menarik.
5. Pengunjung membaca profil/proses bila perlu.
6. Pengunjung menghubungi pemilik lewat email atau platform profesional.

**Jalur cepat recruiter:** hero → proyek unggulan → kontak. Sasaran desain: jalur ini jelas tanpa harus memahami narasi atau menyalakan audio.

## 9. Arah visual dan motion

### Art direction

- Latar dominan hampir hitam (`#090909` atau setara), teks utama putih tulang (`#E8E5DF`), teks sekunder abu-abu.
- Garis tipis, nomor arsip, metadata kecil, koordinat atau label seperti `FILE 001` boleh dipakai sebagai sistem visual jika tidak membuat UI terasa seperti gimmick.
- Gunakan ruang kosong luas dan crop visual editorial. Batasi ornamen gothic literal agar hasil tetap kontemporer.
- Aksen warna hanya untuk keadaan interaktif atau penanda penting.

### Motion

- Intro maksimal singkat dan selalu bisa dilewati.
- Motion mendukung hierarki konten, bukan menahan pembacaan.
- Hormati `prefers-reduced-motion`; dalam mode ini gunakan perpindahan instan atau fade ringan.
- Jangan mengunci scroll atau menangkap keyboard secara agresif.

## 10. Konten yang dibutuhkan dari pemilik

Konten ini diperlukan sebelum finalisasi desain dan build:

1. Nama/alias dan gelar peran yang ingin ditampilkan.
2. Bidang utama dan jenis kesempatan yang dicari.
3. Bio pendek (sekitar 50–100 kata) dan bio panjang bila perlu.
4. 3–6 proyek terbaik; untuk setiap proyek: judul, tahun, konteks, peran spesifik, proses, hasil/dampak, teknologi/medium, tautan, dan visual.
5. Foto/visual diri atau keputusan untuk tidak memakai potret.
6. Email dan tautan profesional yang memang boleh dipublikasikan.
7. Pilihan bahasa utama: Indonesia, Inggris, atau bilingual.
8. Pilihan narasi: gothic puitis yang kuat atau profesional dengan atmosfer yang lebih tipis.
9. Ketersediaan aset original/berlisensi dan apakah musik benar-benar diperlukan.

**Aturan placeholder:** jangan mengarang klien, angka dampak, penghargaan, pengalaman, atau kutipan. Gunakan placeholder yang tampak seperti placeholder sampai pemilik memberi data.

## 11. Teknologi dan implementasi

- Next.js App Router + TypeScript.
- Tailwind CSS untuk token desain dan layout responsif.
- Komponen server untuk konten statis; komponen client hanya untuk navigasi/interaksi yang memang memerlukan state.
- Konten proyek disimpan sebagai data terstruktur di source code untuk MVP. Pindah ke CMS hanya jika pembaruan oleh non-developer menjadi kebutuhan.
- Gunakan `next/image` untuk media lokal/remote yang terkonfigurasi, ukuran eksplisit, dan loading sesuai prioritas.
- Gunakan CSS transitions/animations terlebih dahulu; tambah library motion bila interaksi membutuhkannya.
- Audio dan efek visual dipisahkan dari konten inti agar dapat dimatikan atau gagal tanpa merusak halaman.

### Komponen tingkat tinggi

- `IntroGate` — pembuka yang dapat dilewati.
- `SiteHeader` / `ChapterNav` — identitas ringkas dan navigasi bab.
- `HeroSection` — nama, peran, positioning.
- `ManifestoSection` — teks pendek.
- `ProjectIndex` + `ProjectCard` — karya pilihan.
- `ProjectDetail` — detail proyek/panel bila dipakai.
- `AboutSection` — biografi dan fakta profesional.
- `ContactSection` — email dan sosial.
- `AudioToggle` — hanya jika fitur ambience disetujui.
- `SiteFooter` — kredit dan penutup.

## 12. Non-functional requirements

### Aksesibilitas

- Targetkan WCAG 2.2 AA untuk kontras, fokus, struktur heading, nama kontrol, dan navigasi keyboard.
- Semua kontrol interaktif punya fokus terlihat dan label yang menjelaskan fungsi.
- Jangan gunakan warna atau suara sebagai satu-satunya cara menyampaikan informasi.
- Sediakan teks alternatif untuk gambar informatif; gambar dekoratif memakai alt kosong.
- Hormati prefers-reduced-motion dan volume mute.

### Performa

- Konten hero dan teks utama tampil sebelum efek dekoratif.
- Batasi ukuran media dan gunakan format/ukuran yang sesuai.
- Lazy-load media di bawah lipatan; hindari memuat video/3D besar pada perangkat mobile secara default.
- Sasaran awal: Core Web Vitals yang baik pada perangkat kelas menengah dan koneksi seluler, diverifikasi setelah implementasi.

### SEO dan berbagi

- Title, description, canonical, Open Graph image, dan metadata sosial yang konsisten.
- HTML semantik dan konten proyek dapat diindeks.
- Judul halaman dan share card memakai identitas portofolio, bukan hanya nama file/proyek.

### Privasi

- MVP tidak membutuhkan akun atau pengumpulan data pengunjung.
- Hindari analytics sampai ada kebutuhan dan keputusan privasi yang jelas.
- Jika formulir kontak ditambahkan, tentukan penyimpanan, proteksi spam, dan kebijakan privasi terlebih dahulu. Email link sederhana cukup untuk MVP.

## 13. Kriteria penerimaan MVP

- [ ] Pada layar awal, pengunjung dapat mengidentifikasi nama dan bidang pemilik tanpa membaca seluruh halaman.
- [ ] Ada 3–6 proyek dengan kontribusi pemilik yang jelas dan tidak ada metrik yang dikarang.
- [ ] Setiap proyek dan kontak memiliki tautan/aksi yang teruji secara manual sebelum rilis.
- [ ] Semua bab utama dapat dicapai di desktop dan ponsel tanpa navigasi yang macet.
- [ ] Seluruh isi penting tetap tersedia tanpa audio dan tanpa motion.
- [ ] Fokus keyboard, kontras teks, alt image, dan reduced-motion telah ditinjau.
- [ ] Tidak ada horizontal overflow pada viewport ponsel umum.
- [ ] Metadata dasar dan preview berbagi sudah diatur.
- [ ] Aset visual dan suara memiliki izin penggunaan yang sesuai.

## 14. Ukuran keberhasilan

Tanpa analytics, evaluasi awal dilakukan lewat review langsung dengan 3–5 orang dari audiens sasaran:

- Mereka bisa menyebutkan bidang dan positioning pemilik setelah melihat hero.
- Mereka dapat menemukan proyek unggulan dan kontak tanpa arahan.
- Mereka memahami kontribusi pemilik pada setidaknya satu studi kasus.
- Pengalaman tetap nyaman di ponsel, tanpa audio, dan dengan reduced motion.

Jika analytics ditambahkan kemudian, metrik yang relevan adalah klik proyek, klik kontak, penyelesaian interaksi pembuka, dan performa halaman; hanya setelah kebijakan privasi dan persetujuan yang dibutuhkan ditentukan.

## 15. Risiko dan mitigasi

| Risiko | Mitigasi |
|---|---|
| Atmosfer lebih menonjol daripada karya | Letakkan positioning dan proyek dalam jalur cepat; batasi intro |
| Teks gothic sulit dibaca | Pakai font dekoratif hanya untuk judul; gunakan sans yang jelas untuk isi |
| Animasi menurunkan performa/aksesibilitas | Progressive enhancement, reduced-motion, tanpa scroll lock |
| Audio mengagetkan atau tidak bisa diputar | Audio mati secara default; aktivasi lewat kontrol eksplisit |
| Terlalu banyak efek membuat situs generik | Bangun identitas dari konten, komposisi, dan tipografi; batasi glitch |
| Materi karya belum lengkap | Mulai dari 3 proyek terbaik dan gunakan slot konten yang jujur |
| Kemiripan berlebihan dengan referensi | Ambil pola pengalaman umum; buat narasi, sistem visual, aset, dan komponen orisinal |

## 16. Tahapan pengerjaan

1. **Kunci brief:** isi identitas, bidang, bahasa, dan proyek.
2. **Wireframe:** susun urutan bab desktop/mobile dan jalur recruiter.
3. **Visual direction:** pilih palet final, tipografi, tekstur, gaya gambar, dan dosis narasi.
4. **MVP:** implementasi halaman responsif, navigasi, proyek, about, dan kontak.
5. **Polish:** motion opsional, audio opsional, metadata, optimasi aset.
6. **Review:** cek konten, aksesibilitas, tampilan ponsel, dan performa sebelum publikasi.

## 17. Keputusan yang perlu kita diskusikan

1. **Bahasa situs:** Indonesia, Inggris, atau bilingual?
2. **Bidang dan positioning:** lo mau dikenal sebagai apa, dan peluang apa yang dicari?
3. **Narasi visual:** gothic puitis yang kuat, atau profesional dengan atmosfer tipis?
4. **Pembuka:** intro interaktif yang bisa dilewati, atau langsung masuk hero dengan rasa imersif?
5. **Konten karya:** proyek apa saja yang mau dimasukkan? Ada 3–6 proyek dengan hasil/tautan?
6. **Audio:** perlu ambience opsional atau cukup visual dan motion?
7. **Warna aksen:** hitam-putih murni atau satu aksen merah tua/perak?

### Rekomendasi awal

Mulai dengan bahasa Inggris bila targetnya audiens global; kalau peluang utama di Indonesia, gunakan Bahasa Indonesia atau bilingual. Pilih intro yang bisa dilewati, audio mati secara default, 3 proyek unggulan, dan aksen warna yang sangat hemat. Ini menjaga dunia visualnya kuat tanpa mengurangi kejelasan profesional.
