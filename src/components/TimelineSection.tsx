import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Camera, Video, Gamepad2, Palette, Music, Mic, Trophy, PartyPopper, Star, Sparkles, Calendar, MapPin, Clock } from "lucide-react";
import eventClubLogo from "@/assets/event-club-logo.jpg";
import studentCouncilImage from "@/assets/studentcouncilimage.png";

const dayOverview = [
  {
    day: "Monday",
    date: "02-02-2026",
    theme: "Saree Day & Formal Day",
    events: ["Photography Competition", "Reel Making Competition", "One Minute Game"],
    icon: Camera,
    color: "bg-primary",
  },
  {
    day: "Tuesday",
    date: "03-02-2026",
    theme: "Monochrome Day & Group Day",
    events: ["Poster Making Competition", "Mehndi Competition", "Painting Competition", "Guess The Tune"],
    icon: Palette,
    color: "bg-secondary",
  },
  {
    day: "Wednesday",
    date: "04-02-2026",
    theme: "Bollywood Day & Retro Day",
    events: ["Meme Competition", "Shayari Competition", "Rangoli Competition", "Reel Competition (Only for Faculty)"],
    icon: Video,
    color: "bg-accent",
  },
  {
    day: "Thursday",
    date: "05-02-2026",
    theme: "Traditional Day",
    events: ["Passing The Parcel", "Prize Distribution"],
    icon: Trophy,
    color: "bg-destructive",
  },
  {
    day: "Friday",
    date: "06-02-2026",
    theme: "Cultural Night",
    events: ["Sandip Foundation Group of Institutes – Cultural Night"],
    venue: "SITRC Amphitheatre",
    icon: Music,
    color: "bg-primary",
  },
  {
    day: "Saturday",
    date: "07-02-2026",
    theme: "Cultural Night",
    events: ["Sandip University – Cultural Night"],
    venue: "SITRC Amphitheatre",
    icon: PartyPopper,
    color: "bg-accent",
  },
];

const detailedSchedule = [
  {
    day: "Day 1",
    date: "2 Feb 2026",
    venue: "SUN S Building, Near Clock Tower (Stage)",
    slots: [
      { time: "11:00 AM – 12:30 PM", event: "Inauguration of SANDIPOTSAV 2K26" },
      { time: "02:30 PM – 03:30 PM", event: "Ramp Walk" },
      { time: "03:30 PM – 04:30 PM", event: "Declaration of Best Outfit (King & Queen Rose)" },
    ],
  },
  {
    day: "Day 2",
    date: "3 Feb 2026",
    venue: "SUN S Building, Near Clock Tower (Stage)",
    slots: [
      { time: "11:00 AM – 12:00 PM", event: "Dance + Singing" },
      { time: "12:00 PM – 02:00 PM", event: "Miss SUN & Mr. SUN (Round 1)" },
      { time: "02:00 PM – 03:00 PM", event: "Ramp Walk" },
      { time: "03:00 PM – 04:30 PM", event: "Best Outfit + Games" },
    ],
  },
  {
    day: "Day 3",
    date: "4 Feb 2026",
    venue: "SUN S Building, Near Clock Tower (Stage)",
    slots: [
      { time: "11:00 AM – 12:00 PM", event: "Dance + Singing" },
      { time: "12:00 PM – 02:00 PM", event: "Miss SUN & Mr. SUN (Round 2)" },
      { time: "02:00 PM – 03:00 PM", event: "Ramp Walk" },
      { time: "03:00 PM – 04:30 PM", event: "Best Outfit + Games" },
    ],
  },
  {
    day: "Day 4",
    date: "5 Feb 2026",
    venue: "SUN S Building, Near Clock Tower (Stage)",
    slots: [
      { time: "11:00 AM – 12:00 PM", event: "Dance + Singing" },
      { time: "12:00 PM – 02:00 PM", event: "Miss SUN & Mr. SUN (Final Round)" },
      { time: "02:00 PM – 03:00 PM", event: "SUN Fashion Show" },
      { time: "03:00 PM – 04:30 PM", event: "Prize Distribution (Overall)" },
    ],
  },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"overview" | "detailed">("overview");

  return (
    <section id="timeline" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border-4 border-foreground rounded-full" />
        <div className="absolute bottom-40 right-20 w-60 h-60 border-4 border-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border-4 border-accent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header with Event Club Logo */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Event Club Logo */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <img
              src={eventClubLogo}
              alt="Event Club - By The Students, For The Students"
              className="h-20 md:h-28 w-auto object-contain rounded-xl"
            />
          </motion.div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-accent" size={24} />
            <span className="text-accent font-semibold uppercase tracking-widest text-sm">
              6 Days of Celebration
            </span>
            <Sparkles className="text-accent" size={24} />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            Event <span className="text-accent">Schedule</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            2nd - 7th February 2026 • Sandip University, Nashik
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === "overview"
                ? "bg-primary text-primary-foreground festival-shadow"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Day-wise Overview
          </button>
          <button
            onClick={() => setActiveTab("detailed")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === "detailed"
                ? "bg-primary text-primary-foreground festival-shadow"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Detailed Schedule
          </button>
        </motion.div>

        {/* Day-wise Overview */}
        {activeTab === "overview" && (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {dayOverview.map((day, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl p-6 card-shadow border border-border hover:border-primary/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 ${day.color} rounded-xl flex items-center justify-center`}>
                    <day.icon className="text-primary-foreground" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-foreground">{day.day}</h3>
                    <p className="text-muted-foreground text-sm">{day.date}</p>
                  </div>
                </div>

                {/* Theme */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                    {day.theme}
                  </span>
                </div>

                {/* Events List */}
                <ul className="space-y-2">
                  {day.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="flex items-start gap-2 text-foreground">
                      <Star className="text-primary mt-1 flex-shrink-0" size={14} />
                      <span className="text-sm">{event}</span>
                    </li>
                  ))}
                </ul>

                {/* Venue if exists */}
                {day.venue && (
                  <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} className="text-primary" />
                    <span className="text-sm">{day.venue}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Detailed Schedule */}
        {activeTab === "detailed" && (
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {detailedSchedule.map((day, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl p-6 md:p-8 card-shadow border border-border"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              >
                {/* Day Header */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <h3 className="font-display text-3xl md:text-4xl text-foreground">
                    {day.day}
                  </h3>
                  <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-bold">
                    {day.date}
                  </span>
                </div>

                {/* Venue */}
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin size={18} className="text-primary" />
                  <span>{day.venue}</span>
                </div>

                {/* Time Slots */}
                <div className="grid gap-4">
                  {day.slots.map((slot, slotIndex) => (
                    <motion.div
                      key={slotIndex}
                      className="flex flex-col md:flex-row md:items-center gap-3 p-4 bg-muted rounded-xl"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-2 text-primary font-semibold min-w-[180px]">
                        <Clock size={18} />
                        <span>{slot.time}</span>
                      </div>
                      <div className="text-foreground font-medium">{slot.event}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Student Council Highlight */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Sandipotsav Student Council 2024
          </h3>
          <div className="relative overflow-hidden rounded-3xl border border-border card-shadow">
            <img
              src={studentCouncilImage}
              alt="Sandipotsav Student Council 2024 group photo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;