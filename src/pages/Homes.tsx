import HeroSection from "@/components/HeroSection";
import CompaniesSection from "@/components/CompaniesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeForm from "@/components/ResumeForm";
import CertificationsSection from "@/components/CertificationsSection";
import SkillsSection from "@/components/SkillsSection";
import RecommendationsSection from "@/components/RecommendationsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompaniesSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <RecommendationsSection />
      <ResumeForm />
    </>
  );
}