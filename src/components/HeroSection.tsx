import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Calendar, MapPin } from "lucide-react";
import heroDesktop from "@/assets/festival-hero.jpg";
import heroMobile from "@/assets/festival-hero-mobile.png";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={isMobile ? heroMobile : heroDesktop}
          alt="Sandipotsav Festival"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/80" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-4"
      >
        {/* Text Logo with CalfineDemo Font */}
        <motion.h1
          className="text-4xl md:text-10xl lg:text-[6rem] font-bold mb-6 text-center leading-none text-white drop-shadow-2xl"
          style={{ fontFamily: 'Gavency, Bebas Neue, sans-serif' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-shadow-festival">
            SANDIPOTSAV
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-foreground text-lg md:text-2xl font-medium text-center mb-8 text-shadow-light max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Where Culture Meets Celebration
        </motion.p>

        {/* Event Details */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
            <Calendar className="text-primary" size={20} />
            <span className="text-foreground font-medium">2nd-7th February, 2026</span>
          </div>
          <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
            <MapPin className="text-primary" size={20} />
            <span className="text-foreground font-medium">Sandip University, Nashik</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToAbout}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg festival-shadow hover:opacity-90 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore the Festival
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="text-foreground/80" size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
