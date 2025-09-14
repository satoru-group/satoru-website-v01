const ClientLogos = () => {
  // Mock client logos with different letters
  const mockLogos = [
    { id: 1, name: "TechCorp", letter: "T" },
    { id: 2, name: "InnovateX", letter: "I" },
    { id: 3, name: "DataFlow", letter: "D" },
    { id: 4, name: "CloudSync", letter: "C" },
    { id: 5, name: "AIVision", letter: "A" },
    { id: 6, name: "NextGen", letter: "N" },
    { id: 7, name: "SmartSys", letter: "S" },
    { id: 8, name: "ByteWave", letter: "B" },
  ];

  return (
    <div className="relative overflow-hidden py-8 sm:py-12 mt-8 sm:mt-12">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      
      {/* Sliding logos container */}
      <div className="flex items-center space-x-8 sm:space-x-12 animate-slide-left">
        {/* First set of logos */}
        {mockLogos.map((logo) => (
          <div
            key={`first-${logo.id}`}
            className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-primary/30 bg-card/50 backdrop-blur-sm flex items-center justify-center hover:border-primary/60 transition-colors duration-300 shadow-glow-cyan"
          >
            <span className="text-xl sm:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {logo.letter}
            </span>
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {mockLogos.map((logo) => (
          <div
            key={`second-${logo.id}`}
            className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-primary/30 bg-card/50 backdrop-blur-sm flex items-center justify-center hover:border-primary/60 transition-colors duration-300 shadow-glow-cyan"
          >
            <span className="text-xl sm:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {logo.letter}
            </span>
          </div>
        ))}
      </div>
      
      <p className="text-center text-sm text-muted-foreground mt-4 sm:mt-6">
        Trusted by leading companies worldwide
      </p>
    </div>
  );
};

export default ClientLogos;