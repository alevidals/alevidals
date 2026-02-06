import type { getDictionary } from "@/app/[lang]/dictionaries";
import { ExperienceCard } from "@/components/experience-card";

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
          <ExperienceCard
            key={exp.companyName}
            companyName={exp.companyName}
            role={exp.role}
            description={exp.description}
            startDate={exp.startDate}
            endDate={exp.endDate}
            imageUrl={exp.imageUrl}
            presentLabel={dict.present}
            readMoreLabel={dict.readMore}
            readLessLabel={dict.readLess}
          />
        ))}
      </div>
    </section>
  );
}
