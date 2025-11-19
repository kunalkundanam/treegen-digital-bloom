import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Package, Recycle, Sparkles } from 'lucide-react';

const ProcessStep = ({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: any;
  title: string;
  description: string;
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
        <div className="flex-shrink-0 relative">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center group-hover:glow-green transition-all duration-300">
            <Icon className="w-12 h-12 text-primary" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm glow-copper">
            {index + 1}
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const steps = [
    {
      icon: Package,
      title: 'Secure Collection',
      description:
        'Advanced drone and vehicle fleet collects e-waste from your location with full chain-of-custody documentation. GPS-tracked containers ensure complete security from pickup to processing.',
    },
    {
      icon: Recycle,
      title: 'Smart Sorting & Shredding',
      description:
        'AI-powered sorting technology separates materials with 99% accuracy. Our state-of-the-art shredding facility breaks down electronics into recoverable components while capturing hazardous materials safely.',
    },
    {
      icon: Sparkles,
      title: 'Precious Metal Refinement',
      description:
        'Advanced refinement processes extract gold, copper, silver, and rare earth elements. Recovered materials are certified and returned to the manufacturing supply chain, closing the loop.',
    },
  ];

  return (
    <section id="process" className="relative py-32 px-6 bg-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-recycle/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <motion.div
        ref={containerRef}
        style={{ opacity }}
        className="container mx-auto max-w-6xl relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            THE <span className="text-gradient">DECONSTRUCTION</span> CHAMBER
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our three-stage transformation process converts electronic waste into valuable resources
            while protecting the environment.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProcessSection;
