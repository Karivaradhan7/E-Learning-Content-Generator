import React from 'react';
import ChatInterface from '../components/ChatInterface';

const NotesGenerator = () => {
  return (
    <ChatInterface
      title="AI Notes Generator"
      placeholder="Enter a topic to generate detailed notes..."
      type="notes"
    />
  );
};

export default NotesGenerator;