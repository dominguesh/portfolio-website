import { Github, Linkedin, Mail, AtSign } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function Footer() {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-terminal-50 text-screentime border-t border-gray-800 py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-screentime">Heraldo Domingues</h3>
            <p className="text-screentime/60 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/dominguesh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-terminal-100 text-screentime hover:bg-flow hover:text-screentime transition-all duration-300" 
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/heraldodomingues/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-terminal-100 text-screentime hover:bg-flow hover:text-screentime transition-all duration-300" 
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://bsky.app/profile/domingues.pro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-terminal-100 text-screentime hover:bg-flow hover:text-screentime transition-all duration-300" 
                aria-label="Bluesky"
              >
                <AtSign size={20} />
              </a>
              <a 
                href="mailto:heraldo@domingues.pro" 
                className="p-2 rounded-full bg-terminal-100 text-screentime hover:bg-flow hover:text-screentime transition-all duration-300" 
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-screentime">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li><a href="#intro" className="text-screentime/60 hover:text-flow transition-colors duration-300">{t('nav.home')}</a></li>
              <li><a href="#projects" className="text-screentime/60 hover:text-flow transition-colors duration-300">{t('nav.projects')}</a></li>
              <li><a href="#resume" className="text-screentime/60 hover:text-flow transition-colors duration-300">{t('nav.resume')}</a></li>
              <li><a href="#certifications" className="text-screentime/60 hover:text-flow transition-colors duration-300">{t('nav.certifications')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-screentime">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-screentime/60 hover:text-flow transition-colors duration-300">{t('footer.privacy')}</a></li>
              <li><a href="#" className="text-screentime/60 hover:text-flow transition-colors duration-300">{t('footer.terms')}</a></li>
              <li><a href="#" className="text-screentime/60 hover:text-flow transition-colors duration-300">{t('footer.cookies')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-screentime/40 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Heraldo Domingues. {t('footer.rights')}
          </p>
          <p className="text-screentime/40 text-sm">
            {t('footer.builtWith')}
          </p>
        </div>
      </div>
    </footer>
  );
}
