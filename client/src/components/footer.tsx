import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
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
  );
}
