import React, { useState } from 'react';
import { Crown, Check, Star, Zap, Shield, Gift } from 'lucide-react';

const PremiumSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');

  const premiumFeatures = [
    { icon: Zap, title: 'Priority Booking', description: 'Get first preference in ride matching' },
    { icon: Gift, title: 'Exclusive Discounts', description: 'Up to 30% off on all rides' },
    { icon: Crown, title: 'Premium Badge', description: 'Stand out with your premium status' },
    { icon: Shield, title: 'Enhanced Safety', description: 'Premium safety features and support' },
    { icon: Star, title: 'VIP Support', description: '24/7 priority customer support' },
    { icon: Check, title: 'No Surge Pricing', description: 'Fixed rates even during peak hours' }
  ];

  return (
    <section id="premium" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              ShareGo Premium
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Unlock exclusive features and enjoy premium benefits. 
            Join thousands of satisfied premium members saving more and riding better.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg">
            <div className="flex">
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedPlan === 'monthly'
                    ? 'bg-yellow-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setSelectedPlan('yearly')}
                className={`px-6 py-3 rounded-full font-semibold transition-all relative ${
                  selectedPlan === 'yearly'
                    ? 'bg-yellow-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pricing Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-bl-2xl font-semibold">
              Most Popular
            </div>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Premium Membership</h3>
              
              <div className="mb-4">
                <span className="text-5xl font-bold text-gray-900 dark:text-white">
                  ₹{selectedPlan === 'monthly' ? '199' : '1,599'}
                </span>
                <span className="text-gray-600 dark:text-gray-300 text-lg">
                  /{selectedPlan === 'monthly' ? 'month' : 'year'}
                </span>
              </div>
              
              {selectedPlan === 'yearly' && (
                <div className="text-green-600 dark:text-green-400 font-semibold mb-4">
                  Save ₹789 annually!
                </div>
              )}
              
              <p className="text-gray-600 dark:text-gray-300">
                Everything you need for the ultimate ride-sharing experience
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {['Priority Booking', 'Up to 30% Discounts', 'Premium Badge', 'VIP Support', 'No Surge Pricing', 'Enhanced Safety'].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Upgrade to Premium
            </button>
            
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-4">
              Cancel anytime. No hidden fees.
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Premium Features
            </h3>
            
            <div className="grid gap-6">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-3">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
              <div className="flex items-center space-x-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current text-yellow-300" />
                ))}
              </div>
              <p className="mb-4 italic">
                "ShareGo Premium has saved me over ₹3,000 this month alone. The priority booking and discounts are amazing!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="font-bold">A</span>
                </div>
                <div>
                  <div className="font-semibold">Ankit Sharma</div>
                  <div className="text-green-100 text-sm">Premium Member since 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">2,500+</div>
              <div className="text-gray-600 dark:text-gray-300">Premium Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">₹50L+</div>
              <div className="text-gray-600 dark:text-gray-300">Total Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">4.9/5</div>
              <div className="text-gray-600 dark:text-gray-300">Member Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;