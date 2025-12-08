import { Button } from "@/components/ui/button";
import { Mail, Heart } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import "./puppy.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Cute Puppy Section */}
      <div className="py-16 px-6 md:px-8 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-5/5 to-chart-3/5 animate-gradient"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-chart-5/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Glassmorphic card container */}
          <div className="glass rounded-3xl p-8 md:p-12 border-2 border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02]">
            {/* Waving Golden Retriever */}
            <div className="flex justify-center mb-8">
              <div className="puppy">
                <div className="tail"></div>

                <div className="leg-hind left">
                  <div className="paw-hind"></div>
                </div>
                <div className="leg-hind right">
                  <div className="paw-hind"></div>
                </div>

                <div className="body">
                  <div className="chest"></div>
                </div>

                <div className="paw-front-left"></div>

                {/* Waving Paw */}
                <div className="paw-front-right-wrapper">
                  <div className="paw-front-right">
                    <div className="paw-pads">
                      <div className="pad-main"></div>
                      <div className="pad-toe" style={{ top: 0, left: '2px' }}></div>
                      <div className="pad-toe" style={{ top: '-2px', left: '10px' }}></div>
                      <div className="pad-toe" style={{ top: 0, left: '18px' }}></div>
                    </div>
                  </div>
                </div>

                <div className="head">
                  <div className="ear left"></div>
                  <div className="ear right"></div>

                  <div className="eye left"></div>
                  <div className="eye right"></div>

                  <div className="muzzle">
                    <div className="nose"></div>
                    <div className="mouth"></div>
                  </div>
                </div>

                <div className="bubble">Hi! 🐾</div>
              </div>
            </div>

            <h3 className="font-display text-2xl md:text-4xl font-bold gradient-text mb-6 flex items-center justify-center gap-3">
              Meet My Puppy
              <Heart className="h-6 w-6 md:h-8 md:w-8 text-red-500 fill-red-500 animate-pulse drop-shadow-lg" />
            </h3>

            <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed mb-4">
              This little guy lives here because{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-5 px-3 py-1 rounded-lg border border-primary/30 bg-primary/5">
                mom won't allow a real puppy at home
              </span>
              {" "}😢
            </p>

            <p className="text-base md:text-lg text-muted-foreground font-medium italic">
              (Still working on convincing her though... 🤞)
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="font-display font-bold text-foreground">AN</span>
              <span className="text-sm">
                © {currentYear} Aditya Nirgude. All rights reserved.
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild data-testid="link-footer-linkedin">
                <a
                  href="https://linkedin.com/in/aditya-nirgude"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <SiLinkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="link-footer-github">
                <a
                  href="https://github.com/aditya153"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <SiGithub className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="link-footer-email">
                <a href="mailto:adityanirgude22@gmail.com" aria-label="Send Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
