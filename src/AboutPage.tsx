import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Brain } from 'lucide-react';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto pt-12">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/features')}
          className="mb-8 p-2 rounded-full hover:bg-blue-50 inline-flex items-center"
        >
          <ArrowLeft className="w-6 h-6 text-blue-600" />
          <span className="ml-2 text-blue-600">Back to Features</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-12 h-12 text-blue-600" />
          </div>

          <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">About Aptora</h1>

          <div className="space-y-6 text-gray-600">
            <p>
              Aptora is an innovative AI-powered e-learning platform designed to revolutionize the way
              people learn and engage with educational content. Our platform leverages cutting-edge
              artificial intelligence to provide personalized learning experiences tailored to each
              user's needs.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-3">Our Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Content Generator - Create comprehensive learning materials instantly</li>
                <li>Quiz Generator - Generate custom quizzes with varying difficulty levels</li>
                <li>E-learning Roadmap - Get personalized learning paths for any subject</li>
                <li>AI Notes Generator - Transform complex topics into easy-to-understand notes</li>
                <li>Flashcard Generator - Create effective study flashcards automatically</li>
                <li>AI Chatbot - Get instant answers to your academic questions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-3">Our Mission</h2>
              <p>
                We strive to make quality education accessible to everyone by providing AI-powered
                tools that make learning more efficient, engaging, and personalized. Our platform
                is designed to support both students and educators in their educational journey.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-3">Technology</h2>
              <p>
                Aptora is powered by Google's Gemini AI technology, ensuring high-quality,
                accurate, and relevant content generation across all our features. Our platform
                is built with modern web technologies and optimized for both desktop and mobile
                devices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;