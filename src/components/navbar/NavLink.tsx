import { Typography } from '@mui/material';

const NavLink = ({ label }) => {
  return (
    <Typography
      variant='body1'
      sx={{
        cursor: 'pointer',
        color: 'text.primary',
        fontWeight: 500,
        transition: 'color 0.3s',
        '&:hover': { color: 'primary.main' },
      }}
    >
      {label}
    </Typography>
  );
};

export default NavLink;
