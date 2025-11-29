import './App.css';
import { useContext, useEffect, useState } from 'react';
import HeroSection from './components/section/HeroSection';
import SectionHeader from './components/section/SectionHeader';
import NavBar from './components/navbar/Navbar';
import { Movie, movieService } from './core/services/movie.service';
import { tvService, TvShow } from './core/services/tv.service';
import PopularSection from './components/section/PopularSection';
import SummaryModal from './components/modal/SummaryModal';
import AppContext from './core/context/global/AppContext';

const App = () => {
  const { popularMovies, popularTVShows, setPopularMovies, setPopularTVShows } = useContext(AppContext);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<(TvShow & Movie) | null>(null);

  const onItemClick = (item: TvShow & Movie) => {
    console.log('item clicked:', item);
    setSelectedItem(item);
    setIsSummaryModalOpen(true);
  };
  const fetchData = async () => {
    const movieResponse = await movieService.getPopularMovie(1);
    // console.log('Movie Response:', movieResponse);
    setPopularMovies(movieResponse?.results ?? []);
    const tvResponse = await tvService.getPopularTV(1);
    setPopularTVShows(tvResponse?.results ?? []);
    // console.log('TV Response:', tvResponse);
  };
  useEffect(() => {
    if (!popularMovies.length || !popularTVShows.length) fetchData();
  }, []);

  return (
    <>
      <SummaryModal open={isSummaryModalOpen} item={selectedItem ?? undefined} onClose={() => setIsSummaryModalOpen(false)} />
      <NavBar />
      <HeroSection />
      <PopularSection title='Popular TV Shows' data={popularTVShows} onItemClick={onItemClick} />
      <PopularSection title='Popular Movies' data={popularMovies} onItemClick={onItemClick} />
    </>
  );
};

export default App;
