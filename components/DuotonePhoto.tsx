import Image from "next/image";

/**
 * A photo treatment that keeps real colour (the previous version
 * desaturated everything into a brass duotone, which read as cold
 * and filtered rather than human) and instead gives it a slightly
 * crafted, tactile presence: a fine brass corner mark and an
 * optional gentle tilt, so it feels placed by hand rather than
 * snapped into a grid.
 *
 * Uses next/image with `fill`, so the parent needs a sized,
 * `position: relative` box (pass that via className).
 */
export default function DuotonePhoto({
  src,
  alt,
  className = "",
  priority = false,
  tilt = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  tilt?: number;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={tilt ? { transform: `rotate(${tilt}deg)` } : undefined}
    >
      <div className="relative w-full h-full overflow-hidden rounded-[inherit] ring-1 ring-ink/10 shadow-card-hover">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        {/* faint warm grade — keeps real colour, just knocks the
            harsh edge off a raw stock photo */}
        <div
          className="absolute inset-0 bg-brass mix-blend-soft-light opacity-[0.08]"
          aria-hidden="true"
        />
      </div>
      {/* brass corner marks, echoing the plate-drawing motif elsewhere */}
      <span className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-brass" aria-hidden="true" />
      <span className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-brass" aria-hidden="true" />
    </div>
  );
}
