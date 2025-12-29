import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Brain,
  Cloud,
  Wrench,
  BarChart3,
} from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: "expert" | "proficient" | "familiar" }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: <Brain className="h-5 w-5" />,
    skills: [
      { name: "Python", level: "expert" },
      { name: "TensorFlow", level: "proficient" },
      { name: "PyTorch", level: "proficient" },
      { name: "Scikit-learn", level: "expert" },
      { name: "Pandas", level: "expert" },
      { name: "NumPy", level: "expert" },
      { name: "CrewAI", level: "proficient" },
      { name: "Agentic AI", level: "proficient" },
      { name: "LLMs", level: "proficient" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: <Code2 className="h-5 w-5" />,
    skills: [
      { name: "Java", level: "expert" },
      { name: "Spring Boot", level: "expert" },
      { name: "Node.js", level: "proficient" },
      { name: "FastAPI", level: "proficient" },
      { name: "REST APIs", level: "expert" },
      { name: "JWT", level: "proficient" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: <Code2 className="h-5 w-5" />,
    skills: [
      { name: "React.js", level: "expert" },
      { name: "JavaScript", level: "expert" },
      { name: "TypeScript", level: "proficient" },
      { name: "HTML/CSS", level: "expert" },
      { name: "Tailwind CSS", level: "proficient" },
    ],
  },
  {
    id: "data",
    title: "Data & Analytics",
    icon: <BarChart3 className="h-5 w-5" />,
    skills: [
      { name: "Power BI", level: "expert" },
      { name: "DAX", level: "proficient" },
      { name: "Power Query", level: "proficient" },
      { name: "ETL", level: "proficient" },
      { name: "Data Modeling", level: "proficient" },
      { name: "Matplotlib", level: "proficient" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "PostgreSQL", level: "expert" },
      { name: "MongoDB", level: "expert" },
      { name: "SQL", level: "expert" },
      { name: "Data Administration", level: "proficient" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: <Cloud className="h-5 w-5" />,
    skills: [
      { name: "Docker", level: "proficient" },
      { name: "CI/CD", level: "proficient" },
      { name: "AWS", level: "familiar" },
      { name: "Git", level: "expert" },
      { name: "GitLab", level: "proficient" },
    ],
  },
];

function getLevelStyles(level: "expert" | "proficient" | "familiar") {
  switch (level) {
    case "expert":
      return "bg-primary/10 text-primary border-primary/20";
    case "proficient":
      return "bg-chart-2/10 text-chart-2 border-chart-2/20";
    case "familiar":
      return "bg-chart-4/10 text-chart-4 border-chart-4/20";
  }
}

export function SkillsSection() {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
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
    <section id="skills" className="py-12 md:py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A comprehensive toolkit spanning AI/ML, full-stack development, and data engineering
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary/30" />
              Expert
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-chart-2/30" />
              Proficient
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-chart-4/30" />
              Familiar
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.id} variants={cardVariants}>
              <Card
                className="overflow-visible h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                data-testid={`card-skills-${category.id}`}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg font-display">
                    <span className="p-2 rounded-md bg-primary/10 text-primary">
                      {category.icon}
                    </span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="outline"
                        className={`font-mono text-xs ${getLevelStyles(skill.level)}`}
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="mt-12">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Wrench className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Other Tools:</span>
                {["Microsoft Office", "Excel Advanced", "PowerPoint", "Agile/Scrum", "JIRA"].map(
                  (tool) => (
                    <Badge key={tool} variant="secondary" className="font-mono text-xs">
                      {tool}
                    </Badge>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
