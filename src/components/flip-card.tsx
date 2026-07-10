"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

interface FlipCardProps {
  flipped: boolean;
  front: ReactNode;
  back: ReactNode;
}

/**
 * A 3D flip container. Both faces are absolutely stacked; the wrapper height is
 * measured from whichever face is active and animates smoothly during the flip.
 * Reduced-motion users get an instant swap with no rotation.
 */
export default function FlipCard({ flipped, front, back }: FlipCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    const measure = () => {
      const el = flipped ? backRef.current : frontRef.current;
      if (el) setHeight(el.offsetHeight);
    };
    measure();

    const ro = new ResizeObserver(measure);
    if (frontRef.current) ro.observe(frontRef.current);
    if (backRef.current) ro.observe(backRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [flipped]);

  if (shouldReduceMotion) {
    return <div>{flipped ? back : front}</div>;
  }

  return (
    <div className="[perspective:2000px]">
      <motion.div
        className="relative w-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ height }}
      >
        <div
          ref={frontRef}
          className="absolute inset-x-0 top-0 [backface-visibility:hidden] [transform:rotateY(0deg)]"
          style={{ pointerEvents: flipped ? "none" : "auto" }}
          inert={flipped || undefined}
        >
          {front}
        </div>
        <div
          ref={backRef}
          className="absolute inset-x-0 top-0 [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{ pointerEvents: flipped ? "auto" : "none" }}
          inert={!flipped || undefined}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}
