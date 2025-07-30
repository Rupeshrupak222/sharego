import React from 'react';
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">ShareGo</h3>
                <p className="text-green-400 text-sm">Ride Together. Save Together.</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering people to travel smarter, greener, and cheaper by connecting them through shared rides, 
              backed by smart matching and real-time bookings.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-sky-500 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#mobile-app" className="text-gray-300 hover:text-green-400 transition-colors">Mobile App</a></li>
              <li><a href="#premium" className="text-gray-300 hover:text-green-400 transition-colors">Premium</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-green-400 transition-colors">Team</a></li>
              <li><a href="/admin" className="text-gray-300 hover:text-green-400 transition-colors">Admin</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Ride Sharing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Captain Program</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Premium Membership</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Corporate Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Safety Center</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">support@sharego.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">New Delhi, India</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-green-400 text-white placeholder-gray-400"
                />
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 ShareGo. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Legal Notice</a>
            </div>
          </div>
          
          {/* Mission & Vision */}
          <div className="mt-8 grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <h5 className="font-semibold text-green-400 mb-2">Our Mission</h5>
              <p className="text-gray-400">
                Empower people to travel smarter, greener, and cheaper by connecting them through shared rides, 
                backed by smart matching and real-time bookings.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-green-400 mb-2">Our Vision</h5>
              <p className="text-gray-400">
                To build the most trusted and eco-conscious ride-sharing ecosystem in India, 
                combining affordability, safety, and technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;