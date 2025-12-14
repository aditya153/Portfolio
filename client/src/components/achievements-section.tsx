import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Code, Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

interface Achievement {
    id: string;
    title: string;
    description: string;
    date: string;
    type: "workshop" | "judge" | "award";
    linkedinUrl: string;
    highlights: string[];
    images?: string[];
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
        images: [
            "/cpp-workshop-1.jpg",
            "/cpp-workshop-2.jpg",
            "/cpp-workshop-3.jpg",
            "/cpp-workshop-4.jpg",
            "/cpp-workshop-5.jpg",
        ],
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
        images: [
            "/web-scraping-1.jpg",
            "/web-scraping-2.jpg",
            "/web-scraping-3.jpg",
        ],
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
        images: [
            "/techtonic-1.jpg",
            "/techtonic-2.jpg",
            "/techtonic-3.jpg",
            "/techtonic-4.jpg",
            "/techtonic-5.jpg",
        ],
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

function ImageGallery({ images, title }: { images: string[]; title: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    // Auto-scroll effect
    useEffect(() => {
        if (isPaused || isModalOpen || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [isPaused, isModalOpen, images.length]);

    return (
        <>
            <div
                className="relative mb-4 rounded-lg overflow-hidden group/gallery"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <img
                    src={images[currentIndex]}
                    alt={`${title} - Image ${currentIndex + 1}`}
                    className="w-full h-40 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => setIsModalOpen(true)}
                />

                {images.length > 1 && (
                    <>
                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-background/80 opacity-0 group-hover/gallery:opacity-100 transition-opacity"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-background/80 opacity-0 group-hover/gallery:opacity-100 transition-opacity"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                                    className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? "bg-primary" : "bg-background/60"
                                        }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Modal for full-size image */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-4xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={images[currentIndex]}
                                alt={`${title} - Image ${currentIndex + 1}`}
                                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                            />
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute -top-10 right-0 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                                    >
                                        <ChevronLeft className="h-6 w-6" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                                    >
                                        <ChevronRight className="h-6 w-6" />
                                    </button>
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
                                        {currentIndex + 1} / {images.length}
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

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
                                {achievement.images && achievement.images.length > 0 && (
                                    <div className="p-4 pb-0">
                                        <ImageGallery images={achievement.images} title={achievement.title} />
                                    </div>
                                )}

                                <CardHeader className={achievement.images ? "pt-0 pb-3" : "pb-3"}>
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
