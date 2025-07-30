import React from 'react';
import { Download, UserPlus, Play, Star, Users, Shield } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section id="home" className="bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 lg:py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-medium">India's Trusted Ride Sharing Platform</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Ride Together.
                <span className="text-green-600 dark:text-green-400 block">Save Together.</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Connect with fellow travelers, share rides, reduce costs, and contribute to a greener environment. 
                Join thousands of smart commuters already saving money with ShareGo.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-green-600 dark:text-green-400">10K+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-green-600 dark:text-green-400">50K+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Rides Shared</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-green-600 dark:text-green-400">₹2M+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Money Saved</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetStarted}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Users className="w-6 h-6" />
                <span>Start Sharing Rides</span>
              </button>
              
              <button className="border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <UserPlus className="w-6 h-6" />
                <span>Become a Captain</span>
              </button>
            </div>

            {/* App Download */}
            <div className="pt-8">
              <p className="text-gray-600 dark:text-gray-400 mb-4">Download our mobile app:</p>
              <div className="flex space-x-4">
                <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </button>
                
                <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-r from-green-400 to-green-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">Your Next Ride</h3>
                  <Shield className="w-6 h-6 text-green-500" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">Pickup: Connaught Place</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">Drop: Gurgaon Cyber City</span>
                  </div>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">You Save:</span>
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">₹250</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">By sharing with 2 others</p>
                </div>
                
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Book Now
                </button>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg animate-bounce">
              <Star className="w-6 h-6 text-white fill-current" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-blue-500 rounded-full p-3 shadow-lg animate-pulse">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;