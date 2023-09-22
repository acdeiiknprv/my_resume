import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#3f51b5' }, 
    secondary: { main: '#f50057' },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
    },
    background: {
      default: '#f5f5f5',
      paper: '#fff',
    },
    // ... Add other colors and styles as needed
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'none',
          },
          '&:visited, &:link, &:active': {
            color: 'inherit', 
          }
        }
      }
    }
  },
  // Add other global styles or overrides here
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#9c27b0' },
    secondary: { main: '#76ff03' },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.54)',
    },
    background: {
      default: '#121212',
      paper: '#424242',
    },
    // ... Add other colors and styles as needed
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'none',
          },
          '&:visited, &:link, &:active': {
            color: 'inherit', 
          }
        }
      }
    }
  },
  // Add other global styles or overrides here
});
