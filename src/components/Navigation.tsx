import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/treegen-logo.jpeg';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 cursor-pointer z-10">
            <img 
              src={logo} 
              alt="TREEGEN RECYCLERS Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
              loading="eager"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-wider text-foreground">TREEGEN</span>
              <span className="text-[10px] sm:text-xs text-muted-foreground tracking-widest">RECYCLERS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.path === "/contact" ? (
                <Link key={link.path} to={link.path}>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-green">
                    {link.name}
                  </Button>
                </Link>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className="relative z-10 h-10 w-10 touch-manipulation"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-lg border-l border-border"
            >
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-3 pb-6 border-b border-border">
                  <img 
                    src={logo} 
                    alt="TREEGEN RECYCLERS" 
                    className="h-12 w-12 object-contain"
                    loading="eager"
                  />
                  <div className="flex flex-col">
                    <span className="text-xl font-bold tracking-wider text-foreground">TREEGEN</span>
                    <span className="text-xs text-muted-foreground tracking-widest">RECYCLERS</span>
                  </div>
                </div>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={handleLinkClick}
                      className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all touch-manipulation ${
                        location.pathname === link.path
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    Where Waste Becomes Renewal
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
