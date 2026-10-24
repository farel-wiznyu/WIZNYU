import Image from "next/image";
import { StarMark } from "@/components/icons";
import { SectionHeader } from "@/components/section-header";
import { WorkbenchVideo } from "@/components/workbench-video";
import {
  operatorStack,
  siteBuild,
  stackCategories,
  workbench,
} from "@/lib/stack";

export function Manifest() {
  return (
    <section
      aria-labelledby="manifest-title"
      className="section-pad border-t border-line"
      data-chapter="manifest"
      id="manifest"
    >
      <div className="site-shell">
        <SectionHeader
          description="Tools yang aku pakai. Tanpa skor, tanpa peringkat."
          label="MANIFEST"
          number="03"
          title="Manifest"
          titleId="manifest-title"
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="border-t border-line">
              {stackCategories.map((label, index) => {
                const group = operatorStack.find(
                  (entry) => entry.label.toLowerCase() === label.toLowerCase(),
                );

                return (
                  <div
                    className="grid grid-cols-12 items-baseline gap-4 border-b border-line py-5"
                    key={label}
                  >
                    <p className="label col-span-5 md:col-span-4">
                      {String(index + 1).padStart(2, "0")} / {label}
                    </p>
                    <div className="col-span-7 md:col-span-8">
                      {group && group.items.length > 0 ? (
                        <ul className="flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <li
                              className="border border-line px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-bone"
                              key={item.name}
                              title={item.note}
                            >
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ash">
                          AWAITING INPUT
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-start gap-3">
              <StarMark className="mt-1 h-3 w-3 shrink-0 text-oxide-bright" />
              <p className="max-w-md text-sm leading-relaxed text-ash">
                Aku hanya akan mencantumkan tools yang benar-benar aku pakai.
                Tidak ada skor, tidak ada peringkat.
              </p>
            </div>

            <div className="mt-10 border border-line bg-surface/40 p-6">
              <p className="label label-bone">SITE / BUILD</p>
              <p className="mt-3 text-sm leading-relaxed text-ash">
                Arsip ini dibangun dengan:
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-bone">
                {siteBuild.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="reveal lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <figure>
                <div className="img-frame relative aspect-[4/3] overflow-hidden">
                  <Image
                    alt={workbench.caseImage.alt}
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    src={workbench.caseImage.src}
                  />
                </div>
                <figcaption className="mt-2">
                  <span className="label">FIG. 01 / CASE</span>
                </figcaption>
              </figure>

              <figure>
                <div className="img-frame relative aspect-[4/3] overflow-hidden">
                  <Image
                    alt={workbench.keysImage.alt}
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    src={workbench.keysImage.src}
                  />
                </div>
                <figcaption className="mt-2">
                  <span className="label">FIG. 02 / KEYS</span>
                </figcaption>
              </figure>
            </div>

            <figure className="mt-5">
              <div className="video-shell relative aspect-video">
                <WorkbenchVideo
                  height={workbench.video.height}
                  label={workbench.video.alt}
                  poster={workbench.video.poster}
                  src={workbench.video.src}
                  width={workbench.video.width}
                />
                <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-2 border border-line bg-void/75 px-2 py-1">
                  <span className="h-1.5 w-1.5 bg-oxide-bright" />
                  <span className="label label-bone">WORKBENCH / MUTED</span>
                </div>
              </div>
              <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <span className="label">FIG. 03 / WORKSPACE</span>
                <span className="label">LOOP / NO AUDIO</span>
              </figcaption>
            </figure>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ash">
              {workbench.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
