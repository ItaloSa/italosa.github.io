import type { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.css';
import '../theme/fonts.css';

function App({ Component, pageProps, router }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
