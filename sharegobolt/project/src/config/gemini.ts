// Gemini AI Configuration
// To use the actual Gemini AI, you need to:
// 1. Get an API key from Google AI Studio: https://makersuite.google.com/app/apikey
// 2. Install the package: npm install @google/generative-ai
// 3. Set your API key in the environment variable or replace the placeholder below

export const GEMINI_CONFIG = {
  // Replace this with your actual Gemini API key
  API_KEY: process.env.REACT_APP_GEMINI_API_KEY || 'your-gemini-api-key-here',
  
  // Model to use (default is gemini-pro)
  MODEL: 'gemini-pro',
  
  // Configuration for the chat
  GENERATION_CONFIG: {
    maxOutputTokens: 1000,
    temperature: 0.7,
    topP: 0.8,
    topK: 40,
  },
  
  // Safety settings
  SAFETY_SETTINGS: [
    {
      category: 'HARM_CATEGORY_HARASSMENT',
      threshold: 'BLOCK_MEDIUM_AND_ABOVE',
    },
    {
      category: 'HARM_CATEGORY_HATE_SPEECH',
      threshold: 'BLOCK_MEDIUM_AND_ABOVE',
    },
    {
      category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
      threshold: 'BLOCK_MEDIUM_AND_ABOVE',
    },
    {
      category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
      threshold: 'BLOCK_MEDIUM_AND_ABOVE',
    },
  ],
};

// Instructions for setting up Gemini AI:
export const SETUP_INSTRUCTIONS = `
To enable the actual Gemini AI chatbot:

1. Get your API key:
   - Go to https://makersuite.google.com/app/apikey
   - Create a new API key
   - Copy the API key

2. Install the required package:
   npm install @google/generative-ai

3. Set up your API key:
   Option A: Create a .env file in the project root:
   REACT_APP_GEMINI_API_KEY=your-actual-api-key-here
   
   Option B: Replace the placeholder in src/config/gemini.ts:
   API_KEY: 'your-actual-api-key-here'

4. Initialize the service in your app:
   import { initializeGeminiService } from './services/geminiService';
   initializeGeminiService(GEMINI_CONFIG.API_KEY, GEMINI_CONFIG.MODEL);

Note: The chatbot will work with fallback responses even without the API key.
`;

export default GEMINI_CONFIG; 