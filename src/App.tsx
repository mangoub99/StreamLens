import './App.css';
import { useEffect, useState } from 'react';
import HeroSection from './components/section/HeroSection';
import SectionHeader from './components/section/SectionHeader';
import NavBar from './components/navbar/Navbar';
import { Movie, movieService } from './core/services/movie.service';
import { tvService, TvShow } from './core/services/tv.service';
import PopularSection from './components/section/PopularSection';
import SummaryModal from './components/modal/SummaryModal';

const App = () => {
  const [tvData, setTvData] = useState<any>();
  const [movieData, setMovieData] = useState<any>();
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
    setMovieData(movieResponse);
    const tvResponse = await tvService.getPopularTV(1);
    setTvData(tvResponse);
    // console.log('TV Response:', tvResponse);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SummaryModal open={isSummaryModalOpen} item={selectedItem ?? undefined} onClose={() => setIsSummaryModalOpen(false)} />
      <NavBar />
      <HeroSection />
      <PopularSection title='Popular TV Shows' data={tvData?.results ?? []} onItemClick={onItemClick} />
      <PopularSection title='Popular Movies' data={movieData?.results ?? []} onItemClick={onItemClick} />
    </>
  );
};

export default App;
