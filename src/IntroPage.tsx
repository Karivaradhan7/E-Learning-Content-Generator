import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="inline-block mb-6"
        >
          <Brain size={64} className="text-blue-600" />
        </motion.div>
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
          Aptora
        </h1>
        <p className="text-blue-700 text-lg mb-8">
          Your AI-powered learning companion
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/features')}
          className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold 
                   shadow-lg hover:bg-blue-700 transition-all duration-300
                   hover:shadow-blue-300/50 hover:shadow-xl"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default IntroPage;