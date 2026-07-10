/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { DATA } from "@/data/resume";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none transition-all duration-200 group-hover:ring-foreground/25"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <div className="w-full grid gap-6">
      {DATA.work.map((work) => (
        <div
          key={work.company}
          className="group w-full grid gap-3"
        >
          {/* Header row */}
          <div className="flex items-center gap-x-3 justify-between w-full text-left">
            <div className="flex items-center gap-x-3 flex-1 min-w-0">
              <LogoImage src={work.logoUrl} alt={work.company} />
              <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                <div className="font-semibold leading-none flex items-center gap-2">
                  {work.company}
                </div>
                <div className="font-sans text-sm text-muted-foreground">
                  {work.title}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
              <span>
                {work.start} - {work.end ?? "Present"}
              </span>
            </div>
          </div>

          {/* Bullet points — always visible */}
          <ul className="ml-13 flex flex-col gap-1.5">
            {work.description.map((bullet, idx) => (
              <li
                key={idx}
                className="flex gap-2 text-xs sm:text-sm text-muted-foreground"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
