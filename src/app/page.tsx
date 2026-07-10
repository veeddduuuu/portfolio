/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import AchievementsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="bg-linear-to-r from-foreground via-foreground to-brand bg-clip-text text-3xl font-semibold tracking-tighter text-transparent sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <Button asChild size="sm" className="mt-2 w-fit gap-1.5">
                  <a
                    href={DATA.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icons.resume className="size-4" />
                    Resume
                  </a>
                </Button>
              </BlurFade>
            </div>
            <BlurFade
              delay={BLUR_FADE_DELAY}
              className="order-1 md:order-2 relative"
            >
              {/* Soft glow behind the avatar — subtle, reads best in dark mode */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-3 rounded-full bg-foreground/[0.07] blur-2xl"
              />
              <Avatar className="relative size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted transition-transform duration-300 hover:scale-[1.03]">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade inView delay={BLUR_FADE_DELAY}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade inView delay={BLUR_FADE_DELAY * 2}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade inView delay={BLUR_FADE_DELAY}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade inView delay={BLUR_FADE_DELAY * 2}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade inView delay={BLUR_FADE_DELAY}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                inView
                key={education.school}
                delay={BLUR_FADE_DELAY * 2 + index * 0.05}
              >
                <div className="flex flex-col gap-3">
                  <Link
                    href={education.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-x-3 justify-between group"
                  >
                    <div className="flex items-center gap-x-3 flex-1 min-w-0">
                      {education.logoUrl ? (
                        <img
                          src={education.logoUrl}
                          alt={education.school}
                          className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                        />
                      ) : (
                        <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                      )}
                      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                        <div className="font-semibold leading-none flex items-center gap-2">
                          {education.school}
                          <ArrowUpRight
                            className="h-3.5 w-3.5 text-brand opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                            aria-hidden
                          />
                        </div>
                        <div className="font-sans text-sm text-muted-foreground">
                          {education.degree}
                        </div>
                      </div>
                    </div>
                     <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none shrink-0">
                      <span>
                        {education.start} - {education.end}
                      </span>
                    </div>
                  </Link>
                  {education.highlights && education.highlights.length > 0 && (
                    <ul className="ml-11 sm:ml-13 flex flex-col gap-1">
                      {education.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex gap-2 text-xs sm:text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade inView delay={BLUR_FADE_DELAY}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-col gap-y-5">
            {Object.entries(DATA.skills).map(
              ([category, group], categoryIndex) => {
                const CategoryIcon = group.icon;
                return (
                  <div key={category} className="flex flex-col gap-y-2">
                    <BlurFade inView delay={BLUR_FADE_DELAY * categoryIndex}>
                      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        {CategoryIcon && (
                          <CategoryIcon className="size-4 text-muted-foreground" />
                        )}
                        {category}
                      </div>
                    </BlurFade>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill, skillIndex) => (
                        <BlurFade
                          inView
                          key={skill.name}
                          delay={
                            BLUR_FADE_DELAY * categoryIndex + skillIndex * 0.03
                          }
                        >
                          <div className="group border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:ring-brand/15 hover:shadow-[0_6px_18px_-6px] hover:shadow-brand/30">
                            {"icon" in skill && skill.icon && (
                              <skill.icon className="size-4 rounded overflow-hidden object-contain transition-transform duration-200 group-hover:scale-110" />
                            )}
                            <span className="text-foreground text-sm font-medium">
                              {skill.name}
                            </span>
                          </div>
                        </BlurFade>
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
      {/* Projects break out of the narrow column to fit the wide timeline cards */}
      <div className="mx-[calc(50%-50vw)] w-screen px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <BlurFade inView delay={BLUR_FADE_DELAY}>
            <ProjectsSection />
          </BlurFade>
        </div>
      </div>
      <section id="achievements">
        <BlurFade inView delay={BLUR_FADE_DELAY}>
          <AchievementsSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade inView delay={BLUR_FADE_DELAY}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
