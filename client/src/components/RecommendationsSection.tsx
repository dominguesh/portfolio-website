import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

interface Recommendation {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  profileUrl: string;
}

export default function RecommendationsSection() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  // Recommendations data from LinkedIn
  const recommendations: Recommendation[] = [
    {
      id: "1",
      name: "Colby Warner",
      role: "Tier 3 Product Support Engineer",
      company: "BYU-Pathway",
      text: "Heraldo is a very process oriented worker. He works hard and efficiently. He is an asset to any team that he is on because of his knowledge and skills.",
      profileUrl: "https://www.linkedin.com/in/colbyraywarner/"
    },
    {
      id: "2",
      name: "Andrea Duarte",
      role: "Software Engineer Manager",
      company: "Amazon",
      text: "Heraldo is highly organized and independent; able to effectively coordinate tasks to accomplish projects with timeliness and creativity. He has an infectious enthusiasm for technology. During the years that I have worked with Heraldo, I have had the opportunity to observe his interpersonal style – he is a pleasant individual, very responsible and reliable.",
      profileUrl: "https://www.linkedin.com/in/andreafduarte/"
    },
    {
      id: "3",
      name: "Sylvia Murrieta",
      role: "Human Resources",
      company: "",
      text: "Heraldo has a great talent to develop and lead your team. It is a seasoned executive with management skills, very focused on results. It's a very professional guy, with a great skill and work dynamics. He knows the area well and aligns with the company's business. He is detail the objectives and business strategy of the company. Summarizing an excellent working partner.",
      profileUrl: "https://www.linkedin.com/in/sylvia-martinelli-b40a8932/"
    },
    {
      id: "4",
      name: "Justin Beardall",
      role: "Systems Engineer",
      company: "Zions Bacorporation",
      text: "Heraldo is a dependable and commited individual, his communication and management skills are beneficial to all that associate with him. He is a driven individual that will see that any job is completed to then end and his attention to detail ensures that his clients receive the best of quality.",
      profileUrl: "https://www.linkedin.com/in/justin-beardall-4a4a1513/"
    }
  ];

  return (
    <section id="recommendations" className="py-16 md:py-24 bg-terminal">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-flow/10 px-3 py-1 text-sm text-flow ring-1 ring-inset ring-flow/20 mb-4">
            <span className="font-mono">05</span>
            <span>{t('recommendations.title')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-screentime mb-4 font-heading">
            {t('recommendations.title')}
          </h2>
          <p className="text-xl text-screentime/80 max-w-3xl">
            {t('recommendations.subtitle')}
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {recommendations.map((recommendation) => (
              <CarouselItem key={recommendation.id} className={isMobile ? "basis-full" : "basis-1/2"}>
                <div className="p-1">
                  <RecommendationCard recommendation={recommendation} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static translate-y-0 mr-4" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

interface RecommendationCardProps {
  recommendation: Recommendation;
}

function RecommendationCard({ recommendation }: RecommendationCardProps) {
  return (
    <Card className="bg-terminal/50 border border-gray-800 hover:border-flow/40 transition-all duration-300 overflow-hidden group h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex-1">
          <blockquote className="text-screentime/90 text-base italic mb-6 leading-relaxed">
            "{recommendation.text}"
          </blockquote>
        </div>
        
        <div>
          <a 
            href={recommendation.profileUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-flow hover:text-flow-bright transition-colors"
          >
            <div className="ml-0 group-hover:ml-1 transition-all duration-300">
              <p className="font-medium text-screentime">{recommendation.name}</p>
              <p className="text-sm text-screentime/70">
                {recommendation.role}
                {recommendation.company && ` • ${recommendation.company}`}
              </p>
            </div>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
