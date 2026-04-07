import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/tilt-card";
import { ExternalLink, Github, Bot, Workflow, Users, FileText, Brain } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: ProjectFeature[];
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
  status: "Active Project" | "Completed";
}

const projects: Project[] = [
  {
    id: "public-admin",
    title: "German Public Administration Automation",
    subtitle: "AI-Powered Workflow Automation System",
    description:
      "A comprehensive AI-driven system that automates German public administration's address change workflow using CrewAI multi-agent orchestration, OCR document extraction with GPT-4 Vision, and Human-in-the-Loop (HITL) quality assurance mechanisms.",
    features: [
      {
        icon: <Bot className="h-5 w-5" />,
        title: "7-Agent AI Workflow",
        description: "Sequential task execution with specialized agents",
      },
      {
        icon: <Workflow className="h-5 w-5" />,
        title: "HITL Quality Check",
        description: "Human review for low-confidence decisions",
      },
      {
        icon: <Users className="h-5 w-5" />,
        title: "End-to-End Automation",
        description: "From document upload to certificate delivery",
      },
    ],
    technologies: ["React.js", "Vannila CSS", "CrewAI", "Docker", "PostgreSQL", "GPT-4", "FastAPI", "MCP"],
    github: "https://github.com/aditya153/address-change-automation",
    demo: "https://address-change-automation.vercel.app/login",
    image: "/infographic.png",
    featured: true,
    status: "Active Project",
  },
  {
    id: "literature-agent",
    title: "Literature Review Multi-Agent System",
    subtitle: "Automated Academic Research Assistant",
    description:
      "A multi-agent system that automatically generates comprehensive literature reviews of 500+ words from research papers. Utilizes specialized AI agents for content analysis, summarization, and iterative quality improvement through feedback mechanisms.",
    features: [
      {
        icon: <Brain className="h-5 w-5" />,
        title: "Multi-Agent Architecture",
        description: "Specialized agents for analysis and synthesis",
      },
      {
        icon: <Bot className="h-5 w-5" />,
        title: "LLM Integration",
        description: "Advanced prompt engineering with feedback loops",
      },
      {
        icon: <FileText className="h-5 w-5" />,
        title: "Iterative Refinement",
        description: "Quality improvement through agent collaboration",
      },
    ],
    technologies: ["Python", "Microsoft Autogen", "Dify.ai", "LLMs", "Agentic AI"],
    github: "https://github.com/aditya153/Literature-review-agent",
    featured: true,
    status: "Completed",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-20 px-6 md:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative AI-powered solutions bridging technology and real-world applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <TiltCard tiltIntensity={8} glareEnabled={true} glareOpacity={0.1} scale={1.02}>
                <Card
                  className="group overflow-visible h-full"
                  data-testid={`card-project-${project.id}`}
                >
                  {project.image && (
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 md:h-56 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      <Badge
                        className="absolute top-4 right-4"
                        variant={project.status === "Active Project" ? "default" : "secondary"}
                        data-testid={`badge-status-${project.id}`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  )}

                  {!project.image && (
                    <div className="relative h-48 md:h-56 rounded-t-lg bg-gradient-to-br from-primary/10 via-chart-5/5 to-chart-2/10 flex items-center justify-center overflow-hidden">
                      <div className="text-6xl font-display font-bold gradient-text opacity-30">
                        {project.title.split(" ").map(w => w[0]).join("")}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      <Badge
                        className="absolute top-4 right-4"
                        variant={project.status === "Active Project" ? "default" : "secondary"}
                        data-testid={`badge-status-${project.id}`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl md:text-2xl font-display">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {project.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-md bg-muted/50 text-center transition-colors hover:bg-muted"
                        >
                          <div className="text-primary mb-2 flex justify-center">
                            {feature.icon}
                          </div>
                          <h4 className="text-sm font-medium text-foreground mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs font-mono">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.github && (
                        <Button variant="outline" size="sm" asChild data-testid={`link-github-${project.id}`}>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" asChild data-testid={`link-demo-${project.id}`}>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
