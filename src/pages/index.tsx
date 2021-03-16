import { useEffect } from 'react';

import Hero from '../components/Hero';
import Feed from '../components/Feed';
import { initGA, gaPageView } from '../services/analytics';
import { FeedData, FeedDataType } from '../data';
import Seo from '../components/Seo';

export default function Main(props: { FeedData: FeedDataType }) {
  useEffect(() => {
    initGA();
    gaPageView();
  }, []);

  return (
    <>
      <Seo />
      <Hero />
      <Feed data={props.FeedData} />
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: { FeedData },
  };
}
