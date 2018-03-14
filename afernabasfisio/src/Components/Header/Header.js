import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import './style.css';

class Header extends Component {
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
        <Navbar color="faded" light expand="md">
          {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem onClick={()=>alert('active')}>
                <NavLink href="#0">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#1">Curriculum</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#2">Servicios</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#3">Instalaciones</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#4">Horarios y tarifas</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#5">Contacto</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;