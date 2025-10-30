import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E2A847', // Deep Amber
      light: '#F3C86B',
      dark: '#C7943E',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3B4CCA', // Muted Royal Blue
      light: '#5C66E0',
      dark: '#2F3EA8',
      contrastText: '#ffffff',
    },
    background: {
      default: '#5A431C', // Soft Ivory
      paper: '#F4EDE4', // Pale Sand
    },
    text: {
      primary: '#1E1E1E', // Graphite
      secondary: '#FAF7F2', // Ivory Cream
    },
    error: {
      main: '#E85D5D', // Coral Red
    },
    success: {
      main: '#2EBFA5', // Teal Green
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },

  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: { fontWeight: 700, fontSize: '2.25rem' },
    h2: { fontWeight: 600, fontSize: '1.75rem' },
    h3: { fontWeight: 600, fontSize: '1.5rem' },
    h4: { fontWeight: 600, fontSize: '1.25rem' },
    body1: { color: '#FAF7F2', lineHeight: 1.6 },
    body2: { color: '#FAF7F2', lineHeight: 1.5 },
    button: { textTransform: 'none', fontWeight: 600 },
  },

  shape: {
    borderRadius: 0,
  },

  shadows: [
    'none', // 0
    '0px 2px 8px rgba(0, 0, 0, 0.05)', // 1
    '0px 4px 12px rgba(0, 0, 0, 0.08)', // 2
    '0px 8px 20px rgba(0, 0, 0, 0.1)', // 3
    '0px 8px 20px rgba(0, 0, 0, 0.1)', // 4
    'none', // 5
    'none', // 6
    'none', // 7
    'none', // 8
    'none', // 9
    'none', // 10
    'none', // 11
    'none', // 12
    'none', // 13
    'none', // 14
    'none', // 15
    'none', // 16
    'none', // 17
    'none', // 18
    'none', // 19
    'none', // 20
    'none', // 21
    'none', // 22
    'none', // 23
    'none', // 24
  ],

  components: {
    // 🌟 Buttons
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'none',
          fontWeight: 600,
          padding: '8px 20px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.2s ease',
          '&:hover': {
            boxShadow: '0px 6px 14px rgba(0, 0, 0, 0.15)',
          },
        },
        containedPrimary: {
          backgroundColor: '#E2A847',
          '&:hover': {
            backgroundColor: '#C7943E',
          },
        },
        containedSecondary: {
          backgroundColor: '#3B4CCA',
          '&:hover': {
            backgroundColor: '#2F3EA8',
          },
        },
      },
    },

    // 🎞 Cards
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: '#F4EDE4',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },

    // 🧾 Text Fields
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backgroundColor: '#ffffff',
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.15)',
            },
            '&:hover fieldset': {
              borderColor: '#E2A847',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#E2A847',
            },
          },
        },
      },
    },

    // 🗂 Paper (dialogs, menus)
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: '#F4EDE4',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
        },
      },
    },

    // 🧠 Typography spacing consistency
    MuiTypography: {
      styleOverrides: {
        root: {},
      },
    },

    // 📦 Container
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: '2rem',
          paddingBottom: '2rem',
        },
      },
    },
  },
});

export default theme;
