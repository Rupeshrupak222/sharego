import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MobileAppSection from './components/MobileAppSection';
import PremiumSection from './components/PremiumSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import AdminPanel from './components/AdminPanel';
import CaptainPanel from './components/CaptainPanel';
import Chatbot from './components/Chatbot';
import { User, UserType } from './types/User';
import { initializeGeminiService } from './services/geminiService';
import { GEMINI_CONFIG } from './config/gemini';

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');
  const [userType, setUserType] = useState<UserType>('user');
  const [currentView, setCurrentView] = useState<'home' | 'admin' | 'captain'>('home');
  const [darkMode, setDarkMode] = useState(false);

  // Initialize Gemini service
  React.useEffect(() => {
    try {
      initializeGeminiService(GEMINI_CONFIG.API_KEY, GEMINI_CONFIG.MODEL);
    } catch (error) {
      console.log('Gemini service initialization failed, using fallback mode');
    }
  }, []);

  const handleLogin = (email: string, password: string, type: UserType) => {
    // Simulate login - in real app, this would be an API call
    const user: User = {
      id: Date.now().toString(),
      email,
      name: email.split('@')[0],
      type,
      isPremium: false,
      isApproved: type === 'captain' ? false : true
    };
    setCurrentUser(user);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('home');
  };

  const openAuth = (type: 'login' | 'signup', userType: UserType) => {
    setAuthType(type);
    setUserType(userType);
    setShowAuthModal(true);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (currentView === 'admin' && currentUser?.type === 'admin') {
    return (
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <AdminPanel 
            currentUser={currentUser} 
            onLogout={handleLogout}
            onBackToHome={() => setCurrentView('home')}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </div>
      </div>
    );
  }

  if (currentView === 'captain' && currentUser?.type === 'captain') {
    return (
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <CaptainPanel 
            currentUser={currentUser} 
            onLogout={handleLogout}
            onBackToHome={() => setCurrentView('home')}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header 
          currentUser={currentUser}
          onLogin={(type) => openAuth('login', type)}
          onLogout={handleLogout}
          onViewChange={setCurrentView}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        
        <main>
          <HeroSection onGetStarted={() => openAuth('signup', 'user')} />
          <MobileAppSection />
          <PremiumSection />
          <TeamSection />
        </main>
        
        <Footer />
        
        {showAuthModal && (
          <AuthModal
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            type={authType}
            userType={userType}
            onLogin={handleLogin}
            onSwitchType={(type) => setAuthType(type)}
          />
        )}
        
        <Chatbot darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;