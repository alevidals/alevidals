import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import type { getDictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>["projects"];
};

type Project = {
  title: string;
  description: string;
  link?: string;
  repoUrl: string;
  technologies: string[];
};

export function ProjectsSection({ dict }: Props) {
  const PROJECTS: Project[] = [
    {
      title: "Omnistock",
      description: dict.omnistockDescription,
      link: "https://omnistock-chi.vercel.app",
      repoUrl: "https://github.com/alevidals/omnistock",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "intolerantIA",
      description: dict.intolerantiaDescription,
      link: "https://intolerantia.vercel.app/",
      repoUrl: "https://github.com/alevidals/intolerantIA",
      technologies: ["Next.js", "ai-sdk", "Tailwind CSS"],
    },
    {
      title: "MyPortfolio",
      description: dict.myportfolioDescription,
      link: "https://my-portfolio-five-kohl-50.vercel.app",
      repoUrl: "https://github.com/alevidals/my-portfolio",
      technologies: ["Next.js", "Drizzle ORM", "Better Auth"],
    },
    {
      title: "Loop",
      description: dict.loopDescription,
      link: "https://next-ecommerce-weld-omega.vercel.app/",
      repoUrl: "https://github.com/alevidals/loop",
      technologies: ["Next.js", "Stripe", "LibSQL"],
    },
    {
      title: "Planet Management System",
      description: dict.planetManagementSystemDescription,
      link: "https://pms-codetest.vercel.app/",
      repoUrl: "https://github.com/alevidals/planet-management-system",
      technologies: ["Next.js", "Zustand", "Playwright"],
    },
  ];

  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards duration-500 delay-100">
      <h2 className="mb-6 text-lg font-semibold">{dict.title}</h2>
      <div className="flex flex-col gap-3">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group flex items-start gap-4 rounded-lg p-3 -mx-3 transition-colors duration-150 hover:bg-muted/50"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium">{project.title}</h3>
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 transition-opacity duration-150 group-hover:opacity-60 hover:!opacity-100"
                  >
                    <IconExternalLink className="size-3.5" />
                  </Link>
                )}
                <Link
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="opacity-0 transition-opacity duration-150 group-hover:opacity-60 hover:!opacity-100"
                >
                  <IconBrandGithub className="size-3.5" />
                </Link>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
