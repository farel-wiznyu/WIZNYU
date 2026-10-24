import { StarMark } from "@/components/icons";
import { site } from "@/lib/site";

export function Statement() {
  return (
    <section
      aria-labelledby="statement-title"
      className="section-pad relative border-t border-line"
      data-chapter="statement"
      id="statement"
    >
      <div className="site-shell">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="label label-bone">01 / STATEMENT</p>
            <div className="mt-6 h-px w-12 bg-line" />
            <p className="mt-6 max-w-[18ch] text-sm leading-relaxed text-ash">
              Catatan kerja untuk arsip ini.
            </p>
          </div>

          <div className="md:col-span-9">
            <h2
              className="display reveal text-[clamp(2rem,4.8vw,5rem)] leading-[1.02] tracking-[-0.03em]"
              id="statement-title"
            >
              “{site.statement[0]}”
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ash md:text-xl">
              {site.statement[1]}
            </p>
            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-16 bg-line" />
              <StarMark className="h-3 w-3 text-oxide-bright" />
              <span className="label">NO SCORE / NO RANK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
