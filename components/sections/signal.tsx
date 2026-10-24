import { ArrowUp, ArrowUpRight } from "@/components/icons";
import { SectionHeader } from "@/components/section-header";
import { StarField } from "@/components/star-field";
import { site } from "@/lib/site";

export function Signal() {
  const hasSignal = Boolean(site.email) || site.socials.length > 0;

  return (
    <section
      aria-labelledby="signal-title"
      className="section-pad relative overflow-hidden border-t border-line"
      data-chapter="signal"
      id="signal"
    >
      <StarField opacity="opacity-[0.09]" />

      <div className="site-shell relative z-10">
        <SectionHeader
          description={site.contactIntro}
          label="SIGNAL"
          number="05"
          title="Signal"
          titleId="signal-title"
        />

        {hasSignal ? (
          <div className="reveal mt-14 grid gap-10 border-t border-line pt-8 md:grid-cols-12">
            <div
              className={
                site.socials.length > 0 ? "md:col-span-8" : "md:col-span-12"
              }
            >
              <p className="label label-bone">CHANNEL / OPEN</p>
              {site.email ? (
                <a
                  className="display mt-5 block break-words text-[clamp(1.8rem,4.5vw,4.75rem)] leading-[1.05] tracking-[-0.04em] underline decoration-line underline-offset-8 transition-colors hover:decoration-bone"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              ) : (
                <p className="display mt-5 text-[clamp(1.8rem,4.5vw,4.75rem)] leading-[1.05] tracking-[-0.04em]">
                  SIGNAL OPEN
                </p>
              )}
            </div>
            {site.socials.length > 0 ? (
              <div className="md:col-span-4">
                <p className="label">ELSEWHERE</p>
                <ul className="mt-4 space-y-3">
                  {site.socials.map((social) => (
                    <li key={social.href}>
                      <a
                        className="text-link"
                        href={social.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {social.label}
                        {social.handle ? ` / ${social.handle}` : null}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="reveal mt-14 border border-dashed border-line bg-surface/30 p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="label label-bone">CHANNEL / NOT OPEN</p>
                <p className="display mt-4 text-[clamp(2.5rem,6vw,6rem)] leading-[0.88] tracking-[-0.045em]">
                  AWAITING{" "}
                  <br />
                  SIGNAL
                </p>
              </div>
              <div className="md:col-span-4">
                <p className="text-sm leading-relaxed text-ash">
                  {site.contactPending}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 border border-line px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ash">
                  <span className="h-1.5 w-1.5 bg-oxide-bright" />
                  CHANNEL / PENDING
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4">
          <p className="label">NO FORM / NO TRACKER / NO AUDIO</p>
          <a className="text-link" href="#cover">
            BACK TO TOP <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
