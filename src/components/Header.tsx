import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full py-6 px-6 lg:px-12 flex items-center justify-between bg-background/95 backdrop-blur-sm border-b border-border/50 z-[100]">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-foreground">
          SATORU<span className="text-primary glow">.</span>
        </div>
        <div className="ml-2 text-sm text-muted-foreground font-medium tracking-wide">
          AI
        </div>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-foreground hover:text-primary transition-smooth font-medium hover:shadow-glow-cyan"
        >
          Home
        </button>
        <button 
          onClick={() => window.location.href = '/about'}
          className="text-muted-foreground hover:text-primary transition-smooth font-medium hover:shadow-glow-cyan"
        >
          About Us
        </button>
        <button 
          onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}
          className="text-muted-foreground hover:text-primary transition-smooth font-medium hover:shadow-glow-cyan"
        >
          Services
        </button>
        <button 
          onClick={() => window.scrollTo({ top: window.innerHeight * 3, behavior: 'smooth' })}
          className="text-muted-foreground hover:text-primary transition-smooth font-medium hover:shadow-glow-cyan"
        >
          Contact
        </button>
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