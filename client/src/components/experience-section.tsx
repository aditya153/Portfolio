import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: "two-registers",
    title: "Software Developer",
    company: "Two Registers",
    location: "India",
    period: "Dec 2022 – Feb 2024",
    type: "Full-time",
    description: [
      "Developed scalable backend systems with Python (Django) that seamlessly handle growing user bases, ensuring real-time data synchronization between IoT devices and user interfaces",
      "Built modular backend services following microservice architecture patterns for improved scalability and maintainability in cross-functional teams",
      "Developed ETL scripts and parsers to automate live data processing, reducing manual data cleaning time by 40% and significantly improving data quality",
      "Optimized SQL database queries within Django ORM, reducing data storage latency from 500ms to under 200ms",
      "Collaborated throughout agile development cycles including sprint planning, code reviews, test automation, and release management with initiative and teamwork",
    ],
    technologies: ["Python", "Django", "React.js", "Git", "PostgreSQL", "REST APIs", "Microservices"],
  },
  {
    id: "quant-masters",
    title: "Machine Learning Intern",
    company: "Quant Masters",
    location: "India",
    period: "Aug 2022 – Nov 2022",
    type: "Internship",
    description: [
      "Implemented ETL pipelines for large datasets using Pandas, reducing data preprocessing time by 35%",
      "Created anomaly detection models using Support Vector Machine (SVM) algorithm to identify unusual financial transactions and improve fraud monitoring",
      "Developed anomaly detection models with Python and TensorFlow, increasing fraud detection accuracy by 20%",
      "Built interactive dashboards in Power BI using DAX, Power Query, and Dataflows to visualize complex model results for stakeholder presentations and support informed decision-making",
    ],
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Power BI", "DAX", "Pandas", "ETL"],
  },
];

// Helper function to highlight keywords in experience descriptions
const highlightKeywords = (text: string) => {
  const keywords = [
    'Python', 'Django', 'microservice architecture', 'real-time data synchronization',
    'IoT', 'scalability', 'ETL', '40%', '35%', '20%', 'Django ORM',
    '500ms', '200ms', 'agile development', 'PostgreSQL',
    'ETL pipelines', 'Pandas', 'anomaly detection', 'Support Vector Machine',
    'SVM', 'fraud monitoring', 'Power BI', 'DAX', 'Power Query',
    'TensorFlow', 'fraud detection', 'data quality'
  ];

  let parts: (string | JSX.Element)[] = [text];

  keywords.forEach((keyword, index) => {
    const newParts: (string | JSX.Element)[] = [];

    parts.forEach((part) => {
      if (typeof part === 'string') {
        const regex = new RegExp(`(${keyword})`, 'gi');
        const segments = part.split(regex);

        segments.forEach((segment, i) => {
          if (segment.toLowerCase() === keyword.toLowerCase()) {
            newParts.push(
              <span
                key={`${index}-${i}`}
                className="font-semibold text-foreground bg-primary/10 px-1 py-0.5 rounded"
              >
                {segment}
              </span>
            );
          } else if (segment) {
            newParts.push(segment);
          }
        });
      } else {
        newParts.push(part);
      }
    });

    parts = newParts;
  });

  return parts;
};

export function ExperienceSection() {

  return (
    <section id="experience" className="py-12 md:py-20 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building impactful software solutions across enterprise systems and machine learning applications
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12 md:pl-24"
              >
                <div className="absolute left-4 md:left-8 top-8 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30" />
                  {index < experiences.length - 1 && (
                    <div className="w-px h-full bg-gradient-to-b from-primary/50 to-transparent absolute top-4" />
                  )}
                </div>

                <div className="absolute left-12 md:left-24 -top-1 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span className="font-mono">{exp.period}</span>
                </div>

                <Card
                  className="mt-6"
                  data-testid={`card-experience-${exp.id}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl md:text-2xl font-display mb-2">
                          {exp.title}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="h-4 w-4" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="self-start">
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs font-mono"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {exp.description.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex gap-3 text-muted-foreground"
                        >
                          <span className="text-primary mt-1.5 flex-shrink-0">
                            <svg
                              className="h-2 w-2 fill-current"
                              viewBox="0 0 8 8"
                            >
                              <circle cx="4" cy="4" r="4" />
                            </svg>
                          </span>
                          <span className="text-sm md:text-base leading-relaxed">
                            {highlightKeywords(item)}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
