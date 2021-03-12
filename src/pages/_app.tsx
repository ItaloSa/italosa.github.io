import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Theme } from '../theme';

import 'bootstrap/dist/css/bootstrap.css';
import '../theme/fonts.css';

function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
