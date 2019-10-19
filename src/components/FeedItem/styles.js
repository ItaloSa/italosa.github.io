import styled from 'styled-components';
import { COLOR_LIGHT, COLOR_DARK } from '../styles';

export const Box = styled.div`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 23px 0;
`;

export const BoxDate = styled.span`
  color: ${COLOR_LIGHT};
  font-size: 14px;
`;

export const BoxTitle = styled.h1`
  color: ${COLOR_DARK};
  font-weight: 600;
  font-size: 34px;
`;

export const BoxContent = styled.p`
  color: ${COLOR_DARK};
  font-size: 18px;
  margin-bottom: 0;
`;
