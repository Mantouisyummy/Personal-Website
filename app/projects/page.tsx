import { ProjectsSection } from "@/components/projects-section";
import { PageTransition } from "@/components/page-transition";
import { AnimatedBackground } from "@/components/animated-background";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="relative">
        <AnimatedBackground className="-z-10" />
        <div className="container mx-auto py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 md:mb-10 text-3xl sm:text-4xl font-bold tracking-tight">
            我的專案
          </h1>
          <ProjectsSection fullPage />
        </div>
      </div>
    </PageTransition>
  );
}
