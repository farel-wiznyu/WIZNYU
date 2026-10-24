import Image from "next/image";
import { SignalClip } from "@/components/signal-clip";
import { SectionHeader } from "@/components/section-header";
import { StarField } from "@/components/star-field";
import { origins, rei } from "@/lib/personal";

export function Personal() {
  return (
    <section
      aria-labelledby="personal-title"
      className="section-pad relative overflow-hidden border-t border-line bg-surface"
      data-chapter="personal"
      id="personal"
    >
      <StarField opacity="opacity-[0.06]" />

      <div className="site-shell relative z-10">
        <SectionHeader
          description="File yang tidak masuk katalog profesional. Kamu tetap boleh membukanya."
          label="UNCLASSIFIED"
          number="04.B"
          title="Unclassified"
          titleId="personal-title"
        />

        <div className="reveal mt-14 border border-line bg-void">
          <div className="grid md:grid-cols-12">
            <div className="border-b border-line p-4 md:col-span-5 md:border-b-0 md:border-r md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="label label-bone">{rei.label}</span>
                <span className="label">PERSONAL / NON-PROFESSIONAL</span>
              </div>

              <div className="relative mx-auto mt-7 max-w-[380px]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 translate-x-2 translate-y-2 opacity-15 blur-[1px]"
                >
                  <Image
                    alt=""
                    className="object-cover grayscale"
                    fill
                    sizes="(min-width: 768px) 30vw, 80vw"
                    src={rei.portrait.src}
                  />
                </div>

                <div className="img-frame relative aspect-[596/843] overflow-hidden">
                  <Image
                    alt={rei.portrait.alt}
                    className="object-cover grayscale"
                    fill
                    sizes="(min-width: 768px) 30vw, 80vw"
                    src={rei.portrait.src}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-void/25 via-transparent to-transparent"
                  />
                </div>

                <div className="absolute -bottom-3 -right-3 flex items-center gap-2 border border-line bg-void px-2 py-1.5">
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="h-6 w-6 object-cover grayscale"
                    height={24}
                    src={rei.icon.src}
                    width={24}
                  />
                  <span className="label label-bone">00R</span>
                </div>
              </div>

              <p className="label mt-8">PORTRAIT / B&W / PERSONAL</p>
            </div>

            <div className="flex flex-col p-6 md:col-span-7 md:p-10">
              <p className="label label-bone">{rei.kicker}</p>
              <h3 className="display mt-4 text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.88] tracking-[-0.045em]">
                {rei.name}
              </h3>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-oxide-bright">
                {rei.manifest}
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ash md:text-lg">
                {rei.note}
              </p>

              <div className="mt-auto pt-10">
                <SignalClip
                  height={rei.clip.height}
                  label={rei.clip.alt}
                  poster={rei.clip.poster}
                  src={rei.clip.src}
                  width={rei.clip.width}
                />
              </div>
            </div>
          </div>
        </div>

        <p className="label mt-4">THIRD-PARTY CHARACTER / PERSONAL ARTIFACT / NOT BRANDING</p>

        <div className="mt-20 md:mt-28">
          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-line pt-8">
            <div>
              <p className="label label-bone">ORIGIN FILES</p>
              <h3 className="display mt-3 text-[clamp(2rem,4vw,4rem)] leading-[0.9] tracking-[-0.035em]">
                Before the archive.
              </h3>
            </div>
            <p className="hidden max-w-xs text-sm leading-relaxed text-ash md:block">
              Dua versi lama yang aku pilih untuk tetap disimpan.
            </p>
          </div>

          <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
            {origins.map((origin) => (
              <figure className="border border-line bg-void" key={origin.label}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    alt={origin.alt}
                    className="object-cover"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    src={origin.image}
                  />
                  <span className="redaction-tag absolute left-3 top-3">
                    {origin.status}
                  </span>
                </div>
                <figcaption className="p-5 md:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <span className="label label-bone">{origin.label}</span>
                    <span className="label">{origin.meta}</span>
                  </div>
                  <p className="display mt-6 text-xl leading-[1.2] tracking-[-0.02em] md:text-2xl">
                    {origin.quote}
                  </p>
                  <p className="mt-5 text-sm text-ash">{origin.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
