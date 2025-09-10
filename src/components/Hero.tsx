import { Button } from "@/components/ui/button";
import aiTechnology from "@/assets/ai-technology.jpg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
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
    <section className="relative min-h-screen bg-background px-6 lg:px-12 py-20 pt-32 z-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="relative">
              {/* Glowing circle effect */}
              <div className="absolute -left-16 -top-8 w-80 h-80 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-pulse"></div>
              <div className="relative">
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  Simplify.
                  <br />
                  <span className="text-primary">Streamline.</span>
                  <br />
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Succeed.</span>
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Harness the power of advanced AI technology to transform your business operations and unlock unprecedented growth opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="text-base">
                Book a Consultant
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - AI Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-glow-cyan border border-primary/20">
              <img 
                src={aiTechnology} 
                alt="Advanced AI technology interface with holographic displays and neural network visualizations" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/30 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>

        {/* AI Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-2xl shadow-glow-cyan border border-primary/10 hover:shadow-glow-purple hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="p-3 rounded-full bg-gradient-primary shadow-elegant">
          <ArrowDown className="w-6 h-6 text-primary-foreground" strokeWidth={3} />
        </div>
      </div>
    </section>
  );
};

export default Hero;