"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Quantified, resume-backed impact numbers. Edit here to keep them accurate.
const STATS = [
  { value: 8, suffix: "ms", label: "sandbox cold start" },
  { value: 99, suffix: "%", label: "cold-start reduction" },
  { value: 230, prefix: "<", suffix: "ms", label: "runtime latency" },
  { value: 294, label: "junction road graph" },
  { value: 4500, suffix: "+", label: "teams beaten · Flipkart GRiD" },
  { value: 400, suffix: "+", label: "DSA problems solved" },
] as const;

function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(shouldReduceMotion ? value : 0);

  useEffect(() => {
    if (!inView || shouldReduceMotion) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, shouldReduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {Math.round(display).toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="group flex flex-col items-center justify-center gap-1 bg-card p-3 text-center transition-colors duration-200 hover:bg-muted/40 sm:p-5"
        >
          <div className="bg-linear-to-br from-foreground to-brand bg-clip-text text-xl font-bold tracking-tighter text-transparent sm:text-3xl">
            <Counter
              value={stat.value}
              prefix={"prefix" in stat ? stat.prefix : ""}
              suffix={"suffix" in stat ? stat.suffix : ""}
            />
          </div>
          <div className="text-[10px] leading-tight text-muted-foreground sm:text-xs">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
