import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: " Plant Disease Classification with CNN",
      description: " Developed an end-to-end image classification pipeline using the PlantVillage dataset,  including data preprocessing, class balancing, augmentation, and training a Keras CNN model  ",
      tags: ["Python", "TensorFlow", "Scikit-learn", "Streamlit", "Dockerfile"],
      github: "  https://github.com/Barua02/Plant_Disease_Classification_with_CNN",
      color: "cyan",
    },
    {
      title: " High-Dimensional Regression Modeling for Real Estate Valuation",
      description: " Developed a high-performance regression model on the 82-feature Ames Housing dataset achieving R² = 0.92",
      tags: ["Python", "Scikit-learn", "Matplotlib", "Seaborn" , "Numpy"],
      github: "  https://www.kaggle.com/code/arbbarua/high-dimensional-regression-modeling-for-real-est",
      color: "purple",
    },
    {
      title: "Recommendation Engine [Content-Based Music Recommendation System]",
      description: "Machine learning recommendation system using collaborative filtering. Personalizes content suggestions based on user behavior patterns.",
      tags: ["Python", "Scikit-learn", " Streamlit", " NLP"],
      github: "https://github.com/Barua02/Content-Based-Music-Recommendation-System",
      color: "purple",
    },
    {
      title: "Face Recognition Payment System (in Processing)",
      description:  "A real-time dynamic face recognition payment system designed for a university canteen. Supports user face registration, model training, and real-time identity + balance display through a webcam.",
      tags: ["Python", "OpenCV", "TensorFlow", "Keras"],
      github: "https://github.com/Barua02",
      color: "pink",
    },
        {
      title: "X Sentiment Recognizer",
      description:  " An advanced sentiment analysis tool that classifies text data from social media platforms into positive, negative, or neutral sentiments using NLP techniques.",
      tags: ["Python", "NLP", "Scikit-learn", "Pandas", "Matplotlib"],
      github: "https://github.com/Barua02",
      color: "pink",
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-black neon-text-cyan mb-4">
            My Projects
          </h1>
          <div className="h-1 w-24 mx-auto bg-primary rounded-full neon-glow-cyan"></div>
          <p className="mt-6 text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            A collection of my work in machine learning, deep Learning, full stack development, and beyond
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const borderClass = `neon-border-${project.color}`;
            const glowClass = `neon-glow-${project.color}`;
            const textClass = `text-neon-${project.color}`;

            return (
              <Card
                key={index}
                className={`holographic-card p-6 ${borderClass} hover:${glowClass} transition-all duration-300 group cursor-pointer transform hover:scale-105`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  {/* Title */}
                  <h3 className={`text-2xl font-display font-bold ${textClass} group-hover:animate-neon-pulse`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground font-body leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-body font-semibold bg-muted text-foreground rounded-full border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-body"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Projects;
