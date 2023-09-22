import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider, useThemeContext } from '../app/styles/ThemeContext';
import { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import '../app/globals.css';
import RootLayout from '../app/layout';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
      <AppContent Component={Component} pageProps={pageProps} router={router} />
    </ThemeProvider>
  );
}

function AppContent({ Component, pageProps, router }: AppProps) {
  const { theme } = useThemeContext();

  return (
    <MuiThemeProvider theme={theme}>
      <RootLayout>
        <CssBaseline />
        <Component {...pageProps} />
      </RootLayout>
    </MuiThemeProvider>
  );
}

export default MyApp;
