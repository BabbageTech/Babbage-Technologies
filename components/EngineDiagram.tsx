"use client";

import { motion } from "framer-motion";

/**
 * The page's signature element: a technical-drawing style diagram
 * of a gear train, rendered like a plate from an engineer's
 * notebook — brass linework on ink, with measurement ticks and
 * plate references. A literal nod to Babbage's Engine drawings,
 * standing in for the generic "dashboard mockup" hero pattern.
 */
export default function EngineDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 560"
      className={className}
      role="img"
      aria-label="Technical diagram of an interlocking gear train"
    >
      <defs>
        <circle id="tooth-marker" r="1.5" />
      </defs>

      {/* Baseplate frame */}
      <rect x="20" y="20" width="520" height="520" fill="none" stroke="var(--color-ink-line)" strokeWidth="1" />
      <rect x="32" y="32" width="496" height="496" fill="none" stroke="var(--color-ink-line)" strokeWidth="1" strokeDasharray="2 4" />

      {/* corner ticks */}
      {[[20,20],[540,20],[20,540],[540,540]].map(([x,y],i) => (
        <g key={i}>
          <line x1={x-8} y1={y} x2={x+8} y2={y} stroke="var(--color-brass)" strokeWidth="1" />
          <line x1={x} y1={y-8} x2={x} y2={y+8} stroke="var(--color-brass)" strokeWidth="1" />
        </g>
      ))}

      {/* Large gear, slow rotation */}
      <motion.g
        style={{ transformOrigin: "195px 235px" }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
        <Gear cx={195} cy={235} r={92} teeth={18} stroke="var(--color-brass-bright)" />
      </motion.g>

      {/* Small gear meshing, opposite rotation, faster */}
      <motion.g
        style={{ transformOrigin: "342px 260px" }}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 22 }}
      >
        <Gear cx={342} cy={260} r={54} teeth={12} stroke="var(--color-verdigris-bright)" />
      </motion.g>

      {/* Small satellite gear */}
      <motion.g
        style={{ transformOrigin: "310px 390px" }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 16 }}
      >
        <Gear cx={310} cy={390} r={34} teeth={10} stroke="var(--color-brass)" />
      </motion.g>

      {/* Connecting rod / linkage */}
      <line x1={195} y1={235} x2={342} y2={260} stroke="var(--color-ink-line)" strokeWidth="1" strokeDasharray="1 4" />
      <line x1={342} y1={260} x2={310} y2={390} stroke="var(--color-ink-line)" strokeWidth="1" strokeDasharray="1 4" />

      {/* Register / counter dial, bottom-left — a nod to the Engine's number wheels */}
      <g transform="translate(90,420)">
        <circle r="46" fill="none" stroke="var(--color-brass)" strokeWidth="1.25" />
        <circle r="38" fill="none" stroke="var(--color-ink-line)" strokeWidth="1" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const x1 = Math.cos(a) * 38;
          const y1 = Math.sin(a) * 38;
          const x2 = Math.cos(a) * 44;
          const y2 = Math.sin(a) * 44;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-brass-bright)" strokeWidth="1" />;
        })}
        <motion.line
          x1="0" y1="0" x2="0" y2="-32"
          stroke="var(--color-brass-bright)"
          strokeWidth="1.5"
          style={{ transformOrigin: "0px 0px" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 12 }}
        />
        <circle r="2.5" fill="var(--color-brass-bright)" />
      </g>

      {/* Plate reference text */}
      <text x="44" y="500" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="0.08em" fill="var(--color-text-paper-muted)">
        FIG. I — TRAIN No. 7
      </text>
      <text x="44" y="60" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="0.08em" fill="var(--color-text-paper-muted)">
        BABBAGE TECHNOLOGIES
      </text>
      <text x="516" y="60" fontFamily="var(--font-mono)" fontSize="10" fill="var(--color-text-paper-muted)" textAnchor="end">
        SCALE 1:1
      </text>
    </svg>
  );
}

function Gear({
  cx,
  cy,
  r,
  teeth,
  stroke,
}: {
  cx: number;
  cy: number;
  r: number;
  teeth: number;
  stroke: string;
}) {
  const toothLen = r * 0.14;
  const points: string[] = [];
  const step = (Math.PI * 2) / (teeth * 2);
  for (let i = 0; i < teeth * 2; i++) {
    const a = i * step;
    const rad = i % 2 === 0 ? r + toothLen : r;
    const x = cx + Math.cos(a) * rad;
    const y = cy + Math.sin(a) * rad;
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return (
    <g>
      <polygon points={points.join(" ")} fill="none" stroke={stroke} strokeWidth="1.25" strokeLinejoin="round" />
      <circle cx={cx} cy={cy} r={r * 0.62} fill="none" stroke={stroke} strokeWidth="1" opacity="0.6" />
      <circle cx={cx} cy={cy} r={r * 0.1} fill={stroke} />
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i / 6) * Math.PI * 2;
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={cx + Math.cos(a) * r * 0.6}
            y2={cy + Math.sin(a) * r * 0.6}
            stroke={stroke}
            strokeWidth="0.75"
            opacity="0.5"
          />
        );
      })}
    </g>
  );
}
