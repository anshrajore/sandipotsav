import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Music, Palette, Users, Trophy } from "lucide-react";
import eventClubLogo from "@/assets/event-club-logo.jpg";

const features = [
  {
    icon: Music,
    title: "Live Performances",
    description: "Experience electrifying performances from top artists and bands across genres.",
    color: "bg-primary",
  },
  {
    icon: Palette,
    title: "Art & Culture",
    description: "Immerse yourself in vibrant art exhibitions and cultural showcases.",
    color: "bg-secondary",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with thousands of students celebrating together.",
    color: "bg-accent",
  },
  {
    icon: Trophy,
    title: "Competitions",
    description: "Compete in exciting events and win amazing prizes.",
    color: "bg-destructive",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header with Event Club Logo */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <motion.img
              src={eventClubLogo}
              alt="Event Club - By The Students, For The Students"
              className="h-24 md:h-32 w-auto object-contain rounded-xl"
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            About <span className="text-primary">SANDIPOTSAV</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Sandipotsav is the largest cultural extravaganza of Sandip University, 
            bringing together art, music, dance, and technology in a spectacular 
            four-day celebration of youth and creativity.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { value: "25K+", label: "Participants" },
            { value: "50+", label: "Events" },
            { value: "4", label: "Days" },
            { value: "Unlimited", label: "Fun" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-2xl card-shadow border border-border"
            >
              <div className="font-display text-4xl md:text-5xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group p-6 bg-card rounded-2xl card-shadow border border-border hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
