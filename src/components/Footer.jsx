import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4 animate-bounce-slow">🐾</div>
          <h3 className="text-2xl font-playful font-bold mb-2">
            Thanks for visiting Mabu's World!
          </h3>
          <p className="text-lg text-purple-100">
            Made with ❤️ by Rui & Mabu
          </p>
        </div>
        
        <div className="border-t border-purple-600 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-purple-200">
            <div>
              <h4 className="font-bold text-white mb-3">🐱 Mabu's Mission</h4>
              <p>Spreading joy, demanding treats, and ensuring maximum comfort at all times.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">🎯 Daily Goals</h4>
              <p>Strategic napping, laser hunting, and providing emotional support through purring.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">💕 Contact</h4>
              <p>Available for cuddles, purring therapy, and keyboard supervision 24/7.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-purple-600">
          <div className="flex justify-center space-x-6 text-2xl">
            <span className="hover:scale-110 transition-transform duration-300 cursor-pointer">😸</span>
            <span className="hover:scale-110 transition-transform duration-300 cursor-pointer">💤</span>
            <span className="hover:scale-110 transition-transform duration-300 cursor-pointer">🧶</span>
            <span className="hover:scale-110 transition-transform duration-300 cursor-pointer">🎯</span>
            <span className="hover:scale-110 transition-transform duration-300 cursor-pointer">☀️</span>
          </div>
          <p className="text-sm text-purple-300 mt-4">
            © 2025 Mabu's World - Where every day is a purr-fect adventure!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
