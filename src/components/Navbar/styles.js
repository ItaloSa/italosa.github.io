import styled from 'styled-components';
import { Navbar, NavbarToggler } from 'reactstrap';
import { COLOR_DARK } from '../styles';

export const CustomNavbar = styled(Navbar)`
  background-color: ${COLOR_DARK};
  box-shadow: 0 1px 6px rgba(0,0,0,0.12), 0 1px 5px rgba(0,0,0,0.24);
`;

export const CustomNavbarToggler = styled(NavbarToggler)`
  border-color: #fff !important;
`;