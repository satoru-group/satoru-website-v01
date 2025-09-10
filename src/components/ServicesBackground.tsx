const ServicesBackground = () => {
  return (
    <section className="fixed top-0 left-0 w-full h-screen bg-muted/20 flex items-center justify-center z-0">
      {/* Subtle tech pattern */}
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexgrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <polygon points="30,5 45,15 45,35 30,45 15,35 15,15" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexgrid)" />
        </svg>
      </div>
      
      <div className="text-center space-y-6 relative z-10">
        <div className="w-40 h-40 bg-gradient-primary rounded-full opacity-20 blur-3xl mx-auto animate-pulse"></div>
        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Professional Services
        </h2>
        <p className="text-muted-foreground text-lg">
          Expertise you can trust
        </p>
      </div>
    </section>
  );
};

export default ServicesBackground;