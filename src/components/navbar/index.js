import React, { useState } from 'react';
import { Container, Collapse, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';

import { CustomNavbar, CustomNavbarToggler } from './styles';
const { REACT_APP_GITHUB_URL } = process.env;

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <CustomNavbar dark expand="md">
        <Container>
          <NavbarBrand href="#" className="navbar-brand">
            {' '}
            Ítalo Sousa{' '}
          </NavbarBrand>
          <CustomNavbarToggler onClick={() => setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink target="_blank" href={REACT_APP_GITHUB_URL}>
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </CustomNavbar>
    </div>
  );
};

export default AppNavbar;
