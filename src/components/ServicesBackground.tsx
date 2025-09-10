import { Button } from "@/components/ui/button";

const ServicesBackground = () => {
  return (
    <section className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-background to-secondary/20 flex items-center justify-center z-10">
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
          Our Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border/50">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Operations Consulting</h3>
            <p className="text-muted-foreground leading-relaxed">
              Streamline workflows, optimize processes, and improve operational efficiency across your organization.
            </p>
          </div>
          
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border/50">
            <h3 className="text-xl font-semibold mb-4 text-foreground">IT Strategy & Leadership</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fractional IT leadership to guide technology decisions and digital transformation initiatives.
            </p>
          </div>
          
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border/50">
            <h3 className="text-xl font-semibold mb-4 text-foreground">System Integration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Connect disparate systems and automate workflows to reduce manual work and errors.
            </p>
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

export default ServicesBackground;