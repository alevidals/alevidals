import type { getDictionary } from "@/app/[lang]/dictionaries";
import { type Experience, ExperienceItem } from "@/components/experience-item";

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>["experiences"];
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
        {EXPERIENCES.map((experience, index) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
            index={index}
            total={EXPERIENCES.length}
            dict={dict}
          />
        ))}
      </ol>
    </section>
  );
}
