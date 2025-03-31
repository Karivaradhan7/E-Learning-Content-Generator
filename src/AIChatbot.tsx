import React from 'react';
import ChatInterface from '../components/ChatInterface';

const AIChatbot = () => {
  return (
    <ChatInterface
      title="AI Learning Assistant"
      placeholder="Ask me anything about your studies..."
      type="chatbot"
    />
  );
};

export default AIChatbot;