import { motion } from "framer-motion";
import { Recycle, Building2, Smartphone, MonitorSmartphone, HardDrive, Cpu, Battery, Cable } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import PartnerModal from "@/components/PartnerModal";

const Services = () => {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  const services = [
    {
      icon: Building2,
      title: "Corporate E-Waste Management",
      description: "End-to-end e-waste disposal solutions for businesses",
      features: [
        "Scheduled bulk pickups",
        "Data destruction certificates",
        "Compliance documentation",
        "Asset tracking reports",
        "On-site data wiping",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile & Tablet Recycling",
      description: "Secure recycling of mobile devices and tablets",
      features: [
        "Battery extraction & disposal",
        "Component separation",
        "Precious metal recovery",
        "Screen recycling",
        "Certified data erasure",
      ],
    },
    {
      icon: MonitorSmartphone,
      title: "Computer & Laptop Recycling",
      description: "Complete recycling services for computing devices",
      features: [
        "Hard drive destruction",
        "Component harvesting",
        "Metal & plastic separation",
        "Monitor recycling",
        "Keyboard & peripheral disposal",
      ],
    },
    {
      icon: HardDrive,
      title: "Data Center Decommissioning",
      description: "Professional decommissioning of data center equipment",
      features: [
        "Server rack removal",
        "Secure data destruction",
        "Network equipment recycling",
        "Storage device shredding",
        "Cooling system disposal",
      ],
    },
    {
      icon: Cpu,
      title: "Circuit Board Recycling",
      description: "Specialized processing of PCBs and electronic components",
      features: [
        "Gold & copper extraction",
        "Rare earth recovery",
        "Chemical-free processing",
        "Microchip separation",
        "Clean room handling",
      ],
    },
    {
      icon: Battery,
      title: "Battery Recycling",
      description: "Safe disposal and recycling of all battery types",
      features: [
        "Lithium-ion processing",
        "Lead-acid recycling",
        "Alkaline battery handling",
        "Material recovery",
        "Safe transportation",
      ],
    },
    {
      icon: Cable,
      title: "Cable & Wire Recycling",
      description: "Comprehensive recycling of cables and wiring",
      features: [
        "Copper wire recovery",
        "Plastic insulation separation",
        "Fiber optic recycling",
        "Connector removal",
        "Bulk processing",
      ],
    },
    {
      icon: Recycle,
      title: "Custom E-Waste Solutions",
      description: "Tailored recycling programs for unique requirements",
      features: [
        "Industry-specific solutions",
        "Volume-based pricing",
        "Dedicated account management",
        "Custom reporting",
        "Flexible scheduling",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-green/10 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive e-waste recycling solutions tailored to your needs. 
              From corporate asset disposal to individual device recycling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border/50 hover:border-forest-green/50 transition-all hover:shadow-glow">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-forest-green/10 flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-forest-green" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-copper mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-forest-green/10 to-recycle-blue/10 rounded-2xl p-12 border border-border/50"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Partner with TREEGEN RECYCLERS for certified, secure, and sustainable e-waste management.
            </p>
            <Button 
              size="lg" 
              className="bg-forest-green hover:bg-forest-green/90 text-lg px-8 py-6"
              onClick={() => setPartnerModalOpen(true)}
            >
              Partner With Us
            </Button>
          </motion.div>
        </div>
      </section>

      <PartnerModal open={partnerModalOpen} onOpenChange={setPartnerModalOpen} />
    </div>
  );
};

export default Services;
