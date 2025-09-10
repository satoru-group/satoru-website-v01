import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="w-full h-screen bg-background flex items-center justify-center relative overflow-hidden">
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
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 px-6 lg:px-12">        
        <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-8">
          Who We Are?
        </h2>
        
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
          Satoru Consulting is an operations and IT consulting firm that helps small and mid-sized businesses streamline workflows, optimize systems, and drive efficiency. We act as an extension of our clients' teams, providing fractional operations and IT leadership to support growth, scalability, and long-term success.
        </p>
        
        <Button variant="outline" size="lg" className="text-base">
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary animate-pulse" />
      </div>
    </section>
  );
};

export default AboutUsSection;