import { CapabilitySystem } from "@/components/portfolio/capability-system";
import { PortfolioContact, PortfolioFooter } from "@/components/portfolio/contact";
import { EducationFoundation } from "@/components/portfolio/education";
import { PortfolioHero } from "@/components/portfolio/hero";
import { OperatingContexts } from "@/components/portfolio/operating-contexts";
import { ProjectCatalog } from "@/components/portfolio/project-catalog";
import { RagShowcase } from "@/components/portfolio/rag-showcase";
import { SelectedWork } from "@/components/portfolio/selected-work";
import { SystemLifecycle } from "@/components/portfolio/system-lifecycle";
import { ProfessionalTrajectory } from "@/components/portfolio/trajectory";
import { SiteHeader } from "@/components/site/site-header";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <PortfolioHero />
        <RagShowcase />
        <SelectedWork />
        <CapabilitySystem />
        <OperatingContexts />
        <SystemLifecycle />
        <ProjectCatalog />
        <ProfessionalTrajectory />
        <EducationFoundation />
        <PortfolioContact />
      </main>
      <PortfolioFooter />
    </>
  );
}
