import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:baruaarnob@qq.com",
      color: "cyan",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "purple",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Barua02",
      color: "pink",
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-black neon-text-cyan mb-4">
            Get In Touch
          </h1>
          <div className="h-1 w-24 mx-auto bg-primary rounded-full neon-glow-cyan mb-6"></div>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="holographic-card p-8 rounded-2xl neon-border-cyan">
            <h2 className="text-3xl font-display font-bold neon-text-cyan mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-body font-semibold text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-muted border-border focus:border-primary focus:ring-primary neon-glow-cyan transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-body font-semibold text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-muted border-border focus:border-primary focus:ring-primary neon-glow-cyan transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-body font-semibold text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-muted border-border focus:border-primary focus:ring-primary neon-glow-cyan transition-all duration-300 min-h-[150px]"
                  placeholder="Your message..."
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-display neon-glow-cyan"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div className="holographic-card p-8 rounded-2xl neon-border-purple">
              <h2 className="text-3xl font-display font-bold neon-text-purple mb-6">
                Connect With Me
              </h2>
              <p className="text-foreground font-body text-lg mb-8">
                Let's connect on social media or drop me an email. I'm always excited to
                discuss new projects, opportunities, or just tech in general!
              </p>
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  const borderClass = `neon-border-${link.color}`;
                  const textClass = `neon-text-${link.color}`;
                  const glowClass = `neon-glow-${link.color}`;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 holographic-card rounded-xl ${borderClass} hover:${glowClass} transition-all duration-300 group`}
                    >
                      <Icon className={`w-6 h-6 ${textClass}`} />
                      <span className="font-body text-lg text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
