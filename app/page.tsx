import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { AnimatedBackground } from "@/components/animated-background";

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground className="-z-10" />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
  );
}
