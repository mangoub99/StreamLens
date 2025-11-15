import { AppBar, Toolbar, Box, Button, IconButton, Typography, Divider, Paper, InputBase } from '@mui/material';
import colors from 'src/assets/themes/colors';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsIcon from '@mui/icons-material/Directions';
import { navbarHeight } from 'src/utils/constants';

const NavbarOverlay = () => {
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
      <Toolbar sx={{ height: navbarHeight }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo placeholder */}
          <Typography variant='h4' sx={{ cursor: 'pointer', display: { xs: 'none', md: 'block' } }}>
            StreamLens
          </Typography>
          {/* nav links (hide on small screens if desired) */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button variant='text'>{'Movies'}</Button>
              <Button variant='text'>{'TV Shows'}</Button>
              <Button variant='text'>{'About'}</Button>
            </Box>
          </Box>
          {/* Right: actions */}
          <Box
            sx={{
              p: '2px 6px',
              display: 'flex',
              alignItems: 'center',
              width: { xs: '100%', md: '300px' },
              backgroundColor: colors.phantomBlack,
              borderColor: colors.primary.main,
              borderWidth: 1,
              borderStyle: 'solid',
              borderRadius: '10px',
            }}
          >
            <IconButton sx={{ display: { xs: 'flex', md: 'none' }, p: '4px' }} aria-label='menu'>
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
