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
import Whatsapp from 'react-icons/lib/fa/whatsapp';
import Mobile from 'react-icons/lib/md/phone';
import Email from 'react-icons/lib/md/mail-outline';
import FB from 'react-icons/lib/fa/facebook-square';
import Twitter from 'react-icons/lib/fa/twitter';

class QuickContact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sticky-top d-flex flex-row justify-content-sm-between justify-content-md-end quick-contact">
        <div className="col-8 d-flex justify-content-end align-items-center highlight">
        <Mobile size={18}/> &nbsp; 625 147 630 &nbsp;<Whatsapp size={16}/>
        </div>
        <div className="d-none d-md-block col-md-3 highlight align-items-center">
          <a href="mailto://fabascalfisioterapia@gmail.com" >
            <Email size={20} style={{paddingBottom:2}}/> fabascalfisioterapia@gmail.com
          </a>       
        </div>
        <div className="col-4 col-md-1">
          <a href="mailto://fabascalfisioterapia@gmail.com" className="d-inline d-md-none">
            <Email size={20}/>
          </a> 
          <a href="https://www.facebook.com/profile.php?id=182228369050915&ref=br_rs" >
            <FB size={18}/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=182228369050915&ref=br_rs" >
            <Twitter size={20}/>
          </a>
        </div>
      </div>
    );
  }
}

export default QuickContact;