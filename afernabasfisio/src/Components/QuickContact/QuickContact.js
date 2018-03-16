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
import Instagram from 'react-icons/lib/fa/instagram';

class QuickContact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sticky-top d-flex flex-row justify-content-around justify-content-md-end align-items-center quick-contact">
        
          <span className="highlight">
            <Mobile size={16} style={{paddingBottom:2}}/> 625 147 630 <Whatsapp size={16} style={{paddingBottom:2}}/>
          </span>
          <span className="highlight">
            <a href="mailto://fabascalfisioterapia@gmail.com" className="d-none d-md-inline">
              <Email size={20} style={{paddingBottom:2}}/> fabascalfisioterapia@gmail.com
            </a> 
          </span>
          <span className="highlight">
          <a href="mailto://fabascalfisioterapia@gmail.com" className="d-inline d-md-none">
            <Email size={20} style={{paddingBottom:2}}/>
          </a> 
          <a href="https://www.facebook.com/profile.php?id=182228369050915&ref=br_rs" >
            <FB size={18} style={{paddingBottom:2}}/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=182228369050915&ref=br_rs" >
            <Twitter size={20} style={{paddingBottom:2}}/>
          </a>
          <a href="https://www.instagram.com/fernandezabascalfisioterapia/" >
            <Instagram size={20} style={{paddingBottom:2}}/>
          </a>
          </span>
      </div>
    );
  }
}

export default QuickContact;