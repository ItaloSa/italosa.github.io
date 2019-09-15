import React, { Component } from 'react';
import {
  Container,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand
} from 'reactstrap';

import { CustomNavbar, CustomNavbarToggler } from './styles';

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <CustomNavbar dark expand="md">
          <Container>
            <NavbarBrand href="#" className="navbar-brand">
              {' '}
              Ítalo Sousa{' '}
            </NavbarBrand>
            <CustomNavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink target="_blank" href="https://github.com/italosa">
                    GitHub
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </CustomNavbar>
      </div>
    );
  }
}
