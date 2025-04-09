import * as React from "react";
import { useLanguage } from "@/hooks/use-language";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Flame, BookOpen, Building2, Church, GraduationCap, Hotel, Radio, Heart, Beaker, School, ExternalLink } from "lucide-react";

interface Company {
  id: string;
  name: string;
  period: string;
  url: string;
  logoComponent: React.ReactNode;
  color: string;
}

export default function CompaniesSection() {
  const { t, currentLanguage } = useLanguage();
  const [api, setApi] = React.useState<CarouselApi>();
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  
  React.useEffect(() => {
    if (!api) return;
    
    // Start autoplay when component mounts
    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, 3000);
    
    // Cleanup interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api]);
  
  // Helper function for translations
  const compT = (key: string) => t(`companies.${key}`);
  
  // Function to translate periods based on language
  const getTranslatedPeriod = (engPeriod: string): string => {
    if (currentLanguage === 'pt') {
      // Convert periods for Portuguese
      return engPeriod
        .replace('Present', 'Presente')
        .replace('Since', 'Desde');
    } else if (currentLanguage === 'es') {
      // Convert periods for Spanish
      return engPeriod
        .replace('Present', 'Presente')
        .replace('Since', 'Desde');
    }
    return engPeriod;
  };
  
  const companies: Company[] = [
    {
      id: "appfire",
      name: "Appfire",
      period: "Since 2025",
      url: "https://appfire.com/",
      logoComponent: <Flame className="h-12 w-12" />,
      color: "#0080FF",
    },
    {
      id: "pluralsight",
      name: "Pluralsight",
      period: "2020 - 2025",
      url: "https://www.pluralsight.com/",
      logoComponent: <BookOpen className="h-12 w-12" />,
      color: "#F15B2A",
    },
    {
      id: "solarwinds",
      name: "Solarwinds",
      period: "2016 - 2020",
      url: "https://www.solarwinds.com/",
      logoComponent: <Building2 className="h-12 w-12" />,
      color: "#00B4FF",
    },
    {
      id: "lds",
      name: "The Church of Jesus Christ of Latter-day Saints",
      period: "2014 - 2016",
      url: "https://www.churchofjesuschrist.org",
      logoComponent: <Church className="h-12 w-12" />,
      color: "#FFFFFF",
    },
    {
      id: "utahtech",
      name: "Utah Tech University",
      period: "2013 - 2014",
      url: "https://utahtech.edu/",
      logoComponent: <GraduationCap className="h-12 w-12" />,
      color: "#D02030",
    },
    {
      id: "syros",
      name: "Syros Incorporation",
      period: "2011 - 2013",
      url: "https://www.syroshotel.com.br/",
      logoComponent: <Hotel className="h-12 w-12" />,
      color: "#0077B5",
    },
    {
      id: "claro",
      name: "Claro Brasil",
      period: "2010 - 2011",
      url: "https://www.claro.com.br/",
      logoComponent: <Radio className="h-12 w-12" />,
      color: "#DA291C",
    },
    {
      id: "santalucia",
      name: "Hospital Santa Lucia",
      period: "2008 - 2010",
      url: "http://www.santalucia.com.br/",
      logoComponent: <Heart className="h-12 w-12" />,
      color: "#01A19A",
    },
    {
      id: "zerbini",
      name: "Fundacao Zerbini",
      period: "2004 - 2008",
      url: "https://www.fz.org.br/",
      logoComponent: <Beaker className="h-12 w-12" />,
      color: "#003087",
    },
    {
      id: "unb",
      name: "Universidade de Brasilia",
      period: "2003 - 2004",
      url: "https://www.unb.br/",
      logoComponent: <School className="h-12 w-12" />,
      color: "#00A651",
    },
  ];

  return (
    <section id="companies" className="py-24 bg-terminal/80 border-t border-flow/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-top opacity-20"></div>
      <div className="glow-container">
        <div className="glow-circle" style={{ top: '20%', left: '30%', width: '300px', height: '300px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 anim-slide-in-bottom">
          <h2 className="numbered-heading text-3xl font-bold tracking-tight text-screentime mb-6 font-heading" data-number="02">
            {compT('title')}
          </h2>
          <p className="text-screentime/70 max-w-2xl font-sans">
            {compT('subtitle')}
          </p>
        </div>
        
        <div className="mt-10 anim-fade-in" style={{ animationDelay: "0.3s" }}>
          <Carousel 
            className="w-full" 
            opts={{ 
              loop: true, 
              dragFree: true,
              inViewThreshold: 0.5
            }}
            setApi={setApi}
          >
            <CarouselContent>
              {companies.map((company) => (
                <CarouselItem key={company.id} className="md:basis-1/3 lg:basis-1/4 pl-4">
                  <a href={company.url} target="_blank" rel="noopener noreferrer" 
                     className="company-card relative group h-56 rounded-xl border-2 border-flow/10 bg-terminal 
                                hover:border-flow/50 hover:shadow-[0_10px_25px_-5px_rgba(57,123,255,0.3)] 
                                transition-all duration-500 ease-in-out
                                flex flex-col items-center justify-center
                                overflow-hidden hover:-translate-y-1">
                    {/* Enhanced hover effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-flow/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* External link icon with improved animation */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0">
                      <ExternalLink className="h-4 w-4 text-flow" />
                    </div>
                    
                    {/* Logo with scaling animation on hover */}
                    <div className="flex items-center justify-center mb-3 transform transition-transform duration-300 group-hover:scale-110" 
                         style={{ color: company.color }}>
                      {company.logoComponent}
                    </div>
                    
                    {/* Company name with better styling */}
                    <h3 className="text-lg font-medium text-screentime/90 mb-1 text-center px-2 font-heading">{company.name}</h3>
                    
                    {/* Period with translated text based on language */}
                    <span className="text-xs font-medium text-flow/80 font-sans">{getTranslatedPeriod(company.period)}</span>
                    
                    {/* Bottom glow line with improved animation */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-flow/10 via-flow/40 to-flow/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-flow/0 group-hover:bg-flow/10 transform rotate-0 group-hover:rotate-45 transition-all duration-500 origin-top-right -mr-4 -mt-4"></div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static translate-y-0 mr-4 border-flow/50 text-flow hover:bg-flow/10 hover:shadow-[0_0_10px_rgba(57,123,255,0.4)] transition-all duration-300" />
              <CarouselNext className="static translate-y-0 border-flow/50 text-flow hover:bg-flow/10 hover:shadow-[0_0_10px_rgba(57,123,255,0.4)] transition-all duration-300" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
