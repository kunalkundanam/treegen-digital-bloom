import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from '@/assets/treegen-logo.jpeg';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img src={logo} alt="TREEGEN RECYCLERS" className="h-12 w-12 object-contain" />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-foreground">TREEGEN</span>
              <span className="text-xs text-muted-foreground tracking-widest">RECYCLERS</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/about' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/services' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/gallery' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Gallery
            </Link>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-green">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
