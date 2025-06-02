import React from 'react';
import { Shield } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-indigo-600" />
            <h1 className="text-xl font-bold text-gray-900">ContractShield</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              How it Works
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              About
            </a>
          </nav>
          <div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};