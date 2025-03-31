import { QuizQuestion } from '../types/quiz';

export function parseQuizResponse(markdown: string): QuizQuestion[] {
  const questions: QuizQuestion[] = [];
  const sections = markdown.split(/\n(?=\d+\.)/).filter(Boolean);

  sections.forEach(section => {
    const lines = section.split('\n').filter(Boolean);
    const questionMatch = lines[0].match(/\d+\.\s*(.+)/);
    
    if (!questionMatch) return;

    const question: QuizQuestion = {
      question: questionMatch[1].trim(),
      options: [],
      correctAnswer: '',
      explanation: ''
    };

    let inOptions = false;
    let inExplanation = false;

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.match(/^[A-D]\)/)) {
        inOptions = true;
        const option = line.substring(3).trim();
        const isCorrect = option.includes('*');
        const cleanOption = option.replace('*', '').trim();
        
        question.options?.push(cleanOption);
        if (isCorrect) {
          question.correctAnswer = cleanOption;
        }
      } else if (line.toLowerCase().startsWith('explanation:')) {
        inOptions = false;
        inExplanation = true;
        question.explanation = line.substring(12).trim();
      } else if (inExplanation) {
        question.explanation += ' ' + line;
      }
    }

    if (question.question && question.correctAnswer) {
      questions.push(question);
    }
  });

  return questions;
}