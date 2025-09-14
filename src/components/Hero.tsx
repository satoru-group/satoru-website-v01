import { Button } from "@/components/ui/button";
import aiTechnology from "@/assets/ai-technology.jpg";
import { ChevronsDown } from "lucide-react";

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
    <section className="relative min-h-screen bg-background px-4 sm:px-6 lg:px-12 py-16 sm:py-20 pt-24 sm:pt-28 lg:pt-32 z-20 tech-grid">
      {/* AI Particle System */}
      <div className="particles pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
      
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-6 sm:space-y-8">
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#27254c] dark:text-foreground leading-tight">
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
              <p className="text-lg sm:text-xl lg:text-xl text-[#1f232f] dark:text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                Harness the power of advanced AI technology to transform your business operations and unlock unprecedented growth opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="lg" className="text-sm sm:text-base px-6 sm:px-8 hover-lift animate-digital-pulse">
                Book a Consultant
              </Button>
              <Button variant="outline" size="lg" className="text-sm sm:text-base px-6 sm:px-8 hover-lift holographic">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - AI Image */}
          <div className="relative order-first lg:order-last group">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-glow-cyan border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 group-hover:shadow-glow-purple scan-lines">
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
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full animate-digital-pulse opacity-80" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-float-dynamic opacity-60" />
            <div className="absolute top-1/2 -left-6 w-4 h-4 bg-primary rounded-full animate-digital-pulse opacity-70" />
          </div>
        </div>

        {/* AI Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 lg:p-8 bg-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-glow-cyan border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow-purple transition-all duration-300 hover:-translate-y-1 scan-lines holographic"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 sm:mb-4 animate-digital-pulse">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-[#334155] dark:text-muted-foreground font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
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

export default Hero;