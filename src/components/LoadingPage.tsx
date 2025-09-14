import { useEffect, useState } from 'react';

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 ai-bg neural-bg opacity-30"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 particles pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-float-dynamic opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gradient-primary opacity-20 animate-orb-float"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-8">
        {/* Floating logo/brand */}
        <div className="relative">
          <div className="w-20 h-20 mx-auto mb-6 relative animate-float-subtle">
            <div className="w-full h-full bg-gradient-primary rounded-2xl shadow-glow-primary flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">S</span>
            </div>
            
            {/* Orbiting elements */}
            <div className="absolute -inset-4">
              <div className="w-2 h-2 bg-accent rounded-full absolute animate-spin origin-center" 
                   style={{
                     top: '0%',
                     left: '50%',
                     transform: 'translateX(-50%)',
                     animationDuration: '4s'
                   }}>
              </div>
              <div className="w-1 h-1 bg-primary rounded-full absolute animate-spin origin-center" 
                   style={{
                     bottom: '0%',
                     right: '50%',
                     transform: 'translateX(50%)',
                     animationDuration: '6s',
                     animationDirection: 'reverse'
                   }}>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Satoru
          </h2>
          <p className="text-muted-foreground animate-fade-in" style={{animationDelay: '0.5s'}}>
            AI-Powered Business Consulting
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto space-y-4">
          <div className="relative h-2 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-primary rounded-full transition-all duration-300 shadow-glow-primary"
              style={{ width: `${progress}%` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-slide-left opacity-50" />
          </div>
          
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Loading...</span>
            <span className="tabular-nums">{progress}%</span>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.3}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Scanning line effect */}
      <div className="absolute inset-0 scan-lines opacity-20 pointer-events-none" />
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-bg opacity-10 pointer-events-none" />
    </div>
  );
};

export default LoadingPage;