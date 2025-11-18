import './App.css';
import { useEffect } from 'react';
import HeroSection from './components/section/HeroSection';
import SectionHeader from './components/section/SectionHeader';
import NavBar from './components/navbar/Navbar';
import { movieService } from './core/services/movie.service';

const App = () => {
  useEffect(() => {
    console.log('App mounted');
    // movieService.getMovies({ page: 1 });
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
