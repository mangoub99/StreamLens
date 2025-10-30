import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NavLink from './NavLink.tsx';
import colors from 'src/assets/themes/colors.ts';

const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={0} sx={{ backgroundColor: colors.whiteSmoke, py: 0, width: '100%', borderRadius: 0 }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
        {/* Logo */}
        <Typography variant='h6' sx={{ fontWeight: 700, color: 'primary.main', fontFamily: 'Poppins' }}>
          Logo
        </Typography>

        {/* Nav Links */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          <NavLink label='Movies' />
          <NavLink label='TV Shows' />
          <NavLink label='About' />
          <NavLink label='More' />
        </Box>

        {/* Search Button */}
        <Button variant='contained' color='primary' startIcon={<SearchIcon />}>
          Search
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
