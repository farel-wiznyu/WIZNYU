import Image from "next/image";
import { ArrowDown } from "@/components/icons";
import { SectionHeader } from "@/components/section-header";
import { site } from "@/lib/site";

const facts = [
  ["ALIAS", "WIZNYU"],
  ["ROLE", "CREATIVE TECHNOLOGIST"],
  ["ARCHIVE", "001"],
  ["STATUS", "ONLINE"],
] as const;

export function About() {
  return (
    <section
      aria-labelledby="about-title"
      className="section-pad border-t border-line"
      data-chapter="about"
      id="about"
    >
      <div className="site-shell">
        <SectionHeader
          description="Tentang orang di balik arsip."
          label="ARCHIVE NOTE"
          number="04"
          title="Archive Note"
          titleId="about-title"
        />

        <div className="mt-14 grid gap-10 md:grid-cols-12 md:items-start">
          <figure className="md:col-span-5">
            <div className="img-frame relative aspect-square overflow-hidden">
              <Image
                alt="Potret hitam-putih WIZNYU memakai helm dan kacamata."
                className="object-cover"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                src="/images/portrait-helmet.webp"
              />
            </div>
            <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <span className="label">FIG. 04 / OPERATOR</span>
              <span className="label">B&W / 2026</span>
            </figcaption>
          </figure>

          <div className="md:col-span-7 md:pl-4 lg:pl-10">
            <p className="label label-bone">PROFILE / 001</p>
            <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-ash md:text-xl">
              {site.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-6">
              {facts.map(([key, value]) => (
                <div
                  className="flex flex-col gap-1 border-t border-line py-3"
                  key={key}
                >
                  <dt className="label">{key}</dt>
                  <dd className="font-mono text-[9px] uppercase tracking-[0.12em] text-bone">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 border-t border-line pt-6">
              <a className="text-link" href="#personal">
                PERSONAL FILES / 04.B <ArrowDown className="h-3 w-3" />
              </a>
              <p className="mt-3 max-w-sm text-xs leading-relaxed text-ash">
                File yang tidak masuk katalog profesional. Kamu tetap boleh
                membukanya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
