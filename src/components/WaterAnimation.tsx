import { useEffect, useState } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const WaterAnimation = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    let rippleId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: rippleId++,
        x: e.clientX,
        y: e.clientY,
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 1500);
    };

    // Throttle mouse events for performance
    let throttleTimer: NodeJS.Timeout | null = null;
    const throttledMouseMove = (e: MouseEvent) => {
      if (throttleTimer) return;
      
      throttleTimer = setTimeout(() => {
        handleMouseMove(e);
        throttleTimer = null;
      }, 100);
    };

    document.addEventListener('mousemove', throttledMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute animate-water-ripple"
          style={{
            left: ripple.x - 50,
            top: ripple.y - 50,
          }}
        >
          <div className="w-24 h-24 rounded-full border-2 border-primary/20 animate-water-expand" />
          <div className="absolute inset-0 w-24 h-24 rounded-full border border-accent/10 animate-water-expand-delayed" />
          <div className="absolute inset-0 w-24 h-24 rounded-full animate-water-fade" 
               style={{
                 background: 'radial-gradient(circle, hsl(var(--primary) / 0.05) 0%, transparent 70%)'
               }} />
        </div>
      ))}
    </div>
  );
};