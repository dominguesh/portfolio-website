import { useState } from "react";
import { Link } from "wouter";
import { MenuIcon, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/hooks/use-language";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigation = [
    { name: t('nav.home'), href: "#intro" },
    { name: t('nav.companies'), href: "#companies" },
    { name: t('nav.projects'), href: "#projects" },
    { name: t('skills.technologies') || "Skills", href: "#skills" },
    { name: t('nav.certifications'), href: "#certifications" },
    { name: t('recommendations.title') || "Recommendations", href: "#recommendations" },
    { name: t('nav.resume'), href: "#resume" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-terminal/90 backdrop-blur supports-[backdrop-filter]:bg-terminal/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-screentime text-xl font-heading relative group overflow-hidden">
            <span>Heraldo Domingues</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-flow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-screentime hover:text-flow transition-colors"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-screentime/80 hover:text-flow transition-colors font-sans relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-flow/70 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
          <LanguageSwitcher />
        </nav>
      </div>
      
      {/* Mobile navigation dropdown with animation */}
      {mobileMenuOpen && (
        <div className="lg:hidden container py-4 border-t border-gray-800 bg-terminal anim-slide-in-bottom">
          <nav className="flex flex-col space-y-4">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-screentime/80 hover:text-flow transition-colors font-sans anim-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="anim-fade-in" style={{ animationDelay: "0.5s" }}>
              <p className="text-sm font-medium mb-2 text-screentime/70 font-sans">{t('language.label')}</p>
              <LanguageSwitcher mobile />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
