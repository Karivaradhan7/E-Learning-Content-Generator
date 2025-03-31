import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, BrainCircuit, GraduationCap, FileText, Car as Cards, MessageCircle } from 'lucide-react';

interface FeatureButtonProps {
  icon: React.ElementType;
  title: string;
  description: string;
  onClick: () => void;
}

const FeatureButton: React.FC<FeatureButtonProps> = ({ icon: Icon, title, description, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-full bg-white p-6 rounded-xl shadow-lg hover:shadow-xl
               transition-all duration-300 mb-6 text-left"
    onClick={onClick}
  >
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-blue-100 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
        <p className="text-blue-600">{description}</p>
      </div>
    </div>
  </motion.button>
);

const FeaturesPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Content Generator",
      description: "Generate comprehensive learning materials and summaries using AI",
      path: "/content-generator"
    },
    {
      icon: BrainCircuit,
      title: "Quiz Generator",
      description: "Create custom quizzes with varying difficulty levels",
      path: "/quiz-generator"
    },
    {
      icon: GraduationCap,
      title: "E-learning Materials",
      description: "Access AI-generated learning roadmaps and materials",
      path: "/elearning-materials"
    },
    {
      icon: FileText,
      title: "AI Notes Generator",
      description: "Transform complex topics into easy-to-understand notes",
      path: "/notes-generator"
    },
    {
      icon: Cards,
      title: "Flashcard Generator",
      description: "Create effective study flashcards automatically",
      path: "/flashcard-generator"
    },
    {
      icon: MessageCircle,
      title: "AI Learning Assistant",
      description: "Get instant answers to your academic questions",
      path: "/ai-chatbot"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto pt-12"
      >
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Choose Your Learning Path
        </h1>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureButton
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                onClick={() => navigate(feature.path)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesPage;