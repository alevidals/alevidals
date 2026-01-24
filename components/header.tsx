import Link from "next/link";
import { LangSwitcher } from "@/components/lang-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";

type NavLink = {
  label: string;
  href: string;
};

const LINKS: NavLink[] = [
  { label: "Experiences", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <LangSwitcher />
      <nav className="h-11 px-4 border dark:border-input rounded-md flex items-center bg-background shadow-xs dark:bg-input/30">
        {LINKS.map((link) => (
          <Button key={link.href} variant="ghost" asChild>
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </nav>
      <ThemeSwitcher />
    </header>
  );
}
