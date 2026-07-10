import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import {
  Timeline,
  TimelineItem,
  TimelineConnectItem,
} from "@/components/timeline";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  return (
    <section id="projects" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="z-10 rounded-xl border border-brand/30 bg-linear-to-r from-brand to-brand-2 px-4 py-1 shadow-[0_2px_24px_-4px] shadow-brand/50">
              <span className="text-sm font-medium text-white">
                My Projects
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              A timeline of things I&apos;ve built — from side projects to
              production apps.
            </p>
          </div>
        </div>

        <Timeline>
          {DATA.projects.map((project, id) => (
            <TimelineItem
              key={project.title}
              className="flex w-full items-start justify-between gap-6"
            >
              <TimelineConnectItem className="flex items-start justify-center pt-5">
                <div className="size-4 bg-background z-10 shrink-0 rounded-full border-2 border-brand ring-4 ring-background shadow-[0_0_12px] shadow-brand/50" />
              </TimelineConnectItem>
              <BlurFade
                inView
                delay={BLUR_FADE_DELAY + id * 0.05}
                className="min-w-0 flex-1"
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  tagline={project.tagline}
                  builtWith={project.builtWith}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  image2={project.image2}
                  bullets={project.bullets}
                  links={project.links}
                />
              </BlurFade>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
