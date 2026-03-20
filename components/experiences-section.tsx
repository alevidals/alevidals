import Link from "next/link";
import type { getDictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>["experiences"];
};

type Experience = {
  companyName: string;
  companyUrl: string;
  role: string;
  description: string;
  startDate: number;
  endDate?: number;
};

export function ExperiencesSection({ dict }: Props) {
  const EXPERIENCES: Experience[] = [
    {
      companyName: "idealista",
      companyUrl: "https://www.idealista.com",
      role: "Frontend Developer",
      description: dict.idealistaDescription,
      startDate: 2024,
    },
    {
      companyName: "Aktios",
      companyUrl: "https://www.aktios.com",
      role: "Fullstack Developer",
      description: dict.aktiosDescription,
      startDate: 2022,
      endDate: 2024,
    },
  ].sort((a, b) => b.startDate - a.startDate);

  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards duration-500 delay-200">
      <h2 className="mb-6 text-lg font-semibold">{dict.title}</h2>
      <ol className="flex flex-col gap-6">
        {EXPERIENCES.map((exp, index) => (
          <li key={exp.companyName} className="flex gap-6">
            <div className="flex flex-col items-center">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                {index + 1}
              </span>
              {index < EXPERIENCES.length - 1 && (
                <div className="mt-2 w-px flex-1 bg-border" />
              )}
            </div>
            <div className="pb-6">
              <p className="text-xs text-muted-foreground">
                {exp.startDate} - {exp.endDate ?? dict.present}
              </p>
              <h3 className="mt-1 text-sm font-medium">{exp.role}</h3>
              <Link
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent-blue decoration-dotted underline-offset-[5px] hover:underline"
              >
                {exp.companyName}
              </Link>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
