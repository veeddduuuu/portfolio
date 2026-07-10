import { DATA } from "@/data/resume";

// Ping fresh on every request — latency is only meaningful when un-cached.
export const dynamic = "force-dynamic";

type ServiceStatus = {
  name: string;
  url: string;
  host: string;
  up: boolean;
  status?: number;
  latency: number;
};

const TIMEOUT_MS = 4000;

async function check(name: string, url: string): Promise<ServiceStatus> {
  const host = (() => {
    try {
      return new URL(url).host;
    } catch {
      return url;
    }
  })();

  const start = Date.now();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      method: "GET",
      signal: controller.signal,
      cache: "no-store",
      headers: { "user-agent": "portfolio-healthcheck" },
    });
    return {
      name,
      url,
      host,
      up: res.ok,
      status: res.status,
      latency: Date.now() - start,
    };
  } catch {
    return { name, url, host, up: false, latency: Date.now() - start };
  } finally {
    clearTimeout(timeout);
  }
}

export async function GET() {
  // Derive the target list from the deployed projects — single source of truth.
  const targets = DATA.projects
    .filter((p) => typeof p.href === "string" && p.href.startsWith("http"))
    .map((p) => ({ name: p.title, url: p.href as string }));

  const services = await Promise.all(targets.map((t) => check(t.name, t.url)));

  return Response.json(
    { services, checkedAt: new Date().toISOString() },
    { headers: { "cache-control": "no-store" } }
  );
}
