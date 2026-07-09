/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="w-full aspect-video rounded-lg border border-border bg-muted" />
    );
  }

  return (
    <div className="w-full aspect-video rounded-lg border border-border overflow-hidden bg-background">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-[1.05]"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

interface Props {
  title: string;
  href?: string;
  tagline?: string;
  builtWith?: string;
  description?: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  image2?: string;
  video?: string;
  bullets?: readonly string[];
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  tagline,
  builtWith,
  description,
  dates,
  tags,
  image,
  image2,
  video,
  bullets,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:ring-2 hover:ring-muted sm:p-6",
        className
      )}
    >
      {/* Header: title + tagline on the left, Live/GitHub on the right */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 flex-col gap-1">
          <div className="flex items-center gap-2">
            <Link
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5"
            >
              <h3 className="text-lg font-semibold leading-none">{title}</h3>
              <ArrowUpRight
                className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                aria-hidden
              />
            </Link>
            <time className="text-xs tabular-nums text-muted-foreground">
              {dates}
            </time>
          </div>
          {tagline && (
            <p className="text-sm text-muted-foreground">{tagline}</p>
          )}
        </div>
        {links && links.length > 0 && (
          <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  className="flex items-center gap-1.5 bg-primary text-xs text-primary-foreground hover:bg-primary/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* "Built a X that does Y" one-liner */}
      {builtWith && (
        <p className="text-sm font-medium text-foreground/90">{builtWith}</p>
      )}

      <hr className="border-border" />

      {/* Two stacked screenshots beside bullet list */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start">
        <div className="flex flex-col gap-3">
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video rounded-lg border border-border object-cover"
              />
            ) : (
              <ProjectImage src={image || ""} alt={title} />
            )}
          </Link>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <ProjectImage src={image2 || ""} alt={`${title} — screenshot 2`} />
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          {bullets && bullets.length > 0 ? (
            <ul className="flex flex-col gap-1.5">
              {bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          ) : (
            description && (
              <div className="prose prose-sm max-w-full text-pretty font-sans text-sm leading-relaxed text-muted-foreground dark:prose-invert">
                <Markdown>{description}</Markdown>
              </div>
            )
          )}
        </div>
      </div>

      {/* Tech stack */}
      {tags && tags.length > 0 && (
        <>
          <hr className="border-border" />
          <div className="flex flex-wrap items-center gap-1.5">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="h-6 w-fit border border-border px-2 text-[11px] font-medium"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
