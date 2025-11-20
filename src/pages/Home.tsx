import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import ImpactSection from "@/components/ImpactSection";
import PartnerModal from "@/components/PartnerModal";

const Home = () => {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  return (
    <>
      <HeroSection onPartnerClick={() => setPartnerModalOpen(true)} />
      <ProcessSection />
      <ImpactSection />
      <PartnerModal open={partnerModalOpen} onOpenChange={setPartnerModalOpen} />
    </>
  );
};

export default Home;
