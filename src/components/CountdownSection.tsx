import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";
import { useTimelineState } from "@/hooks/use-timeline-state";

const CountdownSection = () => {
  const { timeRemaining } = useTimelineState();

  if (!timeRemaining) {
    return null; // Timeline has ended, don't show countdown
  }

  const { days, hours, minutes, seconds } = timeRemaining;

  return (
    <section id="timeline" className="py-20 md:py-32 bg-background relative overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border-4 border-foreground rounded-full" />
        <div className="absolute bottom-40 right-20 w-60 h-60 border-4 border-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border-4 border-accent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
              Event Schedule & Registration
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              The event schedule and registration will be revealed on
            </p>
          </motion.div>

          {/* Target Date */}
          <motion.div
            className="flex items-center justify-center gap-2 mb-12 text-primary font-semibold text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Calendar size={28} />
            <span>26 January 2026, 10:00 AM IST</span>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {/* Days */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
                {String(days).padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                Days
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
                {String(hours).padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                Hours
              </div>
            </motion.div>

            {/* Minutes */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
                {String(minutes).padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                Minutes
              </div>
            </motion.div>

            {/* Seconds */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
                {String(seconds).padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                Seconds
              </div>
            </motion.div>
          </motion.div>

          {/* Info Message */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-2 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Clock size={20} />
            <p className="text-sm md:text-base">
              Stay tuned for the complete event schedule and registration details
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownSection;

