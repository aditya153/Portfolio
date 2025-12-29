import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

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
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="education" className="py-12 md:py-20 px-6 md:px-8 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in Computer Science and Information Technology
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {educations.map((edu) => (
            <motion.div key={edu.id} variants={cardVariants}>
              <Card
                className="overflow-visible h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
