import styled from 'styled-components';

export const Link = styled.a`
  color: ${(props) => props.theme.colors.foreground};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.pink};
    text-decoration: none;
  }
`;
