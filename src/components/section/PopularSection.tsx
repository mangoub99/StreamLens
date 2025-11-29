import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { TvShow } from 'src/core/services/tv.service';
import { Movie } from 'src/core/services/movie.service';
import PopularCard from '../card/PopularCard';

interface PopularTVSectionProps {
  title: string;
  data: (TvShow & Movie)[];
  onItemClick?: (item: TvShow & Movie) => void;
}

const PopularSection = ({ data, title, onItemClick }: PopularTVSectionProps) => {
  const theme = useTheme();
  // Duplicate the array so CSS animation can scroll infinitely
  const scrollingData = [...data, ...data];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: theme => theme.spacing(4),
        px: theme => theme.spacing(2),
      }}
    >
      <Typography
        variant='h1'
        sx={{
          textAlign: 'center',
          my: theme => theme.spacing(4),
        }}
      >
        {title}
      </Typography>

      {/* Outer viewport (hidden overflow) */}
      <Box
        sx={{
          width: '75%',
          overflow: 'hidden',
          position: 'relative',

          /* Scrollbar hidden */
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
        }}
      >
        {/* Scroll track */}
        <Box
          className='scroll-track'
          sx={{
            display: 'flex',
            flexDirection: 'row',

            /* 🔥 Animation config */
            animation: 'scroll-left 35s linear infinite',

            /* Card spacing */
            '& > *': { mr: 2 },

            /* Pause on hover (optional) */
            '&:hover': {
              animationPlayState: 'paused',
            },

            /* CSS Keyframes defined inside sx */
            '@keyframes scroll-left': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
          }}
        >
          {scrollingData.map((item, index) => (
            <PopularCard key={index} item={item} onClick={onItemClick} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PopularSection;
