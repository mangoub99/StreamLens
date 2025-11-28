import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import AppRoutes from './Routes';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from './assets/themes/theme';
import colors from './assets/themes/colors';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ background: colors.background.default }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename='/StreamLens/'>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  </StrictMode>,
);
