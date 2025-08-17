import React, { useState } from 'react';

const Hero = () => {
  const [showPurr, setShowPurr] = useState(false);

  const handleImageHover = () => {
    setShowPurr(true);
    setTimeout(() => setShowPurr(false), 2000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 paw-cursor">
      <div className="relative text-center">
        {/* Portrait Container */}
        <div className="relative mb-8">
          <div 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-pink-300 shadow-2xl mx-auto float-animation"
            onMouseEnter={handleImageHover}
          >
            <img 
              src="mabu-profile.jpg"
              alt="Mabu - CEO of Naps & Snacks" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Purr Bubble */}
          {showPurr && (
            <div className="purr-bubble show absolute -top-4 left-1/2 transform -translate-x-1/2">
              purr... 😸
            </div>
          )}
        </div>

        {/* Tagline */}
        <h1 className="text-4xl md:text-6xl font-playful font-bold text-purple-800 mb-4">
          Mabu's World
        </h1>
        <p className="text-xl md:text-2xl font-magazine text-pink-600 mb-8 animate-pulse-slow">
          CEO of Naps & Snacks
        </p>
        
        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4 text-4xl">
          <span className="animate-bounce-slow">🐾</span>
          <span className="animate-bounce-slow" style={{ animationDelay: '0.5s' }}>💤</span>
          <span className="animate-bounce-slow" style={{ animationDelay: '1s' }}>🍣</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
