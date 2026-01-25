"use client";

import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { NavLink } from "@/lib/types";

type Props = {
  links: NavLink[];
};

export function Navbar({ links }: Props) {
  return (
    <>
      <nav className="h-11 px-2 border dark:border-input rounded-md items-center bg-background shadow-xs dark:bg-input/30 hidden md:flex ">
        {links.map((link) => (
          <Button key={link.href} variant="ghost" asChild>
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="md:hidden">
          <Button variant="outline" className="h-11 w-11">
            <IconMenu2 className="size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuGroup>
            {links.map((link) => (
              <DropdownMenuItem
                key={link.href}
                className="flex items-center justify-between"
                asChild
              >
                <Link href={link.href}>{link.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
