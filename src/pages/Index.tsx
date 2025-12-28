import { Spotlight } from "@/components/Spotlight";
import { Navigation } from "@/components/Navigation";
import { SocialLinks } from "@/components/SocialLinks";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Spotlight />
      
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Sidebar - Fixed */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              {/* Profile Picture Frame */}
              <div 
                className="group relative w-36 h-36 mb-6 border-2 border-primary/50 overflow-hidden bg-card/50 flex items-center justify-center opacity-0 animate-fade-in transition-all duration-300 hover:border-primary"
                style={{ animationDelay: "0.05s" }}
              >
                <img 
                  src="/assets/profile-image.jpeg" 
                  alt="Millicent Anyango" 
                  className="w-full h-full object-cover transition-all duration-300"
                />
                {/* Teal overlay - visible by default, hidden on hover */}
                <div className="absolute inset-0 bg-primary/60 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
              </div>
              
              <h1 
                className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl opacity-0 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <a href="/">Millicent Anyango</a>
              </h1>
              <h2 
                className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl opacity-0 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Software Developer
              </h2>
              <p 
                className="mt-4 max-w-xs leading-normal text-muted-foreground opacity-0 animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                I build accessible, pixel-perfect digital experiences for the web.
              </p>
              
              <div 
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <Navigation />
              </div>
            </div>
            
            <div 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <SocialLinks />
            </div>
          </header>

          {/* Right Content - Scrollable */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <div 
              className="opacity-0 animate-fade-in-right"
              style={{ animationDelay: "0.3s" }}
            >
              <AboutSection />
            </div>
            
            <div 
              className="opacity-0 animate-fade-in-right"
              style={{ animationDelay: "0.4s" }}
            >
              <ExperienceSection />
            </div>
            
            <div 
              className="opacity-0 animate-fade-in-right"
              style={{ animationDelay: "0.5s" }}
            >
              <ProjectsSection />
            </div>
            
            <div 
              className="opacity-0 animate-fade-in-right"
              style={{ animationDelay: "0.6s" }}
            >
              <SkillsSection />
            </div>
            
            <div 
              className="opacity-0 animate-fade-in-right"
              style={{ animationDelay: "0.7s" }}
            >
              <ContactSection />
            </div>
            
            <div 
              className="opacity-0 animate-fade-in-right"
              style={{ animationDelay: "0.8s" }}
            >
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
