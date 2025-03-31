import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, HelpCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  emoji: string;
}

const faqs: FAQ[] = [
  {
    question: 'How to use Content Generator?',
    answer: 'Use clear and specific prompts like "Generate learning materials on [Topic] with key concepts and examples." Structure the content with headings, bullet points, and step-by-step explanations for better clarity.',
    emoji: '📝'
  },
  {
    question: 'How to use Quiz Generator?',
    answer: 'Use prompts like "Create a [Easy/Medium/Hard] level quiz on [Topic]." Generate MCQs, True/False, and Fill-ups. For better results, specify the number of questions and concepts to focus on.',
    emoji: '🧐'
  },
  {
    question: 'How to generate E-learning Roadmaps?',
    answer: 'Prompt with "Generate a complete learning roadmap for becoming a [Role Name] with tools, concepts, and project ideas." This will create a step-by-step path with learning materials and project suggestions.',
    emoji: '📚'
  },
  {
    question: 'How to use AI Notes Generator?',
    answer: 'Use "Generate detailed notes on [Topic Name] with key points and definitions." Specify the format: bullet points, concise paragraphs, or summarized notes for effective learning.',
    emoji: '🗒️'
  },
  {
    question: 'How to use Flashcard Generator?',
    answer: 'Prompt with "Generate flashcards on [Topic]." Each flashcard will have a question on the front and an answer on the back. Ideal for quick revisions.',
    emoji: '🎴'
  },
  {
    question: 'How to interact with AI Chatbot for Doubts?',
    answer: 'Simply ask your subject-related questions like "Explain [Concept] with examples." The chatbot will provide accurate explanations with references and diagrams if needed.',
    emoji: '🤖'
  }
];

const SupportPage = () => {
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
            <HelpCircle className="w-12 h-12 text-blue-600" />
          </div>

          <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">Help & Support</h1>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-50 rounded-lg p-6 transform transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <span>{faq.emoji}</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Need More Help?</h2>
            <p className="text-gray-600">
              If you have any additional questions or need further assistance, please don't hesitate
              to contact our support team at support@aptora.com. We're here to help you make the
              most of your learning experience!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SupportPage;