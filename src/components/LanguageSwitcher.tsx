import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="intro" className="py-24 hero-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col justify-center relative z-10">
            <h1 className="mb-6 text-screentime font-light anim-fade-in font-heading text-center">
              Make <span className="text-flow">progress</span> flow
            </h1>
            <p className="text-xl md:text-2xl text-screentime/80 mb-8 anim-fade-in font-sans text-center" style={{ animationDelay: "200ms" }}>
              {t('hero.subtitle')}
            </p>
            <div className="space-y-4 text-screentime/70 mb-10 mx-auto anim-fade-in font-sans" style={{ animationDelay: "400ms" }}>
              <p>{t('hero.intro', "I'm Heraldo Domingues — a solutions engineer who thrives at the intersection of people, process, and technology.")}</p>
              <p>{t('hero.specialization', "I specialize in simplifying complex problems and creating forward momentum. My focus is helping teams move faster, decide smarter, and build confidently. I'm at my best when supporting technical sales conversations, designing proofs of concept, and guiding buyers through the full customer journey.")}</p>
              <p>{t('hero.experience', "I've supported sales and customer success across software development, Agile/Scrum, cybersecurity (PAM), networking, and now Generative AI and prompt engineering.")}</p>
              <p className="font-medium italic text-flow">{t('hero.motto', 'Aut Viam Inveniam Aut Faciam — "Either I will find a way or I will make one."')}</p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-10 justify-center anim-fade-in" style={{ animationDelay: "600ms" }}>
              <a 
                href="https://github.com/dominguesh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-terminal-100 text-screentime hover:bg-flow hover:text-screentime transition-all duration-300" 
                aria-label="GitHub"
              >
                <Github className="animate-pulse-soft" style={{ animationDelay: "300ms" }} />
              </a>
              <a 
                href="https://linkedin.com/in/heraldodomingues/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-terminal-100 text-screentime hover:bg-flow hover:text-screentime transition-all duration-300" 
                aria-label="LinkedIn"
              >
                <Linkedin className="animate-pulse-soft" style={{ animationDelay: "600ms" }} />
              </a>
              <a 
                href="https://bsky.app/profile/domingues.pro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-terminal-100 text-screentime hover:bg-flow hover:text-screentime transition-all duration-300" 
                aria-label="Bluesky"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="animate-pulse-soft" style={{ animationDelay: "900ms" }} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5Z"/>
                  <path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </a>
              <a 
                href="mailto:heraldo@domingues.pro" 
                className="p-2 rounded-full bg-terminal-100 text-screentime hover:bg-flow hover:text-screentime transition-all duration-300" 
                aria-label="Email"
              >
                <Mail className="animate-pulse-soft" style={{ animationDelay: "1200ms" }} />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center anim-fade-in" style={{ animationDelay: "800ms" }}>
              <Button asChild className="btn-primary font-sans">
                <a href="#projects">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild className="btn-secondary font-sans">
                <a href="#resume">
                  {t('button.download')} {t('nav.resume')}
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
