import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Stack, Box } from '@mui/material';
import { Star } from '@mui/icons-material';

const MovieCard = ({ poster, title, genre, rating, onTrailerClick }) => {
  return (
    <Card
      sx={{
        maxWidth: 260,
        borderRadius: 3,
        backgroundColor: 'background.paper',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.25s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0px 8px 20px rgba(0,0,0,0.1)',
        },
      }}
    >
      <CardMedia
        component='img'
        height='360'
        image={poster}
        alt={title}
        sx={{
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          objectFit: 'cover',
        }}
      />
      <CardContent>
        <Typography variant='h6' color='text.primary' gutterBottom noWrap>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {genre}
        </Typography>
        <Stack direction='row' alignItems='center' spacing={0.5} mt={1}>
          <Star sx={{ color: 'primary.main', fontSize: 20 }} />
          <Typography variant='body2' color='text.primary' fontWeight={600}>
            {rating}
          </Typography>
        </Stack>
        <Box mt={2}>
          <Button variant='contained' color='primary' fullWidth onClick={onTrailerClick}>
            Watch Trailer
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
