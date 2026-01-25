import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import type { ReactNode } from "react";
import type { getDictionary } from "@/app/[lang]/dictionaries";
import { Button } from "@/components/ui/button";

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>["me"];
};

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

export async function MeSection({ dict }: Props) {
  return (
    <section className="mt-10 md:mt-32">
      <h1 className="text-3xl font-bold bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent md:text-7xl">
        {dict.title}
      </h1>
      <h2 className="text-xl md:text-5xl bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent">
        {dict.subtitle}
      </h2>
      <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-prose">
        {dict.description}
      </p>
      <div className="mt-10">
        <Button
          size="lg"
          className="transition-shadow duration-500 h-12"
          asChild
        >
          <a href="/CV - Alejandro Vidal Sánchez.pdf" download>
            {dict.downloadCV}
          </a>
        </Button>
        <Button size="lg" variant="outline" className="ml-4 h-12" asChild>
          <Link href="mailto:alejandro.vidal.sanchez16@gmail.com">
            {dict.contactMe}
          </Link>
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
