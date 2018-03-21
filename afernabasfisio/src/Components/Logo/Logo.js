import React, { Component }  from 'react';
import './style.css';

class Logo extends Component {
    render() {
      return (
        <div className="ImgContainer">
          <div className="layer1"><img src={require("../../imgs/Logo.png")} width="35%" className="logo"/> </div>
          <img src={require("../../imgs/masaje.jpg")} width="100%" className="imgBackground"/>
        </div>
      );
    }
  }

export default Logo;