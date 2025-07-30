# Gemini AI Chatbot Integration

This project now includes a Gemini AI-powered chatbot that provides intelligent responses to user queries.

## Features

- 🤖 **AI-Powered Responses**: Uses Google's Gemini AI model for intelligent conversations
- 💬 **Real-time Chat**: Interactive chat interface with typing indicators
- 🌙 **Dark Mode Support**: Fully compatible with the app's dark mode
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🔄 **Fallback System**: Graceful fallback to simulated responses if Gemini is unavailable
- 🎨 **Modern UI**: Beautiful chat interface with smooth animations

## Setup Instructions

### 1. Get Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

### 2. Install Required Package

```bash
npm install @google/generative-ai
```

### 3. Configure Your API Key

**Option A: Environment Variable (Recommended)**
1. Create a `.env` file in the project root
2. Add your API key:
```
REACT_APP_GEMINI_API_KEY=your-actual-api-key-here
```

**Option B: Direct Configuration**
1. Open `src/config/gemini.ts`
2. Replace the placeholder with your API key:
```typescript
API_KEY: 'your-actual-api-key-here',
```

### 4. Initialize the Service

Add this to your main App component or where you initialize your app:

```typescript
import { initializeGeminiService } from './services/geminiService';
import { GEMINI_CONFIG } from './config/gemini';

// Initialize Gemini service
initializeGeminiService(GEMINI_CONFIG.API_KEY, GEMINI_CONFIG.MODEL);
```

## Usage

The chatbot is automatically available on all pages of your application. Users can:

1. **Open the chat**: Click the bot icon in the bottom-right corner
2. **Send messages**: Type and press Enter or click the send button
3. **View history**: All conversation history is maintained during the session
4. **Close the chat**: Click the X button to minimize

## Features

### Smart Responses
The chatbot can handle various types of queries:
- General questions about your platform
- Pricing and feature inquiries
- Service information
- General conversation

### Conversation Memory
- Maintains context throughout the conversation
- Remembers previous messages in the session
- Provides contextual responses

### Error Handling
- Graceful fallback if Gemini API is unavailable
- Network error handling
- User-friendly error messages

### UI Features
- Typing indicators
- Message timestamps
- Smooth animations
- Responsive design
- Dark mode compatibility

## Configuration Options

You can customize the chatbot behavior in `src/config/gemini.ts`:

```typescript
export const GEMINI_CONFIG = {
  API_KEY: 'your-api-key',
  MODEL: 'gemini-pro', // or 'gemini-pro-vision' for image support
  GENERATION_CONFIG: {
    maxOutputTokens: 1000,
    temperature: 0.7, // 0.0 = very focused, 1.0 = very creative
    topP: 0.8,
    topK: 40,
  },
  // Safety settings for content filtering
  SAFETY_SETTINGS: [...]
};
```

## Troubleshooting

### Common Issues

1. **"Cannot find module '@google/generative-ai'"**
   - Run `npm install @google/generative-ai`

2. **"API key not found"**
   - Make sure your API key is properly set in the configuration
   - Check that the environment variable is named correctly

3. **Chatbot not responding**
   - Check the browser console for error messages
   - Verify your API key is valid
   - Ensure you have internet connectivity

4. **Fallback responses only**
   - This is normal if the Gemini API is not configured
   - The chatbot will still work with simulated responses

### Testing

To test the chatbot:
1. Start your development server: `npm run dev`
2. Open the application in your browser
3. Look for the bot icon in the bottom-right corner
4. Click to open the chat and start a conversation

## Security Notes

- Never commit your API key to version control
- Use environment variables for production deployments
- Consider implementing rate limiting for production use
- Monitor API usage to stay within Google's limits

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify your API key is correct
3. Ensure the `@google/generative-ai` package is installed
4. Check your internet connection

The chatbot will work with fallback responses even without proper Gemini configuration, so your application will always have a functional chat interface. 