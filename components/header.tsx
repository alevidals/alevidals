import type { getDictionary } from "@/app/[lang]/dictionaries";
import { LangSwitcher } from "@/components/lang-switcher";
import { Navbar } from "@/components/navbar";
import { ThemeSwitcher } from "@/components/theme-switcher";
import type { NavLink } from "@/lib/types";

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>["header"];
};

export function Header({ dict }: Props) {
  const LINKS: NavLink[] = [
    { label: dict.experiences, href: "#experience" },
    { label: dict.projects, href: "#projects" },
    { label: dict.about, href: "#about" },
  ];

  return (
    <header className="flex items-center justify-between">
      <Navbar links={LINKS} />
      <div className="flex items-center gap-4">
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
