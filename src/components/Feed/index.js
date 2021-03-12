import React, { useState, useEffect } from 'react';
import { CustomSection, CustomContainer } from '../styles';
import FeedItem from '../FeedItem';

const Feed = () => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(`/data/feed.json`);
    const data = await response.json();
    setFeedData(data);
  };

  return (
    <CustomSection>
      <CustomContainer className="container">
        {feedData.length
          ? feedData.map((item, idx) => <FeedItem data={item} key={`feed-item-${idx}`} />)
          : null}
      </CustomContainer>
    </CustomSection>
  );
};

export default Feed;
