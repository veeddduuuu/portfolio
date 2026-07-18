import { Icons } from "@/components/icons";
import {
  HomeIcon,
  Code2,
  Server,
  Database,
  MonitorSmartphone,
  Cloud,
} from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Cpp } from "@/components/ui/svgs/cpp";
import { Express } from "@/components/ui/svgs/express";
import { Bullmq } from "@/components/ui/svgs/bullmq";
import { Websocket } from "@/components/ui/svgs/websocket";
import { Redis } from "@/components/ui/svgs/redis";
import { ReactQuery } from "@/components/ui/svgs/reactquery";
import { Html5 } from "@/components/ui/svgs/html5";
import { Aws } from "@/components/ui/svgs/aws";
import { Nginx } from "@/components/ui/svgs/nginx";
import { GithubActions } from "@/components/ui/svgs/githubactions";
import { Linux } from "@/components/ui/svgs/linux";
import { Grpc } from "@/components/ui/svgs/grpc";
import { Rabbitmq } from "@/components/ui/svgs/rabbitmq";

// =============================================================================
// Single source of truth for the whole site. Populated from Vedant's resume.
// A few links are marked `TODO(vedant)` — plug in your exact profile URLs.
// Drop images where noted (public/…) and they'll render automatically.
// =============================================================================

export const DATA = {
  name: "Vedant Shende",
  initials: "VS",
  url: "https://vedantshende.com", // TODO(vedant): your deployed domain
  location: "Ranchi, Jharkhand, India",
  locationLink: "https://www.google.com/maps/place/ranchi",
  // Resume PDF lives in /public and is opened by the Resume button + dock.
  resumeUrl: "/vedant_shende_resume.pdf",
  description:
    "Backend developer who likes building fast, fault-tolerant distributed systems.",
  summary:
    "I'm a backend developer and a third-year student at [BIT Mesra](/#education).\n\nI like building resilient, real-time distributed systems. I'm fascinated by the hard parts of infrastructure—things like message queues, sandboxed runtimes, and keeping systems running when upstream APIs fail.\n\nLately, I've been:\n- Interning at [Neo Labs](/#work) working on production-grade Node.js infrastructure.\n- Shrinking sandbox cold starts by 99% (down to 8ms) in my [distributed code execution engine](/#projects).\n- Designing a real-time traffic simulator running over a 294-junction graph.\n\nI've also solved 400+ DSA problems. Right now, I'm looking for a challenging backend internship during placement season where I can get my hands dirty with infrastructure.",
  avatarUrl: "/me.jpeg", // photo lives at public/me.jpeg
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  // ---------------------------------------------------------------------------
  // Skills, grouped exactly as on the resume. Each item is { name, icon? }.
  // ---------------------------------------------------------------------------
  skills: {
    Languages: {
      icon: Code2,
      items: [
        { name: "Go", icon: Golang },
        { name: "TypeScript", icon: Typescript },
        { name: "JavaScript", icon: Javascript },
        { name: "C++", icon: Cpp },
      ],
    },
    Backend: {
      icon: Server,
      items: [
        { name: "Node.js", icon: Nodejs },
        { name: "Express.js", icon: Express },
        { name: "gRPC", icon: Grpc },
        { name: "RabbitMQ", icon: Rabbitmq },
        { name: "BullMQ", icon: Bullmq },
        { name: "WebSockets", icon: Websocket },
      ],
    },
    Databases: {
      icon: Database,
      items: [
        { name: "PostgreSQL", icon: Postgresql },
        { name: "Redis", icon: Redis },
      ],
    },
    Frontend: {
      icon: MonitorSmartphone,
      items: [
        { name: "React", icon: ReactLight },
        { name: "React Query", icon: ReactQuery },
        { name: "HTML5 / CSS3", icon: Html5 },
      ],
    },
    DevOps: {
      icon: Cloud,
      items: [
        { name: "Docker", icon: Docker },
        { name: "AWS (EC2)", icon: Aws },
        { name: "Nginx", icon: Nginx },
        { name: "GitHub Actions", icon: GithubActions },
        { name: "Linux", icon: Linux },
      ],
    },
  },

  contact: {
    email: "vedant2545@gmail.com",
    tel: "+917709861898",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/veeddduuuu/",
        icon: Icons.github,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/veeddduuuu/",
        icon: Icons.leetcode,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vedant-prashant-shende/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/vedant_shende_resume.pdf",
        icon: Icons.resume,
        navbar: true,
      },
      takeuforward: {
        name: "takeUforward",
        url: "https://takeuforward.org/profile/vedant_shende",
        icon: Icons.takeuforward,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:vedant2545@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Neo Labs",
      href: "#", // TODO(vedant): company link if any
      badges: [],
      location: "Remote",
      title: "Backend Developer Intern",
      logoUrl: "/neolabs.jpeg",
      start: "Apr 2026",
      end: "Jun 2026",
      description: [
        "Architected a real-time OpenAI financial circuit breaker across API and worker nodes using Redis atomic evaluation (MULTI/LUA), enforcing per-user and global daily hard caps that mitigated runaway embedding loops and protected production budgets from uncapped LLM costs.",
        "Resolved a silent-failure gap across 7 production workers where jobs exhausting retries vanished without a trace, implementing a standardized dead-letter-queue handler with audit logging that restored failure visibility platform-wide.",
        "Built an asynchronous data-export pipeline generating user data as JSON/PDF, uploading to Azure Blob via SAS-signed URLs, and triggering push/in-app notifications on completion via a shared FCM/APNs dispatcher.",
        "Devised a two-step direct-to-blob audio upload flow (client-side SAS PUT, server-side confirm) with size-spoofing protection and mime validation, wiring successful uploads into the transcription pipeline.",
      ],
    },
  ],

  education: [
    {
      school: "Birla Institute of Technology, Mesra",
      href: "https://www.bitmesra.ac.in",
      degree:
        "B.Tech in Electrical and Electronics Engineering · CGPA 8.78/10",
      logoUrl: "/birlainstituteoftechnologymesra.jpeg",
      start: "Aug 2024",
      end: "May 2028",
      highlights: [
        "G.P. Birla Scholarship (2x) — Awarded twice for outstanding academic performance.",
        "Branch Topper — Ranked 1st in Electrical & Electronics Engineering in Semester 1.",
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // Projects — vertical timeline of wide cards.
  // ---------------------------------------------------------------------------
  projects: [
    {
      title: "Code Execution Engine",
      href: "https://codeexec.duckdns.org",
      dates: "2025",
      active: true,
      tagline: "Distributed, sandboxed code-execution platform.",
      builtWith:
        "Built a distributed sandboxed execution platform with a pre-warmed container pool, real-time log streaming and self-healing job recovery.",
      description: "",
      image: "/projects/code-execution-engine.png",
      image2: "/projects/code-execution-engine-2.png",
      bullets: [
        "Designed a distributed, sandboxed execution platform with a pre-warmed container pool, cutting sandbox startup time by 99% (8ms vs. 2s cold start) and reducing runtime latency to <230ms.",
        "Implemented a fault-tolerant job lifecycle using BullMQ and Redis to enforce a deterministic state machine, with self-healing DLQ routing and exponential backoffs for recovery across worker crashes.",
        "Developed a real-time observability pipeline using Redis Pub/Sub and WebSockets to stream stdout/stderr logs and execution traces live to the client.",
        "Orchestrated a 4-service architecture with Docker Compose and deployed on AWS EC2 behind an Nginx reverse proxy with CI/CD via GitHub Actions.",
      ],
      technologies: [
        "Node.js",
        "TypeScript",
        "Express",
        "PostgreSQL",
        "Redis",
        "BullMQ",
        "WebSockets",
        "Docker",
        "AWS EC2",
        "Nginx",
      ],
      // Rendered on the back of the card via the "Under the Hood" flip.
      architecture: {
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
          {
            label: "Redis Pub/Sub → WebSocket",
            sub: "live stdout/stderr stream",
          },
          { label: "PostgreSQL", sub: "job + run history" },
          { label: "Dead-letter queue", sub: "self-healing recovery" },
        ],
      },
      links: [
        {
          type: "Live",
          href: "https://codeexec.duckdns.org",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/veeddduuuu/Code-Execution-Engine",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Niyantran",
      href: "https://alphaq.duckdns.org",
      dates: "2025",
      active: true,
      tagline: "Real-time traffic simulation & fleet-dispatch engine.",
      builtWith:
        "Built a real-time traffic simulation over a 294-junction road graph that computes optimized fleet dispatch and barricade plans, with deterministic fallbacks for third-party outages.",
      description: "",
      image: "/projects/niyantran.png",
      image2: "/projects/niyantran-2.png",
      bullets: [
        "Engineered a real-time traffic simulation on a 294-junction road graph using weighted BFS with time-of-day cascade multipliers to dynamically compute optimized fleet dispatch and barricade plans per event.",
        "Assembled an async Node.js backend with WebSockets, Redis Pub/Sub and BullMQ to broadcast 30-second simulation ticks and live spatial telemetry with sub-second delivery.",
        "Integrated Groq LLMs, Mappls API and Twilio (WhatsApp) for routing and alerts, with a multi-layer deterministic fallback — rule-based plans on Groq failure, haversine routing on Mappls outage.",
        "Containerized a 5-service stack with Docker Compose, deployed to AWS EC2 with Nginx reverse proxy for WebSocket upgrading, and configured GitHub Actions CI/CD gating on all service builds.",
      ],
      technologies: [
        "Node.js",
        "TypeScript",
        "Express",
        "PostgreSQL",
        "Redis",
        "BullMQ",
        "WebSockets",
        "Docker",
        "AWS EC2",
        "Nginx",
        "Groq",
        "Mappls API",
      ],
      architecture: {
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
            nodes: [
              { label: "BullMQ · Redis Pub/Sub", sub: "telemetry fan-out" },
            ],
            note: "sub-second spatial broadcast",
          },
        ],
        sidecars: [
          { label: "Groq LLM", sub: "routing · rule-based fallback" },
          { label: "Mappls API", sub: "routing · haversine fallback" },
          { label: "Twilio", sub: "WhatsApp alerts" },
        ],
      },
      links: [
        {
          type: "Live",
          href: "https://alphaq.duckdns.org",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/veeddduuuu/niyantran",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "PowerShell Agent",
      href: "https://github.com/veeddduuuu/pwsh-agent-langgraph",
      dates: "2026",
      active: true,
      tagline: "Natural Language to Windows CLI Agent.",
      builtWith: "Built an intelligent terminal assistant using LangGraph and Groq LLMs.",
      description: "",
      image: "",
      image2: "",
      bullets: [
        "Developed a natural language to CLI agent using LangGraph and Groq LLMs to translate plain English requests into PowerShell/Bash commands.",
        "Implemented a deterministic state machine with built-in safety screening to evaluate and block destructive commands before execution.",
        "Containerized the agent using Docker for isolated execution with interactive and single-shot execution modes."
      ],
      technologies: [
        "Python",
        "LangGraph",
        "LangChain",
        "Groq",
        "Docker",
        "PowerShell"
      ],
      architecture: {
        blurb: "State machine driven command generation, safety screening, and execution using LangGraph.",
        tiers: [
          { nodes: [{ label: "User Prompt", sub: "Interactive / CLI args" }] },
          { nodes: [{ label: "generate_command", sub: "Groq LLM processing", accent: true }] },
          {
            nodes: [{ label: "screen_command", sub: "Safety checks" }],
            note: "Automatically blocks destructive commands"
          },
          {
            nodes: [
              { label: "execute_command", sub: "Safe command execution" },
              { label: "blocked", sub: "Return safety reason" }
            ],
            note: "Requires user confirmation or --auto flag"
          }
        ],
        sidecars: [
          { label: "Docker Container", sub: "Isolated execution environment" },
          { label: "PowerShell / Bash", sub: "Shell engine" }
        ]
      },
      links: [
        {
          type: "GitHub",
          href: "https://github.com/veeddduuuu/pwsh-agent-langgraph",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],  // ---------------------------------------------------------------------------
  // Achievements (awards, rankings, competitions).
  // ---------------------------------------------------------------------------
  achievements: [
    {
      title: "Flipkart GRiD 2.0 — Round 2 Qualifier",
      dates: "National level",
      location: "",
      description:
        "Qualified for Round 2 out of 4,500+ competing teams in Flipkart's national-level AI traffic management challenge.",
      image: "/flipkart_grid.png",
      links: [],
    },
    {
      title: "400+ DSA Problems Solved",
      dates: "Ongoing",
      location: "",
      description:
        "Solved 400+ data-structures & algorithms problems across LeetCode and TUF+.",
      image: "",
      links: [
        {
          title: "LeetCode",
          icon: <Icons.leetcode className="h-4 w-4" />,
          href: "https://leetcode.com/u/veeddduuuu/",
        },
        {
          title: "takeUforward",
          icon: <Icons.takeuforward className="h-4 w-4" />,
          href: "https://takeuforward.org/profile/vedant_shende",
        },
      ],
    },
  ],
} as const;
