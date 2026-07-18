import Image from "next/image";

/**
 * Wraps a photograph in the ink/brass duotone treatment used
 * throughout the site, so real photography sits comfortably next to
 * the brass/verdigris linework instead of reading as a stock photo
 * dropped onto a different design system.
 *
 * Uses next/image with `fill`, so the parent needs a sized,
 * `position: relative` box (pass that via className, e.g. an
 * aspect-ratio or fixed-height div).
 */
export default function DuotonePhoto({
  src,
  alt,
  className = "",
  priority = false,
  tone = "ink-brass",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  tone?: "ink-brass" | "ink-verdigris";
}) {
  const gradient =
    tone === "ink-verdigris"
      ? "linear-gradient(135deg, var(--color-ink) 0%, var(--color-verdigris) 100%)"
      : "linear-gradient(135deg, var(--color-ink) 0%, var(--color-brass) 100%)";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover grayscale contrast-[1.08]"
      />
      <div
        className="absolute inset-0 mix-blend-color"
        style={{ background: gradient }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink/15" aria-hidden="true" />
    </div>
  );
}
