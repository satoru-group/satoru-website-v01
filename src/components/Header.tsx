import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <header className="fixed top-0 left-0 right-0 w-full py-6 px-6 lg:px-12 flex items-center justify-between bg-background/95 backdrop-blur-sm border-b border-border/50 z-[100]">
      <div className="flex items-center">
        <div className="flex flex-col text-center">
          <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-pulse">
            SATORU<span className="text-primary glow">.</span>
          </div>
          <div className="text-base text-muted-foreground font-medium tracking-wide">
            GROUP
          </div>
        </div>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <Link 
          to="/"
          className="text-foreground hover:text-primary transition-smooth font-medium hover:shadow-glow-cyan"
        >
          Home
        </Link>
        <Link 
          to="/about"
          className="text-muted-foreground hover:text-primary transition-smooth font-medium hover:shadow-glow-cyan"
        >
          About Us
        </Link>
        <Link 
          to="/services"
          className="text-muted-foreground hover:text-primary transition-smooth font-medium hover:shadow-glow-cyan"
        >
          Services
        </Link>
        <Link 
          to="/contact"
          className="text-muted-foreground hover:text-primary transition-smooth font-medium hover:shadow-glow-cyan"
        >
          Contact
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
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

        <Button variant="ai" size="default" className="hidden md:inline-flex">
          Get Started
        </Button>
      </div>

      {/* Mobile menu button */}
      <div className="flex items-center space-x-2 md:hidden">
        {/* Mobile Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        
        <Button variant="ghost" size="icon">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;