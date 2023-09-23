import Cabecalho from '@/src/components/Cabecalho/Cabecalho';
import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import tema from '../src/themes/theme';

function MyApp({ Component, pageProps }: AppProps) {
  /*return <Component {...pageProps} />*/
  return (
    <ThemeProvider theme={tema}>
      <Cabecalho></Cabecalho>
      <Component {...pageProps} />

    </ThemeProvider>
  )
}

export default MyApp;