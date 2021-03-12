import styled from 'styled-components';

export const CustomSection = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground};
`;

export const CustomContainer = styled.div`
  padding: 20px;
  max-width: 640px !important;
`;
