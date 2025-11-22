import './App.css';
import { useEffect, useState } from 'react';
import HeroSection from './components/section/HeroSection';
import SectionHeader from './components/section/SectionHeader';
import NavBar from './components/navbar/Navbar';
import { movieService } from './core/services/movie.service';
import { tvService } from './core/services/tv.service';
import PopularSection from './components/section/PopularSection';

const App = () => {
  const [tvData, setTvData] = useState<any>();
  const [movieData, setMovieData] = useState<any>();
  const fetchData = async () => {
    const movieResponse = await movieService.getMovies({ page: 1 });
    // console.log('Movie Response:', movieResponse);
    setMovieData(movieResponse);
    const tvResponse = await tvService.getTvShows({ page: 1 });
    setTvData(tvResponse);
    // console.log('TV Response:', tvResponse);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection />
      <SectionHeader
        title='Latest Releases and Trending Shows'
        subtitle='Discover the most compelling stories from around the world, handpicked for your entertainment.'
      />
      <PopularSection title='Popular TV Shows' data={tvData?.results ?? []} />
      <PopularSection title='Popular Movies' data={movieData?.results ?? []} />
    </>
  );
};

export default App;
