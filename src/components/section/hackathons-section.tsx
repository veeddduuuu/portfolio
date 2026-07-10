/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import {
  Timeline,
  TimelineItem,
  TimelineConnectItem,
} from "@/components/timeline";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="z-10 rounded-xl border border-brand/30 bg-linear-to-r from-brand to-brand-2 px-4 py-1 shadow-[0_2px_24px_-4px] shadow-brand/50">
              <span className="text-sm font-medium text-white">
                Achievements
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Wins & recognitions
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Hackathon wins, competitions, awards and certifications I&apos;ve
              picked up along the way.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.achievements.map((achievement) => (
            <TimelineItem
              key={achievement.title + achievement.dates}
              className="group w-full flex items-start justify-between gap-10"
            >
              <TimelineConnectItem className="flex items-start justify-center">
                {achievement.image ? (
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none transition-all duration-200 group-hover:ring-foreground/25"
                  />
                ) : (
                  <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none" />
                )}
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                {achievement.dates && (
                  <time className="text-xs text-muted-foreground">
                    {achievement.dates}
                  </time>
                )}
                {achievement.title && (
                  <h3 className="font-semibold leading-none transition-colors duration-200 group-hover:text-foreground/70">
                    {achievement.title}
                  </h3>
                )}
                {achievement.location && (
                  <p className="text-sm text-muted-foreground">
                    {achievement.location}
                  </p>
                )}
                {achievement.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                    {achievement.description}
                  </p>
                )}
                {achievement.links && achievement.links.length > 0 && (
                  <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                    {achievement.links.map((link, idx) => (
                      <Link
                        href={link.href}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                          {link.icon}
                          {link.title}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
