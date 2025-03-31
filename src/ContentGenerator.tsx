import React from 'react';
import ChatInterface from '../components/ChatInterface';

const ContentGenerator = () => {
  return (
    <ChatInterface
      title="Content Generator"
      placeholder="Ask me to generate learning materials or summaries..."
      type="content"
    />
  );
};

export default ContentGenerator;