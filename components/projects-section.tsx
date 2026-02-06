import {
  IconChefHat,
  IconExternalLink,
  IconFileCv,
  IconPackage,
  IconPlanet,
  IconShoppingBag,
  IconSourceCode,
  type ReactNode,
} from "@tabler/icons-react";
import Link from "next/link";
import type { getDictionary } from "@/app/[lang]/dictionaries";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>["projects"];
};

type Project = {
  title: string;
  description: string;
  link: string;
  repoUrl: string;
  icon: ReactNode;
  technologies: string[];
};

export function ProjectsSection({ dict }: Props) {
  const PROJECTS: Project[] = [
    {
      title: "Omnistock",
      description: dict.omnistockDescription,
      link: "https://omnistock-chi.vercel.app",
      icon: <IconPackage className="size-8 text-background" />,
      repoUrl: "https://github.com/alevidals/omnistock",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Zod",
        "Drizzle ORM",
        "LibSQL",
        "Better Auth",
        "Framer Motion",
        "Biome",
        "Husky",
      ],
    },
    {
      title: "intolerantIA",
      description: dict.intolerantiaDescription,
      link: "https://intolerantia.vercel.app/",
      repoUrl: "https://github.com/alevidals/intolerantIA",
      icon: <IconChefHat className="size-8 text-background" />,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "ai-sdk",
        "Tailwind CSS",
        "Shadcn UI",
        "Zustand",
        "Zod",
        "React Hook Form",
        "Framer Motion",
        "Biome",
        "Lefthook",
      ],
    },
    {
      title: "MyPortfolio",
      description: dict.myportfolioDescription,
      link: "https://my-portfolio-five-kohl-50.vercel.app",
      repoUrl: "https://github.com/alevidals/my-portfolio",
      icon: <IconFileCv className="size-8 text-background" />,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Drizzle ORM",
        "LibSQL",
        "Better Fetch",
        "Better Auth",
        "SWR",
        "Framer Motion",
        "Zod",
        "Biome",
        "Lefthook",
      ],
    },
    {
      title: "Loop",
      description: dict.loopDescription,
      link: "https://next-ecommerce-weld-omega.vercel.app/",
      repoUrl: "https://github.com/alevidals/loop",
      icon: <IconShoppingBag className="size-8 text-background" />,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Bcrypt",
        "Jose",
        "Zod",
        "LibSQL",
        "Stripe",
        "Biome",
        "Lefthook",
      ],
    },
    {
      title: "Planet Management System",
      description: dict.planetManagementSystemDescription,
      link: "https://pms-codetest.vercel.app/",
      repoUrl: "https://github.com/alevidals/planet-management-system",
      icon: <IconPlanet className="size-8 text-background" />,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Zod",
        "Biome",
        "Lefthook",
        "Vitest",
        "Playwright",
        "Zustand",
        "React Hook Form",
      ],
    },
  ];

  return (
    <section id="projects" className="mt-14 md:mt-32">
      <div className="flex items-center gap-10">
        <h3 className="text-3xl font-semibold leading-tight">{dict.title}</h3>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-lg flex flex-col border backdrop-blur-[2px]"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-2 bg-primary inline-flex rounded-md">
                  {project.icon}
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    className="text-muted-foreground size-11"
                    asChild
                  >
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconExternalLink className="size-6" />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-muted-foreground size-11"
                    asChild
                  >
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconSourceCode className="size-6" />
                    </Link>
                  </Button>
                </div>
              </div>
              <h4 className="text-xl font-semibold">{project.title}</h4>
              <p className="mt-4 text-muted-foreground text-md flex-1">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
