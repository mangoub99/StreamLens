import './App.css';
import { useEffect } from 'react';
import HeroSection from './components/section/HeroSection';
import SectionHeader from './components/section/SectionHeader';
import NavBar from './components/navbar/Navbar';

const App = () => {
  useEffect(() => {
    console.log('App mounted');
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection />
      <SectionHeader
        label='Cinema123'
        title='Latest Releases and Trending Shows'
        subtitle='Discover the most compelling stories from around the world, handpicked for your entertainment.'
      />
    </>
  );
};

export default App;
