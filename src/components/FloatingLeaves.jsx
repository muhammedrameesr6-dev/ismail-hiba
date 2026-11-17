import React, { useState, useEffect } from "react";
import { SlenderLeaf, CurvedLeaf, PetalLeaf, SparkleDust } from "./Ornaments";

export function FloatingLeaves({ count = 18 }) {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const sways = ["leaf-sway-1", "leaf-sway-2", "leaf-sway-3"];
    const generated = Array.from({ length: count }, (_, idx) => {
      const rand = Math.random();
      let type = "slender";
      let w = 17;
      let h = 26;

      if (rand < 0.38) {
        type = "slender";
        const scale = 0.8 + Math.random() * 0.45;
        w = Math.round(18 * scale);
        h = Math.round(28 * scale);
      } else if (rand < 0.72) {
        type = "curved";
        const scale = 0.8 + Math.random() * 0.45;
        w = Math.round(22 * scale);
        h = Math.round(26 * scale);
      } else if (rand < 0.88) {
        type = "petal";
        const scale = 0.75 + Math.random() * 0.4;
        w = Math.round(19 * scale);
        h = Math.round(19 * scale);
      } else {
        type = "sparkle";
        const scale = 0.65 + Math.random() * 0.4;
        w = Math.round(13 * scale);
        h = Math.round(13 * scale);
      }

      const basePos = (idx / count) * 100;
      const left = Math.max(
        2,
        Math.min(95, basePos + (Math.random() - 0.5) * (100 / count))
      );
      const fallDur = 7 + Math.random() * 5.5;
      const fallDelay = -Math.random() * fallDur;
      const driftX = (Math.random() - 0.5) * 80;
      const swayClass =
        type === "sparkle"
          ? "sparkle-twinkle"
          : sways[Math.floor(Math.random() * sways.length)];
      const swayDur = 1.3 + Math.random() * 1;
      const swayDelay = -Math.random() * 2;

      return {
        id: idx,
        type,
        left,
        w,
        h,
        fallDur,
        fallDelay,
        driftX,
        swayClass,
        swayDur,
        swayDelay,
      };
    });
    setLeaves(generated);
  }, [count]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-35 overflow-hidden"
      aria-hidden="true"
    >
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="continuous-leaf-wrapper"
          style={{
            left: `${leaf.left}%`,
            width: leaf.w,
            height: leaf.h,
            "--drift-x": `${leaf.driftX}px`,
            "--fall-dur": `${leaf.fallDur}s`,
            "--fall-delay": `${leaf.fallDelay}s`,
          }}
        >
          <div
            className={leaf.swayClass}
            style={{
              "--sway-dur": `${leaf.swayDur}s`,
              "--sway-delay": `${leaf.swayDelay}s`,
            }}
          >
            {leaf.type === "slender" && <SlenderLeaf />}
            {leaf.type === "curved" && <CurvedLeaf />}
            {leaf.type === "petal" && <PetalLeaf />}
            {leaf.type === "sparkle" && <SparkleDust />}
          </div>
        </div>
      ))}
    </div>
  );
}
