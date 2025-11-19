import logo from '@/assets/treegen-logo.jpeg';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tech-surface border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="TREEGEN RECYCLERS" className="h-10 w-10 object-contain" />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wider text-foreground">TREEGEN RECYCLERS</span>
                <span className="text-xs text-muted-foreground tracking-widest">Transform. Restore. REGENERATION</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Leading the future of electronic waste recycling with innovative technology and environmental responsibility.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary">
              <Leaf className="w-4 h-4" />
              <span>Committed to Zero Landfill</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#process" className="hover:text-primary transition-colors">Our Process</a></li>
              <li><a href="#impact" className="hover:text-primary transition-colors">Impact</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Certifications</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>R2 Certified</li>
              <li>e-Stewards</li>
              <li>ISO 14001</li>
              <li>NAID AAA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TREEGEN RECYCLERS. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
