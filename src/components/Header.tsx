import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import satoruOLogo from "@/assets/satoru-o-logo.png";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full py-2 sm:py-2.5 lg:py-3 px-4 sm:px-6 lg:px-12 flex items-center justify-between bg-background sm:bg-background/95 backdrop-blur-sm border-b border-border/50 z-[100]">
        <div className="flex items-center">
          <div className="flex flex-col text-center">
            <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-digital-pulse">
              <span className="inline-flex items-center whitespace-nowrap hover:animate-float-subtle">
                SAT
                <img 
                  src={satoruOLogo} 
                  alt="O" 
                  className="inline-block w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 mx-0.5 animate-float-subtle" 
                />
                RU
              </span><span className="text-primary glow animate-pulse">.</span>
            </div>
            <div className="text-xs text-muted-foreground font-medium tracking-wide data-stream">
              GROUP
            </div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link 
            to="/"
            className={`relative text-sm lg:text-base transition-smooth font-medium hover:shadow-glow-cyan ${
              isActive('/') 
                ? 'text-primary' 
                : 'text-[#27254c] dark:text-foreground hover:text-primary'
            }`}
          >
            Home
            {isActive('/') && (
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-primary rounded-full"></div>
            )}
          </Link>
          <Link 
            to="/about"
            className={`relative text-sm lg:text-base transition-smooth font-medium hover:shadow-glow-cyan ${
              isActive('/about') 
                ? 'text-primary' 
                : 'text-[#27254c] dark:text-muted-foreground hover:text-primary'
            }`}
          >
            About Us
            {isActive('/about') && (
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-primary rounded-full"></div>
            )}
          </Link>
          <Link 
            to="/services"
            className={`relative text-sm lg:text-base transition-smooth font-medium hover:shadow-glow-cyan ${
              isActive('/services') 
                ? 'text-primary' 
                : 'text-[#564a94] dark:text-muted-foreground hover:text-primary'
            }`}
          >
            Services
            {isActive('/services') && (
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-primary rounded-full"></div>
            )}
          </Link>
          <Link 
            to="/contact"
            className={`relative text-sm lg:text-base transition-smooth font-medium hover:shadow-glow-cyan ${
              isActive('/contact') 
                ? 'text-primary' 
                : 'text-[#1f232f] dark:text-muted-foreground hover:text-primary'
            }`}
          >
            Contact
            {isActive('/contact') && (
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-primary rounded-full"></div>
            )}
          </Link>
        </nav>

        <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="hidden md:inline-flex w-8 h-8 lg:w-10 lg:h-10"
          >
            <Sun className="h-4 w-4 lg:h-5 lg:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 lg:h-5 lg:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button variant="ai" size="sm" className="hidden md:inline-flex text-xs lg:text-sm px-3 lg:px-4 py-2">
            Get Started
          </Button>
          
          {/* Mobile controls */}
          <div className="flex items-center space-x-1 md:hidden">
            {/* Mobile Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="w-8 h-8"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[99] md:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-sm" />
          <div className="fixed top-16 left-0 right-0 bg-card/95 backdrop-blur-sm border-b border-border/50 p-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/"
                className={`relative transition-smooth font-medium py-2 px-4 rounded-lg hover:bg-muted/50 ${
                  isActive('/') 
                    ? 'text-primary bg-muted/30' 
                    : 'text-[#27254c] dark:text-foreground hover:text-primary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
                {isActive('/') && (
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-primary rounded-full"></div>
                )}
              </Link>
              <Link 
                to="/about"
                className={`relative transition-smooth font-medium py-2 px-4 rounded-lg hover:bg-muted/50 ${
                  isActive('/about') 
                    ? 'text-primary bg-muted/30' 
                    : 'text-[#27254c] dark:text-muted-foreground hover:text-primary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
                {isActive('/about') && (
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-primary rounded-full"></div>
                )}
              </Link>
              <Link 
                to="/services"
                className={`relative transition-smooth font-medium py-2 px-4 rounded-lg hover:bg-muted/50 ${
                  isActive('/services') 
                    ? 'text-primary bg-muted/30' 
                    : 'text-[#564a94] dark:text-muted-foreground hover:text-primary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
                {isActive('/services') && (
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-primary rounded-full"></div>
                )}
              </Link>
              <Link 
                to="/contact"
                className={`relative transition-smooth font-medium py-2 px-4 rounded-lg hover:bg-muted/50 ${
                  isActive('/contact') 
                    ? 'text-primary bg-muted/30' 
                    : 'text-[#1f232f] dark:text-muted-foreground hover:text-primary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
                {isActive('/contact') && (
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-primary rounded-full"></div>
                )}
              </Link>
              <Button variant="ai" size="sm" className="mt-4 w-full">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;