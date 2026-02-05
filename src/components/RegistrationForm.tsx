import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ExternalLink, Calendar, Clock, MapPin, User, Phone } from "lucide-react";

const competitions = [
  {
    id: 1,
    name: "SUN Shining Star 2k26",
    emoji: "🤩",
    category: "RampWalk",
    description: "Test your quick thinking and problem-solving skills in this fast-paced challenge.",
    coordinator: "Chaitanya Sonawane",
    contact: "7249516546",
    link: "https://forms.gle/mkFwmzwuCtwJjmxr6",
  },
  {
    id: 2,
    name: "Reel Making Competition",
    emoji: "🤳",
    category: "Creative",
    description: "Showcase your creativity through engaging short-form video content.",
    coordinator: "Krishna Kansara",
    contact: "9429789837",
    link: "https://forms.gle/uF1wVVNnAykkydGo6",
  },
  
  {
    id: 3,
    name: "Shayari Competition",
    emoji: "🎤",
    category: "Cultural",
    description: "Express your emotions and thoughts through beautiful Urdu and Hindi poetry.",
    coordinator: "Rasheeda Begum",
    contact: "8688932420",
    link: "https://forms.gle/8kn2Gd9DAE2QwBg79",
  },
  {
    id: 4,
    name: "Mehndi Competition",
    emoji: "🌿",
    category: "Art & Design",
    description: "Display your artistic skills with intricate henna designs and patterns.",
    coordinator: "Tanisha Bhute",
    contact: "8591654161",
    link: "https://forms.gle/X5AKP8fP2yLefj3f7",
  },
  {
    id: 5,
    name: "Rangoli Competition",
    emoji: "✨",
    category: "Traditional Art",
    description: "Create stunning traditional floor art with colors and creativity.",
    coordinator: "Priyanka Nawale",
    contact: "7620108579",
    link: "https://forms.gle/VUFFFVBjiQZ21F1Q9",
  },
  {
    id: 6,
    name: "Talent Show Audition",
    emoji: "💃🎤🕺🎭",
    category: "Dance /Singing /Creative",
    description: "Dance to the beats of Bollywood classics and retro hits in this exciting competition.",
    coordinator: "Jaanisha Ahuja",
    contact: "9028333085",
    link: "https://forms.gle/Y5DGPCvLyaqhVKKc6",
  },
 
  {
    id: 7,
    name: "Painting Competition",
    emoji: "🖌️",
    category: "Fine Arts",
    description: "Bring your imagination to life with colors, brushes, and artistic expression.",
    coordinator: "Devashree Damankar",
    contact: "9764204186",
    link: "https://forms.gle/HXe2yc4EAPwC9f3a8",
  },
  {
    id: 8,
    name: "Photography Competition",
    emoji: "📷",
    category: "Visual Arts",
    description: "Capture the perfect moments and showcase your photography skills.",
    coordinator: "Vedant Chaudhari",
    contact: "9022865201",
    link: "https://forms.gle/UJE8U1zggZWumvV39",
  },

];

const RegistrationForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleRegister = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="register" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-accent rounded-full"
          animate={{ y: [0, -20, 0], opacity: [1, 0.5, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-40 w-6 h-6 bg-primary rounded-full"
          animate={{ y: [0, 20, 0], opacity: [1, 0.5, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-3 h-3 bg-accent rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-accent" size={24} />
            <span className="text-accent font-semibold uppercase tracking-widest text-sm">
              Choose Your Competition
            </span>
            <Sparkles className="text-accent" size={24} />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            Sandipotsav 2026 –{" "}
            <span className="text-primary">Competition Registrations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose your competition and register now.
          </p>
        </motion.div>

        {/* Competition Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {competitions.map((competition, index) => (
            <motion.div
              key={competition.id}
              className="group bg-card rounded-2xl p-6 card-shadow border border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Card Header */}
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{competition.emoji}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl text-foreground font-bold leading-tight">
                      {competition.name}
                    </h3>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold uppercase tracking-wide mb-3">
                  {competition.category}
                </span>
                {/* Short Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                  {competition.description}
                </p>
              </div>

              {/* Event Details Section */}
              <div className="mb-4 space-y-2 pb-4 border-b border-border">
                <h4 className="text-foreground font-semibold text-sm mb-2">Event Details</h4>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Calendar size={14} className="text-primary" />
                    <span>Date: <span className="text-foreground">To Be Announced</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Clock size={14} className="text-primary" />
                    <span>Time: <span className="text-foreground">To Be Announced</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <MapPin size={14} className="text-primary" />
                    <span>Venue: <span className="text-foreground">To Be Announced</span></span>
                  </div>
                </div>
              </div>

              {/* Coordinator Details Section */}
              <div className="mb-4 space-y-2">
                <h4 className="text-foreground font-semibold text-sm mb-2">Coordinator Details</h4>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <User size={14} className="text-primary" />
                    <span>Event Coordinator: <span className="text-foreground">{competition.coordinator}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Phone size={14} className="text-primary" />
                    <span>Contact No.: <span className="text-foreground">{competition.contact}</span></span>
                  </div>
                </div>
              </div>

              {/* Register Button */}
              <motion.button
                onClick={() => handleRegister(competition.link)}
                className="mt-auto w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-bold text-sm uppercase tracking-wider festival-shadow hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
                <ExternalLink size={16} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;
