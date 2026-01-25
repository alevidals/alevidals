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
    <main>
      <MeSection dict={dict.me} />
      <ExperiencesSection dict={dict.experiences} />
      <ProjectsSection dict={dict.projects} />
      <AboutMeSection dict={dict.aboutMe} />
    </main>
  );
}
