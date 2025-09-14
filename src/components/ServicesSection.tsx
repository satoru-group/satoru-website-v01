import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ChevronsRight } from "lucide-react";

interface ServicesSectionProps {
  showArrow?: boolean;
}

const ServicesSection = ({ showArrow = false }: ServicesSectionProps) => {
  const [visibleCards, setVisibleCards] = useState<number[]>([0, 1, 2]);
  const [showButton, setShowButton] = useState(true);

  // Show all cards immediately for better mobile experience
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2]);
      setShowButton(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const getCardStyle = (cardIndex: number) => {
    const isVisible = visibleCards.includes(cardIndex);
    const floatY = Math.sin((Date.now() * 0.001) + (cardIndex * 0.5)) * 2;
    
    return {
      opacity: isVisible ? 1 : 0,
      transform: `translateY(${isVisible ? floatY : 20}px) scale(${isVisible ? 1 : 0.95})`,
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      transitionDelay: `${cardIndex * 0.1}s`,
    };
  };

  const getButtonStyle = () => {
    const floatY = Math.sin(Date.now() * 0.002) * 3;
    
    return {
      opacity: showButton ? 1 : 0,
      transform: `translateY(${showButton ? floatY : 20}px) scale(${showButton ? 1 : 0.95})`,
      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      transitionDelay: '0.4s',
    };
  };
  return (
    <section className="w-full h-screen bg-background flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Consistent Background Patterns */}
      <div className="absolute inset-0 circuit-bg opacity-15 dark:opacity-25 pointer-events-none" />
      <div className="absolute inset-0 light-geometric-bg opacity-15 dark:opacity-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center space-y-8 sm:space-y-12 relative z-10 w-full">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            How We Help Your Business
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We act as an extension of your team, providing fractional operations and IT leadership to support growth, scalability, and long-term success.
          </p>
        </div>
        
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div 
            className="bg-card/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-border/40 hover:border-border/60 transition-all duration-300 hover:shadow-lg"
            style={getCardStyle(0)}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">Operations Optimization</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Streamline workflows and improve operational efficiency
            </p>
            <ul className="text-left text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 space-y-2">
              <li>• Process mapping and improvement</li>
              <li>• Workflow automation</li>
              <li>• Resource allocation</li>
            </ul>
            <Button variant="outline" size="sm" className="text-xs sm:text-sm w-full">
              Learn more
            </Button>
          </div>
          
          <div 
            className="bg-card/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-border/40 hover:border-border/60 transition-all duration-300 hover:shadow-lg md:col-span-2 lg:col-span-1"
            style={getCardStyle(1)}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">IT Systems Management</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Optimize your technology infrastructure
            </p>
            <ul className="text-left text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 space-y-2">
              <li>• System integration</li>
              <li>• Technology stack assessment</li>
              <li>• IT strategy development</li>
            </ul>
            <Button variant="outline" size="sm" className="text-xs sm:text-sm w-full">
              Learn more
            </Button>
          </div>
          
          <div 
            className="bg-card/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-border/40 hover:border-border/60 transition-all duration-300 hover:shadow-lg md:col-span-2 lg:col-span-1"
            style={getCardStyle(2)}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">Fractional Leadership</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Expert guidance without the full-time cost
            </p>
            <ul className="text-left text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 space-y-2">
              <li>• Fractional COO services</li>
              <li>• Fractional CTO services</li>
              <li>• Strategic planning</li>
            </ul>
            <Button variant="outline" size="sm" className="text-xs sm:text-sm w-full">
              Learn more
            </Button>
          </div>
        </div>
        
        <div style={getButtonStyle()}>
          <Button variant="default" size="lg" className="text-sm sm:text-base px-6 sm:px-8">
            Get Started
          </Button>
        </div>
        
        {/* Floating tech elements with enhanced animations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/5 right-1/4 w-3 h-3 bg-primary rounded-full animate-pulse opacity-30" 
               style={{
                 animationDuration: '3s',
                 transform: `translateY(${Math.sin(Date.now() * 0.001) * 10}px)`,
               }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-accent rounded-full animate-ping opacity-40" 
               style={{
                 animationDelay: '0.5s',
                 transform: `translateX(${Math.cos(Date.now() * 0.0015) * 15}px)`,
               }}></div>
          <div className="absolute top-1/3 left-1/5 w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-50" 
               style={{
                 animationDelay: '1.5s', 
                 transform: `translate(${Math.sin(Date.now() * 0.0008) * 8}px, ${Math.cos(Date.now() * 0.0012) * 12}px)`,
               }}></div>
        </div>
      </div>
      
      {/* Scroll Right Arrow */}
      {showArrow && (
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 animate-bounce">
          <ChevronsRight className="w-6 h-6 sm:w-8 sm:h-8 text-primary" strokeWidth={3} />
        </div>
      )}
    </section>
  );
};

export default ServicesSection;