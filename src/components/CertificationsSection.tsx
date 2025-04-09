import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

interface Certification {
  id: string;
  name: string;
  shortName: string;
  validUntil: string;
  verifyUrl: string;
  imageSrc: string;
}

interface ExpiredCertification {
  id: string;
  name: string;
  shortName: string;
  imageSrc: string;
}

export default function CertificationsSection() {
  const { t } = useLanguage();
  
  // Helper function to replace useScopedI18n
  const certT = (key: string) => t(`certifications.${key}`);
  
  const activeCertifications: Certification[] = [
    {
      id: "az-900",
      name: "Microsoft Azure Fundamentals",
      shortName: "AZ-900",
      validUntil: "Active",
      verifyUrl: "https://learn.microsoft.com/en-us/users/validate-certification",
      imageSrc: "/attached_assets/microsoft-certified-azure-fundamentals.png",
    },
    {
      id: "aws-cloud-practitioner",
      name: "AWS Cloud Practitioner",
      shortName: "AWS-CP",
      validUntil: "R1PDCQVK9144Q254",
      verifyUrl: "https://aws.amazon.com/verification",
      imageSrc: "/attached_assets/aws-certified-cloud-practitioner-small.png",
    },
    {
      id: "demo2win",
      name: "Demo2Win!",
      shortName: "Demo2Win",
      validUntil: "Issued Sep 2022",
      verifyUrl: "https://2winofficial.com/verify",
      imageSrc: "/attached_assets/Demo2Win-ID-58651956.png",
    },
    {
      id: "psm-1",
      name: "Professional Scrum Master I (PSM I)",
      shortName: "PSM I",
      validUntil: "837418",
      verifyUrl: "https://www.scrum.org/certificates/837418",
      imageSrc: "/attached_assets/professional-scrum-master-i-psm-i.png",
    }
  ];
  
  const expiredCertifications: ExpiredCertification[] = [
    {
      id: "privacy-professional",
      name: "Privacy Professional",
      shortName: "OneTrust",
      imageSrc: "/attached_assets/onetrust-certified-privacy-professional.png",
    },
    {
      id: "scrum-foundation",
      name: "Scrum Foundation Professional Certificate",
      shortName: "SFPC",
      imageSrc: "/attached_assets/scrum-foundation-professional-certificate-sfpc.1.png",
    },
    {
      id: "solarwinds-npm",
      name: "SolarWinds Network Performance Monitor",
      shortName: "NPM",
      imageSrc: "/attached_assets/image_1743053166983.png", // Using the generic image for placeholder
    },
    {
      id: "solarwinds-orion",
      name: "Solarwinds Orion Design",
      shortName: "Orion",
      imageSrc: "/attached_assets/image_1743051674807.png", // Using the generic image for placeholder
    },
    {
      id: "google-it-support",
      name: "Google IT Support Professional Certificate",
      shortName: "Google IT",
      imageSrc: "/attached_assets/google-it-support-certificate.png",
    },
    {
      id: "itil",
      name: "Certified ITIL Foundation",
      shortName: "ITIL",
      imageSrc: "/attached_assets/image_1743051674807.png", // Using the generic image for placeholder
    }
  ];
  
  return (
    <section id="certifications" className="py-24 bg-terminal">
      <div className="section-container">
        <div className="mb-16 anim-fade-in group">
          <h2 className="numbered-heading text-3xl font-bold tracking-tight text-screentime mb-6 relative inline-block" data-number="04">
            {certT('title')}
            <span className="absolute -inset-1 bg-flow/20 blur-lg rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h2>
          <p className="text-screentime/70 max-w-2xl">
            {certT('subtitle')}
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-xl font-medium mb-8 text-screentime/90">{certT('activeTitle')}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {activeCertifications.map((cert, index) => (
              <div 
                key={cert.id} 
                className="transform transition-all duration-500 hover:scale-105"
                style={{ 
                  animation: `${index % 2 === 0 ? 'bounce-in' : 'scale-in'} 0.7s ease-out forwards ${index * 0.15 + 0.1}s`, 
                  opacity: 0 
                }}
              >
                <CertificationCard certification={cert} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="anim-fade-in" style={{ animationDelay: "0.5s" }}>
          <h3 className="text-xl font-medium mb-8 text-screentime/90">{certT('pastTitle')}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {expiredCertifications.map((cert, index) => (
              <div 
                key={cert.id} 
                className="platform-card group grayscale hover:grayscale-0 transition-all duration-500 flex flex-col items-center justify-center hover:shadow-[0_0_15px_rgba(57,123,255,0.2)] hover:-translate-y-1"
                style={{ animation: `fade-in 0.5s ease-out forwards ${index * 0.1 + 0.7}s` }}
              >
                <div className="flex items-center justify-center mb-3 relative w-full">
                  <img 
                    src={cert.imageSrc} 
                    alt={cert.name}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="absolute -inset-3 bg-flow/10 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                </div>
                <h4 className="text-xs font-medium text-center text-screentime/60 group-hover:text-screentime/90 transition-colors duration-300">{cert.shortName}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface CertificationCardProps {
  certification: Certification;
}

function CertificationCard({ certification }: CertificationCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="platform-card group relative overflow-hidden transition-all duration-500 flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-[0_5px_20px_-5px_rgba(57,123,255,0.3)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center mb-3 relative w-full">
        <img 
          src={certification.imageSrc} 
          alt={certification.name}
          className="w-24 h-24 object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute -inset-4 bg-flow/20 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500 group-hover:scale-110"></div>
      </div>
      <h4 className="text-sm font-medium text-center text-screentime transition-colors duration-300 group-hover:text-flow">{certification.shortName}</h4>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-flow/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-flow/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className={`absolute inset-0 bg-terminal/95 flex items-center justify-center p-4 border border-flow/50 backdrop-blur-sm transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="text-screentime text-xs text-center">
          <p className={`font-semibold mb-2 transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: "50ms" }}>
            {certification.name}
          </p>
          <p className={`mb-4 text-screentime/70 transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: "100ms" }}>
            {certification.validUntil}
          </p>
          <a 
            href={certification.verifyUrl} 
            className={`arrow-link justify-center hover:text-flow transition-all duration-300 inline-flex items-center ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: "150ms" }}
          >
            Verify
            <ExternalLink className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
