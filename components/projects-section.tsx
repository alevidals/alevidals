import {
  IconChefHat,
  IconExternalLink,
  IconFileCv,
  IconPlanet,
  IconShoppingBag,
  IconSourceCode,
  type ReactNode,
} from "@tabler/icons-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  link: string;
  repoUrl: string;
  icon: ReactNode;
  technologies: string[];
};

const PROJECTS: Project[] = [
  {
    title: "intolerantIA",
    description:
      "A web app that uses AI to help users identify food intolerances based on their symptoms.IntolerantIA is an app where you will be able to take a quick look at the restaurant's menu to see what foods you can and cannot eat. Especially useful for people with allergies and intolerances.",
    link: "https://intolerantia.vercel.app/",
    repoUrl: "https://github.com/alevidals/intolerantIA",
    icon: <IconChefHat className="size-8 text-white" />,
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
    description:
      "MyPortfolio es una aplicación web que permite a desarrolladores y profesionales del sector tecnológico crear su propio portfolio y currículum de forma rápida y sencilla, utilizando su cuenta de GitHub para registrarse.",
    link: "https://my-portfolio-five-kohl-50.vercel.app",
    repoUrl: "https://github.com/alevidals/my-portfolio",
    icon: <IconFileCv className="size-8 text-white" />,
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
    description: "E-commerce done with Next.js + Turso + Stripe.",
    link: "https://next-ecommerce-weld-omega.vercel.app/",
    repoUrl: "https://github.com/alevidals/loop",
    icon: <IconShoppingBag className="size-8 text-white" />,
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
    description:
      "A Planet Management System based on Star Wars built with Nextjs.",
    link: "https://pms-codetest.vercel.app/",
    repoUrl: "https://github.com/alevidals/planet-management-system",
    icon: <IconPlanet className="size-8 text-white" />,
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

export function ProjectsSection() {
  return (
    <section id="projects" className="mt-32">
      <div className="flex items-center gap-10">
        <h3 className="text-3xl font-semibold leading-tight">Projects</h3>
        <div className="border flex-1" />
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-zinc-900 p-6 rounded-lg flex flex-col border"
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
              <div className="mt-4 flex flex-wrap gap-2">
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
