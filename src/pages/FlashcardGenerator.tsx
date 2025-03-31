
import React from "react";
import { AIFeature } from "@/components/AIFeature";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

const FlashcardGenerator = () => {
  return (
    <ProtectedRoute>
      <AIFeature
        title="Flashcard Generator"
        description="Create interactive flashcards to boost memorization and enhance learning retention."
        placeholder="Describe the flashcards you need (e.g., 'Create 10 flashcards about human anatomy terms')"
        feature="flashcards"
      />
    </ProtectedRoute>
  );
};

export default FlashcardGenerator;
