import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import './style.css';

class Logo extends Component {
  render() {
    return (
      <div className="ImgContainer box-shadow">
        <div className="layer1">
          <img src={require("../../imgs/Logo.png")} width="35%" className="logo"/> 
        </div>
        <Parallax
          //className="custom-class"
          offsetYMax={0}
          offsetYMin={-80}
          slowerScrollRate
          tag="figure"
        >
          <img src={require("../../imgs/masaje.jpg")} width="100%" className="imgBackground" />
        </Parallax>
      </div>
    );
  }
}

export default Logo;