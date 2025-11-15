import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NavLink from './NavLink';
import colors from 'src/assets/themes/colors';

const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={0} sx={{ zIndex: 3, m: '1rem', backgroundColor: colors.whiteSmoke }}>
      <Toolbar sx={{ justifyContent: 'space-between', borderRadius: 10 }}>
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
