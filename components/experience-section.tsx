import Image from "next/image";
import { Badge } from "@/components/ui/badge";

type Experience = {
  companyName: string;
  role: string;
  description: string;
  startDate: number;
  endDate?: number;
  imageUrl: string;
};

const EXPERIENCES: Experience[] = [
  {
    companyName: "idealista",
    role: "Frontend Developer",
    description:
      "Developed and maintained user-friendly interfaces for the idealista real estate platform, focusing on performance and responsiveness.",
    startDate: 2024,
    imageUrl: "/companies/idealista-logo.webp",
  },
  {
    companyName: "Aktios",
    role: "Fullstack Developer",
    description:
      "Working on web applications using React, Next.js, and Node.js to deliver high-quality solutions for our clients.",
    startDate: 2022,
    endDate: 2024,
    imageUrl: "/companies/aktios-logo.webp",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="mt-32">
      <div className="flex items-center gap-10">
        <h3 className="text-3xl font-semibold leading-tight">Experiences</h3>
        <div className="border flex-1" />
      </div>
      <div className="mt-10 flex flex-col gap-8">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.companyName}
            className="flex items-center gap-6 bg-white dark:bg-zinc-900 p-6 rounded-lg border"
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
                <Badge>
                  {exp.startDate} - {exp.endDate ?? "Present"}
                </Badge>
              </div>
              <p className="text-muted-foreground">{exp.companyName}</p>
              <p className="mt-2 text-muted-foreground max-w-prose">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
