"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  flipped: boolean;
  front: ReactNode;
  back: ReactNode;
}

/**
 * A 3D flip container. The front stays in normal flow (so the card is correctly
 * sized on first paint and during SSR); the back is overlaid absolutely. The
 * wrapper height is measured from the active face and animates during the flip.
 * Reduced-motion users get an instant swap with no rotation.
 */
export default function FlipCard({ flipped, front, back }: FlipCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
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
          className={cn(
            "inset-x-0 top-0 [backface-visibility:hidden] [transform:rotateY(0deg)]",
            // In flow until flipped, so the card is sized correctly by default
            // and can still shrink below the front's height once flipped away.
            flipped ? "absolute" : "relative"
          )}
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

