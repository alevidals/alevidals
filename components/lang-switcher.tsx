"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { EnFlag } from "@/components/flags/en-flag";
import { EsFlag } from "@/components/flags/es-flag";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Params = {
  lang: "en" | "es";
};

export function LangSwitcher() {
  const { lang } = useParams<Params>();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-11 w-11">
          {lang === "es" ? <EsFlag /> : <EnFlag />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="flex items-center justify-between"
            asChild
          >
            <Link href="/es">
              Español <EsFlag />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between"
            asChild
          >
            <Link href="/en">
              Inglés <EnFlag />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
