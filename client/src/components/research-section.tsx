import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Sparkles, Target, Lightbulb } from "lucide-react";

export function ResearchSection() {
    return (
        <section id="research" className="py-12 md:py-20 px-6 md:px-8">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Current Research
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Exploring cutting-edge AI technologies and their applications in real-world scenarios
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
                        <CardHeader className="bg-gradient-to-r from-primary/10 via-chart-5/5 to-chart-2/10 pb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Sparkles className="h-6 w-6 text-primary" />
                                </div>
                                <Badge variant="default" className="animate-pulse">
                                    Ongoing Research
                                </Badge>
                            </div>
                            <CardTitle className="text-2xl md:text-3xl font-display">
                                Digital Twins and Asset Administration Shell
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="pt-6 space-y-6">
                            <div className="prose prose-lg max-w-none">
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    Currently conducting research on{" "}
                                    <span className="font-semibold text-foreground bg-primary/10 px-2 py-0.5 rounded">
                                        Digital Twins
                                    </span>{" "}
                                    and the{" "}
                                    <span className="font-semibold text-foreground bg-primary/10 px-2 py-0.5 rounded">
                                        Structure in the Asset Administration Shell
                                    </span>{" "}
                                    under the guidance of{" "}
                                    <span className="font-semibold text-foreground bg-primary/10 px-2 py-0.5 rounded">
                                        Prof. Christoph Grimm
                                    </span>
                                    . This research explores the integration of digital twin technology with{" "}
                                    <span className="font-semibold text-foreground bg-primary/10 px-2 py-0.5 rounded">
                                        Industry 4.0 standards
                                    </span>
                                    , focusing on the standardized representation and interoperability of{" "}
                                    <span className="font-semibold text-foreground bg-primary/10 px-2 py-0.5 rounded">
                                        digital assets
                                    </span>{" "}
                                    through Asset Administration Shell (AAS) frameworks for smart manufacturing and industrial IoT applications.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-md bg-primary/10 mt-1">
                                            <Target className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-2">Research Focus</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Investigating the structural design and implementation of Digital Twins within the Asset Administration Shell framework for industrial automation and smart manufacturing systems
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-md bg-primary/10 mt-1">
                                            <Lightbulb className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-2">Key Innovation</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Exploring standardized architectures for digital asset representation and communication protocols in cyber-physical production systems
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-4">
                                <Badge variant="outline" className="text-xs font-mono">Digital Twin</Badge>
                                <Badge variant="outline" className="text-xs font-mono">Asset Administration Shell</Badge>
                                <Badge variant="outline" className="text-xs font-mono">Industry 4.0</Badge>
                                <Badge variant="outline" className="text-xs font-mono">IoT</Badge>
                                <Badge variant="outline" className="text-xs font-mono">Smart Manufacturing</Badge>
                                <Badge variant="outline" className="text-xs font-mono">Cyber-Physical Systems</Badge>
                                <Badge variant="outline" className="text-xs font-mono">Interoperability</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
