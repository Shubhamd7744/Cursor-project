
import React from 'react';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-accent" />
          <h1 className="text-2xl font-bold gradient-text">AI Media Carousel Maker</h1>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium hover:text-accent transition-colors">
            How It Works
          </button>
          <button className="text-sm font-medium hover:text-accent transition-colors">
            Templates
          </button>
          <button className="text-sm font-medium hover:text-accent transition-colors">
            Pricing
          </button>
          <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Sign Up Free
          </button>
        </div>
        <button className="md:hidden text-accent">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
