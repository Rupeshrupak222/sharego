import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotProps {
  darkMode: boolean;
}

const Chatbot: React.FC<ChatbotProps> = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI assistant powered by Gemini. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateGeminiResponse = async (userMessage: string): Promise<string> => {
    try {
      // Try to use the actual Gemini service if available
      const { getGeminiService } = await import('../services/geminiService');
      const geminiService = getGeminiService();
      
      // Convert messages to conversation history format
      const conversationHistory = messages
        .filter(msg => msg.sender === 'user' || msg.sender === 'bot')
        .map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'model',
          content: msg.text
        }));

      const result = await geminiService.generateResponse(userMessage, conversationHistory);
      
      if (result.success) {
        return result.message;
      } else {
        // Fallback to simulated response if Gemini fails
        return await simulateFallbackResponse(userMessage);
      }
    } catch (error) {
      console.log('Gemini service not available, using fallback');
      // Fallback to simulated response
      return await simulateFallbackResponse(userMessage);
    }
  };

  const simulateFallbackResponse = async (userMessage: string): Promise<string> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    // Simulate different responses based on user input
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
    } else {
      return 'That\'s an interesting question! I\'m here to help with any information about our platform, services, or general inquiries. Could you please provide more details?';
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      const response = await generateGeminiResponse(userMessage.text);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Toggle Button */}
      <button
        onClick={toggleChatbot}
        className={`p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          darkMode 
            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
        aria-label="Toggle chatbot"
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className={`absolute bottom-16 right-0 w-96 h-[500px] rounded-lg shadow-2xl border ${
          darkMode 
            ? 'bg-gray-800 border-gray-600' 
            : 'bg-white border-gray-200'
        }`}>
          {/* Header */}
          <div className={`p-4 border-b ${
            darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-200 bg-gray-50'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot size={20} className="text-blue-500" />
                <span className={`font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  AI Assistant
                </span>
              </div>
              <button
                onClick={toggleChatbot}
                className={`p-1 rounded hover:bg-opacity-20 ${
                  darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                }`}
              >
                <X size={16} className={darkMode ? 'text-gray-300' : 'text-gray-600'} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 h-[380px] overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`p-2 rounded-full ${
                    message.sender === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : (darkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-800')
                  }`}>
                    {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`px-4 py-2 rounded-lg max-w-full ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : (darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800')
                  }`}>
                    <p className="text-sm whitespace-pre-wrap break-words">
                      {message.text}
                    </p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' 
                        ? 'text-blue-100' 
                        : (darkMode ? 'text-gray-400' : 'text-gray-500')
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className={`p-2 rounded-full ${
                    darkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-800'
                  }`}>
                    <Bot size={16} />
                  </div>
                  <div className={`px-4 py-2 rounded-lg ${
                    darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
                  }`}>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className={`p-4 border-t ${
            darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-200 bg-gray-50'
          }`}>
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className={`flex-1 px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
                }`}
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className={`p-2 rounded-lg transition-colors ${
                  inputText.trim() && !isTyping
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : (darkMode ? 'bg-gray-600 text-gray-400' : 'bg-gray-200 text-gray-400')
                }`}
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot; 