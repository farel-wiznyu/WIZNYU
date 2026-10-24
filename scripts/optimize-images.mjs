import { execFileSync } from "node:child_process";
import { mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import ffmpegPath from "ffmpeg-static";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const assets = path.join(root, "assets");
const images = path.join(root, "public", "images");
const textures = path.join(root, "public", "textures");
const media = path.join(root, "public", "media");

await mkdir(images, { recursive: true });
await mkdir(textures, { recursive: true });
await mkdir(media, { recursive: true });

const src = (name) => path.join(assets, name);
const out = (dir, name) => path.join(dir, name);

async function photo(input, output, width, { quality = 82, grayscale = false } = {}) {
  let pipeline = sharp(input).rotate().resize({
    width,
    withoutEnlargement: true,
  });
  if (grayscale) pipeline = pipeline.grayscale();
  await pipeline.webp({ quality, effort: 5 }).toFile(output);
}

await photo(src("glasses-cinematic-pic.png"), out(images, "portrait-cinematic.webp"), 2400, {
  quality: 86,
});
await photo(src("helmet-icon.jpeg"), out(images, "portrait-helmet.webp"), 1600, {
  quality: 84,
});
await photo(src("BELONG-pic.jpeg"), out(images, "artifact-belong.webp"), 2000, {
  quality: 82,
});
await photo(src("BURN-pic.jpeg"), out(images, "artifact-burn.webp"), 2000, {
  quality: 84,
});
await photo(src("LUSH-pic.jpeg"), out(images, "artifact-lush.webp"), 2000, {
  quality: 84,
});
await photo(src("starry-background.jpg"), out(images, "star-map.webp"), 720, {
  quality: 72,
});
await photo(src("winged-icon.jpg"), out(images, "winged-icon.webp"), 736, {
  quality: 82,
});
await photo(src("rei-ayanami-portrait.jpg"), out(images, "rei-portrait.webp"), 596, {
  quality: 86,
});
await photo(src("rei-ayanami-icon.jpg"), out(images, "rei-icon.webp"), 160, {
  quality: 86,
});
await photo(src("keyboard-rk-m75-beloved.jpeg"), out(images, "workbench-keyboard-01.webp"), 2000, {
  quality: 82,
  grayscale: true,
});
await photo(src("closed-up-rk.jpeg"), out(images, "workbench-keyboard-02.webp"), 1600, {
  quality: 82,
  grayscale: true,
});
await photo(src("smp-heist-graduation moment.jpeg"), out(images, "origin-001-masked.webp"), 1280, {
  quality: 82,
  grayscale: true,
});

// The public childhood derivative is redacted at the pixel level. The original
// never leaves /assets and is not referenced by the site.
const childhood = await sharp(src("IMG_20261023_150445.jpg.jpeg"))
  .rotate()
  .resize(1200, 1600, { fit: "inside", withoutEnlargement: true })
  .toBuffer();
const { width: childhoodWidth = 1200, height: childhoodHeight = 1600 } =
  await sharp(childhood).metadata();
const bar = {
  x: Math.round(childhoodWidth * 0.23),
  y: Math.round(childhoodHeight * 0.285),
  w: Math.round(childhoodWidth * 0.54),
  h: Math.round(childhoodHeight * 0.12),
};
const redaction = Buffer.from(`
<svg width="${childhoodWidth}" height="${childhoodHeight}" xmlns="http://www.w3.org/2000/svg">
  <rect x="${bar.x}" y="${bar.y}" width="${bar.w}" height="${bar.h}" fill="#090909"/>
  <rect x="${bar.x}" y="${bar.y}" width="${bar.w}" height="1" fill="#ECE9E2" fill-opacity="0.6"/>
  <rect x="${bar.x}" y="${bar.y + bar.h - 1}" width="${bar.w}" height="1" fill="#ECE9E2" fill-opacity="0.6"/>
</svg>`);
await sharp(childhood)
  .composite([{ input: redaction, blend: "over" }])
  .webp({ quality: 84, effort: 5 })
  .toFile(out(images, "origin-000-redacted.webp"));

// A fine, deterministic grain tile. Used at low opacity over the whole page.
const grainSize = 128;
const grain = Buffer.alloc(grainSize * grainSize);
let seed = 1337;
for (let i = 0; i < grain.length; i += 1) {
  seed = (seed * 16807) % 2147483647;
  grain[i] = 90 + ((seed / 2147483647) * 110 + (i % 7) * 2) % 120;
}
await sharp(grain, {
  raw: { width: grainSize, height: grainSize, channels: 1 },
})
  .png()
  .toFile(out(textures, "grain.png"));

// Open Graph card. Built with sharp so the site has a real, static preview.
const starTexture = await sharp(src("starry-background.jpg"))
  .resize(1200, 630, { fit: "cover" })
  .grayscale()
  .ensureAlpha(0.13)
  .png()
  .toBuffer();
const ogSvg = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#090909"/>
  <g stroke="#ECE9E2" stroke-opacity="0.22">
    <line x1="64" y1="64" x2="1136" y2="64"/>
    <line x1="64" y1="566" x2="1136" y2="566"/>
  </g>
  <text x="64" y="112" fill="#A6A39D" font-family="Consolas, monospace" font-size="18" letter-spacing="4">PERSONAL ARCHIVE / 001</text>
  <text x="64" y="230" fill="#ECE9E2" font-family="Georgia, serif" font-size="108" letter-spacing="2">WIZNYU</text>
  <text x="68" y="292" fill="#A6A39D" font-family="Consolas, monospace" font-size="22" letter-spacing="5">CREATIVE TECHNOLOGIST</text>
  <text x="64" y="522" fill="#ECE9E2" font-family="Georgia, serif" font-size="26">An archive of what remains.</text>
  <text x="1136" y="112" fill="#A6A39D" text-anchor="end" font-family="Consolas, monospace" font-size="16" letter-spacing="3">ARCHIVE: ONLINE</text>
</svg>`);
await sharp({
  create: { width: 1200, height: 630, channels: 4, background: "#090909" },
})
  .composite([
    { input: starTexture, left: 0, top: 0 },
    { input: ogSvg, left: 0, top: 0 },
  ])
  .jpeg({ quality: 86 })
  .toFile(out(images, "og.jpg"));

if (!ffmpegPath) throw new Error("ffmpeg-static did not provide a binary path.");

const ffmpeg = (args) => {
  execFileSync(ffmpegPath, args, { stdio: "inherit" });
};

// Muted, monochrome workbench loop. The original 30 MB file is never shipped.
ffmpeg([
  "-y",
  "-i",
  src("workspace-that-keeping-me-alive.mp4"),
  "-t",
  "15",
  "-vf",
  "scale=-2:720,hue=s=0",
  "-an",
  "-c:v",
  "libx264",
  "-crf",
  "27",
  "-preset",
  "slow",
  "-pix_fmt",
  "yuv420p",
  "-movflags",
  "+faststart",
  out(media, "workbench-loop.mp4"),
]);
ffmpeg([
  "-y",
  "-ss",
  "1",
  "-i",
  src("workspace-that-keeping-me-alive.mp4"),
  "-frames:v",
  "1",
  "-vf",
  "scale=-2:720,hue=s=0",
  out(media, "workbench-poster.png"),
]);
await photo(out(media, "workbench-poster.png"), out(media, "workbench-poster.webp"), 1280, {
  quality: 82,
});
await rm(out(media, "workbench-poster.png"), { force: true });

// Rei's colour GIF is converted to a short monochrome clip. The poster is the
// first frame, so the default state is completely still.
ffmpeg([
  "-y",
  "-stream_loop",
  "4",
  "-i",
  src("rei-ayanami-clapping-gif.gif"),
  "-vf",
  "hue=s=0,scale=498:-2",
  "-an",
  "-c:v",
  "libx264",
  "-crf",
  "24",
  "-pix_fmt",
  "yuv420p",
  "-movflags",
  "+faststart",
  out(media, "rei-signal.mp4"),
]);
await sharp(src("rei-ayanami-clapping-gif.gif"))
  .grayscale()
  .resize({ width: 498, withoutEnlargement: true })
  .webp({ quality: 84 })
  .toFile(out(media, "rei-poster.webp"));

for (const file of [
  "portrait-cinematic.webp",
  "artifact-belong.webp",
  "origin-000-redacted.webp",
  "og.jpg",
]) {
  const info = await stat(out(images, file));
  console.log(`${file}: ${(info.size / 1024).toFixed(1)} KB`);
}
for (const file of ["workbench-loop.mp4", "rei-signal.mp4"]) {
  const info = await stat(out(media, file));
  console.log(`${file}: ${(info.size / 1024).toFixed(1)} KB`);
}
