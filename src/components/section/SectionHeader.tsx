import { Box, Typography } from '@mui/material';

const SectionHeader = ({ label, title, subtitle }) => {
  return (
    <Box sx={{ textAlign: 'center', my: 8, px: 2 }}>
      <Typography variant='overline' sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '1px' }}>
        {label}
      </Typography>
      <Typography variant='h4' sx={{ fontWeight: 700, mt: 1, textTransform: 'uppercase' }}>
        {title}
      </Typography>
      <Typography variant='body1' sx={{ mt: 2, color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default SectionHeader;
