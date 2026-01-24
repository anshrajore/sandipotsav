import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import CountdownSection from "@/components/CountdownSection";
import BrochureSection from "@/components/BrochureSection";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import { useTimelineState } from "@/hooks/use-timeline-state";

const Index = () => {
  const { hasTimelineEnded } = useTimelineState();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* Show countdown before deadline, event schedule after deadline */}
      {hasTimelineEnded ? <TimelineSection /> : <CountdownSection />}
      <BrochureSection />
      {/* Show registration form only after deadline */}
      {hasTimelineEnded && <RegistrationForm />}
      <Footer />
    </main>
  );
};

export default Index;
