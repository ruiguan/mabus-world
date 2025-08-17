import React from 'react';

const NewsFeed = () => {
  const newsItems = [
    {
      id: 1,
      title: "Power Nap No. 7",
      date: "Feb 2025",
      hashtag: "#NapQueen",
      image: "%PUBLIC_URL%/mabu7.jpg",
      caption: "Achieved maximum relaxation levels today. Set a new personal record for consecutive hours of sleep."
    },
    {
      id: 2,
      title: "Caught the Red Dot",
      date: "Feb 2025",
      hashtag: "#LaserChase",
      image: "%PUBLIC_URL%/mabu8.jpg",
      caption: "The elusive red dot was finally mine! Well, for about 2 seconds before it disappeared again."
    },
    {
      id: 3,
      title: "Window Watch Shift",
      date: "Feb 2025",
      hashtag: "#PigeonPatrol",
      image: "%PUBLIC_URL%/mabu9.jpg",
      caption: "Spent 4 hours monitoring the neighborhood. No suspicious bird activity detected. All clear!"
    },
    {
      id: 4,
      title: "Keyboard Occupation",
      date: "Feb 2025",
      hashtag: "#WorkInterruption",
      image: "%PUBLIC_URL%/mabu10.jpg",
      caption: "Successfully prevented Rui from working by sitting on his keyboard. Mission accomplished!"
    },
    {
      id: 5,
      title: "Yarn Ball Discovery",
      date: "Feb 2025",
      hashtag: "#ToyTime",
      image: "%PUBLIC_URL%/mabu11.jpg",
      caption: "Found a new yarn ball in the craft room. It's now officially mine and hidden under the couch."
    },
    {
      id: 6,
      title: "Sunbeam Meditation",
      date: "Feb 2025",
      hashtag: "#ZenMode",
      image: "%PUBLIC_URL%/mabu12.jpg",
      caption: "Achieved perfect sunbeam alignment at 3 PM. The warmth was absolutely purr-fect."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playful font-bold text-center text-purple-800 mb-12">
          📰 Mabu's Daily News
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                    {item.date}
                  </span>
                  <span className="text-sm font-bold text-purple-600">
                    {item.hashtag}
                  </span>
                </div>
                
                <h3 className="text-xl font-magazine font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;
