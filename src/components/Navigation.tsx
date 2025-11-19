import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/treegen-logo.jpeg';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img src={logo} alt="TREEGEN RECYCLERS" className="h-12 w-12 object-contain" />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-foreground">TREEGEN</span>
              <span className="text-xs text-muted-foreground tracking-widest">RECYCLERS</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('process')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-green"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
