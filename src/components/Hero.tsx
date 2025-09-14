import { Button } from "@/components/ui/button";
import aiTechnology from "@/assets/ai-technology.jpg";
import satoruDecoration from "@/assets/satoru-decoration.png";
import { ChevronsDown } from "lucide-react";
import ClientLogos from "@/components/ClientLogos";

interface HeroProps {
  showArrow?: boolean;
}

const Hero = ({ showArrow = false }: HeroProps) => {
  const stats = [
    {
      number: "95%",
      label: "Client Satisfaction",
    },
    {
      number: "30%",
      label: "Efficiency Increase",
    },
    {
      number: "70+ Years",
      label: "Consulting Experience",
    },
    {
      number: "20+",
      label: "Projects Completed",
    },
  ];

  return (
    <section className="relative w-full h-full flex flex-col bg-background overflow-hidden pt-[64px] sm:pt-[68px] lg:pt-[72px]">
      {/* Full viewport container accounting for fixed header - exact header height */}
      <div className="flex-1 flex flex-col justify-center px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 min-h-0">
        {/* Consistent Background Patterns */}
        <div className="absolute inset-0 tech-grid opacity-30 dark:opacity-20 pointer-events-none" />
        <div className="absolute inset-0 light-geometric-bg opacity-20 dark:opacity-0 pointer-events-none" />
        
        {/* AI Particle System - Reduced for mobile */}
        <div className="particles pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="particle animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Matrix Rain Background */}
        <div className="absolute inset-0 matrix-bg opacity-20 pointer-events-none" />
        
        {/* Scanning Lines */}
        <div className="absolute inset-0 scan-lines opacity-30 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto w-full flex flex-col justify-center flex-1">
          {/* Main Hero Content */}
          <div className="grid grid-cols-2 gap-4 lg:gap-8 items-center mb-3 lg:mb-6">
            {/* Left Content */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-5 text-left order-1">
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <div className="relative">
                  {/* Decorative background image */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img 
                      src={satoruDecoration} 
                      alt="" 
                      className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 object-contain opacity-10 dark:opacity-20 animate-float-subtle"
                      style={{ 
                        filter: 'hue-rotate(10deg) saturate(1.2)',
                        transform: 'rotate(-5deg) scale(1.1)'
                      }}
                    />
                  </div>
                  
                  <h1 className="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#27254c] dark:text-foreground leading-tight">
                    <span className="inline-block animate-float-subtle">Simplify.</span>
                    <br />
                    <span className="text-[#564a94] dark:text-primary inline-block animate-float-dynamic text-glow">Streamline.</span>
                    <br />
                    <span className="text-[#8b7dd6] dark:bg-gradient-primary dark:bg-clip-text dark:text-transparent inline-block animate-float-subtle glow">Succeed.</span>
                  </h1>
                  
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 holographic opacity-50 pointer-events-none" />
                </div>
              </div>
              
              <div className="data-stream">
                <p className="text-xs sm:text-sm lg:text-base text-[#1f232f] dark:text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 px-1">
                  Harness the power of advanced AI technology to transform your business operations and unlock unprecedented growth opportunities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start px-2 sm:px-0">
                <Button variant="cta" size="sm" className="text-xs w-full sm:w-auto px-4 py-2 hover-lift transition-smooth hover:shadow-glow-primary">
                  Book a Consultant
                </Button>
                <Button variant="outline" size="sm" className="text-xs w-full sm:w-auto px-4 py-2 hover-lift holographic">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Content - AI Image */}
            <div className="relative order-2 group w-full max-w-xs sm:max-w-sm lg:max-w-none mx-auto">
              <div className="relative overflow-hidden rounded-lg lg:rounded-xl shadow-glow-cyan border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 group-hover:shadow-glow-purple scan-lines">
                <img 
                  src={aiTechnology} 
                  alt="Advanced AI technology interface with holographic displays and neural network visualizations" 
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:translate-y-[-10%] group-hover:scale-110"
                />
                
                {/* Paper scroll effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Scroll shadow effect */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-full group-hover:translate-y-0" />
                
                {/* AI Circuit overlay */}
                <div className="absolute inset-0 circuit-bg opacity-20 animate-circuit-flow" />
              </div>
              
              {/* Floating AI elements */}
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-primary rounded-full animate-digital-pulse opacity-80" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full animate-float-dynamic opacity-60" />
              <div className="absolute top-1/2 -left-2 sm:-left-3 w-2 h-2 bg-primary rounded-full animate-digital-pulse opacity-70" />
            </div>
          </div>

          {/* AI Stats Section - More compact */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 mb-3 lg:mb-5 px-1">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-2 lg:p-4 bg-card/50 backdrop-blur-sm rounded-lg shadow-glow-cyan border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow-purple transition-all duration-300 hover:-translate-y-1 scan-lines holographic"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1 animate-digital-pulse">
                  {stat.number}
                </div>
                <div className="text-xs text-[#334155] dark:text-muted-foreground font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos Section - Compact */}
          <div className="mt-2 lg:mt-3">
            <ClientLogos />
          </div>
        </div>
        
        {/* Scroll Down Arrow */}
        {showArrow && (
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronsDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" strokeWidth={3} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;