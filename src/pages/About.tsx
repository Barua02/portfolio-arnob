import { Code2, Brain, Sparkles, Database, Globe, Cpu } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Machine Learning", level: 90, icon: Brain, color: "cyan" },
    { name: "Python", level: 95, icon: Code2, color: "purple" },
    { name: "React.js", level: 88, icon: Globe, color: "pink" },
    { name: "TensorFlow", level: 85, icon: Cpu, color: "cyan" },
    { name: "SQL & Databases", level: 80, icon: Database, color: "purple" },
    { name: "TypeScript", level: 82, icon: Code2, color: "pink" },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-black neon-text-purple mb-4">
            About Me
          </h1>
          <div className="h-1 w-24 mx-auto bg-secondary rounded-full neon-glow-purple"></div>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Profile card */}
          <div className="holographic-card p-8 rounded-2xl neon-border-cyan hover:neon-glow-cyan transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-display font-bold text-primary">Who I Am</h2>
            </div>
            <div className="space-y-4 text-foreground font-body text-lg leading-relaxed">
              <p>
                I'm an aspiring Machine Learning Engineer currently on the path to becoming an AI/ML researcher in a top-tier industry research team. I'm pursuing my bachelor's degree at Yangzhou University in the College of Information Engineering and Artificial Intelligence. Right now, I'm deeply focused on strengthening my foundations in Deep Learning and building real-world projects that push my learning curve forward.
              </p>
              <p>
                Right now, I'm focused on learning how to convert ML projects into production-ready MLOps systems and deliver them to general users. I aim to make machine learning tools practical and usable in people's everyday lives.
              </p>
            </div>
          </div>

          {/* Quick facts */}
          <div className="holographic-card p-8 rounded-2xl neon-border-purple hover:neon-glow-purple transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <Brain className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl font-display font-bold text-secondary">Quick Facts</h2>
            </div>
            <ul className="space-y-4 text-foreground font-body text-lg">
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">›</span>
                <span>Working on deep learning, computer vision, pattern recognition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl">›</span>
                <span>Built and Deployed 10+ production application</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">›</span>
                <span>Start to doing Kaggle Competition and Initial code Contributor at Kaggle</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">›</span>
                <span>Passionate about sci-fi, gaming, and emerging tech</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Skills section */}
        <div className="holographic-card p-8 rounded-2xl neon-border-pink">
          <div className="flex items-center gap-4 mb-8">
            <Code2 className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-display font-bold text-accent">Technical Skills</h2>
          </div>

          <div className="grid gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const glowClass = `neon-glow-${skill.color}`;
              const textClass = `neon-text-${skill.color}`;

              return (
                <div
                  key={skill.name}
                  className="group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${textClass}`} />
                      <span className="font-body text-lg font-semibold text-foreground">
                        {skill.name}
                      </span>
                    </div>
                    <span className={`font-display font-bold ${textClass}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${glowClass} transition-all duration-1000 ease-out`}
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, hsl(var(--neon-${skill.color})), hsl(var(--neon-${skill.color})) / 0.6))`,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
