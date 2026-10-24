import Image from "next/image";
import { ArrowDown, ArrowUpRight, StarMark } from "@/components/icons";
import { StarField } from "@/components/star-field";
import { site } from "@/lib/site";

const facts = [
  ["CLASS", "PERSONAL ARCHIVE"],
  ["OPERATOR", "WIZNYU"],
  ["ROLE", "CREATIVE TECHNOLOGIST"],
  ["REVISION", "2026"],
] as const;

export function Cover() {
  return (
    <section
      aria-labelledby="archive-title"
      className="relative overflow-hidden pt-10 md:pt-16"
      data-chapter="cover"
      id="cover"
    >
      <StarField opacity="opacity-[0.16]" />

      <div className="site-shell relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
          <p className="label label-bone">00 / THRESHOLD</p>
          <p className="label hidden sm:block">PERSONAL ARCHIVE / 001</p>
          <p className="label">STATUS / ONLINE</p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1
              className="display text-[clamp(4.25rem,14.5vw,14rem)] font-medium leading-[0.78] tracking-[-0.055em] text-bone focus:outline-none"
              id="archive-title"
              tabIndex={-1}
            >
              WIZNYU
            </h1>
            <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-3">
              <p className="label label-bone">CREATIVE TECHNOLOGIST</p>
              <p className="label">ARCHIVE / 001</p>
              <StarMark className="h-2.5 w-2.5 text-oxide-bright" />
            </div>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="max-w-sm text-lg leading-relaxed text-ash md:text-xl">
              {site.positioning}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-solid" href="#works">
                SELECTED WORKS <ArrowDown className="h-3.5 w-3.5" />
              </a>
              <a className="btn" href="#signal">
                SIGNAL <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <dl className="mt-9 grid grid-cols-2 gap-x-6">
              {facts.map(([key, value]) => (
                <div
                  className="flex flex-col gap-1 border-t border-line py-2.5"
                  key={key}
                >
                  <dt className="label">{key}</dt>
                  <dd className="font-mono text-[9px] uppercase tracking-[0.12em] text-bone">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <figure className="relative mt-12 md:mt-20">
          <div className="img-frame relative aspect-[4/3] overflow-hidden md:aspect-[3/1]">
            <Image
              alt="Potret hitam-putih WIZNYU memakai kacamata besar; ada pantulan merah di sisi kiri."
              className="object-cover object-center"
              fill
              priority
              sizes="(min-width: 1600px) 1600px, 100vw"
              src="/images/portrait-cinematic.webp"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-void/55 via-transparent to-transparent"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 border border-line bg-void/70 px-2.5 py-1.5">
              <StarMark className="h-2.5 w-2.5 text-oxide-bright" />
              <span className="label label-bone">FIG. 01 / OPERATOR</span>
            </div>
          </div>
          <figcaption className="flex flex-wrap items-center justify-between gap-3 py-3">
            <span className="label">SUBJECT / WIZNYU</span>
            <span className="label hidden sm:block">FRAME / 2026</span>
            <a className="text-link" href="#statement">
              SCROLL TO DECRYPT <ArrowDown className="h-3 w-3" />
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
