import { Home } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="pb-8 text-sm text-muted-foreground">
      <p className="leading-relaxed mb-8">
        Designed and built with passion. Crafted in{" "}
        <span className="text-primary font-medium">Visual Studio Code</span>. Built with{" "}
        <span className="text-primary font-medium">React</span> and{" "}
        <span className="text-primary font-medium">Tailwind CSS</span>.
      </p>
      
      {/* Animated portfolio link with bouncing icon */}
      <div className="border-t border-border/30 pt-6">
        <a 
          href="#portfolios" 
          className="group inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors"
        >
          <div className="animate-bounce-slow">
            <Home className="w-6 h-6" />
          </div>
          <span className="font-medium text-base">View All My Portfolios</span>
        </a>
      </div>
    </footer>
  );
};
