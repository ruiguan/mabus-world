import React, { useState, useRef, useEffect, useCallback } from 'react';

const Interactive = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const yarnBallRef = useRef(null);

  const playMeow = () => {
    // Create audio context for meow sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Meow-like sound
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.3);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
    
    // Visual feedback
    const button = document.getElementById('meow-button');
    if (button) {
      button.classList.add('animate-ping');
      setTimeout(() => button.classList.remove('animate-ping'), 1000);
    }
  };

  const handleMouseDown = (e) => {
    if (yarnBallRef.current) {
      const rect = yarnBallRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  }, [isDragging, dragOffset]);

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove]);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playful font-bold text-center text-purple-800 mb-12">
          🎮 Interactive Zone
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Meow Button */}
            <div className="text-center">
              <h3 className="text-2xl font-magazine font-bold text-purple-800 mb-6">
                🔊 Meow Button
              </h3>
              <button
                id="meow-button"
                onClick={playMeow}
                className="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full text-white text-4xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse-slow"
              >
                🐱
              </button>
              <p className="mt-4 text-gray-600 font-magazine">
                Click to hear Mabu's signature meow!
              </p>
            </div>
            
            {/* Draggable Yarn Ball */}
            <div className="text-center">
              <h3 className="text-2xl font-magazine font-bold text-purple-800 mb-6">
                🧶 Draggable Yarn Ball
              </h3>
              <div className="relative h-64 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl border-2 border-dashed border-purple-300">
                <div
                  ref={yarnBallRef}
                  className={`yarn-ball absolute w-20 h-20 text-6xl cursor-grab select-none ${
                    isDragging ? 'cursor-grabbing' : ''
                  }`}
                  style={{
                    left: position.x,
                    top: position.y,
                    transform: isDragging ? 'scale(1.1)' : 'scale(1)',
                    zIndex: isDragging ? 1000 : 1
                  }}
                  onMouseDown={handleMouseDown}
                >
                  🧶
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <p className="text-sm">Drag the yarn ball around!</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 font-magazine">
                Just like Mabu's favorite toy!
              </p>
            </div>
          </div>
          
          {/* Easter Egg Instructions */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-playful font-bold text-pink-600 mb-4">
              🥚 Easter Egg Alert!
            </h3>
            <p className="text-gray-700 mb-4">
              Hover over Mabu's photo in the hero section to see a special surprise!
            </p>
            <div className="flex justify-center space-x-4 text-2xl">
              <span className="animate-bounce-slow">😸</span>
              <span className="animate-bounce-slow" style={{ animationDelay: '0.3s' }}>💕</span>
              <span className="animate-bounce-slow" style={{ animationDelay: '0.6s' }}>✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interactive;
