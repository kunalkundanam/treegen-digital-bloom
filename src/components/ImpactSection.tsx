import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Award, TrendingUp } from 'lucide-react';

const CountUpNumber = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;
            
            if (progress < 1) {
              setCount(Math.floor(end * progress));
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-gradient">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const StatCard = ({
  icon: Icon,
  value,
  suffix = '',
  label,
  description,
  index,
}: {
  icon: any;
  value: number;
  suffix?: string;
  label: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
    >
      <div className="absolute top-6 right-6">
        <Icon className="w-8 h-8 text-primary/30 group-hover:text-primary transition-colors" />
      </div>
      
      <div className="mb-4">
        <CountUpNumber end={value} suffix={suffix} />
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-foreground">{label}</h3>
      <p className="text-muted-foreground">{description}</p>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-recycle to-copper transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
    </motion.div>
  );
};

const ServiceCard = ({ title, description, index }: { title: string; description: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-6 rounded-xl bg-card/50 border border-border hover:bg-card hover:border-primary/50 transition-all duration-300"
    >
      <h4 className="text-lg font-bold mb-2 text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const ImpactSection = () => {
  const stats = [
    {
      icon: Leaf,
      value: 12500,
      label: 'Tons CO₂ Offset',
      description: 'Equivalent to planting 175,000 trees annually',
    },
    {
      icon: Recycle,
      value: 850,
      suffix: 'K',
      label: 'Lbs Metals Recovered',
      description: 'Gold, copper, silver returned to supply chain',
    },
    {
      icon: Award,
      value: 99,
      suffix: '%',
      label: 'Diversion Rate',
      description: 'E-waste diverted from landfills',
    },
    {
      icon: TrendingUp,
      value: 500,
      suffix: '+',
      label: 'Corporate Partners',
      description: 'Leading organizations trust our process',
    },
  ];

  const services = [
    { title: 'IT Asset Disposition', description: 'Secure data destruction and device recycling' },
    { title: 'Corporate E-Waste Programs', description: 'Customized collection and reporting' },
    { title: 'Government Contracts', description: 'Certified for federal and state agencies' },
    { title: 'Consumer Drop-off', description: 'Convenient locations for public recycling' },
    { title: 'Data Center Decommissioning', description: 'Full-service infrastructure removal' },
    { title: 'Precious Metal Recovery', description: 'Maximum value from your electronics' },
  ];

  return (
    <>
      <section id="impact" className="relative py-32 px-6 bg-tech-dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-forest/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-recycle/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              THE <span className="text-gradient">IMPACT</span> MATRIX
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time data showing our contribution to a sustainable future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative py-32 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive e-waste solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ImpactSection;
