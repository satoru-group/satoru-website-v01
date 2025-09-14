import { Button } from "@/components/ui/button";
import { ChevronsDown } from "lucide-react";

interface AboutUsSectionProps {
  showArrow?: boolean;
}

const AboutUsSection = ({ showArrow = false }: AboutUsSectionProps) => {
  return (
    <section className="w-full h-screen bg-background flex items-center justify-center relative overflow-hidden light-geometric-bg light-dots-bg">
      {/* Light Mode Pattern Enhancement */}
      <div className="absolute inset-0 circuit-bg opacity-20 dark:opacity-40 pointer-events-none" />
      
      {/* Large Microchip with Electric Animation Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Microchip Component */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-15 dark:opacity-25 animate-float-subtle">
          <svg viewBox="0 0 320 320" className="w-full h-full text-primary">
            {/* Main chip body */}
            <rect x="40" y="40" width="240" height="240" fill="none" stroke="currentColor" strokeWidth="2" rx="20"/>
            <rect x="60" y="60" width="200" height="200" fill="currentColor" opacity="0.1" rx="15"/>
            
            {/* Central processing core */}
            <rect x="120" y="120" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="2" rx="8"/>
            <rect x="140" y="140" width="40" height="40" fill="currentColor" opacity="0.3" rx="4" className="animate-digital-pulse"/>
            
            {/* Circuit patterns */}
            <g className="animate-digital-pulse" style={{animationDelay: '0.5s'}}>
              <rect x="80" y="80" width="20" height="20" fill="currentColor" opacity="0.4" rx="2"/>
              <rect x="220" y="80" width="20" height="20" fill="currentColor" opacity="0.4" rx="2"/>
              <rect x="80" y="220" width="20" height="20" fill="currentColor" opacity="0.4" rx="2"/>
              <rect x="220" y="220" width="20" height="20" fill="currentColor" opacity="0.4" rx="2"/>
            </g>
            
            {/* Connection lines */}
            <g stroke="currentColor" strokeWidth="1" opacity="0.6">
              <line x1="100" y1="90" x2="160" y2="120"/>
              <line x1="220" y1="90" x2="200" y2="120"/>
              <line x1="100" y1="230" x2="160" y2="200"/>
              <line x1="220" y1="230" x2="200" y2="200"/>
              <line x1="90" y1="100" x2="120" y2="160"/>
              <line x1="90" y1="220" x2="120" y2="200"/>
              <line x1="230" y1="100" x2="200" y2="160"/>
              <line x1="230" y1="220" x2="200" y2="200"/>
            </g>
            
            {/* Left side pins with electric animation */}
            <g className="animate-data-flow">
              <line x1="0" y1="80" x2="40" y2="80" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="0" y1="120" x2="40" y2="120" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="0" y1="160" x2="40" y2="160" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="0" y1="200" x2="40" y2="200" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="0" y1="240" x2="40" y2="240" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
            </g>
            
            {/* Right side pins with electric animation */}
            <g className="animate-data-flow" style={{animationDelay: '0.3s'}}>
              <line x1="280" y1="80" x2="320" y2="80" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="280" y1="120" x2="320" y2="120" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="280" y1="160" x2="320" y2="160" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="280" y1="200" x2="320" y2="200" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="280" y1="240" x2="320" y2="240" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
            </g>
            
            {/* Top pins with electric animation */}
            <g className="animate-data-flow" style={{animationDelay: '0.6s'}}>
              <line x1="80" y1="0" x2="80" y2="40" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="120" y1="0" x2="120" y2="40" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="160" y1="0" x2="160" y2="40" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="200" y1="0" x2="200" y2="40" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="240" y1="0" x2="240" y2="40" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
            </g>
            
            {/* Bottom pins with electric animation */}
            <g className="animate-data-flow" style={{animationDelay: '0.9s'}}>
              <line x1="80" y1="280" x2="80" y2="320" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="120" y1="280" x2="120" y2="320" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="160" y1="280" x2="160" y2="320" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="200" y1="280" x2="200" y2="320" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
              <line x1="240" y1="280" x2="240" y2="320" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
            </g>
            
            {/* Electric sparks at pin ends */}
            <g className="animate-digital-pulse">
              <circle cx="0" cy="80" r="3" fill="currentColor" opacity="0.8"/>
              <circle cx="0" cy="160" r="3" fill="currentColor" opacity="0.8"/>
              <circle cx="0" cy="240" r="3" fill="currentColor" opacity="0.8"/>
              <circle cx="320" cy="80" r="3" fill="currentColor" opacity="0.8"/>
              <circle cx="320" cy="160" r="3" fill="currentColor" opacity="0.8"/>
              <circle cx="320" cy="240" r="3" fill="currentColor" opacity="0.8"/>
              <circle cx="80" cy="0" r="3" fill="currentColor" opacity="0.8"/>
              <circle cx="160" cy="0" r="3" fill="currentColor" opacity="0.8"/>
              <circle cx="240" cy="0" r="3" fill="currentColor" opacity="0.8"/>
              <circle cx="80" cy="320" r="3" fill="currentColor" opacity="0.8"/>
              <circle cx="160" cy="320" r="3" fill="currentColor" opacity="0.8"/>
              <circle cx="240" cy="320" r="3" fill="currentColor" opacity="0.8"/>
            </g>
          </svg>
        </div>
        
        {/* Additional electric effects */}
        <div className="absolute top-20 left-10 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 animate-data-flow"></div>
        <div className="absolute bottom-20 right-10 w-32 h-1 bg-gradient-to-l from-transparent via-accent to-transparent opacity-30 animate-data-flow" style={{animationDelay: '1s'}}></div>
        <div className="absolute left-20 top-1/3 w-1 h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-30 animate-data-flow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute right-20 bottom-1/3 w-1 h-32 bg-gradient-to-t from-transparent via-accent to-transparent opacity-30 animate-data-flow" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Neural network background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10 px-4 sm:px-6 lg:px-12">        
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 sm:mb-8">
          Who We Are?
        </h2>
        
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
          Satoru Consulting is an operations and IT consulting firm that helps small and mid-sized businesses streamline workflows, optimize systems, and drive efficiency. We act as an extension of our clients' teams, providing fractional operations and IT leadership to support growth, scalability, and long-term success.
        </p>
        
        <Button variant="outline" size="lg" className="text-sm sm:text-base px-6 sm:px-8">
          Learn More
        </Button>
        
        {/* Floating particles with enhanced modern animations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping opacity-40"
               style={{
                 animationDuration: '4s',
                 transform: `translate(${Math.sin(Date.now() * 0.0008) * 20}px, ${Math.cos(Date.now() * 0.001) * 15}px)`,
               }}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse opacity-60"
               style={{
                 animationDuration: '3s',
                 transform: `translateY(${Math.sin(Date.now() * 0.0012) * 12}px)`,
               }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-ping opacity-30" 
               style={{
                 animationDelay: '1s',
                 transform: `translate(${Math.cos(Date.now() * 0.0006) * 18}px, ${Math.sin(Date.now() * 0.0009) * 10}px)`,
               }}></div>
        </div>
      </div>
      
      {/* Scroll Down Arrow */}
      {showArrow && (
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronsDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary" strokeWidth={3} />
        </div>
      )}
    </section>
  );
};

export default AboutUsSection;