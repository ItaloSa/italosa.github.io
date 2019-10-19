import React from 'react';
import { Container, Col } from 'reactstrap';
import { Box, BoxDate, BoxTitle, BoxContent } from './styles';

const FeedItem = ({ data: { date, title, description } }) => (
  <Box className="mt-3 mb-4">
    <Container>
      <Col>
        <BoxDate>{date}</BoxDate>
      </Col>
      <Col>
        <BoxTitle>{title}</BoxTitle>
      </Col>
      <Col>
        <BoxContent>{description}</BoxContent>
      </Col>
    </Container>
  </Box>
);

export default FeedItem;
