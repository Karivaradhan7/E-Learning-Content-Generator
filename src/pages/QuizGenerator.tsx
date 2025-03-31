
import React from "react";
import { AIFeature } from "@/components/AIFeature";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

const QuizGenerator = () => {
  return (
    <ProtectedRoute>
      <AIFeature
        title="Quiz Generator"
        description="Create customized quizzes with varying difficulty levels to test your knowledge."
        placeholder="Describe the quiz you need (e.g., '10 multiple choice questions about World War II for high school students')"
        feature="quiz"
      />
    </ProtectedRoute>
  );
};

export default QuizGenerator;
