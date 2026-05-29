"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: 10, suffix: "M+", label: "USD annual sales scale" },
  { value: 35, suffix: "+", label: "Export markets served" },
  { value: 120, suffix: "+", label: "Automotive component programs" },
  { value: 98, suffix: "%", label: "On-time delivery target" }
];

export function AnimatedStats() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1200;
    let frame = 0;

    function tick(now: number) {
      const next = Math.min(1, (now - start) / duration);
      setProgress(next);
      if (next < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-[linear-gradient(180deg,#071421,#030911)] px-5 py-9 lg:px-8">
          <strong className="block text-4xl font-semibold text-white md:text-5xl">
            {Math.round(stat.value * progress)}
            {stat.suffix}
          </strong>
          <span className="mt-3 block text-sm uppercase tracking-[0.14em] text-steel-300">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
