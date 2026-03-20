"use client";

import Link from "next/link";
import { useState } from "react";
import type { getDictionary } from "@/app/[lang]/dictionaries";

export type Experience = {
  companyName: string;
  companyUrl: string;
  role: string;
  description: string;
  startDate: number;
  endDate?: number;
};

type Props = {
  experience: Experience;
  index: number;
  total: number;
  dict: Awaited<ReturnType<typeof getDictionary>>["experiences"];
};

export function ExperienceItem({ experience, index, total, dict }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li className="flex gap-6">
      <div className="flex flex-col items-center">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-medium text-muted-foreground">
          {index + 1}
        </span>
        {index < total - 1 && <div className="mt-2 w-px flex-1 bg-border" />}
      </div>
      <div className="pb-6">
        <p className="text-xs text-muted-foreground">
          {experience.startDate} - {experience.endDate ?? dict.present}
        </p>
        <h3 className="mt-1 text-sm font-medium">{experience.role}</h3>
        <Link
          href={experience.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent-blue decoration-dotted underline-offset-[5px] hover:underline"
        >
          {experience.companyName}
        </Link>
        <p
          className={`mt-2 text-sm text-muted-foreground leading-relaxed md:line-clamp-none ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {experience.description}
        </p>
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-1 text-xs text-accent-blue hover:underline md:hidden"
        >
          {expanded ? dict.readLess : dict.readMore}
        </button>
      </div>
    </li>
  );
}
