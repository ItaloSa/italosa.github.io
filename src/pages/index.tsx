import { useEffect } from 'react';

import Hero from '../components/Hero';
import Feed from '../components/Feed';
import { initGA, gaPageView } from '../services/analytics';

export default function Main() {
  useEffect(() => {
    initGA();
    gaPageView();
  }, []);

  return (
    <>
      <Hero />
      <Feed />
    </>
  );
}
