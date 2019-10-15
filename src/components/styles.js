import styled from 'styled-components';
import { Container } from 'reactstrap';

export const COLOR_PRIMARY = '#ffffff';
export const COLOR_SECONDARY = '#333';
export const COLOR_LIGHT = '#7d7d7d';
export const COLOR_DARK = '#262626';

export const CustomSection = styled.section`
  background-color: ${props => props.dark ? COLOR_DARK : COLOR_PRIMARY}
`;

export const CustomContainer = styled(Container)`
  padding: 20px;
  max-width: 640px !important;
`;
