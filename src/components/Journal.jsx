import React from 'react';

const Journal = () => {
  const journalEntries = [
    {
      id: 1,
      date: "February 15, 2025",
      time: "3:47 AM",
      mood: "😸",
      title: "The Great Keyboard Occupation",
      content: "Today I achieved my greatest victory yet! I successfully prevented Rui from working by sitting on his keyboard for 2 hours straight. He tried everything - treats, toys, even the laser pointer. But I remained steadfast in my mission. Eventually, he gave up and went to make coffee. Mission accomplished! 🎯",
      tags: ["#WorkInterruption", "#KeyboardWarrior", "#Victory"]
    },
    {
      id: 2,
      date: "February 14, 2025",
      time: "2:30 PM",
      mood: "😴",
      title: "Sunbeam Meditation Session",
      content: "Found the perfect sunbeam spot on the living room floor. The angle was just right, and the warmth was absolutely purr-fect. I meditated there for 3 hours straight, achieving maximum relaxation levels. Rui tried to take a photo but I gave him the 'disturb me and face consequences' look. He understood. ☀️",
      tags: ["#SunbeamLife", "#Meditation", "#Relaxation"]
    },
    {
      id: 3,
      date: "February 13, 2025",
      time: "11:20 PM",
      mood: "🎭",
      title: "The Red Dot Conspiracy",
      content: "I'm convinced the red dot is alive and taunting me. It appears randomly, stays for exactly 2.3 seconds, then disappears. I've tried every hunting technique in my arsenal - stealth mode, speed mode, even the dramatic pounce. But it always escapes! I suspect Rui is behind this. I'll get my revenge by knocking things off the shelf at 3 AM. 🔴",
      tags: ["#RedDotHunt", "#Conspiracy", "#Revenge"]
    },
    {
      id: 4,
      date: "February 12, 2025",
      time: "6:15 AM",
      mood: "🕵️",
      title: "Neighborhood Surveillance Report",
      content: "Conducted my morning patrol from the window perch. Spotted 3 suspicious pigeons, 1 squirrel (potential threat level: medium), and 2 humans walking dogs (threat level: high - they might try to pet me). I maintained my position for 45 minutes, ensuring the neighborhood remained safe. The things I do for this community! 🪟",
      tags: ["#NeighborhoodWatch", "#PigeonPatrol", "#PublicService"]
    },
    {
      id: 5,
      date: "February 11, 2025",
      time: "8:30 PM",
      mood: "🎵",
      title: "Purring Therapy Session",
      content: "Rui was having a stressful day, so I provided my professional purring therapy services. I sat on his lap and purred at exactly 25 Hz (the optimal frequency for human relaxation). After 20 minutes, he was completely relaxed and I got extra treats. Win-win situation! Sometimes I think I should charge for these sessions. 💕",
      tags: ["#PurrTherapy", "#StressRelief", "#ProfessionalService"]
    },
    {
      id: 6,
      date: "February 10, 2025",
      time: "4:00 PM",
      mood: "🧶",
      title: "Yarn Ball Archaeology",
      content: "Discovered an ancient yarn ball under the couch that I had forgotten about! It was like finding buried treasure. I played with it for hours, rolling it around, batting it, and eventually getting it stuck behind the refrigerator. Rui had to move the fridge to retrieve it. Totally worth it! 🏺",
      tags: ["#YarnBall", "#Archaeology", "#TreasureHunt"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playful font-bold text-center text-purple-800 mb-12">
          📖 Mabu's Daily Journal
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {journalEntries.map((entry) => (
            <article key={entry.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Entry Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                  <span className="text-3xl">{entry.mood}</span>
                  <div>
                    <h3 className="text-xl font-magazine font-bold text-purple-800">
                      {entry.title}
                    </h3>
                    <div className="text-sm text-gray-500">
                      {entry.date} · {entry.time}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Entry #{entry.id}</div>
                </div>
              </div>
              
              {/* Entry Content */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {entry.content}
                </p>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 text-sm font-semibold rounded-full border border-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
          
          {/* Journal Footer */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-playful font-bold text-purple-800 mb-4">
                📝 More Entries Coming Soon!
              </h3>
              <p className="text-gray-600 mb-4">
                Mabu writes in her journal every day, sharing her thoughts, adventures, and daily cat wisdom.
              </p>
              <div className="flex justify-center space-x-4 text-2xl">
                <span className="animate-bounce-slow">✍️</span>
                <span className="animate-bounce-slow" style={{ animationDelay: '0.3s' }}>📚</span>
                <span className="animate-bounce-slow" style={{ animationDelay: '0.6s' }}>🐱</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journal;
