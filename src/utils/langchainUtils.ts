
import { PromptTemplate } from "@langchain/core/prompts";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";

// Initialize the Google Generative AI model
const getGoogleAI = () => {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!API_KEY) {
    throw new Error("VITE_GEMINI_API_KEY is not defined in environment variables");
  }
  
  return new ChatGoogleGenerativeAI({
    apiKey: API_KEY,
    modelName: "gemini-1.5-pro",
    maxOutputTokens: 2048,
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
  });
};

// Define prompt templates for each feature with formatting guidelines
const promptTemplates = {
  content: PromptTemplate.fromTemplate(
    `Generate structured educational content based on the following prompt. 
    Include headings, explanations, examples, and key points.
    
    IMPORTANT FORMATTING GUIDELINES:
    - DO NOT use markdown syntax (no **, *, _, or backticks)
    - Use plain text with clear section headings
    - Use simple bullet points or numbered lists where needed
    - Add spacing between sections for readability
    - If code examples are needed, present them as plain text (without syntax highlighting markers)
    
    PROMPT: {userPrompt}`
  ),
  
  quiz: PromptTemplate.fromTemplate(
    `Generate a quiz based on the following prompt. 
    Include a mix of multiple choice, true/false, and short answer questions.
    
    IMPORTANT FORMATTING GUIDELINES:
    - DO NOT use markdown syntax (no **, *, _, or backticks)
    - Use plain text with clear section headings
    - Use simple bullet points or numbered lists for questions
    - Add spacing between questions and sections
    - If code examples are needed, present them as plain text (without syntax highlighting markers)
    
    PROMPT: {userPrompt}`
  ),
  
  materials: PromptTemplate.fromTemplate(
    `Generate a comprehensive learning roadmap or materials list based on the following prompt. 
    Include resources, steps, and recommendations.
    
    IMPORTANT FORMATTING GUIDELINES:
    - DO NOT use markdown syntax (no **, *, _, or backticks)
    - Use plain text with clear section headings
    - Use simple bullet points or numbered lists where needed
    - Add spacing between sections for readability
    - If code examples are needed, present them as plain text (without syntax highlighting markers)
    
    PROMPT: {userPrompt}`
  ),
  
  notes: PromptTemplate.fromTemplate(
    `Generate concise, organized notes based on the following prompt. 
    Include key concepts, definitions, and important information.
    
    IMPORTANT FORMATTING GUIDELINES:
    - DO NOT use markdown syntax (no **, *, _, or backticks)
    - Use plain text with clear section headings
    - Use simple bullet points or numbered lists for key points
    - Add spacing between sections for readability
    - If code examples are needed, present them as plain text (without syntax highlighting markers)
    
    PROMPT: {userPrompt}`
  ),
  
  flashcards: PromptTemplate.fromTemplate(
    `Generate flashcards based on the following prompt. 
    Format as Question: [question] and Answer: [answer] pairs. 
    Make them concise and focused on key information.
    
    IMPORTANT FORMATTING GUIDELINES:
    - DO NOT use markdown syntax (no **, *, _, or backticks)
    - Use plain text with clear labeling for questions and answers
    - Add spacing between each flashcard for readability
    - If code examples are needed, present them as plain text (without syntax highlighting markers)
    
    PROMPT: {userPrompt}`
  ),
  
  assistant: PromptTemplate.fromTemplate(
    `You are an educational assistant. Provide a helpful, accurate response to the following question or request.
    
    IMPORTANT FORMATTING GUIDELINES:
    - DO NOT use markdown syntax (no **, *, _, or backticks)
    - Use plain text with clear section headings where needed
    - Use simple bullet points or numbered lists if appropriate
    - Add spacing between sections for readability
    - If code examples are needed, present them as plain text (without syntax highlighting markers)
    
    QUESTION: {userPrompt}
    
    If this question relates to previous questions you've answered in this conversation, try to maintain context.`
  ),
};

// Create a chain for generating content with Gemini
export const createGenerationChain = (feature: keyof typeof promptTemplates) => {
  const model = getGoogleAI();
  
  // Create the chain
  const chain = RunnableSequence.from([
    // Format the prompt using the appropriate template
    promptTemplates[feature],
    // Generate content using the model
    model,
    // Parse the output to a string
    new StringOutputParser(),
  ]);
  
  return chain;
};

// Execute the chain with the user's prompt
export const generateWithLangChain = async (
  feature: keyof typeof promptTemplates, 
  userPrompt: string
): Promise<string> => {
  try {
    const chain = createGenerationChain(feature);
    const result = await chain.invoke({ userPrompt });
    return result;
  } catch (error) {
    console.error("Error in LangChain generation:", error);
    throw error;
  }
};
