import { getDictionary } from "@/app/[lang]/dictionaries";
import { AboutMeSection } from "@/components/about-me-section";
import { ExperiencesSection } from "@/components/experiences-section";
import { MeSection } from "@/components/me-section";
import { ProjectsSection } from "@/components/projects-section";

type Props = {
  params: Promise<{
    lang: "en" | "es";
  }>;
};

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="grid items-center gap-14 py-4 md:py-4">
      <MeSection dict={dict.me} />
      <ProjectsSection dict={dict.projects} />
      <ExperiencesSection dict={dict.experiences} />
      <AboutMeSection dict={dict.aboutMe} />
    </div>
  );
}
