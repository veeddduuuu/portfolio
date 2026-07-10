"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import SystemsStatus from "@/components/section/systems-status";

// ---------------------------------------------------------------------------
// Data-driven architecture specs for the flagship systems. Each tier is a row
// of nodes; tiers are connected top-to-bottom by an animated "data flow" line.
// ---------------------------------------------------------------------------
type ArchNode = { label: string; sub?: string; accent?: boolean };
type Tier = { nodes: ArchNode[]; note?: string };
type Architecture = {
  id: string;
  name: string;
  blurb: string;
  tiers: Tier[];
  sidecars: { label: string; sub: string }[];
};

const ARCHITECTURES: Architecture[] = [
  {
    id: "codeexec",
    name: "Code Execution Engine",
    blurb:
      "Distributed, sandboxed execution with a pre-warmed container pool and self-healing jobs.",
    tiers: [
      { nodes: [{ label: "Client", sub: "web UI" }] },
      { nodes: [{ label: "Nginx", sub: "reverse proxy · TLS" }] },
      { nodes: [{ label: "API", sub: "Express · TypeScript" }] },
      {
        nodes: [{ label: "BullMQ", sub: "Redis queue", accent: true }],
        note: "deterministic state machine · exponential backoff",
      },
      {
        nodes: [
          { label: "Worker", sub: "sandbox" },
          { label: "Worker", sub: "sandbox" },
          { label: "Worker", sub: "sandbox" },
        ],
        note: "pre-warmed container pool · 8ms cold start",
      },
    ],
    sidecars: [
      { label: "Redis Pub/Sub → WebSocket", sub: "live stdout/stderr stream" },
      { label: "PostgreSQL", sub: "job + run history" },
      { label: "Dead-letter queue", sub: "self-healing recovery" },
    ],
  },
  {
    id: "niyantran",
    name: "Niyantran",
    blurb:
      "Real-time traffic simulation over a 294-junction graph with deterministic fallbacks.",
    tiers: [
      { nodes: [{ label: "Client", sub: "ops dashboard" }] },
      { nodes: [{ label: "Nginx", sub: "WebSocket upgrade" }] },
      { nodes: [{ label: "API", sub: "Express · TypeScript" }] },
      {
        nodes: [{ label: "Sim engine", sub: "weighted BFS", accent: true }],
        note: "294-junction graph · 30s cascade ticks",
      },
      {
        nodes: [{ label: "BullMQ · Redis Pub/Sub", sub: "telemetry fan-out" }],
        note: "sub-second spatial broadcast",
      },
    ],
    sidecars: [
      { label: "Groq LLM", sub: "routing · rule-based fallback" },
      { label: "Mappls API", sub: "routing · haversine fallback" },
      { label: "Twilio", sub: "WhatsApp alerts" },
    ],
  },
];

function Flow({ delay = 0 }: { delay?: number }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="relative my-1 h-5 w-px bg-border/70">
      {!shouldReduceMotion && (
        <motion.span
          className="absolute -left-px top-0 h-3 w-[3px] rounded-full bg-brand shadow-[0_0_8px] shadow-brand"
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: [-12, 20], opacity: [0, 1, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeIn",
            delay,
          }}
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

function Diagram({ arch }: { arch: Architecture }) {
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
              <div className="text-xs font-medium leading-tight">{s.label}</div>
              <div className="text-[10px] text-muted-foreground">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SystemsSection() {
  const [activeId, setActiveId] = useState(ARCHITECTURES[0].id);
  const active =
    ARCHITECTURES.find((a) => a.id === activeId) ?? ARCHITECTURES[0];

  return (
    <section id="systems" className="overflow-hidden">
      <div className="flex min-h-0 w-full flex-col gap-y-8">
        {/* Pill header — matches the Projects / Achievements dividers */}
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="z-10 rounded-xl border border-brand/30 bg-linear-to-r from-brand to-brand-2 px-4 py-1 shadow-[0_2px_24px_-4px] shadow-brand/50">
              <span className="text-sm font-medium text-white">
                Under the Hood
              </span>
            </div>
            <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              How these systems are built
            </h2>
            <p className="text-balance text-center text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Queues, sandboxes, real-time streams and self-healing recovery —
              deployed and running right now.
            </p>
          </div>
        </div>

        <SystemsStatus />

        {/* Architecture explorer */}
        <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
          <div className="mb-5 flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-1 rounded-lg border border-border bg-muted/40 p-1">
              {ARCHITECTURES.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setActiveId(a.id)}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm",
                    a.id === activeId
                      ? "bg-linear-to-r from-brand to-brand-2 text-white shadow-[0_2px_16px_-4px] shadow-brand/50"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {a.name}
                </button>
              ))}
            </div>
            <p className="max-w-md text-balance text-center text-xs text-muted-foreground sm:text-sm">
              {active.blurb}
            </p>
          </div>

          <Diagram arch={active} />
        </div>
      </div>
    </section>
  );
}
