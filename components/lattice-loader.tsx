import type { CSSProperties } from "react";

/**
 * Lattice loader — the orbit pattern only, no label, timer or status states.
 * Adapted from React Bits' LatticeLoader (https://reactbits.dev/micro/lattice-loader).
 *
 * The 3x3 grid holds an 8-cell ring; `null` is the centre hole. Each number is the
 * cell's position in the ring, so multiplying it by STEP staggers the fades and the
 * light appears to travel around.
 */
const ORBIT = [0, 1, 2, 7, null, 3, 6, 5, 4];
const STEP = 108; // 90ms base step x 1.2 orbit scale
const CYCLE = 8 * STEP; // 864ms for a full lap

export function LatticeLoader({ cell = 10, gap = 4 }: { cell?: number; gap?: number }) {
  return (
    <span
      className="lattice grid"
      style={{ gridTemplateColumns: `repeat(3, ${cell}px)`, gap: `${gap}px` }}
    >
      {ORBIT.map((unit, i) => (
        <span
          key={i}
          className={`lattice__cell${unit === null ? " lattice__cell--hole" : ""} lattice-cell rounded-full bg-brand`}
          style={
            {
              width: cell,
              height: cell,
              // The hole sits dimmer than the idle cells and never animates.
              ...(unit === null
                ? { opacity: 0.07 }
                : {
                    opacity: "var(--ll-idle)",
                    animationDelay: `${unit * STEP}ms`,
                    animationDuration: `${CYCLE}ms`,
                  }),
            } as CSSProperties
          }
        />
      ))}
    </span>
  );
}
