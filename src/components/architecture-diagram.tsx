"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Reusable, data-driven architecture diagram. A vertical stack of tiers where
// each tier is a row of nodes, connected top-to-bottom by an animated data-flow
// line. Specs live alongside each project in the resume data.
// ---------------------------------------------------------------------------
export type ArchNode = { label: string; sub?: string; accent?: boolean };
export type Tier = { nodes: readonly ArchNode[]; note?: string };
export type Architecture = {
  blurb?: string;
  tiers: readonly Tier[];
  sidecars: readonly { label: string; sub: string }[];
};

function Flow({ delay = 0 }: { delay?: number }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="relative my-1 h-5 w-px bg-border/70">
      {!shouldReduceMotion && (
        <motion.span
          className="absolute -left-px top-0 h-3 w-[3px] rounded-full bg-brand shadow-[0_0_8px] shadow-brand"
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: [-12, 20], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeIn", delay }}
          aria-hidden
        />
      )}
    </div>
  );
}

function NodeBox({ node }: { node: ArchNode }) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-background px-3 py-1.5 text-center transition-colors duration-200 sm:px-4 sm:py-2",
        node.accent
          ? "border-brand/40 bg-brand/[0.06] hover:border-brand/60"
          : "border-border hover:border-foreground/25"
      )}
    >
      <div className="text-xs font-semibold leading-tight sm:text-sm">
        {node.label}
      </div>
      {node.sub && (
        <div className="text-[10px] text-muted-foreground sm:text-[11px]">
          {node.sub}
        </div>
      )}
    </div>
  );
}

export default function ArchitectureDiagram({ arch }: { arch: Architecture }) {
  return (
    <div className="flex flex-col items-center">
      {arch.tiers.map((tier, i) => (
        <div key={i} className="flex flex-col items-center">
          {i > 0 && <Flow delay={i * 0.18} />}
          <div className="flex flex-wrap items-stretch justify-center gap-2">
            {tier.nodes.map((node, n) => (
              <NodeBox key={n} node={node} />
            ))}
          </div>
          {tier.note && (
            <p className="mt-1.5 text-center text-[10px] text-muted-foreground sm:text-[11px]">
              {tier.note}
            </p>
          )}
        </div>
      ))}

      {arch.sidecars.length > 0 && (
        <div className="mt-6 w-full border-t border-dashed border-border pt-4">
          <p className="mb-2 text-center text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            Supporting services
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {arch.sidecars.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-border bg-muted/30 px-3 py-1.5 text-center"
              >
                <div className="text-xs font-medium leading-tight">
                  {s.label}
                </div>
                <div className="text-[10px] text-muted-foreground">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
