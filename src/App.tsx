import React from 'react';
import Hero from './components/Hero';
import NewsFeed from './components/NewsFeed';
import About from './components/About';
import Favorites from './components/Favorites';
import Interactive from './components/Interactive';
import Journal from './components/Journal';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App paw-cursor">
      <Hero />
      <NewsFeed />
      <About />
      <Favorites />
      <Interactive />
      <Journal />
      <Footer />
    </div>
  );
}

export default App;
