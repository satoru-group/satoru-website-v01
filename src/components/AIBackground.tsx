import { useEffect, useState } from 'react';

interface AIBackgroundProps {
  className?: string;
  showParticles?: boolean;
  showMatrix?: boolean;
  showCircuits?: boolean;
  showDataStream?: boolean;
}

const AIBackground = ({ 
  className = "", 
  showParticles = true, 
  showMatrix = true, 
  showCircuits = true,
  showDataStream = true 
}: AIBackgroundProps) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    if (showParticles) {
      const particleArray = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 6
      }));
      setParticles(particleArray);
    }
  }, [showParticles]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Tech Grid Background */}
      {showCircuits && (
        <div className="absolute inset-0 tech-grid opacity-10 dark:opacity-20" />
      )}

      {/* Matrix Rain Effect */}
      {showMatrix && (
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="matrix-bg w-full h-full" />
        </div>
      )}

      {/* Animated Particles */}
      {showParticles && (
        <div className="particles">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle animate-particle-float"
              style={{
                left: `${particle.x}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Neural Network Connections */}
      <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20">
        <defs>
          <pattern id="neural-network" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="currentColor" className="animate-digital-pulse">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="80" cy="80" r="1" fill="currentColor" className="animate-digital-pulse">
              <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
            </circle>
            <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="0.5" opacity="0.2">
              <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="4s" repeatCount="indefinite" />
            </line>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-network)" />
      </svg>

      {/* Scanning Lines */}
      <div className="absolute inset-0 scan-lines opacity-20 dark:opacity-30" />

      {/* Data Stream Effect */}
      {showDataStream && (
        <div className="absolute top-1/4 left-0 right-0">
          <div className="data-stream opacity-30 dark:opacity-50" />
        </div>
      )}

      {/* Floating Code Elements */}
      <div className="absolute top-10 right-10 text-xs font-mono text-primary/30 animate-code-scroll">
        <div>{'{'}</div>
        <div>&nbsp;&nbsp;"ai": "enabled",</div>
        <div>&nbsp;&nbsp;"status": "active"</div>
        <div>{'}'}</div>
      </div>

      {/* Digital Orbs */}
      <div className="absolute top-1/3 left-10 w-4 h-4 bg-primary/20 rounded-full animate-digital-pulse" />
      <div className="absolute bottom-1/3 right-20 w-6 h-6 bg-accent/30 rounded-full animate-digital-pulse" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-primary/40 rounded-full animate-digital-pulse" 
           style={{ animationDelay: '2s' }} />

      {/* Circuit Board Pattern */}
      <svg className="absolute bottom-0 left-0 w-32 h-32 opacity-20 dark:opacity-40" viewBox="0 0 100 100">
        <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="90" cy="10" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="90" cy="90" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="10" cy="90" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.8" className="animate-digital-pulse" />
      </svg>

      {/* Holographic Scanner */}
      <div className="absolute inset-0 holographic opacity-20" />
    </div>
  );
};

export default AIBackground;