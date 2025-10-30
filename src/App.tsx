import './App.css';
import { useEffect, useState } from 'react';
import reactLogo from './assets/images/react.svg';
import viteLogo from './assets/images/vite.svg';
import { RoutePaths } from './types/Routes.type';
import { Link } from 'react-router-dom';
import { CssBaseline, Button, Card, Typography } from '@mui/material';
import theme from './assets/themes/theme';
import HeroSection from './components/section/HeroSection';
import Navbar from './components/navbar/Navbar';
import SectionHeader from './components/section/SectionHeader';

function App() {
  useEffect(() => {
    console.log('App mounted');
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <SectionHeader
        label='Cinema'
        title='Latest Releases and Trending Shows'
        subtitle='Discover the most compelling stories from around the world, handpicked for your entertainment.'
      />
    </>
  );
}

export default App;
