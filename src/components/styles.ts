import styled from 'styled-components';

type CustomSectionProps = {
  dark?: boolean;
};

export const CustomSection = styled.section<CustomSectionProps>`
  background-color: ${(props) =>
    props.dark ? props.theme.colors.darkBackground : props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground};
`;

export const CustomContainer = styled.div`
  padding: 20px;
`;
