import React from 'react';
import ChatInterface from '../components/ChatInterface';

const FlashcardGenerator = () => {
  return (
    <ChatInterface
      title="Flashcard Generator"
      placeholder="Enter a topic to generate study flashcards..."
      type="flashcards"
    />
  );
};

export default FlashcardGenerator;