import React, { useState } from 'react';
import { Smartphone, QrCode, Download, Star, ArrowRight } from 'lucide-react';

const MobileAppSection: React.FC = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <section id="mobile-app" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mobile App Coming Soon
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get ready for the ultimate ride-sharing experience on your mobile device. 
            Pre-register now to be the first to know when we launch!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* App Preview */}
          <div className="relative">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 max-w-sm mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-gray-900">ShareGo</span>
                  </div>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Quick Booking</h3>
                    <p className="text-gray-600 text-sm">Book rides in seconds with our intuitive interface</p>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Real-time Tracking</h3>
                    <p className="text-gray-600 text-sm">Track your ride and share your location with family</p>
                  </div>
                  
                  <div className="bg-green-100 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">QR Code Booking</h3>
                    <p className="text-green-600 text-sm">Scan QR codes for instant ride booking</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coming Soon Badge */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
              Coming Soon!
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900/20 rounded-lg p-3">
                  <QrCode className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">QR Code Booking</h3>
                  <p className="text-gray-600 dark:text-gray-300">Scan QR codes at bus stops, metro stations, and popular locations for instant ride booking without typing addresses.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/20 rounded-lg p-3">
                  <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Smart Matching</h3>
                  <p className="text-gray-600 dark:text-gray-300">Our AI-powered system matches you with the best ride options based on your preferences and route optimization.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900/20 rounded-lg p-3">
                  <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Premium Features</h3>
                  <p className="text-gray-600 dark:text-gray-300">Exclusive features for premium members including priority booking, discounts, and VIP support.</p>
                </div>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Try QR Code Booking (Demo)
                </h3>
                
                {!showQR ? (
                  <button
                    onClick={() => setShowQR(true)}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 mx-auto"
                  >
                    <QrCode className="w-5 h-5" />
                    <span>Show Demo QR Code</span>
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-gray-100 dark:bg-gray-600 w-32 h-32 mx-auto rounded-lg flex items-center justify-center">
                      <QrCode className="w-16 h-16 text-gray-400" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Scan this QR code with the ShareGo app to book a ride instantly
                    </p>
                    <button
                      onClick={() => setShowQR(false)}
                      className="text-green-600 dark:text-green-400 hover:underline text-sm"
                    >
                      Hide QR Code
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 font-medium">Be the first to download:</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-3 justify-center opacity-50 cursor-not-allowed">
                  <Download className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Coming Soon to</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </button>
                
                <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-3 justify-center opacity-50 cursor-not-allowed">
                  <Download className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Coming Soon to</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Notification Signup */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Get Notified When We Launch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Join 5,000+ users waiting for the app launch
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;