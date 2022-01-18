import { AppProps } from 'next/app';
import '../shared/styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
};
