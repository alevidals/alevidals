import { AboutMeSection } from "@/components/about-me-section";
import { ExperienceSection } from "@/components/experience-section";
import { MeSection } from "@/components/me-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <main>
      <MeSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutMeSection />
    </main>
  );
}
