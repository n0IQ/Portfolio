import React from 'react';
import Navbar from '../components/Navbar';
import Intro from '@/components/Intro';
import About from '@/components/About';
import TeckStack from '@/components/TechStack';

export default function Home() {
  return (
    <div>
      <Intro />
      <About />
      <TeckStack />
    </div>
  );
}
