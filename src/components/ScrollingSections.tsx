import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import AboutUsSection from "@/components/AboutUsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const ScrollingSections = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [sectionContentVisible, setSectionContentVisible] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const checkSectionContentVisibility = () => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) return [true, true, true, true]; // Allow all scrolling on desktop
      
      const viewportHeight = window.innerHeight;
      const currentSection = Math.floor(scrollY / viewportHeight);
      const scrollProgress = (scrollY % viewportHeight) / viewportHeight;
      
      // Check if current section content is fully visible
      const newVisibility = [...sectionContentVisible];
      
      // For mobile, require 80% of section to be scrolled through before allowing next
      if (scrollProgress >= 0.8 || currentSection === 0) {
        newVisibility[currentSection] = true;
      }
      
      return newVisibility;
    };
    
    const handleScroll = () => {
      // Throttle scroll events for better performance
      requestAnimationFrame(() => {
        const newScrollY = window.scrollY;
        setScrollY(newScrollY);
        
        // Update content visibility
        const visibility = checkSectionContentVisibility();
        setSectionContentVisible(visibility);
        
        // Responsive viewport height calculation
        const viewportHeight = window.innerHeight;
        const currentScrollSection = Math.floor(newScrollY / viewportHeight);
        
        // Show arrow for the current active section
        setActiveSection(Math.min(Math.max(currentScrollSection, 0), 3));
        
        // Set scrolling state
        setIsScrolling(true);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      });
    };

    // Mobile-specific scroll control with content visibility check
    const handleWheelScroll = (e: WheelEvent) => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile || isScrolling) return;
      
      const viewportHeight = window.innerHeight;
      const currentSection = Math.round(window.scrollY / viewportHeight);
      const isScrollingDown = e.deltaY > 0;
      
      // Check if current section content is visible before allowing scroll
      if (isScrollingDown && currentSection < 3) {
        const currentSectionProgress = (window.scrollY % viewportHeight) / viewportHeight;
        
        // Only allow scrolling to next section if current content is 80% visible
        if (currentSectionProgress < 0.8) {
          return; // Don't prevent default, allow normal scrolling within section
        }
        
        // Prevent default and snap to next section
        e.preventDefault();
        const targetSection = currentSection + 1;
        setIsScrolling(true);
        
        window.scrollTo({
          top: targetSection * viewportHeight,
          behavior: 'smooth'
        });
        
        setTimeout(() => {
          setIsScrolling(false);
        }, 800);
      } else if (!isScrollingDown && currentSection > 0) {
        e.preventDefault();
        const targetSection = currentSection - 1;
        setIsScrolling(true);
        
        window.scrollTo({
          top: targetSection * viewportHeight,
          behavior: 'smooth'
        });
        
        setTimeout(() => {
          setIsScrolling(false);
        }, 800);
      }
    };

    // Touch handling for mobile swipe gestures
    let touchStartY = 0;
    let touchEndY = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.changedTouches[0].screenY;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile || isScrolling) return;
      
      touchEndY = e.changedTouches[0].screenY;
      const touchDiff = touchStartY - touchEndY;
      
      // Only trigger on significant swipe (> 50px)
      if (Math.abs(touchDiff) > 50) {
        const viewportHeight = window.innerHeight;
        const currentSection = Math.round(window.scrollY / viewportHeight);
        const currentSectionProgress = (window.scrollY % viewportHeight) / viewportHeight;
        
        if (touchDiff > 0 && currentSection < 3) {
          // Swiping up (next section)
          if (currentSectionProgress >= 0.8) {
            e.preventDefault();
            const targetSection = currentSection + 1;
            setIsScrolling(true);
            
            window.scrollTo({
              top: targetSection * viewportHeight,
              behavior: 'smooth'
            });
            
            setTimeout(() => {
              setIsScrolling(false);
            }, 800);
          }
        } else if (touchDiff < 0 && currentSection > 0) {
          // Swiping down (previous section)
          e.preventDefault();
          const targetSection = currentSection - 1;
          setIsScrolling(true);
          
          window.scrollTo({
            top: targetSection * viewportHeight,
            behavior: 'smooth'
          });
          
          setTimeout(() => {
            setIsScrolling(false);
          }, 800);
        }
      }
    };

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheelScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheelScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      document.documentElement.style.scrollBehavior = 'auto';
      clearTimeout(scrollTimeout);
    };
  }, [isScrolling, scrollY, sectionContentVisible]);

  const getTransformStyle = (sectionIndex: number) => {
    const viewportHeight = window.innerHeight;
    const currentScrollSection = Math.floor(scrollY / viewportHeight);
    const scrollProgress = (scrollY % viewportHeight) / viewportHeight;
    
    // Responsive breakpoints
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    
    // Modern easing function
    const modernEasing = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    
    // Enhanced Services section handling for mobile responsiveness
    if (sectionIndex === 2) {
      if (currentScrollSection < 2) {
        // Services section hidden below
        return {
          transform: `translateY(100vh)`,
          opacity: 0,
          transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        };
      } else if (currentScrollSection === 2) {
        // Services section active
        const floatY = isMobile ? 0 : Math.sin(Date.now() * 0.001) * 2;
        return {
          transform: `translateY(${floatY}px)`,
          opacity: 1,
          transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        };
      } else {
        // Services section moving up
        return {
          transform: `translateY(-100vh) scale(0.95)`,
          opacity: 0,
          transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        };
      }
    }
    
    // Enhanced Contact section with responsive slide animation
    if (sectionIndex === 3) {
      if (currentScrollSection < 3) {
        // Contact section hidden off-screen
        const slideDirection = isMobile ? 'translateY(100vh)' : 'translateX(100%)';
        return {
          transform: slideDirection,
          opacity: 0,
          transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        };
      } else {
        // Contact section active and visible
        return {
          transform: 'translate(0%, 0%)',
          opacity: 1,
          transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        };
      }
    }
    
    // Enhanced handling for Hero and About sections
    if (sectionIndex < currentScrollSection) {
      // Sections that have been scrolled past
      return {
        transform: `translateY(-100vh) scale(0.95)`,
        opacity: 0,
        transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      };
    }
    
    if (sectionIndex === currentScrollSection) {
      // Current active section
      const parallaxIntensity = isMobile ? 0.3 : 0.5;
      const translateY = -scrollProgress * viewportHeight * parallaxIntensity;
      const scale = 1 - (scrollProgress * 0.03);
      const opacity = 1 - (scrollProgress * 0.1);
      
      return {
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: Math.max(opacity, 0.9),
        transition: "opacity 0.3s ease-out",
      };
    }
    
    // Sections below current - waiting state
    if (sectionIndex > currentScrollSection) {
      const anticipationScale = sectionIndex === currentScrollSection + 1 ? 1.01 : 1;
      return {
        transform: `translateY(0px) scale(${anticipationScale})`,
        opacity: 1,
        transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      };
    }

    return {
      transform: 'translateY(0px) scale(1)',
      opacity: 1,
      transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    };
  };

  return (
    <>
      {/* Create scrollable height for 4 sections */}
      <div className="h-[400vh] w-full" style={{ width: '100%', maxWidth: '100vw' }}></div>
      
      {/* Fixed container for sections */}
      <div 
        className="fixed top-0 left-0 w-full h-screen overflow-hidden ai-bg neural-bg" 
        style={{ 
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-y',
          width: '100vw',
          maxWidth: '100%',
          height: '100dvh'
        }}
      >
        {/* AI Background Animation Layer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          {/* Neural Network Connections */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0"/>
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0"/>
              </linearGradient>
            </defs>
            
            {/* Animated connection lines */}
            <g className="animate-pulse" style={{animationDuration: '4s'}}>
              <line x1="100" y1="150" x2="300" y2="200" stroke="url(#connectionGradient)" strokeWidth="1"/>
              <line x1="200" y1="300" x2="500" y2="180" stroke="url(#connectionGradient)" strokeWidth="1"/>
              <line x1="400" y1="400" x2="700" y2="250" stroke="url(#connectionGradient)" strokeWidth="1"/>
              <line x1="600" y1="500" x2="900" y2="300" stroke="url(#connectionGradient)" strokeWidth="1"/>
              <line x1="800" y1="600" x2="1100" y2="350" stroke="url(#connectionGradient)" strokeWidth="1"/>
            </g>
            
            {/* Floating nodes */}
            <g>
              <circle cx="150" cy="180" r="3" fill="hsl(var(--primary))" opacity="0.4" className="animate-float-subtle"/>
              <circle cx="350" cy="220" r="2" fill="hsl(var(--accent))" opacity="0.5" className="animate-float-dynamic"/>
              <circle cx="550" cy="280" r="2.5" fill="hsl(var(--primary))" opacity="0.3" className="animate-ai-pulse"/>
              <circle cx="750" cy="320" r="2" fill="hsl(var(--accent))" opacity="0.4" className="animate-float-subtle"/>
              <circle cx="950" cy="380" r="3" fill="hsl(var(--primary))" opacity="0.5" className="animate-float-dynamic"/>
            </g>
          </svg>
          
          {/* Data Stream Particles */}
          <div className="absolute inset-0">
            <div 
              className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-ping"
              style={{
                left: '20%',
                top: '25%',
                animationDuration: '3s',
                animationDelay: '0s'
              }}
            ></div>
            <div 
              className="absolute w-1.5 h-1.5 bg-accent rounded-full opacity-25 animate-pulse"
              style={{
                left: '70%',
                top: '40%',
                animationDuration: '4s',
                animationDelay: '1s'
              }}
            ></div>
            <div 
              className="absolute w-1 h-1 bg-primary rounded-full opacity-35 animate-ping"
              style={{
                left: '45%',
                top: '60%',
                animationDuration: '2.5s',
                animationDelay: '2s'
              }}
            ></div>
            <div 
              className="absolute w-2 h-2 bg-accent rounded-full opacity-20 animate-pulse"
              style={{
                left: '85%',
                top: '20%',
                animationDuration: '3.5s',
                animationDelay: '0.5s'
              }}
            ></div>
            <div 
              className="absolute w-1 h-1 bg-primary rounded-full opacity-40 animate-ping"
              style={{
                left: '15%',
                top: '70%',
                animationDuration: '4.5s',
                animationDelay: '1.5s'
              }}
            ></div>
          </div>
          
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                linear-gradient(180deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
              animation: 'drift 30s linear infinite'
            }}
          ></div>
        </div>
        
        {/* Contact Section - Highest z-index, guaranteed main viewport positioning */}
        <div 
          className="absolute inset-0 w-full h-full z-50 ai-bg"
          style={{
            ...getTransformStyle(3),
            width: '100%',
            maxWidth: '100vw',
            height: '100%',
            minHeight: '100vh'
          }}
        >
          <ContactSection />
        </div>
        
        {/* Hero Section */}
        <div 
          className="absolute inset-0 w-full h-full z-40 ai-bg"
          style={{
            ...getTransformStyle(0),
            width: '100%',
            maxWidth: '100vw'
          }}
        >
          <Hero showArrow={activeSection === 0} />
        </div>
        
        {/* About Us Section */}
        <div 
          className="absolute inset-0 w-full h-full z-30 ai-bg"
          style={{
            ...getTransformStyle(1),
            width: '100%',
            maxWidth: '100vw'
          }}
        >
          <AboutUsSection showArrow={activeSection === 1} />
        </div>
        
        {/* Services Section */}
        <div 
          className="absolute inset-0 w-full h-full z-20 ai-bg"
          style={{
            ...getTransformStyle(2),
            width: '100%',
            maxWidth: '100vw'
          }}
        >
          <ServicesSection showArrow={activeSection === 2} />
        </div>
      </div>
    </>
  );
};

export default ScrollingSections;