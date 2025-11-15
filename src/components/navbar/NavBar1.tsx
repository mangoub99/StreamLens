import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { alpha, useTheme } from '@mui/material';
import colors from 'src/assets/themes/colors';

const SCROLL_THRESHOLD = 16; // px

export default function Navbar1() {
  const theme = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll(); // initialize
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AppBar
      position='sticky' // keeps it at top and respects flow
      color='transparent'
      elevation={0}
      sx={{
        top: '1rem',
        width: 'calc(100% - 2rem)',
        marginX: '1rem',
        borderRadius: '10px',

        // push the bar a little down from the top if you want rounded bottom corners
        // marginTop: 2,
        backgroundColor: colors.whiteSmoke,
        // backgroundColor: scrolled
        //   ? colors.black // more opaque when scrolled
        //   : 'transparent', // fully transparent when at top
        // glass blur effect (works best when background is translucent)
        backdropFilter: scrolled ? 'saturate(150%) blur(8px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(150%) blur(8px)' : 'none',
        // subtle border / rounding similar to the screenshot
        boxShadow: scrolled ? theme.shadows[3] : 'none',
        transition: 'background-color 300ms ease, backdrop-filter 300ms ease, box-shadow 300ms ease',
      }}
    >
      <Container sx={{ p: 0 }} maxWidth='xl'>
        <Toolbar disableGutters sx={{ p: 0 }}>
          {/* Left: Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <img src='/logo192.png' alt='logo' style={{ height: 36 }} />
          </Box>

          {/* Center / Spacer */}
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Typography variant='h6' component='div' sx={{ mr: 3, fontWeight: 700 }}>
              StreamLens
            </Typography>
            {/* Example nav links (hide on small screens if desired) */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button variant='text'>Jeu</Button>
              <Button variant='text'>Actualités</Button>
              <Button variant='text'>Boutique</Button>
            </Box>
          </Box>

          {/* Right: actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton aria-label='menu' sx={{ display: { md: 'none' } }}>
              <MenuIcon />
            </IconButton>
            <Button
              variant='contained'
              sx={{
                textTransform: 'none',
                fontWeight: 700,
                borderRadius: '20px',
                px: 3,
                // use theme palette or custom color
                background: 'linear-gradient(90deg,#ff7ad0,#a45cff)',
                boxShadow: '0 6px 18px rgba(160,66,255,0.18)',
              }}
            >
              JOUER
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
