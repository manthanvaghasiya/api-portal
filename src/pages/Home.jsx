import React from 'react';
import HeroSlider from '../components/HeroSlider';
import HowItWorks from '../components/HowItWorks';
import JourneyLive from '../components/JourneyLive';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSlider />
      <HowItWorks />
      <JourneyLive />
    </div>
  );
};

export default Home;