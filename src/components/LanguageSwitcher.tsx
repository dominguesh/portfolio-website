import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { type Language } from "@/lib/i18n/languages";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface LanguageSwitcherProps {
  mobile?: boolean;
}

export default function LanguageSwitcher({ mobile = false }: LanguageSwitcherProps) {
  const { t, currentLanguage, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Simplified language entries
  const languageOptions = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  // Find current language display name and flag
  const currentLangOption = languageOptions.find(lang => lang.code === currentLanguage) || languageOptions[0];
  const currentFlag = currentLangOption.flag;

  return (
    <div className={`relative ${mobile ? "w-full" : ""}`}>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex items-center gap-2 ${mobile ? "w-full justify-start" : ""} hover:bg-transparent hover:text-flow transition-colors duration-300`}
          >
            <span className="text-lg transform transition-transform duration-300 hover:scale-110">{currentFlag}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="font-sans bg-gray-900 border-gray-800 animate-in fade-in-80 slide-in-from-top-5">
          {languageOptions.map((language, index) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => {
                changeLanguage(language.code as Language);
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 cursor-pointer transition-all duration-300 ${
                currentLanguage === language.code
                  ? 'text-flow bg-gray-800/40'
                  : 'text-screentime/80 hover:text-flow hover:bg-gray-800/20'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-lg transform transition-transform duration-300 group-hover:scale-110">{language.flag}</span>
              <span>{language.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
