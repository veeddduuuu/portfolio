"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type ServiceStatus = {
  name: string;
  host: string;
  url: string;
  up: boolean;
  status?: number;
  latency: number;
};

type StatusResponse = {
  services: ServiceStatus[];
  checkedAt: string;
};

export default function SystemsStatus() {
  const [data, setData] = useState<StatusResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const res = await fetch("/api/status", { cache: "no-store" });
        const json = (await res.json()) as StatusResponse;
        if (active) setData(json);
      } catch {
        if (active) setData(null);
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    // Refresh periodically so the widget feels genuinely live.
    const id = setInterval(load, 60_000);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, []);

  const services = data?.services ?? [];

  return (
    <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            {!loading && (
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/70" />
            )}
            <span
              className={cn(
                "relative inline-flex size-2 rounded-full",
                loading ? "bg-muted-foreground/40" : "bg-emerald-500"
              )}
            />
          </span>
          <h3 className="text-sm font-semibold">Live systems</h3>
        </div>
        <span className="text-[11px] tabular-nums text-muted-foreground">
          {loading ? "checking…" : "auto-refreshes · 60s"}
        </span>
      </div>

      <ul className="flex flex-col divide-y divide-border">
        {loading && services.length === 0
          ? [0, 1].map((i) => (
              <li key={i} className="flex items-center gap-3 py-2.5">
                <span className="size-2 shrink-0 rounded-full bg-muted-foreground/30" />
                <span className="h-3 w-40 animate-pulse rounded bg-muted" />
                <span className="ml-auto h-3 w-12 animate-pulse rounded bg-muted" />
              </li>
            ))
          : services.map((svc) => (
              <li
                key={svc.host}
                className="flex items-center gap-3 py-2.5 text-sm"
              >
                <span
                  className={cn(
                    "size-2 shrink-0 rounded-full",
                    svc.up ? "bg-emerald-500" : "bg-red-500"
                  )}
                  aria-hidden
                />
                <div className="flex min-w-0 flex-col">
                  <a
                    href={svc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate font-medium text-foreground hover:text-brand"
                  >
                    {svc.name}
                  </a>
                  <span className="truncate text-[11px] text-muted-foreground">
                    {svc.host}
                  </span>
                </div>
                <div className="ml-auto flex shrink-0 flex-col items-end">
                  <span
                    className={cn(
                      "text-xs font-medium",
                      svc.up ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"
                    )}
                  >
                    {svc.up ? "operational" : "down"}
                  </span>
                  {svc.up && (
                    <span className="text-[11px] tabular-nums text-muted-foreground">
                      {svc.latency}ms
                    </span>
                  )}
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
}
