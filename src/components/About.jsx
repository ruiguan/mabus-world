import React from 'react';

const About = () => {
  const stats = [
    { label: "Age", value: "3 years", icon: "🎂" },
    { label: "Breed", value: "Domestic Shorthair", icon: "🐱" },
    { label: "Favorite Toy", value: "Red Laser Dot", icon: "🔴" },
    { label: "Hours Slept/Day", value: "18-20", icon: "💤" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playful font-bold text-center text-purple-800 mb-12">
          🐱 About Mabu
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Circular Photo */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-purple-300 shadow-2xl">
                <img 
                  src="%PUBLIC_URL%/mabu-about.jpg" 
                  alt="Mabu Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Bio and Stats */}
            <div className="flex-1 text-center lg:text-left">
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h3 className="text-2xl font-magazine font-bold text-purple-800 mb-4">
                  The Purr-sonality
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Hi there! I'm Mabu, the reigning queen of this household. I specialize in strategic napping, 
                  laser pointer hunting, and providing emotional support through purring therapy sessions. 
                  When I'm not supervising Rui's work (by sitting on his keyboard), you can find me 
                  perfecting my sunbeam meditation techniques or conducting neighborhood surveillance from my window perch.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My mission in life is simple: spread joy, demand treats, and ensure maximum comfort at all times. 
                  I'm also an expert at finding the warmest spots in the house and claiming them as my own.
                </p>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                      {stat.label}
                    </div>
                    <div className="text-lg font-bold text-gray-800">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Fun Facts */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-playful font-bold text-center text-pink-600 mb-6">
              🎯 Fun Facts About Mabu
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🎭</span>
                <span className="text-gray-700">Professional attention seeker</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏆</span>
                <span className="text-gray-700">Olympic-level napper</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🎨</span>
                <span className="text-gray-700">Creative keyboard artist</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🔍</span>
                <span className="text-gray-700">Expert bug inspector</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
