import React from 'react';
import HeroSlider from '../components/HeroSlider';
import HowItWorks from '../components/HowItWorks';
import JourneyLive from '../components/JourneyLive';
import AvailableAPIs from '../components/AvailableAPIs';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSlider />
      <HowItWorks />
      <JourneyLive />
      <AvailableAPIs />
    </div>
  );
};

export default Home;