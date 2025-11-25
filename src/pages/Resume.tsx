import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Briefcase, Award } from "lucide-react";

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Yangzhou University",
      year: "2022 - 2026",
      GPA:"3.70 (4th position)"
    },
    {
      degree: "Higher Secondary School Certificate (Science)",
      institution: "Hazera-Taju Degree College",
      year: "2018 - 2020",
      GPA:"5.0/5.0",
    },
  ];

  const experience = [
    {
      role: "Machine learning",
      description: "Leading development of ML models for production systems. Improved model accuracy by 35% and reduced inference time by 50%.",
    },
    {
      role: "Full-Stack Developer",
      description: "Built scalable web applications using React and Node.js.",
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-black neon-text-purple mb-4">
            Resume
          </h1>
          <div className="h-1 w-24 mx-auto bg-secondary rounded-full neon-glow-purple mb-6"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {/* Education */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="w-8 h-8 text-primary neon-glow-cyan" />
              <h2 className="text-3xl font-display font-bold neon-text-cyan">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="holographic-card p-6 rounded-xl neon-border-cyan hover:neon-glow-cyan transition-all duration-300 border-l-4"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <h3 className="text-xl font-display font-bold text-primary">
                      {edu.degree}
                    </h3>
                    <span className="text-muted-foreground font-body">{edu.year}</span>
                  </div>
                  <p className="text-lg font-body text-secondary mb-2">{edu.institution}</p>
                  <p className="text-foreground font-body">{edu.GPA}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <Briefcase className="w-8 h-8 text-secondary neon-glow-purple" />
              <h2 className="text-3xl font-display font-bold neon-text-purple">Skill</h2>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="holographic-card p-6 rounded-xl neon-border-purple hover:neon-glow-purple transition-all duration-300 border-l-4"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <h3 className="text-xl font-display font-bold text-secondary">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-foreground font-body">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>


        </div>
      </div>
    </main>
  );
};

export default Resume;
