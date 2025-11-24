import { Button } from "@/components/ui/button";
import { Github, FileDown, ChevronDown, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff0a_1px,transparent_1px),linear-gradient(to_bottom,#00ffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Scanning line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 animate-scan"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        {/* Main content */}
        <div className="space-y-8 animate-fade-in">
          {/* Glowing name */}
          <h1 className="text-6xl md:text-8xl font-display font-black neon-text-cyan animate-neon-pulse">
            ARNOB BARUA
          </h1>

          {/* Tagline with typing effect */}
          <div className="space-y-2">
            <p className="text-xl md:text-2xl font-body text-secondary">
              ML Engineer | MLops Developer
            </p>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full neon-glow-cyan"></div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Building intelligent solutions at the point of Machine Learning and Deep Learning
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/resume">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-transparent border-2 border-primary text-primary hover:text-primary-foreground font-display font-bold px-8 py-6 text-lg neon-glow-cyan transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FileDown className="w-5 h-5" />
                  View Resume
                </span>
                <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Button>
            </Link>

            <a
              href="https://github.com/Barua02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="group relative overflow-hidden bg-transparent border-2 border-secondary text-secondary hover:text-secondary-foreground font-display font-bold px-8 py-6 text-lg neon-glow-purple transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  GitHub Profile
                </span>
                <span className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Button>
            </a>

            <a
              href="https://www.kaggle.com/arbbarua"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="group relative overflow-hidden bg-transparent border-2 border-accent text-accent hover:text-accent-foreground font-display font-bold px-8 py-6 text-lg neon-glow-pink transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Kaggle Profile
                </span>
                <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8 text-primary neon-glow-cyan" />
        </button>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rotate-45 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-secondary/30 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 border-2 border-accent/30 rotate-12 animate-float" style={{ animationDelay: "2s" }}></div>
    </main>
  );
};

export default Home;
