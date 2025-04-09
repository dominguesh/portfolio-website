import { ArrowRight, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/use-language";

type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
};

export default function ProjectsSection() {
  const { t } = useLanguage();
  
  const projects: Project[] = [
    {
      id: "secure-lab",
      title: t('projects.item1.title', "Secure Lab Environment"),
      description: t('projects.item1.description', "This project implements a secure laboratory environment with isolated networks, featuring a web server, database server, and proper security controls through a bastion host. The implementation includes PAM (Pluggable Authentication Modules) for enhanced security and access control."),
      category: t('projects.categories.infrastructure') || "Infrastructure",
      categoryColor: "badge-primary",
      tags: ["PAM", "Network Security", "VMware", "Ubuntu Server"],
      demoUrl: "#docs",
      repoUrl: "https://github.com/dominguesh/secure-lab"
    },
    {
      id: "veganeiro",
      title: t('projects.item2.title', "Veganeiro Web App 🌱"),
      description: t('projects.item2.description', "A comprehensive vegan lifestyle platform providing tools, resources, and community features to support people at different stages of their vegan journey. Built with modern technology stack including Next.js 13, TypeScript, and TailwindCSS with accessibility in mind."),
      category: t('projects.categories.webDev') || "Web Development",
      categoryColor: "badge-secondary",
      tags: ["Next.js 13", "TypeScript", "TailwindCSS", "Shadcn UI"],
      demoUrl: "https://veganeiro.app",
      repoUrl: "https://github.com/dominguesh/veganeiro"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-keyboard">
      <div className="section-container">
        <div className="mb-12 text-center anim-fade-in">
          <h2 className="numbered-heading text-3xl font-bold tracking-tight text-terminal mb-4" data-number="03">
            {t('projects.title') || "Featured Projects"}
          </h2>
          <p className="text-terminal opacity-80 max-w-2xl mx-auto">
            {t('projects.subtitle') || "A selection of my recent work and professional projects"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="card-hover bg-screentime overflow-hidden border border-keyboard shadow-sm transform transition-all duration-500 hover:shadow-lg hover:-translate-y-2 hover:border-flow/50" 
              // Stagger the animation of cards
              style={{ animation: `${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} 0.7s ease-out forwards ${index * 0.3 + 0.2}s`, opacity: 0 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-terminal">{project.title}</h3>
                  <span className={project.categoryColor}>
                    {project.category}
                  </span>
                </div>
                
                <p className="text-terminal opacity-90 mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-keyboard text-terminal hover:bg-flow hover:text-screentime transition-all duration-300 hover:shadow-sm hover:-translate-y-1 transform"
                      style={{ animationDelay: `${tagIndex * 0.05 + 0.5}s` }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      className="text-flow text-sm font-medium inline-flex items-center hover:text-terminal transition-all duration-300 hover:translate-x-1 transform group"
                    >
                      {project.id === "secure-lab" ? t('projects.viewDocumentation', "View Documentation") : t('projects.viewDemo', "View Project")}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  )}
                  
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl} 
                      className="text-terminal opacity-70 text-sm font-medium inline-flex items-center hover:text-flow transition-all duration-300 hover:-translate-y-1 transform group"
                    >
                      <Github className="mr-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                      {t('projects.repository') || "Repository"}
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
