import { AppBar, Toolbar, Box, Button, IconButton, Typography, Divider, Paper, InputBase } from '@mui/material';
import colors from 'src/assets/themes/colors';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsIcon from '@mui/icons-material/Directions';
import { navbarHeight } from 'src/utils/constants';
import { useState } from 'react';

const getResponsiveValue = (xsValue: string | number, smValue: string | number, mdValue: string | number) => {
  return { xs: xsValue ?? '', sm: smValue ?? '', md: mdValue ?? '' };
};

const NavbarOverlay = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <AppBar
      position='fixed'
      elevation={3}
      sx={{
        top: '1rem',
        width: 'calc(100% - 2rem)',
        marginX: '1rem',
        borderRadius: '10px',
        zIndex: theme => theme.zIndex.appBar + 100,
        backgroundColor: colors.phantomBlack,
        backdropFilter: 'blur(6px)',
      }}
    >
      <Toolbar sx={{ height: getResponsiveValue('auto', 'auto', navbarHeight) }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: getResponsiveValue('column-reverse', 'column-reverse', 'row'),
            alignItems: 'center',
            justifyContent: getResponsiveValue('space-around', 'space-between', 'space-between'),
            width: '100%',
          }}
        >
          {/* Logo placeholder */}
          <Typography variant='h4' sx={{ cursor: 'pointer', display: { xs: 'none', sm: 'none', md: 'block' } }}>
            StreamLens
          </Typography>
          {/* nav links (hide on small screens if desired) */}

          <Box
            sx={{
              display: getResponsiveValue(openMenu ? 'flex' : 'none', openMenu ? 'flex' : 'none', 'flex'),
              flexDirection: getResponsiveValue('column', 'column', 'row'),
            }}
          >
            <Button variant='text'>{'Movies'}</Button>
            <Button variant='text'>{'TV Shows'}</Button>
            <Button variant='text'>{'About'}</Button>
          </Box>

          {/* Right: actions */}
          <Box
            sx={{
              p: '2px 6px',
              marginTop: getResponsiveValue(openMenu ? '5.5px' : 0, openMenu ? '9.5px' : 0, 0),
              display: 'flex',
              alignItems: 'center',
              width: getResponsiveValue('100%', '300px', '300px'),
              backgroundColor: colors.phantomBlack,
              borderColor: colors.primary.main,
              borderWidth: 1,
              borderStyle: 'solid',
              borderRadius: '10px',
            }}
          >
            <IconButton aria-label='menu' sx={{ display: { xs: 'flex', md: 'none' }, p: '4px' }} onClick={() => setOpenMenu(prev => !prev)}>
              <MenuIcon color='primary' />
            </IconButton>

            <InputBase placeholder='Search StreamLens' sx={{ ml: 1, flex: 1 }} />
            <IconButton type='button' aria-label='search'>
              <SearchIcon color='primary' />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarOverlay;
