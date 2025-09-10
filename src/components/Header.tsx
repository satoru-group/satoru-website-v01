import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full py-6 px-6 lg:px-12 flex items-center justify-between bg-background/95 backdrop-blur-sm border-b border-border/50 z-[100]">
      <div className="flex items-center">
        <div className="flex flex-col text-center">
          <div className="text-2xl font-bold text-foreground">
            SATORU<span className="text-primary glow">.</span>
          </div>
          <div className="text-sm text-muted-foreground font-medium tracking-wide">
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

      <Button variant="ai" size="default" className="hidden md:inline-flex">
        Get Started
      </Button>

      {/* Mobile menu button */}
      <Button variant="ghost" size="icon" className="md:hidden">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </Button>
    </header>
  );
};

export default Header;