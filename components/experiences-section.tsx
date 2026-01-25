import Image from "next/image";
import type { getDictionary } from "@/app/[lang]/dictionaries";
import { Badge } from "@/components/ui/badge";

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>["experiences"];
};

type Experience = {
  companyName: string;
  role: string;
  description: string;
  startDate: number;
  endDate?: number;
  imageUrl: string;
};

export function ExperiencesSection({ dict }: Props) {
  const EXPERIENCES: Experience[] = [
    {
      companyName: "idealista",
      role: "Frontend Developer",
      description: dict.idealistaDescription,
      startDate: 2024,
      imageUrl: "/companies/idealista-logo.webp",
    },
    {
      companyName: "Aktios",
      role: "Fullstack Developer",
      description: dict.aktiosDescription,
      startDate: 2022,
      endDate: 2024,
      imageUrl: "/companies/aktios-logo.webp",
    },
  ].sort((a, b) => b.startDate - a.startDate);

  return (
    <section id="experience" className="mt-14 md:mt-32">
      <div className="flex items-center gap-10">
        <h3 className="text-3xl font-semibold leading-tight">{dict.title}</h3>
      </div>
      <div className="mt-10 flex flex-col gap-8">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.companyName}
            className="flex items-center gap-6 p-6 rounded-lg border backdrop-blur-[2px]"
          >
            <Image
              src={exp.imageUrl}
              alt={exp.companyName}
              height={50}
              width={50}
              className="rounded-lg self-start"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold">{exp.role}</h4>
                <Badge variant="secondary">
                  {exp.startDate} - {exp.endDate ?? dict.present}
                </Badge>
              </div>
              <p className="text-muted-foreground">{exp.companyName}</p>
              <p className="mt-2 text-muted-foreground max-w-[80ch]">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
