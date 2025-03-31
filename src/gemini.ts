import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('VITE_GEMINI_API_KEY is not set in .env file');
}

const genAI = new GoogleGenerativeAI(API_KEY);

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

export async function generateContent(prompt: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-pro',
      safetySettings,
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    if (!text) {
      throw new Error('Empty response from Gemini API');
    }

    return text;
  } catch (error) {
    console.error('Error generating content:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to generate content: ${error.message}`);
    }
    throw new Error('Failed to generate content. Please try again.');
  }
}

export async function generateQuiz(topic: string, difficulty: 'easy' | 'medium' | 'hard'): Promise<string> {
  const prompt = `Create an educational quiz about "${topic}" with the following specifications:

Difficulty Level: ${difficulty.toUpperCase()}

Please include:
1. 5 Multiple Choice Questions
   - Each question should have 4 options
   - Mark the correct answer with an asterisk (*)
   - Provide a brief explanation for the correct answer

2. 3 True/False Questions
   - Clearly state whether True or False is correct
   - Include a brief explanation

3. 2 Fill-in-the-blank Questions
   - Provide the correct answer in brackets []
   - Include a hint for each question

Format everything in clean Markdown with:
- Clear section headings
- Numbered questions
- Well-formatted options
- Visible separation between questions

Make the difficulty level appropriate for ${difficulty} mode:
${difficulty === 'easy' ? '- Basic concepts\n- Simple terminology\n- Straightforward questions' :
  difficulty === 'medium' ? '- Intermediate concepts\n- Applied knowledge\n- Some analytical thinking' :
  '- Advanced concepts\n- Complex scenarios\n- Critical thinking required'}`;

  return generateContent(prompt);
}

export async function generateLearningMaterials(topic: string): Promise<string> {
  const prompt = `Create comprehensive learning materials for "${topic}" with the following structure:

1. Topic Overview
   - Brief introduction
   - Why this topic is important
   - Who should learn this

2. Key Concepts
   - Main ideas and principles
   - Important terminology
   - Fundamental theories

3. Learning Objectives
   - What you'll learn
   - Skills you'll develop
   - Expected outcomes

4. Detailed Explanations
   - In-depth coverage of each concept
   - Step-by-step breakdowns
   - Visual descriptions where applicable

5. Examples and Use Cases
   - Real-world applications
   - Practical examples
   - Common scenarios

Format everything in clean, well-structured Markdown with:
- Clear headings and subheadings
- Bullet points for better readability
- Code blocks or examples where relevant
- Emphasis on important terms`;

  return generateContent(prompt);
}

export async function generateRoadmap(topic: string): Promise<string> {
  const prompt = `Create a detailed learning roadmap for "${topic}" with the following structure:

1. Prerequisites
   - Required background knowledge
   - Essential skills
   - Recommended preparation

2. Learning Path Stages
   - Beginner level
   - Intermediate level
   - Advanced level
   - Expert level

3. Milestones
   - Key achievements for each stage
   - Checkpoints to assess progress
   - Projects or assignments

4. Recommended Resources
   - Books and documentation
   - Online courses
   - Practice platforms
   - Community resources

5. Estimated Timeframes
   - Time required for each stage
   - Suggested study schedule
   - Pace recommendations

Format everything in clean, well-structured Markdown with:
- Clear headings and subheadings
- Progressive difficulty levels
- Practical milestones
- Time estimates for each section`;

  return generateContent(prompt);
}