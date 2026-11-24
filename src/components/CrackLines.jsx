import { cracks } from "./glass";

export const CrackLines = ({ times, className = "" }) => (
  <svg className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    {cracks.map((c, k) => (
      <line
        key={k}
        x1={c.a.x}
        y1={c.a.y}
        x2={c.b.x}
        y2={c.b.y}
        className={times ? "tr-crack" : "tr-crack-static"}
        style={times ? { animationDelay: `${times(k)}ms` } : undefined}
        vectorEffect="non-scaling-stroke"
      />
    ))}
  </svg>
);
