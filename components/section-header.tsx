import { StarMark } from "@/components/icons";

type SectionHeaderProps = {
  number: string;
  label: string;
  title: string;
  titleId: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  number,
  label,
  title,
  titleId,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <header className={className}>
      <div className="flex items-center gap-4">
        <span className="label label-bone">{number}</span>
        <span className="h-px flex-1 bg-line" />
        <span className="label">{label}</span>
        <StarMark className="h-2.5 w-2.5 shrink-0 text-ash" />
      </div>
      <div className="mt-9 grid gap-6 md:grid-cols-12 md:items-end">
        <h2
          className="display text-[clamp(2.75rem,7vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.045em] md:col-span-8"
          id={titleId}
        >
          {title}
        </h2>
        {description ? (
          <p className="max-w-md text-sm leading-relaxed text-ash md:col-span-4 md:justify-self-end">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
