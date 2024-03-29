import React, { Component } from 'react';
import './style.css';
import Whatsapp from 'react-icons/lib/fa/whatsapp';
import Mobile from 'react-icons/lib/md/phone';
import Email from 'react-icons/lib/md/mail-outline';
import FB from 'react-icons/lib/fa/facebook-square';
import Instagram from 'react-icons/lib/fa/instagram';
import Map from 'react-icons/lib/md/pin-drop';
import Home from 'react-icons/lib/fa/home';
import {gotoElement} from '../../Helpers/NavigationHelper.js';

class QuickContact extends Component {
   render() {
    return (
      <div className="sticky-top d-flex flex-row justify-content-around justify-content-md-end align-items-center quick-contact">
        
          <span className="highlight">
            <a href="https://api.whatsapp.com/send?phone=34625147630"><Mobile size={18} style={{paddingBottom:4}}/> 625 147 630  <Whatsapp size={18} style={{paddingBottom:4}}/></a>
          </span>
          <span className="highlight">
            <a href="mailto:fabascalfisioterapia@gmail.com" className="d-none d-md-inline">
              <Email size={20} style={{paddingBottom:2}}/> fabascalfisioterapia@gmail.com
            </a> 
          </span>
          <span className="highlight">
          <a className="nonIos" onClick={() => gotoElement("App")}>
            <Home size={20} style={{paddingBottom:2}}/>
          </a> 
          <a className="ios"href="#App">
            <Home size={20} style={{paddingBottom:2}}/>
          </a> 
          <a href="mailto:fabascalfisioterapia@gmail.com" className="d-inline d-md-none">
            <Email size={20} style={{paddingBottom:2}}/>
          </a> 
          <a className="nonIos" onClick={() => gotoElement("maps")} >
            <Map size={20} style={{paddingBottom:2}}/>
          </a>
          <a className="ios" href="#maps" >
            <Map size={20} style={{paddingBottom:2}}/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=182228369050915&ref=br_rs" >
            <FB size={18} style={{paddingBottom:2}}/>
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