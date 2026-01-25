import type { getDictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>["footer"];
};

export function Footer({ dict }: Props) {
  return (
    <footer className="mt-14 md:mt-32 py-10 border-t text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Alejandro Vidal Sánchez. {dict.rights}
    </footer>
  );
}
