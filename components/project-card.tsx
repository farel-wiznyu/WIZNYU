import Image from "next/image";
import { ArrowUpRight } from "@/components/icons";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border-t border-line py-10 first:border-t-0 md:py-14">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="label label-bone">{project.record}</p>
          <p className="label mt-2">{project.year ?? "YEAR / PENDING"}</p>
          <p className="label mt-2">{project.category ?? "CATEGORY / PENDING"}</p>
        </div>

        <div className="md:col-span-9">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h3 className="display max-w-2xl text-[clamp(2.25rem,5vw,5rem)] leading-[0.92] tracking-[-0.04em]">
              {project.title}
            </h3>
            {project.href ? (
              <a
                className="text-link shrink-0"
                href={project.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                OPEN RECORD <ArrowUpRight className="h-3 w-3" />
              </a>
            ) : null}
          </div>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ash">
            {project.summary}
          </p>

          {project.cover ? (
            <div className="img-frame relative mt-8 aspect-[16/9] overflow-hidden">
              <Image
                alt={project.coverAlt ?? project.title}
                className="object-cover"
                fill
                sizes="(min-width: 768px) 70vw, 100vw"
                src={project.cover}
              />
            </div>
          ) : null}

          <dl className="mt-8 grid gap-5 border-t border-line pt-5 sm:grid-cols-3">
            <div>
              <dt className="label">ROLE</dt>
              <dd className="mt-2 text-sm text-bone">
                {project.role ?? "PENDING"}
              </dd>
            </div>
            <div>
              <dt className="label">STACK</dt>
              <dd className="mt-2 text-sm text-bone">
                {project.stack.length > 0 ? project.stack.join(" / ") : "PENDING"}
              </dd>
            </div>
            <div>
              <dt className="label">OUTCOME</dt>
              <dd className="mt-2 text-sm text-bone">
                {project.outcome ?? "PENDING"}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}
