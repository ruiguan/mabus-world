import React from 'react';

const Favorites = () => {
  const favorites = [
    { icon: "🐟", label: "Tuna", description: "Fresh fish is life" },
    { icon: "🧶", label: "Yarn Ball", description: "Best toy ever invented" },
    { icon: "🪟", label: "Window Perch", description: "Bird watching headquarters" },
    { icon: "💻", label: "Rui's Laptop", description: "Perfect for naps and work interruption" },
    { icon: "☀️", label: "Sunbeams", description: "Natural heating system" },
    { icon: "🛋️", label: "Comfy Couch", description: "Napping paradise" },
    { icon: "🎯", label: "Laser Pointer", description: "The ultimate chase game" },
    { icon: "📦", label: "Cardboard Boxes", description: "If I fits, I sits" },
    { icon: "🌿", label: "Cat Grass", description: "Healthy snack time" },
    { icon: "🪞", label: "Mirrors", description: "Selfie time with my reflection" },
    { icon: "🎵", label: "Purring", description: "My signature sound" },
    { icon: "🕐", label: "3 AM", description: "Perfect time for zoomies" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playful font-bold text-center text-purple-800 mb-12">
          ⭐ Mabu's Favorites
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((item, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-magazine font-bold text-purple-800 mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Special Highlight */}
          <div className="mt-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-playful font-bold text-purple-800 mb-4">
              🏆 Ultimate Favorite
            </h3>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-6xl animate-bounce-slow">💕</span>
              <div className="text-center">
                <h4 className="text-xl font-magazine font-bold text-pink-600">
                  Rui's Attention
                </h4>
                <p className="text-gray-700">
                  Nothing beats quality time with my human!
                </p>
              </div>
              <span className="text-6xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>💕</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
