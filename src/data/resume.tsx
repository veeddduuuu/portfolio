import { Icons } from "@/components/icons";
import {
  HomeIcon,
  Code2,
  Server,
  Database,
  MonitorSmartphone,
  Cloud,
  Wrench,
} from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Cpp } from "@/components/ui/svgs/cpp";
import { Express } from "@/components/ui/svgs/express";
import { Bullmq } from "@/components/ui/svgs/bullmq";
import { Prisma } from "@/components/ui/svgs/prisma";
import { Websocket } from "@/components/ui/svgs/websocket";
import { Redis } from "@/components/ui/svgs/redis";
import { Mongodb } from "@/components/ui/svgs/mongodb";
import { Supabase } from "@/components/ui/svgs/supabase";
import { ReactQuery } from "@/components/ui/svgs/reactquery";
import { Html5 } from "@/components/ui/svgs/html5";
import { Aws } from "@/components/ui/svgs/aws";
import { Azure } from "@/components/ui/svgs/azure";
import { Nginx } from "@/components/ui/svgs/nginx";
import { GithubActions } from "@/components/ui/svgs/githubactions";
import { Linux } from "@/components/ui/svgs/linux";
import { Git } from "@/components/ui/svgs/git";
import { Postman } from "@/components/ui/svgs/postman";
import { Vercel } from "@/components/ui/svgs/vercel";
import { Render } from "@/components/ui/svgs/render";

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
    "I'm a backend developer and a first-year student at [BIT Mesra](/#education).\n\nI like building resilient, real-time distributed systems. I'm fascinated by the hard parts of infrastructure—things like message queues, sandboxed runtimes, and keeping systems running when upstream APIs fail.\n\nLately, I've been:\n- Interning at [Neo Labs](/#work) working on production-grade Node.js infrastructure.\n- Shrinking sandbox cold starts by 99% (down to 8ms) in my [distributed code execution engine](/#projects).\n- Designing a real-time traffic simulator running over a 294-junction graph.\n\nI've also solved 400+ DSA problems. Right now, I'm looking for a challenging backend internship during placement season where I can get my hands dirty with infrastructure.",
  avatarUrl: "/me.png", // TODO(vedant): drop your photo at public/me.png
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  // ---------------------------------------------------------------------------
  // Skills, grouped exactly as on the resume. Each item is { name, icon? }.
  // ---------------------------------------------------------------------------
  skills: {
    Languages: {
      icon: Code2,
      items: [
        { name: "TypeScript", icon: Typescript },
        { name: "JavaScript", icon: Javascript },
        { name: "C++", icon: Cpp },
        { name: "Go", icon: Golang },
      ],
    },
    Backend: {
      icon: Server,
      items: [
        { name: "Node.js", icon: Nodejs },
        { name: "Express.js", icon: Express },
        { name: "BullMQ", icon: Bullmq },
        { name: "Prisma", icon: Prisma },
        { name: "WebSockets", icon: Websocket },
      ],
    },
    Databases: {
      icon: Database,
      items: [
        { name: "PostgreSQL", icon: Postgresql },
        { name: "Redis", icon: Redis },
        { name: "MongoDB", icon: Mongodb },
        { name: "Supabase", icon: Supabase },
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
        { name: "Azure Blob Storage", icon: Azure },
        { name: "Nginx", icon: Nginx },
        { name: "GitHub Actions", icon: GithubActions },
        { name: "Linux", icon: Linux },
        { name: "Kubernetes", icon: Kubernetes },
      ],
    },
    Tools: {
      icon: Wrench,
      items: [
        { name: "Git", icon: Git },
        { name: "Postman", icon: Postman },
        { name: "Vercel", icon: Vercel },
        { name: "Render", icon: Render },
      ],
    },
  },

  contact: {
    email: "vedant2545@gmail.com",
    tel: "+917709861898",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vedant2545", // TODO(vedant): confirm handle
        icon: Icons.github,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/vedant2545", // TODO(vedant): confirm handle
        icon: Icons.leetcode,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vedant-shende", // TODO(vedant): confirm handle
        icon: Icons.linkedin,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/vedant_shende_resume.pdf",
        icon: Icons.resume,
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


  // ---------------------------------------------------------------------------
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
          href: "https://leetcode.com/u/vedant2545", // TODO(vedant): confirm handle
        },
      ],
    },
  ],
} as const;
