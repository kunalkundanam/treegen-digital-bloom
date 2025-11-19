import { motion } from 'framer-motion';
import { Shield, Award, Users, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Environmental Responsibility',
      description: 'Committed to zero landfill with 99% diversion rate and sustainable practices.',
    },
    {
      icon: Award,
      title: 'Certified Excellence',
      description: 'R2, e-Stewards, ISO 14001, and NAID AAA certified for quality assurance.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Building long-term partnerships with transparent tracking and reporting.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Leveraging AI-powered technology for efficient and accurate recycling.',
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              ABOUT <span className="text-gradient">TREEGEN RECYCLERS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the future of electronic waste recycling with innovative technology and environmental responsibility.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="p-8 md:p-12 rounded-2xl bg-card border border-border">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                At TREEGEN RECYCLERS, we're transforming the way the world handles electronic waste. Based in Renigunta, Andhra Pradesh, we combine cutting-edge technology with environmental stewardship to create a sustainable future.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is simple yet powerful: Transform electronic waste into valuable resources while protecting our planet. Every device we process is a step toward a circular economy where nothing goes to waste.
              </p>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-green transition-all">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-recycle/10 border border-primary/20 text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Industry Leading Certifications</h2>
              <div className="flex flex-wrap justify-center gap-6 mb-6">
                <div className="px-6 py-3 rounded-full bg-background/50 backdrop-blur-sm border border-border">
                  <span className="font-bold text-primary">R2 Certified</span>
                </div>
                <div className="px-6 py-3 rounded-full bg-background/50 backdrop-blur-sm border border-border">
                  <span className="font-bold text-recycle">e-Stewards</span>
                </div>
                <div className="px-6 py-3 rounded-full bg-background/50 backdrop-blur-sm border border-border">
                  <span className="font-bold text-copper">ISO 14001</span>
                </div>
                <div className="px-6 py-3 rounded-full bg-background/50 backdrop-blur-sm border border-border">
                  <span className="font-bold text-gold">NAID AAA</span>
                </div>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our certifications demonstrate our commitment to the highest standards in electronic waste recycling, data security, and environmental management.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
