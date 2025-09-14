import { useEffect, useState } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const WaterAnimation = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    // Disable on mobile devices for performance
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    let rippleId = 0;
    
    const createRipple = (x: number, y: number) => {
      // Limit maximum ripples for performance
      if (ripples.length >= 3) return;
      
      const newRipple: Ripple = {
        id: rippleId++,
        x,
        y,
      };
      
      setRipples(prev => [...prev.slice(-2), newRipple]); // Keep only last 3 ripples
      
      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 1200); // Reduced duration
    };

    const handleMouseMove = (e: MouseEvent) => createRipple(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        createRipple(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    // More aggressive throttling for performance
    let throttleTimer: NodeJS.Timeout | null = null;
    const throttledMove = (handler: Function) => (e: Event) => {
      if (throttleTimer) return;
      
      throttleTimer = setTimeout(() => {
        handler(e);
        throttleTimer = null;
      }, 200); // Increased throttle
    };

    const throttledMouseMove = throttledMove(handleMouseMove);
    const throttledTouchMove = throttledMove(handleTouchMove);

    document.addEventListener('mousemove', throttledMouseMove);
    document.addEventListener('touchmove', throttledTouchMove, { passive: true });
    
    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
      document.removeEventListener('touchmove', throttledTouchMove);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, [ripples.length]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute"
          style={{
            left: ripple.x - 30,
            top: ripple.y - 30,
            willChange: 'transform, opacity'
          }}
        >
          <div className="w-16 h-16 rounded-full border border-primary/30 animate-ping" />
        </div>
      ))}
    </div>
  );
};