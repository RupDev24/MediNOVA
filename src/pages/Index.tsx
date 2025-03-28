
import React, { useEffect } from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import MedicalHero from '@/components/MedicalHero';
import ServicesSection from '@/components/ServicesSection';
import VideoSection from '@/components/VideoSection';
import ChatAssistant from '@/components/ChatAssistant';
import MouseFollower from '@/components/MouseFollower';
import { motion, useScroll, useSpring } from 'framer-motion';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "Medi Nova - Premium Medical Services";
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-medical z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Full screen video background with higher z-index */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-medical-dark/30 z-[1]" />
        <iframe
          src="https://www.youtube.com/embed/Q40senBIrFI?autoplay=1&mute=1&controls=0&loop=1&playlist=Q40senBIrFI&showinfo=0&rel=0&modestbranding=1&disablekb=1&iv_load_policy=3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Healthcare background video"
          className="absolute w-[100vw] h-[100vh] top-0 left-0 object-cover"
          style={{ 
            transform: 'scale(1.1)',
            pointerEvents: 'none'
          }}
        ></iframe>
      </div>

      {/* Mouse follower effect */}
      <MouseFollower />

      {/* Header */}
      <NavigationHeader />

      {/* Hero section */}
      <MedicalHero />

      {/* Services section */}
      <ServicesSection />

      {/* Video section */}
      <VideoSection />

      {/* Chat assistant */}
      <ChatAssistant />
    </div>
  );
};

export default Index;
