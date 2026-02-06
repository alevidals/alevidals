"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  companyName: string;
  role: string;
  description: string;
  startDate: number;
  endDate?: number;
  imageUrl: string;
  presentLabel: string;
  readMoreLabel: string;
  readLessLabel: string;
};

export function ExperienceCard({
  companyName,
  role,
  description,
  startDate,
  endDate,
  imageUrl,
  presentLabel,
  readMoreLabel,
  readLessLabel,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex items-center gap-6 p-6 rounded-lg border backdrop-blur-[2px]">
      <Image
        src={imageUrl}
        alt={companyName}
        height={50}
        width={50}
        className="rounded-lg self-start"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-semibold">{role}</h4>
          <Badge variant="secondary">
            {startDate} - {endDate ?? presentLabel}
          </Badge>
        </div>
        <p className="text-muted-foreground">{companyName}</p>
        <p
          className={cn(
            "mt-2 text-muted-foreground max-w-[80ch]",
            !isExpanded && "line-clamp-3 md:line-clamp-none",
          )}
        >
          {description}
        </p>
        <Button
          variant="link"
          size="sm"
          className="mt-1 h-auto p-0 md:hidden"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? readLessLabel : readMoreLabel}
        </Button>
      </div>
    </div>
  );
}
