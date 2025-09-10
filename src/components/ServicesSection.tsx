import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  return (
    <section className="w-full h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Tech circuit background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0v40M0 20h40M10 10h20v20H10z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#circuit)" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto text-center space-y-12 relative z-10 px-6 lg:px-12">
        <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-8">
          How We Help Your Business
        </h2>
        
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
          We act as an extension of your team, providing fractional operations and IT leadership to support growth, scalability, and long-term success.
        </p>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg border border-border/50">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Operations Optimization</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Streamline workflows and improve operational efficiency
            </p>
            <ul className="text-left text-muted-foreground mb-6 space-y-2">
              <li>• Process mapping and improvement</li>
              <li>• Workflow automation</li>
              <li>• Resource allocation</li>
            </ul>
            <Button variant="outline" size="sm" className="text-sm">
              Learn more
            </Button>
          </div>
          
          <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg border border-border/50">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">IT Systems Management</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Optimize your technology infrastructure
            </p>
            <ul className="text-left text-muted-foreground mb-6 space-y-2">
              <li>• System integration</li>
              <li>• Technology stack assessment</li>
              <li>• IT strategy development</li>
            </ul>
            <Button variant="outline" size="sm" className="text-sm">
              Learn more
            </Button>
          </div>
          
          <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg border border-border/50">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Fractional Leadership</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Expert guidance without the full-time cost
            </p>
            <ul className="text-left text-muted-foreground mb-6 space-y-2">
              <li>• Fractional COO services</li>
              <li>• Fractional CTO services</li>
              <li>• Strategic planning</li>
            </ul>
            <Button variant="outline" size="sm" className="text-sm">
              Learn more
            </Button>
          </div>
        </div>
        
        <Button variant="default" size="lg" className="text-base">
          Get Started
        </Button>
        
        {/* Floating tech elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/5 right-1/4 w-3 h-3 bg-primary rounded-full animate-pulse opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-accent rounded-full animate-ping opacity-40" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/3 left-1/5 w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-50" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;