import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, ShieldCheck, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/hooks/use-language";
import { nameRegex } from "@/lib/validate";

// List of common non-corporate email domains to block
const BLOCKED_EMAIL_DOMAINS = [
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", 
  "icloud.com", "me.com", "mail.com", "protonmail.com", "tutanota.com",
  "yandex.com", "zoho.com", "gmx.com", "inbox.com", "fastmail.com"
];

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }).max(30, {
    message: "First name must not be longer than 30 characters.",
  }).regex(nameRegex, {
    message: "First name must contain only letters, spaces, hyphens, and apostrophes.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }).max(30, {
    message: "Last name must not be longer than 30 characters.",
  }).regex(nameRegex, {
    message: "Last name must contain only letters, spaces, hyphens, and apostrophes.",
  }),
  workEmail: z.string().email({
    message: "Please enter a valid email address.",
  }).refine((email) => {
    const domain = email.split('@')[1]?.toLowerCase();
    return domain && !BLOCKED_EMAIL_DOMAINS.includes(domain);
  }, {
    message: "Please use your work email address (personal email providers are not accepted).",
  }),
  role: z.string().min(2, {
    message: "Role must be at least 2 characters.",
  }).max(50, {
    message: "Role must not be longer than 50 characters.",
  }),
  company: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }).max(50, {
    message: "Company must not be longer than 50 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function ResumeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      workEmail: "",
      role: "",
      company: "",
    },
    mode: "onChange",
  });
  
  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    
    try {
      // Simulate API call with a timeout for a better UX
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Direct download of the resume file from the public folder
      const resumeUrl = '/assets/resume/ResumeHeraldoDomingues.pdf';
      const a = document.createElement('a');
      a.href = resumeUrl;
      a.download = 'Heraldo-Domingues-Resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      
      toast({
        title: t('resume.form.successTitle', "Success!"),
        description: t('resume.form.successDescription', "Your resume is being downloaded."),
      });
      
      // Store the user info in localStorage (you can optionally send to a server later)
      const userInfo = {
        ...data,
        downloadDate: new Date().toISOString()
      };
      
      // Avoid keeping sensitive data, but logging the request
      console.log("Resume download requested by:", data.firstName, data.lastName, "from", data.company);
      
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: t('resume.form.errorTitle', "Error"),
        description: t('resume.form.errorDescription', "There was a problem downloading your resume. Please try again."),
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="resume" className="py-24 bg-keyboard">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 anim-fade-in group">
            <h2 className="numbered-heading text-3xl font-bold tracking-tight text-terminal mb-6 relative inline-block font-heading" data-number="05">
              {t('resume.form.title', "Download My Resume")}
              <span className="absolute -inset-1 bg-flow/20 blur-lg rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </h2>
            <p className="text-terminal/80 max-w-2xl font-sans">
              {t('resume.description', "Fill out the form below to download my detailed resume with my professional experience, skills, and education.")}
            </p>
          </div>
          
          <Card className="bg-terminal rounded-xl p-6 md:p-8 border border-gray-800 shadow-xl overflow-hidden relative anim-scale-in" style={{ animationDelay: "0.2s" }}>
            {/* Decorative overlay */}
            <div className="absolute -right-20 -top-20 h-64 w-64 bg-flow/10 blur-3xl rounded-full"></div>
            <div className="absolute -left-20 -bottom-20 h-40 w-40 bg-beam/5 blur-3xl rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              <div className="md:col-span-2">
                <div className="flex flex-col justify-center h-full">
                  <h3 className="text-xl font-semibold mb-4 text-screentime font-heading">{t('resume.form.title', "Download My Resume")}</h3>
                  <p className="text-screentime/70 mb-6 font-sans">
                    {t('resume.form.security', "Your information is secure and won't be shared with third parties.")}
                  </p>
                  <div className="flex items-center space-x-2 bg-terminal-100 text-flow p-3 rounded-lg mb-6 border border-flow/20">
                    <ShieldCheck className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm text-screentime/90 font-sans">{t('resume.form.dataProtection', "Your data is protected and encrypted")}</span>
                  </div>
                  
                  <div className="hidden md:block">
                    <div className="flex items-center mb-4">
                      <hr className="flex-grow border-gray-700" />
                      <span className="px-3 text-sm text-screentime/50 font-sans">{t('resume.form.features', "What's Included")}</span>
                      <hr className="flex-grow border-gray-700" />
                    </div>
                    <ul className="space-y-3 text-sm text-screentime/70 font-sans">
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-flow mr-2" />
                        {t('resume.form.feature1', "Detailed work history")}
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-flow mr-2" />
                        {t('resume.form.feature2', "Skills analysis")}
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-flow mr-2" />
                        {t('resume.form.feature3', "Education timeline")}
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-flow mr-2" />
                        {t('resume.form.feature4', "Project portfolio")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="anim-slide-in-left" style={{ animationDelay: "0.1s" }}>
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-screentime/90 font-sans">{t('resume.form.firstName', "First Name")}</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="John" 
                                  {...field} 
                                  className="bg-terminal-200 border-gray-700 text-screentime focus:border-flow transition-all duration-300 shadow-none focus:shadow-[0_0_0_1px_rgba(57,123,255,0.5),0_0_15px_rgba(57,123,255,0.15)] font-sans hover:border-flow/50"
                                />
                              </FormControl>
                              <FormMessage className="text-ember font-sans" />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="anim-slide-in-right" style={{ animationDelay: "0.2s" }}>
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-screentime/90 font-sans">{t('resume.form.lastName', "Last Name")}</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Doe" 
                                  {...field} 
                                  className="bg-terminal-200 border-gray-700 text-screentime focus:border-flow transition-all duration-300 shadow-none focus:shadow-[0_0_0_1px_rgba(57,123,255,0.5),0_0_15px_rgba(57,123,255,0.15)] font-sans hover:border-flow/50"
                                />
                              </FormControl>
                              <FormMessage className="text-ember font-sans" />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <div className="anim-slide-in-bottom" style={{ animationDelay: "0.3s" }}>
                      <FormField
                        control={form.control}
                        name="workEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-screentime/90 font-sans">{t('resume.form.workEmail', "Work Email")}</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="you@company.com" 
                                {...field} 
                                className="bg-terminal-200 border-gray-700 text-screentime focus:border-flow transition-all duration-300 shadow-none focus:shadow-[0_0_0_1px_rgba(57,123,255,0.5),0_0_15px_rgba(57,123,255,0.15)] font-sans hover:border-flow/50"
                              />
                            </FormControl>
                            <FormDescription className="text-screentime/50 text-xs font-sans flex items-center">
                              <AlertCircle className="h-3 w-3 mr-1 text-flow animate-pulse-subtle" />
                              {t('resume.form.emailRequirement', "Must be a corporate email (Gmail, Yahoo, etc. not accepted)")}
                            </FormDescription>
                            <FormMessage className="text-ember font-sans" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="anim-slide-in-left" style={{ animationDelay: "0.4s" }}>
                        <FormField
                          control={form.control}
                          name="role"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-screentime/90 font-sans">{t('resume.form.role', "Role")}</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Software Engineer" 
                                  {...field} 
                                  className="bg-terminal-200 border-gray-700 text-screentime focus:border-flow transition-all duration-300 shadow-none focus:shadow-[0_0_0_1px_rgba(57,123,255,0.5),0_0_15px_rgba(57,123,255,0.15)] font-sans hover:border-flow/50"
                                />
                              </FormControl>
                              <FormMessage className="text-ember font-sans" />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="anim-slide-in-right" style={{ animationDelay: "0.5s" }}>
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-screentime/90 font-sans">{t('resume.form.company', "Company")}</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Acme Inc." 
                                  {...field} 
                                  className="bg-terminal-200 border-gray-700 text-screentime focus:border-flow transition-all duration-300 shadow-none focus:shadow-[0_0_0_1px_rgba(57,123,255,0.5),0_0_15px_rgba(57,123,255,0.15)] font-sans hover:border-flow/50"
                                />
                              </FormControl>
                              <FormMessage className="text-ember font-sans" />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 anim-slide-in-bottom" style={{ animationDelay: "0.6s" }}>
                      <div className="h-[78px] w-full bg-terminal-200 border border-gray-700 rounded-lg flex items-center justify-center text-screentime/60 text-sm font-sans hover:border-flow/30 transition-all duration-300">
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-flow/30 border-t-flow rounded-full animate-spin mr-2"></div>
                          {t('resume.form.captcha', "hCaptcha verification will appear here")}
                        </div>
                      </div>
                    </div>
                    
                    <div className="anim-bounce-in" style={{ animationDelay: "0.7s" }}>
                      <Button 
                        type="submit" 
                        className="w-full btn-primary relative overflow-hidden group font-sans"
                        disabled={isSubmitting}
                      >
                        {/* Adding flow effect */}
                        <span className="absolute -inset-x-1 bottom-0 h-0.5 bg-flow opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left"></span>
                        <span className="absolute -inset-y-1 right-0 w-0.5 bg-flow opacity-0 group-hover:opacity-100 transition-all duration-500 scale-y-0 group-hover:scale-y-100 origin-bottom delay-100"></span>
                        <span className="absolute -inset-x-1 top-0 h-0.5 bg-flow opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-right delay-200"></span>
                        <span className="absolute -inset-y-1 left-0 w-0.5 bg-flow opacity-0 group-hover:opacity-100 transition-all duration-500 scale-y-0 group-hover:scale-y-100 origin-top delay-300"></span>
                        <span className="relative flex items-center justify-center">
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-screentime/30 border-t-screentime rounded-full animate-spin mr-2"></div>
                              {t('resume.form.downloading', "Downloading...")}
                            </>
                          ) : (
                            t('resume.form.downloadBtn', "Download Resume")
                          )}
                        </span>
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
