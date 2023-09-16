import { ThemeProvider } from '@mui/material/styles';
import theme from '../app/styles/theme';
import { AppProps } from 'next/app';
import '../app/globals.css';
import RootLayout from '../app/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    </ThemeProvider>
  );
}

export default MyApp;
