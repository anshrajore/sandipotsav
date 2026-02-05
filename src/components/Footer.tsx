import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import sandipUniversityLogo from "@/assets/sandip-university-logo.png";
import eventClubLogo from "@/assets/event-club-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={sandipUniversityLogo} 
                alt="Sandip University" 
                className="h-12 w-auto brightness-0 dark:brightness-100 invert dark:invert-0"
              />
              <img 
                src={eventClubLogo} 
                alt="Event Club" 
                className="h-12 w-auto rounded-lg"
              />
            </div>
            <h3 className="font-display text-3xl text-foreground mb-4">
              <span className="text-primary">Sandip</span>Otsav
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              The biggest cultural extravaganza celebrating art, music, dance, and creativity. 
              Join us for four unforgettable days of fun and festivities.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Timeline", "Events", "Register", "Gallery", "FAQs"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span>event.club@sandipuniversity.edu.in</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <span>+91 9359661124</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary mt-1" />
                <span>Sandip University, Mahiravani, Trimbak Road, Nashik - 422213</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Sandipotsav |Developed by SUN SECT Club
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
