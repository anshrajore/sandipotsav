import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";
import sandipUniversityLogoLight from "@/assets/sandip-university-logo.png";
import sandipUniversityLogoDark from "@/assets/sandip-university-logo-dark.png";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Brochure", href: "#brochure" },
  { name: "Register", href: "#register" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const currentLogo = mounted && resolvedTheme === "dark" ? sandipUniversityLogoLight : sandipUniversityLogoDark;

  const scrollToSection = (href: string) => {
    // Close mobile menu first and restore body overflow
    const wasMenuOpen = isMobileMenuOpen;
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
    
    // Function to perform the scroll
    const performScroll = () => {
      const element = document.querySelector(href);
      if (element) {
        // Calculate offset for fixed navbar
        const navbarHeight = 96;
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        const offsetPosition = Math.max(0, elementTop - navbarHeight);

        // Try smooth scroll first
        try {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        } catch (e) {
          // Fallback for browsers that don't support smooth scroll
          window.scrollTo(0, offsetPosition);
        }
      } else {
        // If element not found, try scrolling to hash directly as fallback
        const hash = href.replace('#', '');
        const fallbackElement = document.getElementById(hash);
        if (fallbackElement) {
          const rect = fallbackElement.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const elementTop = rect.top + scrollTop;
          const offsetPosition = Math.max(0, elementTop - 96);
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };

    // If menu was open, wait for it to close, otherwise scroll immediately
    if (wasMenuOpen) {
      // Wait for menu animation to start closing
      requestAnimationFrame(() => {
        setTimeout(() => {
          performScroll();
        }, 150);
      });
    } else {
      // Menu wasn't open, scroll immediately
      requestAnimationFrame(() => {
        performScroll();
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-xl shadow-2xl border-b border-border/50"
          : "bg-gradient-to-b from-background/80 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-24">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img 
              src={currentLogo} 
              alt="Sandip University" 
              className="h-12 md:h-14 w-auto object-contain"
            />
            <div className="hidden sm:block h-10 w-px bg-border/60" />
            <span 
              className="hidden sm:block font-display text-xl md:text-2xl lg:text-3xl tracking-wide text-white font-bold"
              style={{ fontFamily: 'Gavency, Bebas Neue, sans-serif' }}
            >
              Sandipotsav
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="relative font-medium text-sm uppercase tracking-wider text-foreground/80 hover:text-primary transition-all duration-300 group"
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border/40">
              <ThemeToggle />
              <motion.button
                onClick={() => scrollToSection("#register")}
                className="px-7 py-2.5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Now
              </motion.button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-3 z-50">
            <ThemeToggle />
            <motion.button
              type="button"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              className="p-2.5 rounded-xl bg-muted/50 hover:bg-muted transition-colors relative z-50 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className="text-foreground" size={24} />
              ) : (
                <Menu className="text-foreground" size={24} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border/50 relative z-[60] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      scrollToSection(item.href);
                    }}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      scrollToSection(item.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-left text-foreground font-medium py-3 px-4 rounded-xl hover:bg-muted/50 hover:text-primary transition-all uppercase tracking-wider text-sm cursor-pointer active:scale-95 touch-manipulation"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection("#register");
                  }}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection("#register");
                  }}
                  className="w-full py-3.5 mt-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-95 touch-manipulation"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Join Now
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
