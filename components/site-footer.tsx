import Image from "next/image";
import { ArrowUp, ArrowUpRight } from "@/components/icons";
import { site } from "@/lib/site";
import { siteBuild } from "@/lib/stack";

const fonts = ["Bodoni Moda", "Inter Tight", "JetBrains Mono"];

export function SiteFooter() {
  return (
    <footer
      aria-labelledby="colophon-title"
      className="relative overflow-hidden border-t border-line bg-void"
      data-chapter="colophon"
      id="colophon"
    >
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-20 w-[360px] opacity-[0.07] grayscale md:w-[520px]"
        height={736}
        src="/images/winged-icon.webp"
        width={736}
      />

      <div className="site-shell relative z-10 py-14 md:py-20">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
          <h2 className="label label-bone" id="colophon-title">
            06 / COLOPHON
          </h2>
          <p className="label">END OF RECORD</p>
        </div>

        <p
          aria-hidden="true"
          className="display mt-10 text-[clamp(3.25rem,11vw,11rem)] font-medium leading-[0.78] tracking-[-0.055em] text-bone"
        >
          WIZNYU
        </p>

        <div className="mt-14 grid gap-10 border-t border-line pt-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="label label-bone">PERSONAL ARCHIVE / 001</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ash">
              Dibangun sebagai arsip, bukan monumen. Sebagian isinya belum
              selesai; itu bagian dari rancangannya.
            </p>
            <p className="mt-6 max-w-sm text-xs leading-relaxed text-ash">
              {site.privacy}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="label label-bone">BUILD</p>
            <ul className="mt-4 space-y-2 font-mono text-[9px] uppercase tracking-[0.12em] text-ash">
              {siteBuild.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="label label-bone mt-6">TYPE</p>
            <ul className="mt-4 space-y-2 font-mono text-[9px] uppercase tracking-[0.12em] text-ash">
              {fonts.map((font) => (
                <li key={font}>{font}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="label label-bone">NOTES</p>
            <p className="mt-4 text-xs leading-relaxed text-ash">
              {site.thirdPartyNote}
            </p>
            <div className="mt-6 flex flex-col items-start gap-3">
              <a className="text-link" href="/?intro=1#cover">
                REPLAY INTRO <ArrowUpRight className="h-3 w-3" />
              </a>
              <a className="text-link" href="#personal">
                PERSONAL FILE / 00R <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
            <p className="label mt-8">ORNAMENT / NOT A LOGO</p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4">
          <p className="label">© 2026 WIZNYU</p>
          <p className="label">NO TRACKERS / NO COOKIES / NO AUDIO</p>
          <a className="text-link" href="#cover">
            BACK TO TOP <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
