import { cn } from "@/lib/utils";

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className={cn("size-9 shrink-0", markClassName)}
      >
        <rect
          x="3"
          y="3"
          width="42"
          height="42"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M10 36 V18 L24 8 L38 18 V36"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M18 36 V24 H30 V36"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="24" cy="20" r="1.4" fill="currentColor" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[0.95rem] tracking-[0.18em] uppercase">
          Royal Bawa
        </span>
        <span className="mt-1 text-[0.62rem] tracking-[0.32em] uppercase text-muted-foreground">
          Builders
        </span>
      </span>
    </span>
  );
}
