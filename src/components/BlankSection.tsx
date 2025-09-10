const BlankSection = () => {
  return (
    <section className="fixed top-0 left-0 w-full h-screen bg-gradient-subtle flex items-center justify-center z-0">
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
      
      <div className="text-center space-y-8 relative z-10">
        {/* Animated glow orbs */}
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-primary rounded-full opacity-30 blur-2xl mx-auto animate-pulse"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary rounded-full opacity-50 blur-xl animate-ping"></div>
        </div>
        
        <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Next Generation
        </h2>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          Discover the future of artificial intelligence and automated solutions
        </p>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping opacity-40"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse opacity-60"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-ping opacity-30" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default BlankSection;