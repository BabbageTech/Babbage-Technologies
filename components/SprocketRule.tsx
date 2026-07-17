import React from "react";

/**
 * The signature structural device for Babbage Technologies:
 * a row of perforations echoing punch-card stock and sprocket
 * paper — the input medium of Babbage's Analytical Engine.
 * Used as a literal section divider, not decoration.
 */
export default function SprocketRule({
  tone = "paper",
  className = "",
}: {
  tone?: "paper" | "ink";
  className?: string;
}) {
  const holeColor = tone === "ink" ? "bg-ink-line" : "bg-paper-line";
  const lineColor = tone === "ink" ? "border-ink-line" : "border-paper-line";

  return (
    <div
      className={`w-full flex items-center gap-[3px] sm:gap-[5px] overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className={`flex-1 border-t ${lineColor}`} />
      {Array.from({ length: 48 }).map((_, i) => (
        <span
          key={i}
          className={`shrink-0 w-[3px] h-[3px] sm:w-1 sm:h-1 rounded-full ${holeColor}`}
        />
      ))}
      <div className={`flex-1 border-t ${lineColor}`} />
    </div>
  );
}
