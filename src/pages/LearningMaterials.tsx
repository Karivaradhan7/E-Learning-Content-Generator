
import React from "react";
import { AIFeature } from "@/components/AIFeature";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

const LearningMaterials = () => {
  return (
    <ProtectedRoute>
      <AIFeature
        title="E-learning Materials"
        description="Access a comprehensive library of learning materials designed for effective learning."
        placeholder="Describe the learning materials you need (e.g., 'Create a learning roadmap for becoming a web developer')"
        feature="materials"
      />
    </ProtectedRoute>
  );
};

export default LearningMaterials;
