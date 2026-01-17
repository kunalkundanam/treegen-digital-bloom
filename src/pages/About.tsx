import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Target } from 'lucide-react';
import BoardMemberModal from '@/components/BoardMemberModal';
import rajeshPhoto from '@/assets/board-rajesh-kumar.jpg';
import priyaPhoto from '@/assets/board-priya-sharma.jpg';
import amitPhoto from '@/assets/board-amit-patel.jpg';
import sunitaPhoto from '@/assets/board-sunita-reddy.jpg';

const About = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

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

  const boardMembers = [
     {
      name: 'Satish Kundanam',
      position: 'Chairman and Founder',
      description: 'Pioneering sustainable e-waste solutions with industry experience.',
      photo: amitPhoto,
      email: 'satish.kundanam@treegenrecyclers.com',
      phone: '+91 90000 06788',
      linkedin: 'https://linkedin.com',
      bio: 'Satish Kundanam os a visionary leader with experience in environmental technology and waste management. As the founder of TREEGEN RECYCLERSS,While ensuring compliance with environmental regulations and maintaining the highest standards of safety and efficiency. His expertise in lean manufacturing and quality management has been instrumental in scaling the company\'s operations.',
      education: [
        'MBA in Operations Management - XLRI Jamshedpur',
        'B.E. in Industrial Engineering - NIT Trichy',
        'Six Sigma Black Belt Certification',
        'ISO Lead Auditor - TÜV SÜD'
      ],
      achievements: [
        'Achieved ISO 14001 and R2 certifications for all facilities',
        'Implemented lean processes reducing operational costs by 25%',
        'Managed expansion to 3 processing facilities across India',
        'Zero workplace accidents record for 5 consecutive years',
        'Established industry-leading quality management systems'
      ]
    },
    {
      name: 'Kunal Kundanam',
      position: 'Director of Operations & CEO',
      description: 'Ensuring operational excellence and environmental compliance across facilities.',
      photo: rajeshPhoto,
      email: 'kunal.kundanam@treegenrecyclers.com',
      phone: '+91 70366 67567',
      linkedin: 'https://linkedin.com',
      bio: 'Kunal Kundanam is a visionary leader with experience in environmental technology and waste management. As the founder and CEO of TREEGEN RECYCLERS, he has transformed the company into India\'s premier e-waste recycling organization. His commitment to sustainability and innovation has earned him recognition as one of the industry\'s most influential figures.',
      education: [
        'B.Tech in Computer Science Engineering - SVCE Tirupati',
        'Certified Environmental Auditor - ISO 14001'
      ],
      achievements: [
        'Founded TREEGEN RECYCLERS and achieved 99% waste diversion rate',
        'Established partnerships with 20+ corporate clients across India',
        'Successfully processed over 10 million kg of e-waste',
        'Pioneered AI-based sorting technology in Indian recycling industry'
      ]
    },
    {
      name: 'Harshad Kundanam',
      position: 'Director',
      description: 'Leading innovation in Cyber Security and AI-powered recycling technology and automation.',
      photo: priyaPhoto,
      email: 'harshad.kundanam@treegenrecyclers.com',
      phone: '+91 96661 86570',
      linkedin: 'https://linkedin.com',
      bio: 'Harshad Kundanam is a technology innovator who brings cutting-edge Cybersecurity and AI automation solutions to the recycling industry. With a background in Cybersecurity and Artificial intelligence and robotics, He has developed proprietary systems that have revolutionized e-waste sorting and processing efficiency at TREEGEN RECYCLERS.',
      education: [
        'Masters in Cyber Security  - Coventry University',
        'B.Tech in Computer Science - SVCE'
      ],
      achievements: [
        'Developed AI-powered waste sorting system with 98% accuracy',
        'Published 15+ research papers on Cybersecurity technology',
        'Led automation projects that increased efficiency by 300%',
        'Patent holder for innovative recycling automation technology'
      ]
    },
   
    {
      name: 'Swathi Kundanam',
      position: 'Director',
      description: 'Driving environmental initiatives and circular economy strategies.',
      photo: sunitaPhoto,
      email: 'swathi.kundanam@treegenrecyclers.com',
      phone: '+91 97042 94999 ',
      linkedin: 'https://linkedin.com',
      bio: 'Sunita Reddy is passionate about creating a circular economy and driving meaningful environmental change. She leads TREEGEN\'s sustainability initiatives, focusing on reducing carbon footprint, promoting responsible consumption, and developing partnerships that advance the circular economy model.',
      education: [
        'M.Sc. in Environmental Science - University of Oxford',
        'B.Sc. in Chemistry - Delhi University',
        'Certified Sustainability Professional - ISSP'
      ],
      achievements: [
        'Reduced company carbon footprint by 40% in 3 years',
        'Established circular economy partnerships with 200+ brands',
        'Launched community e-waste awareness programs reaching 1M+ people',
        'Awarded "Sustainability Champion" by FICCI 2023',
        'Developed zero-waste-to-landfill protocols adopted industry-wide'
      ]
    },
  ];

  const handleMemberClick = (member: any) => {
    setSelectedMember(member);
    setModalOpen(true);
  };

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

          {/* Board Members */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Our Leadership Team</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Click on any team member to learn more about their background and achievements
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {boardMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  onClick={() => handleMemberClick(member)}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center group cursor-pointer hover-scale"
                >
                  <div className="relative w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-all group-hover:glow-green">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-3">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                  <p className="text-xs text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view profile →
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <BoardMemberModal 
            member={selectedMember}
            open={modalOpen}
            onOpenChange={setModalOpen}
          />

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
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
