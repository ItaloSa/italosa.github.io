import React, { useState, useEffect } from 'react';
import { CustomSection, CustomContainer } from '../styles';
import FeedItem from '../FeedItem';
import { FeedDataType } from '../../data';

type FeedProps = {
  data: FeedDataType;
};

const Feed: React.FC<FeedProps> = ({ data }) => {
  return (
    <CustomSection>
      <CustomContainer className="container">
        {data.map((item, idx) => (
          <FeedItem data={item} key={`feed-item-${idx}`} />
        ))}
      </CustomContainer>
    </CustomSection>
  );
};

export default Feed;
