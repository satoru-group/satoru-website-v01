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
    <section className="relative min-h-screen bg-background px-4 sm:px-6 lg:px-12 py-16 sm:py-20 pt-24 sm:pt-28 lg:pt-32 z-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-6 sm:space-y-8">
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  Simplify.
                  <br />
                  <span className="text-primary">Streamline.</span>
                  <br />
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Succeed.</span>
                </h1>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl lg:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              Harness the power of advanced AI technology to transform your business operations and unlock unprecedented growth opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="lg" className="text-sm sm:text-base px-6 sm:px-8">
                Book a Consultant
              </Button>
              <Button variant="outline" size="lg" className="text-sm sm:text-base px-6 sm:px-8">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - AI Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-glow-cyan border border-primary/20">
              <img 
                src={aiTechnology} 
                alt="Advanced AI technology interface with holographic displays and neural network visualizations" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* AI Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 lg:p-8 bg-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-glow-cyan border border-primary/10 hover:shadow-glow-purple hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 sm:mb-4">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium tracking-wide">
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