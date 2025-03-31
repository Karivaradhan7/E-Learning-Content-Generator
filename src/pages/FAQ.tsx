
import React from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { FileText, ClipboardCheck, BookText, Lightbulb, Layers, HelpCircle } from "lucide-react";

interface FAQItem {
  feature: string;
  icon: React.ElementType;
  description: string;
  instructions: string[];
  tips: string[];
  notes: string;
}

const faqData: FAQItem[] = [
  {
    feature: "Content Generator",
    icon: FileText,
    description: "Generate tailored learning content based on your curriculum and learning objectives.",
    instructions: [
      "Enter a specific topic, subject, or learning objective in the text field",
      "Add any additional parameters like grade level, complexity, or format",
      "Click 'Generate Content' to create your custom learning material",
      "Review the generated content and use the 'Download as PDF' option if needed"
    ],
    tips: [
      "Be specific about your requirements (e.g., 'lesson plan on photosynthesis for 9th grade')",
      "Mention the desired length or depth of content",
      "Include any specific teaching methodology if applicable"
    ],
    notes: "The more detailed your request, the more tailored the content will be to your needs."
  },
  {
    feature: "Quiz Generator",
    icon: ClipboardCheck,
    description: "Create customized quizzes with varying difficulty levels to test your knowledge.",
    instructions: [
      "Specify the subject and topic for your quiz",
      "Choose the number of questions and difficulty level",
      "Select question types (multiple choice, true/false, short answer, etc.)",
      "Click 'Generate Quiz' to create your custom assessment",
      "Use the 'Download as PDF' option to save your quiz"
    ],
    tips: [
      "Include the target audience (e.g., 'middle school students', 'college freshmen')",
      "Specify if you want answers included in the output",
      "Mix question types for more comprehensive assessment"
    ],
    notes: "For timed quizzes, mention the suggested time limit in your request."
  },
  {
    feature: "E-learning Materials",
    icon: BookText,
    description: "Access a comprehensive library of learning materials designed for effective learning.",
    instructions: [
      "Enter the subject area and specific topic you need materials for",
      "Specify the format (e.g., 'learning roadmap', 'interactive guide')",
      "Include your learning goals or objectives",
      "Click 'Generate Materials' to create your resources",
      "Review and download your customized materials"
    ],
    tips: [
      "Request materials that complement your learning style (visual, auditory, etc.)",
      "Mention if you need beginner, intermediate, or advanced content",
      "Ask for specific frameworks or methodologies if relevant"
    ],
    notes: "E-learning materials work best when focused on specific skills or knowledge areas rather than broad subjects."
  },
  {
    feature: "AI Notes Generator",
    icon: Lightbulb,
    description: "Transform complex topics into concise, easy-to-understand notes with AI assistance.",
    instructions: [
      "Paste text you want to convert into notes, or describe the topic",
      "Specify the desired format (bullet points, Cornell notes, mind map, etc.)",
      "Indicate your knowledge level on the subject",
      "Click 'Generate Notes' to create your summarized content",
      "Save or download your notes"
    ],
    tips: [
      "For text summarization, paste complete paragraphs for best results",
      "Request key terminology to be highlighted or defined",
      "Ask for visual organization like headings, subheadings, and bullet points"
    ],
    notes: "The AI Notes Generator works especially well for distilling textbook chapters or lecture transcripts."
  },
  {
    feature: "Flashcard Generator",
    icon: Layers,
    description: "Create interactive flashcards to boost memorization and enhance learning retention.",
    instructions: [
      "Enter the subject and topic for your flashcards",
      "Specify the number of flashcards needed",
      "Indicate if you want simple term/definition cards or more complex question/answer formats",
      "Click 'Generate Flashcards' to create your study aids",
      "Download your flashcards as a PDF for printing or digital use"
    ],
    tips: [
      "For language learning, specify if you want pronunciation guides included",
      "Ask for image suggestions to make visual flashcards",
      "Request mnemonic devices for difficult-to-remember information"
    ],
    notes: "Flashcards are most effective when focused on discrete pieces of information rather than complex concepts."
  },
  {
    feature: "AI Learning Assistant",
    icon: HelpCircle,
    description: "Get personalized help and answers to questions as you progress through your learning journey.",
    instructions: [
      "Type your question directly in the input field",
      "Be specific about what you're trying to understand",
      "Provide context about your current knowledge level if relevant",
      "Click 'Ask Assistant' to receive your personalized answer",
      "Follow up with additional questions as needed"
    ],
    tips: [
      "Ask 'why' and 'how' questions for deeper understanding",
      "Request simplified explanations of complex topics",
      "Ask for real-world examples or applications of abstract concepts"
    ],
    notes: "The AI Learning Assistant can provide the most helpful responses when your questions are clear and focused."
  }
];

const FAQ = () => {
  return (
    <div className="container px-4 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Frequently Asked Questions</h1>
      <p className="text-muted-foreground mb-8">Learn how to use Aptora's AI-powered learning tools</p>
      
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-1">
            <AccordionTrigger className="hover:no-underline px-4 py-3 group">
              <div className="flex items-center gap-3">
                <span className="bg-primary/10 p-2 rounded-md group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="font-medium text-lg">{item.feature}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pt-2 pb-4">
              <div className="space-y-4">
                <p className="text-muted-foreground">{item.description}</p>
                
                <div>
                  <h3 className="font-medium mb-2">How to use:</h3>
                  <ol className="list-decimal list-inside space-y-1 pl-2">
                    {item.instructions.map((instruction, i) => (
                      <li key={i} className="text-sm">{instruction}</li>
                    ))}
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Tips for best results:</h3>
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    {item.tips.map((tip, i) => (
                      <li key={i} className="text-sm">{tip}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-muted/50 p-3 rounded-md">
                  <p className="text-sm italic">{item.notes}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
