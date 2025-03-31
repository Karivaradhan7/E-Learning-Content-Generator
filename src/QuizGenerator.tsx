import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { jsPDF } from 'jspdf';
import { QuizSettings, QuizQuestion } from '../types/quiz';
import { parseQuizResponse } from '../lib/quizParser';

const QuizGenerator = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'settings' | 'quiz' | 'results'>('settings');
  const [settings, setSettings] = useState<QuizSettings>({
    topic: '',
    type: 'mcq',
    difficulty: 'medium',
    questionCount: 10
  });
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateQuiz = async () => {
  if (!settings.topic.trim()) {
    setError('Please enter a topic');
    return;
  }

  setIsLoading(true);
  setError(null);

  console.log("Request Sent to Gemini API ✅"); // Debugging point

  try {
    const response = await fetch('/api/generate-quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        topic: settings.topic,
        difficulty: settings.difficulty,
        type: settings.type,
        questionCount: settings.questionCount
      }),
    });

    const data = await response.json();

      
      if (!data.success) {
        throw new Error(data.error || 'Failed to generate quiz');
      }

      const parsedQuestions = parseQuizResponse(data.response);
      setQuestions(parsedQuestions);
      setAnswers(new Array(parsedQuestions.length).fill(''));
      setStep('quiz');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate quiz');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setStep('results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const downloadQuiz = () => {
    const doc = new jsPDF();
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    // Title
    doc.setFontSize(20);
    doc.text('Quiz Results', 20, 20);

    // Score
    doc.setFontSize(16);
    doc.text(`Score: ${score}/${questions.length} (${percentage}%)`, 20, 35);

    // Questions and Answers
    doc.setFontSize(12);
    let yPos = 50;

    questions.forEach((question, index) => {
      const isCorrect = answers[index] === question.correctAnswer;
      
      // Add new page if needed
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }

      doc.setTextColor(0, 0, 0);
      doc.text(`Question ${index + 1}: ${question.question}`, 20, yPos);
      yPos += 10;

      doc.text(`Your Answer: ${answers[index] || 'Not answered'}`, 20, yPos);
      yPos += 7;

      doc.setTextColor(isCorrect ? 0 : 255, isCorrect ? 128 : 0, isCorrect ? 0 : 0);
      doc.text(`Correct Answer: ${question.correctAnswer}`, 20, yPos);
      yPos += 7;

      doc.setTextColor(0, 0, 0);
      
      // Split explanation into multiple lines if needed
      const explanation = doc.splitTextToSize(
        `Explanation: ${question.explanation}`,
        170
      );
      doc.text(explanation, 20, yPos);
      yPos += 7 * explanation.length + 10;
    });

    // Save the PDF
    doc.save(`quiz-results-${settings.topic.toLowerCase().replace(/\s+/g, '-')}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center mb-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate('/features')}
            className="p-2 rounded-full hover:bg-blue-50"
          >
            <ArrowLeft className="w-6 h-6 text-blue-600" />
          </motion.button>
          <h1 className="text-2xl font-bold text-blue-900 ml-4">AI Quiz Generator</h1>
        </div>

        {step === 'settings' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  Quiz Topic
                </label>
                <input
                  type="text"
                  value={settings.topic}
                  onChange={(e) => setSettings({ ...settings, topic: e.target.value })}
                  placeholder="Enter a topic (e.g., Python, AI, Cybersecurity)"
                  className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  Quiz Type
                </label>
                <select
                  value={settings.type}
                  onChange={(e) => setSettings({ ...settings, type: e.target.value as QuizSettings['type'] })}
                  className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="mcq">Multiple Choice</option>
                  <option value="true-false">True/False</option>
                  <option value="fill-blanks">Fill in the Blanks</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  Difficulty Level
                </label>
                <select
                  value={settings.difficulty}
                  onChange={(e) => setSettings({ ...settings, difficulty: e.target.value as QuizSettings['difficulty'] })}
                  className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  Number of Questions
                </label>
                <select
                  value={settings.questionCount}
                  onChange={(e) => setSettings({ ...settings, questionCount: Number(e.target.value) })}
                  className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={5}>5 Questions</option>
                  <option value={10}>10 Questions</option>
                  <option value={15}>15 Questions</option>
                  <option value={20}>20 Questions</option>
                </select>
              </div>

              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGenerateQuiz}
                disabled={isLoading}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold
                         hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50
                         disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Generating Quiz...
                  </>
                ) : (
                  'Generate Quiz'
                )}
              </motion.button>
            </div>
          </motion.div>
        )}

        {step === 'quiz' && questions[currentQuestion] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="mb-6">
              <div className="text-sm text-blue-600 mb-2">
                Question {currentQuestion + 1} of {questions.length}
              </div>
              <h2 className="text-xl font-semibold text-blue-900">
                {questions[currentQuestion].question}
              </h2>
            </div>

            <div className="space-y-4 mb-6">
              {questions[currentQuestion].options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full p-4 rounded-lg border ${
                    answers[currentQuestion] === option
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  } transition-colors duration-300`}
                >
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center mr-3">
                      {answers[currentQuestion] === option && (
                        <div className="w-3 h-3 rounded-full bg-blue-600" />
                      )}
                    </div>
                    {option}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="px-6 py-2 rounded-lg border border-blue-200 text-blue-600
                         hover:bg-blue-50 transition-colors duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg
                         hover:bg-blue-700 transition-colors duration-300"
              >
                {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </motion.button>
            </div>
          </motion.div>
        )}

        {step === 'results' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Quiz Results</h2>
              <div className="text-6xl font-bold text-blue-600 mb-2">
                {calculateScore()}/{questions.length}
              </div>
              <div className="text-blue-600">
                {Math.round((calculateScore() / questions.length) * 100)}% Correct
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    answers[index] === question.correctAnswer
                      ? 'bg-green-50'
                      : 'bg-red-50'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                        answers[index] === question.correctAnswer
                          ? 'bg-green-500'
                          : 'bg-red-500'
                      }`}
                    >
                      {answers[index] === question.correctAnswer ? (
                        <Check className="w-4 h-4 text-white" />
                      ) : (
                        <span className="text-white text-sm">✕</span>
                      )}
                    </div>
                    <h3 className="font-medium text-gray-900">
                      Question {index + 1}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-2">{question.question}</p>
                  <div className="text-sm">
                    <span className="font-medium">Your answer:</span>{' '}
                    {answers[index]}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Correct answer:</span>{' '}
                    {question.correctAnswer}
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    <span className="font-medium">Explanation:</span>{' '}
                    {question.explanation}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep('settings')}
                className="flex-1 px-6 py-3 border border-blue-200 text-blue-600 rounded-lg
                         hover:bg-blue-50 transition-colors duration-300"
              >
                New Quiz
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadQuiz}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg
                         hover:bg-blue-700 transition-colors duration-300"
              >
                Download Results
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default QuizGenerator;