import styled from 'styled-components';
import { Container, Row, Media } from 'reactstrap';
import { COLOR_DARK } from '../styles';

export const HeroSection = styled.section`
  background-color: ${COLOR_DARK};
`;

export const HeroContainer = styled(Container)`
  padding: 20px;
  max-width: 640px !important;
`;

export const HeroHeader = styled(Row)`
  padding-bottom: 20px;
`;

export const Avatar = styled(Media)`
  width: 80%;
  border-radius: 100%;
`;


