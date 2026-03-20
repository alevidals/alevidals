import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { LangSwitcher } from "@/components/lang-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";

type Social = {
  name: string;
  icon: ReactNode;
  href: string;
};

const SOCIALS: Social[] = [
  {
    name: "LinkedIn",
    icon: <IconBrandLinkedin className="size-[18px]" />,
    href: "https://www.linkedin.com/in/alevidals/",
  },
  {
    name: "GitHub",
    icon: <IconBrandGithub className="size-[18px]" />,
    href: "https://github.com/alevidals",
  },
  {
    name: "Mail",
    icon: <IconMail className="size-[18px]" />,
    href: "mailto:alejandro.vidal.sanchez16@gmail.com",
  },
];

export function Header() {
  return (
    <nav className="sticky top-0 z-50 -mx-6 mb-1 flex w-[calc(100%+3rem)] items-center justify-between bg-background/80 px-6 py-4 backdrop-blur-md">
      <Link
        href="/"
        className="flex items-center gap-2.5 transition-opacity duration-150 hover:opacity-80"
      >
        <Image
          src="/avatar.jpg"
          alt="Alejandro Vidal"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="text-sm font-medium tracking-tight">alevidals</span>
      </Link>
      <div className="flex items-center space-x-1">
        {SOCIALS.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            title={social.name}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium opacity-80 transition-opacity duration-150 hover:bg-muted hover:opacity-100"
          >
            {social.icon}
          </Link>
        ))}
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
