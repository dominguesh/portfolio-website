import { useLanguage } from "@/hooks/use-language";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  CodeBracketIcon, 
  BuildingOffice2Icon, 
  CloudIcon, 
  CommandLineIcon, 
  DocumentTextIcon, 
  UserGroupIcon,
  ShieldCheckIcon,
  ArrowsPointingOutIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Server, ShieldCheck, Code2, LineChart } from "lucide-react";

interface Skill {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: "technical" | "business" | "management";
  level?: "beginner" | "intermediate" | "advanced" | "expert";
}

export default function SkillsSection() {
  const { t } = useLanguage();

  const skills: Skill[] = [
    // Technical skills
    {
      id: "1",
      name: "Scrum Framework",
      icon: <ArrowsPointingOutIcon className="h-5 w-5" />,
      category: "technical",
      level: "expert"
    },
    {
      id: "2",
      name: "Cloud Architecture",
      icon: <CloudIcon className="h-5 w-5" />,
      category: "technical",
      level: "advanced"
    },
    {
      id: "3",
      name: "On-Premises Architecture",
      icon: <BuildingOffice2Icon className="h-5 w-5" />,
      category: "technical",
      level: "expert"
    },
    {
      id: "4",
      name: "IT Governance",
      icon: <ShieldCheckIcon className="h-5 w-5" />,
      category: "technical",
      level: "advanced"
    },
    {
      id: "5",
      name: "Command Line Scripting",
      icon: <CommandLineIcon className="h-5 w-5" />,
      category: "technical",
      level: "advanced"
    },
    {
      id: "6",
      name: "Server Administration",
      icon: <BuildingOffice2Icon className="h-5 w-5" />,
      category: "technical",
      level: "advanced"
    },
    {
      id: "14",
      name: "Identity Access Management",
      icon: <ShieldCheckIcon className="h-5 w-5" />,
      category: "technical",
      level: "advanced"
    },
    {
      id: "15",
      name: "Privileged Access Management",
      icon: <ShieldCheckIcon className="h-5 w-5" />,
      category: "technical",
      level: "expert"
    },
    {
      id: "16",
      name: "Network Segmentation",
      icon: <ShieldCheckIcon className="h-5 w-5" />,
      category: "technical",
      level: "advanced"
    },
    {
      id: "17",
      name: "Intrusion Detection",
      icon: <ShieldCheckIcon className="h-5 w-5" />,
      category: "technical",
      level: "advanced"
    },
    // Business skills
    {
      id: "7",
      name: "Strategic Sales Planning",
      icon: <ChartBarIcon className="h-5 w-5" />,
      category: "business",
      level: "expert"
    },
    {
      id: "8",
      name: "Technical Sales",
      icon: <DocumentTextIcon className="h-5 w-5" />,
      category: "business",
      level: "expert"
    },
    {
      id: "9",
      name: "POV Demonstrations",
      icon: <CodeBracketIcon className="h-5 w-5" />,
      category: "business",
      level: "expert"
    },
    {
      id: "10",
      name: "Value-Based Selling",
      icon: <ChartBarIcon className="h-5 w-5" />,
      category: "business",
      level: "advanced"
    },
    // Management skills
    {
      id: "11",
      name: "Cross-Functional Collaboration",
      icon: <UserGroupIcon className="h-5 w-5" />,
      category: "management",
      level: "expert"
    },
    {
      id: "12",
      name: "Stakeholder Management",
      icon: <UserGroupIcon className="h-5 w-5" />,
      category: "management",
      level: "expert"
    },
    {
      id: "13",
      name: "Sales Partnerships",
      icon: <UserGroupIcon className="h-5 w-5" />,
      category: "management",
      level: "advanced"
    }
  ];

  const technicalSkills = skills.filter(skill => skill.category === "technical");
  const businessSkills = skills.filter(skill => skill.category === "business");
  const managementSkills = skills.filter(skill => skill.category === "management");

  // Security and infrastructure skills with expanded network security
  const techSkills = [
    { name: "Network Security", level: 90, expertise: "Advanced" },
    { name: "Identity Access Management", level: 85, expertise: "Advanced" },
    { name: "Privileged Access Management", level: 95, expertise: "Expert" },
    { name: "Network Segmentation", level: 85, expertise: "Advanced" },
    { name: "Intrusion Detection", level: 80, expertise: "Advanced" }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-terminal relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-flow/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-flow/20 rounded-full blur-3xl opacity-30"></div>

      <div className="container relative z-10">
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-flow/10 px-3 py-1 text-sm text-flow ring-1 ring-inset ring-flow/20 mb-4">
            <span className="font-mono">03</span>
            <span>{t('skills.technologies')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-screentime mb-4 font-heading">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-screentime/80 max-w-3xl">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Technologies Card with Original Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex items-center">
            <div className="relative w-full">
              <div className="absolute -z-10 -inset-1 rounded-xl bg-flow/20 opacity-70 blur-xl"></div>
              <Card className="card-hover relative overflow-hidden rounded-xl bg-terminal-50 p-8 shadow-lg border border-gray-800 anim-float">
                <div className="space-y-2 mb-4">
                  <h3 className="text-xl font-semibold text-screentime font-heading">Network Security</h3>
                  <p className="text-sm text-screentime/70 font-sans">Security infrastructure & protection capabilities</p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col items-center p-3 rounded-lg bg-terminal-100 text-screentime hover:bg-flow hover:text-screentime transition-all duration-300">
                    <Server className="mb-1" />
                    <span className="text-xs font-sans">{t('skills.infrastructure')}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg bg-terminal-100 text-screentime hover:bg-luminosity hover:text-screentime transition-all duration-300">
                    <ShieldCheck className="mb-1" />
                    <span className="text-xs font-sans">{t('skills.security')}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg bg-terminal-100 text-screentime hover:bg-afterglow hover:text-terminal transition-all duration-300">
                    <Code2 className="mb-1" />
                    <span className="text-xs font-sans">{t('skills.development')}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg bg-terminal-100 text-screentime hover:bg-ember hover:text-screentime transition-all duration-300">
                    <LineChart className="mb-1" />
                    <span className="text-xs font-sans">{t('skills.observability')}</span>
                  </div>
                </div>
                
                {/* Tech skills with progress bars */}
                <div>
                  {techSkills.map((skill, index) => (
                    <div key={index} className={`space-y-2 ${index > 0 ? 'mt-4' : ''}`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-screentime font-sans">{t(`skills.${skill.name.toLowerCase()}`, skill.name)}</span>
                        <span className="badge-primary font-sans">
                          {t(`skills.${skill.expertise.toLowerCase()}`, skill.expertise)}
                        </span>
                      </div>
                      <div className="w-full bg-terminal-100 rounded-full h-2">
                        <div 
                          className="bg-flow h-2 rounded-full transition-all duration-1000" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
          
          {/* Strengths Card with Original Design */}
          <div className="flex items-center">
            <div className="relative w-full">
              <div className="absolute -z-10 -inset-1 rounded-xl bg-flow/20 opacity-70 blur-xl"></div>
              <Card className="card-hover relative overflow-hidden rounded-xl bg-terminal-50 p-8 shadow-lg border border-gray-800 anim-float">
                <div className="space-y-2 mb-4">
                  <h3 className="text-xl font-semibold text-screentime font-heading">{t('skills.iBring')}</h3>
                </div>
                
                <div className="space-y-4">
                  <ul className="space-y-2 text-sm font-sans">
                    <li className="flex items-start">
                      <span className="text-flow font-bold mr-2">•</span>
                      <span className="text-screentime/80"><strong className="text-screentime">{t('skills.strategicClarity')}</strong> – {t('skills.strategicClarityDesc')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-flow font-bold mr-2">•</span>
                      <span className="text-screentime/80"><strong className="text-screentime">{t('skills.driveToWin')}</strong> – {t('skills.driveToWinDesc')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-flow font-bold mr-2">•</span>
                      <span className="text-screentime/80"><strong className="text-screentime">{t('skills.visionFuture')}</strong> – {t('skills.visionFutureDesc')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-flow font-bold mr-2">•</span>
                      <span className="text-screentime/80"><strong className="text-screentime">{t('skills.actionAnalysis')}</strong> – {t('skills.actionAnalysisDesc')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-flow font-bold mr-2">•</span>
                      <span className="text-screentime/80"><strong className="text-screentime">{t('skills.confidence')}</strong> – {t('skills.confidenceDesc')}</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Skills tab section */}
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-screentime font-heading">Professional Expertise</h3>
        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="mb-8 bg-terminal border border-gray-800">
            <TabsTrigger value="technical" className="data-[state=active]:bg-flow/10 data-[state=active]:text-flow">
              {t('skills.technical')}
            </TabsTrigger>
            <TabsTrigger value="business" className="data-[state=active]:bg-flow/10 data-[state=active]:text-flow">
              {t('skills.business')}
            </TabsTrigger>
            <TabsTrigger value="management" className="data-[state=active]:bg-flow/10 data-[state=active]:text-flow">
              {t('skills.management')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {technicalSkills.map(skill => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="business" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {businessSkills.map(skill => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="management" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {managementSkills.map(skill => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  const { t } = useLanguage();
  
  // Determine badge color based on skill level
  const getBadgeVariant = (level?: string) => {
    switch (level) {
      case "expert":
        return "flow";
      case "advanced":
        return "default";
      case "intermediate":
        return "secondary";
      default:
        return "outline";
    }
  };

  // Translate skill level
  const getSkillLevelText = (level?: string) => {
    if (!level) return "";
    
    switch (level) {
      case "expert":
        return t('skills.expert');
      case "advanced":
        return t('skills.advanced');
      case "intermediate":
        return t('skills.intermediate');
      case "beginner":
        return t('skills.beginner');
      default:
        return level;
    }
  };

  return (
    <div className="flex flex-col p-4 rounded-lg border border-gray-800 bg-terminal/50 hover:border-flow/40 transition-all duration-300 group">
      <div className="flex items-start mb-3">
        <div className="p-2 rounded-md bg-flow/10 text-flow mr-3">
          {skill.icon}
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-screentime">{skill.name}</h3>
          {skill.level && (
            <Badge variant={getBadgeVariant(skill.level) as any} className="mt-1">
              {getSkillLevelText(skill.level)}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}
