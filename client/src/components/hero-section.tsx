import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, ArrowRight } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Software Developer", "AI/ML Engineer", "Full-Stack Developer"];

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center relative px-6 md:px-8 pt-16"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-gradient" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-chart-5/10 rounded-full blur-3xl animate-gradient" style={{ animationDelay: "-4s" }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className={`mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-chart-5/20 p-1 animate-pulse-glow">
            <div className="w-full h-full rounded-full overflow-hidden bg-card">
              <img
                src="/profile-photo.jpg"
                alt="Aditya Nirgude"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h1
          className={`font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Aditya Nirgude
        </h1>

        <div
          className={`h-12 md:h-14 mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="text-xl md:text-2xl lg:text-3xl text-primary font-medium relative overflow-hidden h-full flex items-center justify-center">
            <span className="font-mono">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </div>

        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Master's student in Computer Science at{" "}
          <span className="text-foreground font-medium">RPTU Kaiserslautern</span>,
          specializing in Intelligent Systems and Software Engineering. Building
          AI-powered automation solutions that bridge the gap between technology and
          public services.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <Button size="lg" asChild data-testid="button-view-projects">
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild data-testid="button-download-cv">
            <a href="/Aditya_Nirgude_CV.pdf" download="Aditya_Nirgude_CV.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>

        <div
          className={`flex items-center justify-center gap-4 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <Button variant="ghost" size="icon" asChild data-testid="link-linkedin">
            <a
              href="https://linkedin.com/in/aditya-nirgude"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <SiLinkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild data-testid="link-github">
            <a
              href="https://github.com/aditya153"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <SiGithub className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#experience" aria-label="Scroll to experience" data-testid="button-scroll-down">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}
