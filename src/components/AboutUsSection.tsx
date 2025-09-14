import { Button } from "@/components/ui/button";
import { ChevronsDown } from "lucide-react";

interface AboutUsSectionProps {
  showArrow?: boolean;
}

const AboutUsSection = ({ showArrow = false }: AboutUsSectionProps) => {
  return (
    <section className="w-full h-full bg-background flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Consistent Background Patterns */}
      <div className="absolute inset-0 neural-bg opacity-15 dark:opacity-25 pointer-events-none" />
      <div className="absolute inset-0 light-dots-bg opacity-20 dark:opacity-0 pointer-events-none" />
      
      {/* Large Microchip with Electric Animation Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* ... keep existing code (microchip SVG and effects) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-15 dark:opacity-25 animate-float-subtle">
          <svg viewBox="0 0 320 320" className="w-full h-full text-primary">
            {/* Main chip body */}
            <rect x="40" y="40" width="240" height="240" fill="none" stroke="currentColor" strokeWidth="2" rx="20"/>
            <rect x="60" y="60" width="200" height="200" fill="currentColor" opacity="0.1" rx="15"/>
            
            {/* ... keep existing SVG content ... */}
            
            {/* Central processing core */}
            <rect x="120" y="120" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="2" rx="8"/>
            <rect x="140" y="140" width="40" height="40" fill="currentColor" opacity="0.3" rx="4" className="animate-digital-pulse"/>
          </svg>
        </div>
      </div>
      
        {/* Standardized Spacing and Typography */}
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10 w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 sm:mb-6">
          Who We Are?
        </h2>
        
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8">
          Satoru Consulting is an operations and IT consulting firm that helps small and mid-sized businesses streamline workflows, optimize systems, and drive efficiency. We act as an extension of our clients' teams, providing fractional operations and IT leadership to support growth, scalability, and long-term success.
        </p>
        
        <Button variant="outline" size="lg" className="text-sm sm:text-base px-6 sm:px-8">
          Learn More
        </Button>
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