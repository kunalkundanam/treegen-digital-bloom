import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProcessSection from '@/components/ProcessSection';
import ImpactSection from '@/components/ImpactSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ProcessSection />
      <ImpactSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
