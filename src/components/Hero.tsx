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
    <section className="relative w-full h-full flex flex-col bg-background overflow-hidden pt-[100px] sm:pt-[68px] lg:pt-[72px]">
      {/* Full viewport container accounting for fixed header - exact header height */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-6 py-4 sm:py-6 lg:py-4 min-h-0">
        {/* Consistent Background Patterns */}
        <div className="absolute inset-0 tech-grid opacity-30 dark:opacity-20 pointer-events-none" />
        <div className="absolute inset-0 light-geometric-bg opacity-20 dark:opacity-0 pointer-events-none" />
        
        {/* AI Particle System - Disabled on mobile for performance */}
        <div className="particles pointer-events-none hidden sm:block">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className="particle animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
                willChange: 'transform'
              }}
            />
          ))}
        </div>

        {/* Matrix Rain Background - Reduced opacity on mobile */}
        <div className="absolute inset-0 matrix-bg opacity-5 sm:opacity-20 pointer-events-none" />
        
        {/* Scanning Lines - Disabled on mobile */}
        <div className="absolute inset-0 scan-lines opacity-0 sm:opacity-30 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto w-full flex flex-col justify-center flex-1">
          {/* Mobile Layout - Optimized for professional mobile experience */}
          <div className="flex flex-col lg:hidden gap-6 mb-6 mt-16">
            {/* Mobile: Top row - Heading on left, Image on right */}
            <div className="grid grid-cols-7 gap-4 items-center">
              {/* Mobile Left - Heading and decoration - takes 4 columns for better text space */}
              <div className="col-span-4 text-left flex items-center">
                <div className="relative w-full">
                  {/* Decorative background image - optimized for mobile */}
                  <div className="absolute inset-0 flex items-center justify-start pointer-events-none pl-1">
                    <img 
                      src={satoruDecoration} 
                      alt="" 
                      className="w-48 h-48 object-contain opacity-15 dark:opacity-25"
                      style={{ 
                        filter: 'hue-rotate(10deg) saturate(1.2)',
                        transform: 'rotate(-5deg) scale(1.2)',
                        willChange: 'auto'
                      }}
                    />
                  </div>
                  
                  <h1 className="relative z-10 text-2xl sm:text-3xl leading-tight font-bold text-[#27254c] dark:text-foreground text-left pl-1">
                    <span className="inline-block">Simplify.</span>
                    <br />
                    <span className="text-[#564a94] dark:text-primary inline-block text-glow">Streamline.</span>
                    <br />
                    <span className="text-[#8b7dd6] dark:bg-gradient-primary dark:bg-clip-text dark:text-transparent inline-block glow">Succeed.</span>
                  </h1>
                  
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 holographic opacity-50 pointer-events-none" />
                </div>
              </div>

              {/* Mobile Right - AI Image - takes 3 columns for better proportions */}
              <div className="col-span-3 relative group w-full flex items-center">
                <div className="relative overflow-hidden rounded-xl border border-primary/30 transition-colors duration-300 aspect-[4/5] w-full">
                  <img 
                    src={aiTechnology} 
                    alt="Advanced AI technology interface with holographic displays and neural network visualizations" 
                    className="w-full h-full object-cover"
                    loading="eager"
                    style={{ willChange: 'auto' }}
                  />
                  
                  {/* Simplified overlay for mobile */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10" />
                </div>
                
                {/* Optimized floating elements for mobile */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-70 animate-pulse" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent rounded-full opacity-50" />
              </div>
            </div>
            
            {/* Mobile: Description text - better spacing and readability */}
            <div className="data-stream mt-2">
              <p className="text-sm sm:text-base text-[#1f232f] dark:text-muted-foreground leading-relaxed px-1">
                Harness the power of advanced AI technology to transform your business operations and unlock unprecedented growth opportunities.
              </p>
            </div>

            {/* Mobile: Buttons - optimized for touch */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-2 px-1">
              <Button variant="cta" size="default" className="text-sm font-bold px-6 py-3 hover-lift transition-smooth hover:shadow-glow-primary w-full sm:w-auto min-h-[44px]">
                Book a Consultant
              </Button>
              <Button variant="outline" size="default" className="text-sm font-bold px-6 py-3 hover-lift holographic w-full sm:w-auto min-h-[44px]">
                Learn More
              </Button>
            </div>
          </div>

          {/* Desktop Layout - Keep original desktop layout intact */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center mb-6">
            {/* Left Content */}
            <div className="space-y-5 text-left order-1">
              <div className="space-y-4">
                <div className="relative">
                  {/* Decorative background image */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img 
                      src={satoruDecoration} 
                      alt="" 
                      className="w-72 h-72 object-contain opacity-10 dark:opacity-20 animate-float-subtle"
                      style={{ 
                        filter: 'hue-rotate(10deg) saturate(1.2)',
                        transform: 'rotate(-5deg) scale(1.1)'
                      }}
                    />
                  </div>
                  
                  <h1 className="relative z-10 text-4xl xl:text-5xl font-bold text-[#27254c] dark:text-foreground leading-tight">
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
                <p className="text-base text-[#1f232f] dark:text-muted-foreground leading-relaxed max-w-lg">
                  Harness the power of advanced AI technology to transform your business operations and unlock unprecedented growth opportunities.
                </p>
              </div>

              <div className="flex flex-row gap-3 justify-start">
                <Button variant="cta" size="sm" className="text-xs font-bold px-3 py-1.5 hover-lift transition-smooth hover:shadow-glow-primary">
                  Book a Consultant
                </Button>
                <Button variant="outline" size="sm" className="text-xs font-bold px-3 py-1.5 hover-lift holographic">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Content - AI Image */}
            <div className="relative order-2 group w-full">
              <div className="relative overflow-hidden rounded-xl shadow-glow-cyan border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 group-hover:shadow-glow-purple scan-lines">
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
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-primary rounded-full animate-digital-pulse opacity-80" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-accent rounded-full animate-float-dynamic opacity-60" />
              <div className="absolute top-1/2 -left-3 w-2 h-2 bg-primary rounded-full animate-digital-pulse opacity-70" />
            </div>
          </div>

          {/* AI Stats Section - Simplified for mobile performance */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 mb-4 lg:mb-5 px-1 mt-6 lg:mt-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-3 lg:p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-primary/10 hover:border-primary/20 transition-colors duration-200"
              >
                <div className="text-sm lg:text-xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-muted-foreground font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos Section - Compact */}
          <div className="mt-4 lg:mt-3">
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