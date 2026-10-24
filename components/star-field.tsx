export function StarField({
  className = "",
  opacity = "opacity-20",
}: {
  className?: string;
  opacity?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`star-field pointer-events-none absolute inset-0 ${opacity} ${className}`}
    />
  );
}
