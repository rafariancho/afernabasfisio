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
  DropdownItem
} from 'reactstrap';
import './style.css';
import {gotoElement} from '../../Helpers/NavigationHelper.js';

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
      <div id="header">
        <Navbar color="faded" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          {/* <NavbarBrand href="/">
          </NavbarBrand> */}
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink className="cursor-link nonIos" onClick={() => gotoElement("Servicios")}>Servicios</NavLink>
                <NavLink className="cursor-link ios" href="#Servicios">Servicios</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="cursor-link nonIos" onClick={() => gotoElement("Instalaciones")}>Instalaciones</NavLink>
                <NavLink className="cursor-link ios" href="#Instalaciones">Instalaciones</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="cursor-link nonIos" onClick={() => gotoElement("Curriculum")}>Curr&iacute;culum</NavLink>
                <NavLink className="cursor-link ios" href="#Curriculum">Curr&iacute;culum</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="cursor-link nonIos" onClick={() => gotoElement("HorarioYTarifas")}>Horario y tarifas</NavLink>
                <NavLink className="cursor-link ios" href="#HorarioYTarifas">Horario y tarifas</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;