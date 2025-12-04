import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, BookOpen } from "lucide-react";

export function PublicationSection() {
  return (
    <section id="publication" className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Publication
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Published research in cybersecurity and QR code attack prevention
          </p>
        </div>

        <Card className="overflow-visible animate-fadeInUp" data-testid="card-publication">
          <CardHeader className="pb-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-md bg-primary/10 text-primary flex-shrink-0">
                <FileText className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge variant="secondary">Research Paper</Badge>
                  <Badge variant="outline">IJARSCT</Badge>
                </div>
                <CardTitle className="text-xl md:text-2xl font-display leading-tight">
                  Software as a Service for Detection and Prevention of Attacks Using QR Codes
                </CardTitle>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm">
                International Research Journal of Engineering and Technology (IRJET)
              </span>
            </div>

            <div className="p-4 rounded-md bg-muted/50 border border-border">
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed italic">
                This research addresses the growing security threats associated with QR codes
                in digital transactions and authentication systems. The paper presents a
                Software-as-a-Service solution for real-time detection and prevention of
                malicious QR code-based attacks, contributing to enhanced cybersecurity
                measures in modern applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild data-testid="link-publication">
                <a
                  href="https://ijarsct.co.in/Paper4041.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Read Full Paper
                </a>
              </Button>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground font-mono">
                Citation: Nirgude, A. U. (2022). Software as a Service for Detection and Prevention
                of Attacks Using QR Codes. IJARSCT.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
