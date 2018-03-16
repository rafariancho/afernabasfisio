import React, { Component }  from 'react';
import './style.css';

class Logo extends Component {
    render() {
      return (
        <div className="ImgContainer">
          <img src={require("../../imgs/Logo.png")} width="35%" className="logo"/>
        </div>
      );
    }
  }

export default Logo;