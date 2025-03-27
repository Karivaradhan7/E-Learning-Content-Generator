# Aptora - AI-Powered E-Learning Platform
---

## 📘 Project Overview

Aptora is an innovative, AI-powered e-learning platform designed to transform the educational experience by leveraging artificial intelligence to generate personalized learning content. The platform offers a range of features including content generation, quiz creation, study notes, flashcards, and an AI learning assistant to support students in their educational journey.

The core mission of Aptora is to make education more adaptive to individual learning styles and needs. Through intelligent content generation, the platform helps students and educators create customized educational materials that align with specific learning objectives.

---

## 🧠 Technologies Used

### Frontend
- **React** – JavaScript library for building UI
- **TypeScript** – Static typing for enhanced code quality
- **React Router** – Page routing/navigation
- **Tailwind CSS** – Utility-first CSS framework
- **shadcn/ui** – Component library based on Radix UI
- **Lucide React** – Clean and modern icon library

### AI Integration
- **Google Gemini API** – Powers the AI features
- **Gemini 1.5 Pro** – Language model for generating learning content

### Document Generation
- **jsPDF** – PDF generation
- **html2canvas** – Capture HTML content for PDF

### State Management
- **React Query** – For efficient data fetching and caching

### Build Tools
- **Vite** – Frontend build tool
- **SWC** – Fast JavaScript/TypeScript compiler

---

## ✨ Key Features

### 1. Content Generator
Generates structured educational content from a topic or prompt.

### 2. Quiz Generator
Builds custom quizzes with multiple question types based on learning goals.

### 3. E-learning Materials
Creates guided learning roadmaps and subject breakdowns.

### 4. AI Notes Generator
Summarizes complex content into clear, concise notes.

### 5. Flashcard Generator
Creates flashcards in Q&A format for easy review.

### 6. AI Learning Assistant
An interactive assistant to answer study-related questions.

### 7. PDF Export
Export all generated content in clean, downloadable PDFs.

---

## 🤖 How AI Integration Works

1. User submits a prompt/request
2. Request sent to Gemini API with a system prompt
3. Gemini generates content specific to the feature
4. Output is rendered and available for PDF download

Each tool uses a custom system prompt to tailor the format and style for educational use.

---

## 📁 Folder Structure
```
aptora/
├── public/                  # Static files
├── src/                     # Source code
│   ├── assets/              # Static assets/images
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # shadcn/ui components
│   │   └── ...              # Custom components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── pages/               # Feature and static pages
│   │   ├── ContentGenerator.tsx
│   │   ├── QuizGenerator.tsx
│   │   ├── NotesGenerator.tsx
│   │   ├── FlashcardGenerator.tsx
│   │   ├── LearningAssistant.tsx
│   │   ├── LearningMaterials.tsx
│   │   └── ...
│   ├── App.tsx              # Root component
│   └── main.tsx             # Entry point
├── index.html               # HTML template
├── vite.config.ts           # Vite config
├── tailwind.config.ts       # Tailwind config
└── tsconfig.json            # TypeScript config
```

---

## 🔐 Environment Variables
Create a `.env` file in the root of the project:
```
VITE_GEMINI_API_KEY=your_gemini_api_key
```
Obtain your Gemini API key from [Google AI Studio](https://makersuite.google.com/).

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps
```bash

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
```

---

## 👨‍💻 Team Members
- Aaron Sonnie – Founder & Backend Developer
- Sona Daison – Founder & Frontend Developer
- Karivaradhan – Founder & TeamLead 
- Thrithwik – Co-Founder & Backend Developer

---

## 📬 Contact
- 🌐 Website: [aptora.com](https://aptora.com)
- 📧 Email: contact@aptora.com
- 🐦 Twitter: [@aptora_ai](https://twitter.com/aptora_ai)
- 🔗 LinkedIn: [Aptora](https://linkedin.com/company/aptora)

---

## 📄 License
This project is licensed under the **MIT License** – see the `LICENSE` file for details.

---

## 🙏 Acknowledgments
- Google Gemini API for AI capabilities
- shadcn/ui for the component library
- Tailwind CSS for fast and responsive styling
- React & TypeScript communities for extensive docs
- All contributors who made this project possible

---

> © 2025 Aptora. All rights reserved.
