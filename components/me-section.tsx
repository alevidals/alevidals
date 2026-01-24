import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

type Social = {
  name: string;
  icon: ReactNode;
  href: string;
};

const SOCIALS: Social[] = [
  {
    name: "GitHub",
    icon: <IconBrandGithub className="size-8" />,
    href: "https://github.com/alevidals",
  },
  {
    name: "LinkedIn",
    icon: <IconBrandLinkedin className="size-8" />,
    href: "https://www.linkedin.com/in/alevidals/",
  },
  {
    name: "Mail",
    icon: <IconMail className="size-8" />,
    href: "mailto:alejandro.vidal.sanchez16@gmail.com",
  },
];

export function MeSection() {
  return (
    <section className="mt-32">
      <h1 className="text-6xl font-bold">Hello, I'm Alejandro</h1>
      <h2 className="text-5xl text-muted-foreground">Frontend Developer</h2>
      <p className="mt-6 text-xl text-muted-foreground max-w-prose">
        Welcome to my personal website where I share my projects and blog posts
        about web development.
      </p>
      <div className="mt-10">
        <Button
          size="lg"
          className="shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-shadow duration-500 h-12"
        >
          Download resume
        </Button>
        <Button size="lg" variant="outline" className="ml-4 h-12">
          Contact me
        </Button>
      </div>
      <div className="mt-6 flex gap-4">
        {SOCIALS.map((social) => (
          <Button asChild variant="ghost" key={social.name} className="size-12">
            <Link href={social.href} target="_blank" rel="noopener noreferrer">
              {social.icon}
            </Link>
          </Button>
        ))}
      </div>
    </section>
  );
}
