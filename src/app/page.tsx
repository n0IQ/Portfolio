import React from 'react';
import Navbar from '../components/Home/Navbar';
import Intro from '@/components/Home/Intro';
import About from '@/components/Home/About';
import TeckStack from '@/components/Home/TechStack';

export default function Home() {
  return (
    <div>
      <Intro />
      <About />
      <TeckStack />
    </div>
  );
}
