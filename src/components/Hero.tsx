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
    <section className="relative w-full h-full flex flex-col bg-background overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      {/* Full viewport container accounting for fixed header */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 min-h-0">
        {/* Consistent Background Patterns */}
        <div className="absolute inset-0 tech-grid opacity-30 dark:opacity-20 pointer-events-none" />
        <div className="absolute inset-0 light-geometric-bg opacity-20 dark:opacity-0 pointer-events-none" />
        
        {/* AI Particle System - Reduced for mobile */}
        <div className="particles pointer-events-none">
          {[...Array(10)].map((_, i) => (
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
        
        <div className="max-w-7xl mx-auto w-full flex flex-col justify-center flex-1">
          {/* Main Hero Content */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-6 lg:mb-10">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="relative">
                  {/* Decorative background image */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img 
                      src={satoruDecoration} 
                      alt="" 
                      className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain opacity-10 dark:opacity-20 animate-float-subtle"
                      style={{ 
                        filter: 'hue-rotate(10deg) saturate(1.2)',
                        transform: 'rotate(-5deg) scale(1.1)'
                      }}
                    />
                  </div>
                  
                  <h1 className="relative z-10 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#27254c] dark:text-foreground leading-tight">
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
                <p className="text-sm sm:text-base lg:text-lg text-[#1f232f] dark:text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 px-2">
                  Harness the power of advanced AI technology to transform your business operations and unlock unprecedented growth opportunities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start px-4 sm:px-0">
                <Button variant="cta" size="lg" className="text-sm w-full sm:w-auto px-6 py-3 hover-lift transition-smooth hover:shadow-glow-primary">
                  Book a Consultant
                </Button>
                <Button variant="outline" size="lg" className="text-sm w-full sm:w-auto px-6 py-3 hover-lift holographic">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Content - AI Image */}
            <div className="relative order-1 lg:order-2 group w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto">
              <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-glow-cyan border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 group-hover:shadow-glow-purple scan-lines">
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
              <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-primary rounded-full animate-digital-pulse opacity-80" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-5 sm:h-5 bg-accent rounded-full animate-float-dynamic opacity-60" />
              <div className="absolute top-1/2 -left-3 sm:-left-4 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-digital-pulse opacity-70" />
            </div>
          </div>

          {/* AI Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-6 lg:mb-8 px-2">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-3 lg:p-6 bg-card/50 backdrop-blur-sm rounded-lg shadow-glow-cyan border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow-purple transition-all duration-300 hover:-translate-y-1 scan-lines holographic"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1 animate-digital-pulse">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-[#334155] dark:text-muted-foreground font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos Section */}
          <div className="mt-4 lg:mt-6">
            <ClientLogos />
          </div>
        </div>
        
        {/* Scroll Down Arrow */}
        {showArrow && (
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronsDown className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary" strokeWidth={3} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;