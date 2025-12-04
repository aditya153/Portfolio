import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Mail,
  MapPin,
  Copy,
  Check,
  Send,
  Download,
  Briefcase,
} from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const copyEmail = async () => {
    await navigator.clipboard.writeText("adityanirgude22@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: "Email copied!",
      description: "adityanirgude22@gmail.com",
    });
  };

  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-8 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to discussing opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <Card className="mb-8 border-primary/20 bg-primary/5 overflow-visible animate-fadeInUp">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <Briefcase className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium text-foreground mb-1">
                  Currently Seeking Opportunities
                </p>
                <p className="text-muted-foreground">
                  Werkstudent positions in Business Intelligence & Data Engineering
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="overflow-visible animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="font-display text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            {...field}
                            data-testid="input-contact-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...field}
                            data-testid="input-contact-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message..."
                            rows={5}
                            className="resize-none"
                            {...field}
                            data-testid="input-contact-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={contactMutation.isPending}
                    data-testid="button-contact-submit"
                  >
                    {contactMutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <Card className="overflow-visible">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <div className="flex items-center gap-2">
                        <a
                          href="mailto:adityanirgude22@gmail.com"
                          className="font-medium text-foreground hover:text-primary transition-colors"
                          data-testid="link-email"
                        >
                          adityanirgude22@gmail.com
                        </a>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={copyEmail}
                          className="h-8 w-8"
                          data-testid="button-copy-email"
                        >
                          {copied ? (
                            <Check className="h-4 w-4 text-chart-3" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="font-medium text-foreground">
                        Kaiserslautern, Germany
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <SiLinkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/aditya-nirgude"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground hover:text-primary transition-colors"
                        data-testid="link-linkedin-contact"
                      >
                        linkedin.com/in/aditya-nirgude
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <SiGithub className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                      <a
                        href="https://github.com/aditya153"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground hover:text-primary transition-colors"
                        data-testid="link-github-contact"
                      >
                        github.com/aditya153
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-visible">
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium text-foreground mb-1">Download CV</p>
                    <p className="text-sm text-muted-foreground">
                      German language version
                    </p>
                  </div>
                  <Button variant="outline" asChild data-testid="button-download-cv-section">
                    <a href="/api/cv/download" download="Aditya_Nirgude_CV.pdf">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">English (Fluent)</Badge>
              <Badge variant="secondary">German (Good)</Badge>
              <Badge variant="secondary">Marathi (Native)</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
