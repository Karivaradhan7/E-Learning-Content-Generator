export interface QuizSettings {
  topic: string;
  type: 'mcq' | 'true-false' | 'fill-blanks';
  difficulty: 'easy' | 'medium' | 'hard';
  questionCount: number;
}

export interface QuizQuestion {
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}