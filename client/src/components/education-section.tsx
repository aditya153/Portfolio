import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  focus: string[];
}

const educations: Education[] = [
  {
    id: "rptu",
    degree: "Master of Science",
    field: "Computer Science",
    institution: "Rheinland-Pfälzische Technische Universität Kaiserslautern",
    location: "Germany",
    period: "Oct 2024 – Expected Apr 2027",
    status: "In Progress",
    focus: ["Software Engineering", "Intelligent Systems", "AI/ML"],
  },
  {
    id: "sinhgad",
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    institution: "Sinhgad Academy of Engineering",
    location: "India",
    period: "Jul 2018 – Jun 2022",
    status: "Completed",
    focus: ["Programming", "Data Analysis", "Software Development"],
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32 px-6 md:px-8 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in Computer Science and Information Technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <Card
              key={edu.id}
              className="overflow-visible animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
              data-testid={`card-education-${edu.id}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-md bg-primary/10 text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <Badge
                    variant={edu.status === "In Progress" ? "default" : "secondary"}
                  >
                    {edu.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-display mb-1">
                  {edu.degree}
                </CardTitle>
                <p className="text-primary font-medium">{edu.field}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Focus Areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.focus.map((item) => (
                      <Badge key={item} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="font-display font-semibold text-lg mb-2">
                Current Research
              </h3>
              <p className="text-muted-foreground mb-4">
                Digital Twins and the Structure in the Asset Administration Shell
              </p>
              <Badge variant="secondary">
                Seminar under Prof. Christoph Grimm
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
