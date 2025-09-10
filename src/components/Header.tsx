import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full py-4 px-4 sm:py-6 sm:px-6 lg:px-12 flex items-center justify-between bg-background/95 backdrop-blur-sm border-b border-border/50 z-[100]">
        <div className="flex items-center">
          <div className="flex flex-col text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-pulse">
              SATORU<span className="text-primary glow">.</span>
            </div>
            <div className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium tracking-wide">
              GROUP
            </div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link 
            to="/"
            className="text-sm lg:text-base text-foreground hover:text-primary transition-smooth font-medium hover:shadow-glow-cyan"
          >
            Home
          </Link>
          <Link 
            to="/about"
            className="text-sm lg:text-base text-muted-foreground hover:text-primary transition-smooth font-medium hover:shadow-glow-cyan"
          >
            About Us
          </Link>
          <Link 
            to="/services"
            className="text-sm lg:text-base text-muted-foreground hover:text-primary transition-smooth font-medium hover:shadow-glow-cyan"
          >
            Services
          </Link>
          <Link 
            to="/contact"
            className="text-sm lg:text-base text-muted-foreground hover:text-primary transition-smooth font-medium hover:shadow-glow-cyan"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="hidden md:inline-flex"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button variant="ai" size="sm" className="hidden md:inline-flex text-sm lg:text-base">
            Get Started
          </Button>
          
          {/* Mobile controls */}
          <div className="flex items-center space-x-2 md:hidden">
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
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
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
                className="text-foreground hover:text-primary transition-smooth font-medium py-2 px-4 rounded-lg hover:bg-muted/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium py-2 px-4 rounded-lg hover:bg-muted/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/services"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium py-2 px-4 rounded-lg hover:bg-muted/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium py-2 px-4 rounded-lg hover:bg-muted/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
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