import React from "react";

/**
 * Small mono "engineering plate" eyebrow, e.g. PLATE 02 — APPROACH.
 * Babbage's own drawings for the Analytical Engine were numbered
 * plates, so numbering here encodes something real about the
 * subject rather than decorating arbitrarily.
 */
export default function PlateLabel({
  index,
  children,
  tone = "ink",
  className = "",
}: {
  index?: string;
  children: React.ReactNode;
  tone?: "ink" | "paper" | "brass";
  className?: string;
}) {
  const color =
    tone === "brass"
      ? "text-brass-bright"
      : tone === "paper"
      ? "text-text-paper-muted"
      : "text-verdigris";

  return (
    <div className={`plate-label flex items-center gap-3 ${color} ${className}`}>
      {index && (
        <span className="inline-flex items-center justify-center border border-current/40 px-1.5 py-0.5">
          {index}
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
