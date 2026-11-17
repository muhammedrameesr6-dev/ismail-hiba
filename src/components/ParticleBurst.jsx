import React, { useState, useEffect } from "react";
import { SlenderLeaf, CurvedLeaf, PetalLeaf, SparkleDust } from "./Ornaments";

export function ParticleBurst({ onTap }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    let idCounter = 0;
    const handlePointerDown = (e) => {
      if (onTap) onTap();
      if (e.target?.closest("input, textarea")) return;

      const clientX =
        e.clientX ??
        (e.touches && e.touches[0] ? e.touches[0].clientX : window.innerWidth / 2);
      const clientY =
        e.clientY ??
        (e.touches && e.touches[0] ? e.touches[0].clientY : window.innerHeight / 3);

      const count = 11 + Math.floor(Math.random() * 5);
      const sways = ["leaf-sway-1", "leaf-sway-2", "leaf-sway-3"];

      const newParticles = Array.from({ length: count }, (_, idx) => {
        const rand = Math.random();
        let type = "slender";
        let w = 16;
        let h = 24;

        if (rand < 0.38) {
          type = "slender";
          const scale = 0.8 + Math.random() * 0.55;
          w = Math.round(18 * scale);
          h = Math.round(28 * scale);
        } else if (rand < 0.72) {
          type = "curved";
          const scale = 0.8 + Math.random() * 0.55;
          w = Math.round(22 * scale);
          h = Math.round(26 * scale);
        } else if (rand < 0.88) {
          type = "petal";
          const scale = 0.75 + Math.random() * 0.5;
          w = Math.round(19 * scale);
          h = Math.round(19 * scale);
        } else {
          type = "sparkle";
          const scale = 0.65 + Math.random() * 0.45;
          w = Math.round(14 * scale);
          h = Math.round(14 * scale);
        }

        const swayClass =
          type === "sparkle"
            ? "sparkle-twinkle"
            : sways[Math.floor(Math.random() * sways.length)];
        const delaySec = (idx / count) * 0.28 + Math.random() * 0.08;
        const driftX = (Math.random() - 0.5) * 160;
        const fallY = 190 + Math.random() * 210;
        const fallDur = 2.6 + Math.random() * 1.2;
        const swayDur = 1.1 + Math.random() * 0.7;
        const swayDelay = -Math.random() * 1.5;

        return {
          id: ++idCounter,
          type,
          x: clientX + (Math.random() - 0.5) * 44,
          y: clientY + (Math.random() - 0.5) * 20,
          w,
          h,
          swayClass,
          delaySec,
          driftX,
          fallY,
          fallDur,
          swayDur,
          swayDelay,
        };
      });

      setParticles((prev) => [
        ...(prev.length > 35 ? prev.slice(prev.length - 35) : prev),
        ...newParticles,
      ]);

      const idSet = new Set(newParticles.map((p) => p.id));
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => !idSet.has(p.id)));
      }, 4200);
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, [onTap]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-60 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="leaf-particle"
          style={{
            left: p.x,
            top: p.y,
            width: p.w,
            height: p.h,
            "--drift-x": `${p.driftX}px`,
            "--fall-y": `${p.fallY}px`,
            "--fall-dur": `${p.fallDur}s`,
            "--delay": `${p.delaySec.toFixed(3)}s`,
          }}
        >
          <div
            className={p.swayClass}
            style={{
              "--sway-dur": `${p.swayDur}s`,
              "--sway-delay": `${p.swayDelay}s`,
            }}
          >
            {p.type === "slender" && <SlenderLeaf />}
            {p.type === "curved" && <CurvedLeaf />}
            {p.type === "petal" && <PetalLeaf />}
            {p.type === "sparkle" && <SparkleDust />}
          </div>
        </div>
      ))}
    </div>
  );
}
