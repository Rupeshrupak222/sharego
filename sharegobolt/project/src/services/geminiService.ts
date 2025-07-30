// Gemini AI Service
// Note: You'll need to install @google/generative-ai package
// npm install @google/generative-ai

interface GeminiConfig {
  apiKey: string;
  model?: string;
}

class GeminiService {
  private apiKey: string;
  private model: string;
  private isInitialized: boolean = false;

  constructor(config: GeminiConfig) {
    this.apiKey = config.apiKey;
    this.model = config.model || 'gemini-pro';
  }

  async initialize() {
    if (this.isInitialized) return;

    try {
      // Dynamic import to avoid issues if package is not installed
      const { GoogleGenerativeAI } = await import('@google/generative-ai');
      
      if (!this.apiKey) {
        throw new Error('Gemini API key is required');
      }

      const genAI = new GoogleGenerativeAI(this.apiKey);
      this.model = genAI.getGenerativeModel({ model: this.model });
      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize Gemini AI:', error);
      throw error;
    }
  }

  async generateResponse(userMessage: string, conversationHistory: Array<{role: string, content: string}> = []) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      // Prepare the conversation history
      const history = conversationHistory.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.content }]
      }));

      // Add the current user message
      const currentMessage = {
        role: 'user',
        parts: [{ text: userMessage }]
      };

      // Create chat session
      const chat = this.model.startChat({
        history: history,
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.7,
        },
      });

      // Send message and get response
      const result = await chat.sendMessage(userMessage);
      const response = await result.response;
      const text = response.text();

      return {
        success: true,
        message: text,
        error: null
      };

    } catch (error) {
      console.error('Error generating Gemini response:', error);
      return {
        success: false,
        message: 'Sorry, I encountered an error. Please try again.',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Fallback method for when Gemini is not available
  async generateFallbackResponse(userMessage: string): Promise<string> {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return 'Hello! How can I assist you today?';
    } else if (lowerMessage.includes('help')) {
      return 'I\'m here to help! You can ask me about our services, pricing, or any general questions. What would you like to know?';
    } else if (lowerMessage.includes('pricing') || lowerMessage.includes('cost')) {
      return 'We offer various pricing plans starting from $9.99/month. Would you like me to provide more details about our premium features?';
    } else if (lowerMessage.includes('feature') || lowerMessage.includes('service')) {
      return 'Our platform offers ride-sharing, delivery services, and premium features for both users and captains. What specific service are you interested in?';
    } else if (lowerMessage.includes('thank')) {
      return 'You\'re welcome! Is there anything else I can help you with?';
    } else if (lowerMessage.includes('gemini') || lowerMessage.includes('ai')) {
      return 'I\'m powered by Google\'s Gemini AI model, designed to provide helpful and accurate responses. How can I assist you today?';
    } else {
      return 'That\'s an interesting question! I\'m here to help with any information about our platform, services, or general inquiries. Could you please provide more details?';
    }
  }
}

// Create a singleton instance
let geminiServiceInstance: GeminiService | null = null;

export const initializeGeminiService = (apiKey: string, model?: string) => {
  if (!geminiServiceInstance) {
    geminiServiceInstance = new GeminiService({ apiKey, model });
  }
  return geminiServiceInstance;
};

export const getGeminiService = () => {
  if (!geminiServiceInstance) {
    throw new Error('Gemini service not initialized. Call initializeGeminiService first.');
  }
  return geminiServiceInstance;
};

export default GeminiService; 