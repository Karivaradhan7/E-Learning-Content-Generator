import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import FeaturesPage from './pages/FeaturesPage';
import ContentGenerator from './pages/ContentGenerator';
import QuizGenerator from './pages/QuizGenerator';
import ElearningMaterials from './pages/ElearningMaterials';
import NotesGenerator from './pages/NotesGenerator';
import FlashcardGenerator from './pages/FlashcardGenerator';
import AIChatbot from './pages/AIChatbot';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <AboutUs />
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/content-generator" element={<ContentGenerator />} />
        <Route path="/quiz-generator" element={<QuizGenerator />} />
        <Route path="/elearning-materials" element={<ElearningMaterials />} />
        <Route path="/notes-generator" element={<NotesGenerator />} />
        <Route path="/flashcard-generator" element={<FlashcardGenerator />} />
        <Route path="/ai-chatbot" element={<AIChatbot />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </Router>
  );
}

export default App;