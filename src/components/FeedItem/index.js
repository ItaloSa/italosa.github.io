import React from 'react';
import { Box, BoxDate, BoxTitle, BoxContent } from './styles';

const FeedItem = ({ data: { date, title, description } }) => (
  <Box className="mt-3 mb-4">
    <div className="container">
      <div className="col">
        <BoxDate>{date}</BoxDate>
      </div>
      <div className="col">
        <BoxTitle>{title}</BoxTitle>
      </div>
      <div className="col">
        <BoxContent>{description}</BoxContent>
      </div>
    </div>
  </Box>
);

export default FeedItem;
