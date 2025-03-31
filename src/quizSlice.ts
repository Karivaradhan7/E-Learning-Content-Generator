import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface QuizQuestion {
  id: string;
  type: 'MCQ' | 'TRUE_FALSE' | 'FILL_BLANK';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export interface QuizState {
  id: string;
  topic: string;
  questions: QuizQuestion[];
  userAnswers: Record<string, string>;
  currentQuestionIndex: number;
  status: 'not-started' | 'in-progress' | 'completed';
  loading: boolean;
  error: string | null;
}

const initialState: QuizState = {
  id: '',
  topic: '',
  questions: [],
  userAnswers: {},
  currentQuestionIndex: 0,
  status: 'not-started',
  loading: false,
  error: null,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuiz: (state, action: PayloadAction<{ topic: string; questions: QuizQuestion[] }>) => {
      state.id = uuidv4();
      state.topic = action.payload.topic;
      state.questions = action.payload.questions;
      state.status = 'in-progress';
      state.userAnswers = {};
      state.currentQuestionIndex = 0;
      state.error = null;
    },
    setAnswer: (state, action: PayloadAction<{ questionId: string; answer: string }>) => {
      state.userAnswers[action.payload.questionId] = action.payload.answer;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    completeQuiz: (state) => {
      state.status = 'completed';
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    resetQuiz: () => initialState,
  },
});

export const {
  startQuiz,
  setAnswer,
  nextQuestion,
  previousQuestion,
  completeQuiz,
  setLoading,
  setError,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;