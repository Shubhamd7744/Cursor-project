
import React, { useState } from 'react';

interface TextInputProps {
  onSubmit: (text: string) => void;
  isLoading: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ onSubmit, isLoading }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6 animate-fadeIn">
      <h2 className="text-xl font-semibold mb-4">Paste your content</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full h-64 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
          placeholder="Paste your text content here. Our AI will analyze it and create beautiful carousel slides..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500">
            {text.length > 0 ? `${text.length} characters` : 'Start by pasting your content'}
          </div>
          <button
            type="submit"
            disabled={!text.trim() || isLoading}
            className={`px-6 py-2 rounded-md text-white font-medium transition-all ${
              !text.trim() || isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-primary hover:bg-primary/90 animate-pulse-shadow'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </div>
            ) : (
              'Generate Carousel'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TextInput;
