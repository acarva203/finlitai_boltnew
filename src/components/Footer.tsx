import React from 'react';
import { DollarSign, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <DollarSign className="h-6 w-6 text-primary-500" />
            <span className="ml-2 text-lg font-display font-bold text-gray-900">FinLit AI</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors duration-200">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors duration-200">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors duration-200">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} FinLit AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;