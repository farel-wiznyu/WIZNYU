import { ArtifactCard } from "@/components/artifact-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { artifacts } from "@/lib/artifacts";
import { pendingRecordCount, projects } from "@/lib/projects";

const recordRange = `RECORD / 001—${String(pendingRecordCount).padStart(3, "0")}`;

export function Works() {
  return (
    <section
      aria-labelledby="works-title"
      className="section-pad border-t border-line"
      data-chapter="works"
      id="works"
    >
      <div className="site-shell">
        <SectionHeader
          description="Beberapa hal yang aku bangun, dan apa yang tersisa setelahnya."
          label="SELECTED WORKS"
          number="02"
          title="Selected Works"
          titleId="works-title"
        />

        {projects.length > 0 ? (
          <div className="mt-14">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="reveal mt-14 border border-line bg-surface/40">
            <div className="grid md:grid-cols-12">
              <div className="min-w-0 border-b border-line p-6 md:col-span-7 md:border-b-0 md:border-r md:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <p className="label label-bone">{recordRange}</p>
                  <p className="label">STATUS / PENDING</p>
                </div>
                <h3 className="display mt-16 text-[clamp(1.5rem,7.5vw,2.5rem)] leading-[0.88] tracking-[-0.045em] md:text-[clamp(2rem,4.5vw,3.5rem)] lg:text-[clamp(3rem,5vw,5rem)]">
                  AWAITING{" "}
                  <br />
                  DECLASSIFICATION
                </h3>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-ash">
                  Aku belum membuka catatan teknis di arsip ini. Artefak personal
                  di bawah sudah bisa kamu lihat.
                </p>
              </div>

              <div className="min-w-0 p-6 md:col-span-5 md:p-10">
                <p className="label label-bone">WHAT WILL LIVE HERE</p>
                <ul className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-ash">
                  {["Context", "Build", "Aftermath"].map((item, index) => (
                    <li
                      className="flex items-center justify-between gap-4 border-b border-line py-3"
                      key={item}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-xs leading-relaxed text-ash">
                  Tidak ada klien, peran, atau hasil yang aku karang untuk
                  mengisi ruang ini.
                </p>
              </div>
            </div>
          </div>
        )}

        <div
          aria-labelledby="artifacts-title"
          className="mt-24 border-t border-line pt-12 md:mt-32"
          data-chapter="works"
          id="artifacts"
        >
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label label-bone">02.B / ARTIFACTS</p>
              <h3
                className="display mt-4 text-[clamp(2rem,4vw,4rem)] leading-[0.9] tracking-[-0.035em]"
                id="artifacts-title"
              >
                Personal Artworks
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ash">
              Artefak personal. Warna aslinya tetap aku pertahankan.
            </p>
          </div>

          <div className="mt-10">
            <ArtifactCard artifact={artifacts[0]} />
            <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-2">
              {artifacts.slice(1).map((artifact) => (
                <ArtifactCard artifact={artifact} key={artifact.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
