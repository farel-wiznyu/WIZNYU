import Image from "next/image";
import { ArrowUpRight } from "@/components/icons";
import type { Artifact } from "@/lib/artifacts";

type ArtifactCardProps = {
  artifact: Artifact;
  priority?: boolean;
};

export function ArtifactCard({ artifact, priority = false }: ArtifactCardProps) {
  return (
    <figure className="group">
      <div className="img-frame overflow-hidden">
        <Image
          alt={artifact.alt}
          className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.008]"
          height={artifact.height}
          priority={priority}
          sizes={artifact.fullWidth ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
          src={artifact.image}
          width={artifact.width}
        />
      </div>
      <figcaption className="mt-4">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <div className="flex items-baseline gap-3">
            <span className="label label-bone">{artifact.id}</span>
            <h4 className="display text-2xl leading-none tracking-[-0.03em] md:text-3xl">
              {artifact.title}
            </h4>
          </div>
          <span className="label">{artifact.meta}</span>
        </div>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <p className="max-w-md text-sm leading-relaxed text-ash">
            {artifact.note}
          </p>
          <a
            aria-label={`Buka ${artifact.title} ukuran penuh`}
            className="text-link shrink-0"
            href={artifact.image}
            rel="noopener noreferrer"
            target="_blank"
          >
            OPEN FULL <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </figcaption>
    </figure>
  );
}
