import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Users, Code, Calendar } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { motion } from "framer-motion";

interface Achievement {
    id: string;
    title: string;
    description: string;
    date: string;
    type: "workshop" | "judge" | "award";
    linkedinUrl: string;
    highlights: string[];
}

const achievements: Achievement[] = [
    {
        id: "cpp-workshop",
        title: "C & C++ Workshop Instructor",
        description:
            "Conducted a comprehensive C & C++ workshop for second-year IT students at TCOER, equipping them with essential programming skills for the digital world.",
        date: "September 2023",
        type: "workshop",
        linkedinUrl:
            "https://www.linkedin.com/posts/aditya-nirgude-24170b173_tcoer-itworkshop-candcplusplus-activity-7106641784134377472-XMJ3",
        highlights: ["Second-year IT students", "TCOER College", "Titans Student Team"],
    },
    {
        id: "web-scraping-workshop",
        title: "Web Retrieval & Scraping Workshop",
        description:
            "Led a dynamic workshop on Web Retrieval and Scraping for B.E AIDS (Artificial Intelligence and Data Science) students, nurturing future leaders in the data-driven world.",
        date: "October 2023",
        type: "workshop",
        linkedinUrl:
            "https://www.linkedin.com/posts/aditya-nirgude-24170b173_what-an-incredible-journey-it-has-been-activity-7117874209757802496-HM0b",
        highlights: ["AI & Data Science Department", "Web Scraping Techniques", "Hands-on Training"],
    },
    {
        id: "techtonic-judge",
        title: "Judge at Sinhgad Techtonic-2024",
        description:
            "Invited as a judge for the Virtual Treasure Hunt Program at Sinhgad Academy of Engineering, representing the IT department as an alumni.",
        date: "February 2024",
        type: "judge",
        linkedinUrl:
            "https://www.linkedin.com/posts/aditya-nirgude-24170b173_honored-to-be-a-judge-at-sinhgad-techtonic-activity-7163575299887108096-DS6l",
        highlights: ["Alumni Representative", "Virtual Treasure Hunt", "Student Innovation"],
    },
];

const getTypeIcon = (type: Achievement["type"]) => {
    switch (type) {
        case "workshop":
            return <Code className="h-5 w-5" />;
        case "judge":
            return <Award className="h-5 w-5" />;
        case "award":
            return <Award className="h-5 w-5" />;
    }
};

const getTypeBadge = (type: Achievement["type"]) => {
    switch (type) {
        case "workshop":
            return "Workshop";
        case "judge":
            return "Judge";
        case "award":
            return "Award";
    }
};

export function AchievementsSection() {
    return (
        <section id="achievements" className="py-12 md:py-20 px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Achievements & Activities
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Workshops, mentoring, and community contributions that shape the next generation of tech professionals
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card
                                className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                                data-testid={`card-achievement-${achievement.id}`}
                            >
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                            {getTypeIcon(achievement.type)}
                                        </div>
                                        <Badge variant="secondary">{getTypeBadge(achievement.type)}</Badge>
                                    </div>
                                    <CardTitle className="text-lg font-display leading-tight">
                                        {achievement.title}
                                    </CardTitle>
                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <Calendar className="h-3.5 w-3.5" />
                                        {achievement.date}
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <CardDescription className="text-sm leading-relaxed">
                                        {achievement.description}
                                    </CardDescription>

                                    <div className="flex flex-wrap gap-1.5">
                                        {achievement.highlights.map((highlight) => (
                                            <Badge key={highlight} variant="outline" className="text-xs">
                                                {highlight}
                                            </Badge>
                                        ))}
                                    </div>

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full mt-2"
                                        asChild
                                        data-testid={`link-linkedin-${achievement.id}`}
                                    >
                                        <a
                                            href={achievement.linkedinUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <SiLinkedin className="mr-2 h-4 w-4" />
                                            View on LinkedIn
                                            <ExternalLink className="ml-2 h-3 w-3" />
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
