
import React, { useEffect, useRef } from "react";
import { 
  FileText, 
  BookText, 
  HelpCircle, 
  Lightbulb, 
  ClipboardCheck, 
  Layers
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureElements = featuresRef.current?.querySelectorAll(".feature-card");
    if (featureElements) {
      featureElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Content Generator",
      description: "Generate tailored learning content based on your curriculum and learning objectives.",
      icon: FileText,
      path: "/content-generator"
    },
    {
      title: "Quiz Generator",
      description: "Create customized quizzes with varying difficulty levels to test your knowledge.",
      icon: ClipboardCheck,
      path: "/quiz-generator"
    },
    {
      title: "E-learning Materials",
      description: "Access a comprehensive library of learning materials designed for effective learning.",
      icon: BookText,
      path: "/learning-materials"
    },
    {
      title: "AI Notes Generator",
      description: "Transform complex topics into concise, easy-to-understand notes with AI assistance.",
      icon: Lightbulb,
      path: "/notes-generator"
    },
    {
      title: "Flashcard Generator",
      description: "Create interactive flashcards to boost memorization and enhance learning retention.",
      icon: Layers,
      path: "/flashcard-generator"
    },
    {
      title: "AI Learning Assistant",
      description: "Get personalized help and answers to questions as you progress through your learning journey.",
      icon: HelpCircle,
      path: "/learning-assistant"
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Innovative Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
            Discover the tools that make learning more effective, engaging, and personalized.
          </p>
        </div>

        <div 
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
              path={feature.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
