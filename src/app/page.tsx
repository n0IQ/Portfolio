import React from 'react';
import Navbar from '../components/Home/Navbar';
import Intro from '@/components/Home/Intro';
import About from '@/components/Home/About';
import MySkill from '@/components/Home/MySkill';

export default function Home() {
  return (
    <div>
      <Intro />
      <About />
      <MySkill />
    </div>
  );
}
