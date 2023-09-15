// styles/theme.ts
import { createTheme, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customPalette: {
      customColor: string;
    };
  }
  interface ThemeOptions {
    customPalette?: {
      customColor?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    // ...
  },
  customPalette: {
    customColor: '#123456',
  },
});

export default theme;
