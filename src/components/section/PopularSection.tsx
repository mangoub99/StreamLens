import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { TvShow } from 'src/core/services/tv.service';
import MovieCard from '../card/Card';
import TvCard from '../card/PopularCard';
import PopularCard from '../card/PopularCard';
import { Movie } from 'src/core/services/movie.service';

interface PopularTVSectionProps {
  title: string;
  data: (TvShow & Movie)[];
}

const PopularSection = (props: PopularTVSectionProps) => {
  const { data, title } = props;
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingY: theme => theme.spacing(4),
        paddingX: theme => theme.spacing(2),
      }}
    >
      <Typography sx={{ textAlign: 'center', marginY: theme => theme.spacing(2) }} variant='h1'>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', width: '75%', overflowX: 'scroll' }}>
        {/* Render popular TV shows here */}
        {data.map((show: TvShow & Movie) => (
          <PopularCard key={show.id} item={show} />
        ))}
      </Box>
    </Box>
  );
};

export default PopularSection;
