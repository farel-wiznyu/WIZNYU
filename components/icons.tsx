type IconProps = {
  className?: string;
};

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      height="16"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth="1.25"
      viewBox="0 0 16 16"
      width="16"
    >
      <path d="M4 12 12 4M6 4h6v6" />
    </svg>
  );
}

export function ArrowDown({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      height="16"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth="1.25"
      viewBox="0 0 16 16"
      width="16"
    >
      <path d="M8 2v12M3 9l5 5 5-5" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      height="16"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth="1.25"
      viewBox="0 0 16 16"
      width="16"
    >
      <path d="M2 8h12M9 3l5 5-5 5" />
    </svg>
  );
}

export function ArrowUp({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      height="16"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth="1.25"
      viewBox="0 0 16 16"
      width="16"
    >
      <path d="M8 14V2M3 7l5-5 5 5" />
    </svg>
  );
}

export function StarMark({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      height="16"
      stroke="currentColor"
      strokeWidth="1"
      viewBox="0 0 16 16"
      width="16"
    >
      <path d="M8 0v16M0 8h16M2.3 2.3l11.4 11.4M13.7 2.3 2.3 13.7" />
    </svg>
  );
}

export function PlayMark({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      focusable="false"
      height="12"
      viewBox="0 0 12 12"
      width="12"
    >
      <path d="M2 1.5v9L10.5 6 2 1.5Z" />
    </svg>
  );
}

export function StopMark({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      focusable="false"
      height="12"
      viewBox="0 0 12 12"
      width="12"
    >
      <rect height="8" width="8" x="2" y="2" />
    </svg>
  );
}

export function MenuMark({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      height="16"
      stroke="currentColor"
      strokeWidth="1.25"
      viewBox="0 0 16 16"
      width="16"
    >
      <path d="M2 5h12M2 11h12" />
    </svg>
  );
}

export function CloseMark({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      height="16"
      stroke="currentColor"
      strokeWidth="1.25"
      viewBox="0 0 16 16"
      width="16"
    >
      <path d="M3 3l10 10M13 3 3 13" />
    </svg>
  );
}
