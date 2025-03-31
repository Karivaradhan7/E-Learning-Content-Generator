
import React from "react";
import { AIFeature } from "@/components/AIFeature";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

const LearningAssistant = () => {
  return (
    <ProtectedRoute>
      <AIFeature
        title="AI Learning Assistant"
        description="Get personalized help and answers to questions as you progress through your learning journey."
        placeholder="Ask any question related to your studies (e.g., 'Explain the difference between mitosis and meiosis')"
        feature="assistant"
      />
    </ProtectedRoute>
  );
};

export default LearningAssistant;
