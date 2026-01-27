import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Eye, Share2 } from "lucide-react";
import competitionPoster from "@/assets/competition-poster1.jpg";
import sandipUniversityLogo from "@/assets/sandip-university-logo.png";

const BrochureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/sandipotsav-brochure.pdf';
    link.download = 'SANDIPOTSAV Sponsorship Proposal 2K26.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewOnline = () => {
    window.open('/sandipotsav-brochure.pdf', '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Sandipotsav 2026 Brochure',
      text: 'Check out the Sandipotsav 2026 event brochure!',
      url: window.location.origin + '/sandipotsav-brochure.pdf',
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy link to clipboard
        await navigator.clipboard.writeText(shareData.url);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      // User cancelled or error occurred
      console.log('Error sharing:', err);
    }
  };

  return (
    <section id="brochure" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Sunbursts */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="text-primary fill-current">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="10"
              x2="50"
              y2="25"
              stroke="currentColor"
              strokeWidth="2"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* University Logo */}
            <motion.img
              src={sandipUniversityLogo}
              alt="Sandip University"
              className="h-16 md:h-20 w-auto mb-6 brightness-0 dark:brightness-100 invert dark:invert-0"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6">
              Event <span className="text-primary">Brochure</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Download our comprehensive event brochure to explore all competitions, 
              schedules, venue maps, and exciting activities planned for Sandipotsav 2026.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {[
                "Complete event schedule & timings",
                "Competition rules & registration details",
                "Venue maps & directions",
                "Special guest lineups",
                "Prize distribution details",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold festival-shadow hover:opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span style={{ fontFamily: 'Clash, sans-serif' }}>Download PDF</span>
              </motion.button>
              <motion.button
                onClick={handleViewOnline}
                className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={20} />
                <span style={{ fontFamily: 'Clash, sans-serif' }}>View Online</span>
              </motion.button>
              <motion.button
                onClick={handleShare}
                className="flex items-center gap-2 px-6 py-3 border-2 border-border text-foreground rounded-full font-semibold hover:bg-card transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 size={20} />
                <span style={{ fontFamily: 'Clash, sans-serif' }}>Share</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Brochure Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                className="relative z-10 rounded-2xl overflow-hidden retro-border"
                whileHover={{ rotate: 0, scale: 1.02 }}
                initial={{ rotate: 3 }}
                animate={{ rotate: 3 }}
              >
                <img
                  src={competitionPoster}
                  alt="Sandipotsav Brochure"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-bold text-sm">
                    2026 Edition
                  </span>
                </div>
              </motion.div>

              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl -z-10 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;
