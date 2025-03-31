import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import {
  startQuiz,
  setAnswer,
  nextQuestion,
  previousQuestion,
  completeQuiz,
  setLoading,
  setError,
  resetQuiz,
  QuizQuestion,
} from '../store/quizSlice';

export const useQuiz = () => {
  const dispatch = useDispatch();
  const quizState = useSelector((state: RootState) => state.quiz);

  const initializeQuiz = (topic: string, questions: QuizQuestion[]) => {
    dispatch(startQuiz({ topic, questions }));
  };

  const submitAnswer = (questionId: string, answer: string) => {
    dispatch(setAnswer({ questionId, answer }));
  };

  const goToNextQuestion = () => {
    dispatch(nextQuestion());
  };

  const goToPreviousQuestion = () => {
    dispatch(previousQuestion());
  };

  const finishQuiz = () => {
    dispatch(completeQuiz());
  };

  const setLoadingState = (loading: boolean) => {
    dispatch(setLoading(loading));
  };

  const setErrorState = (error: string | null) => {
    dispatch(setError(error));
  };

  const reset = () => {
    dispatch(resetQuiz());
  };

  const calculateProgress = () => {
    if (!quizState.questions.length) return 0;
    return (Object.keys(quizState.userAnswers).length / quizState.questions.length) * 100;
  };

  const calculateScore = () => {
    if (!quizState.questions.length) return 0;
    const correctAnswers = quizState.questions.reduce((count, question) => {
      return count + (quizState.userAnswers[question.id] === question.correctAnswer ? 1 : 0);
    }, 0);
    return (correctAnswers / quizState.questions.length) * 100;
  };

  return {
    quizState,
    initializeQuiz,
    submitAnswer,
    goToNextQuestion,
    goToPreviousQuestion,
    finishQuiz,
    setLoadingState,
    setErrorState,
    reset,
    calculateProgress,
    calculateScore,
  };
};