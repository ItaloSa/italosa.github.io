import styled from 'styled-components';

export const BoxDate = styled.span`
  font-size: 14px;
`;

export const BoxTitle = styled.h1`
  font-weight: 600;
  font-size: 34px;
`;

export const BoxContent = styled.p`
  font-size: 18px;
  margin-bottom: 0;
`;

export const Box = styled.div`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 23px 0;
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.darkBackground};
  &:hover {
    box-shadow: 0 2px 10px rgb(255 121 198 / 30%);
    border: 1px solid rgb(255 121 198 / 60%);
  }
`;
