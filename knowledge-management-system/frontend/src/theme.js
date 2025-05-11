import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#232946',
      contrastText: '#fff',
    },
    secondary: {
      main: '#eebbc3',
    },
    background: {
      default: '#16161a',
      paper: '#232946',
    },
    text: {
      primary: '#fff',
      secondary: '#eebbc3',
    },
  },
  typography: {
    fontFamily: '"Sora", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
      letterSpacing: '0.03em',
      fontSize: '2.6rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.4rem',
    },
    body1: {
      fontSize: '1.15rem',
    },
    button: {
      fontWeight: 600,
      fontSize: '1.05rem',
      letterSpacing: '0.04em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 22px',
        },
      },
    },
  },
});

export default theme;