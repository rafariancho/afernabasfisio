import React, { Component }  from 'react';

class Logo extends Component {
    render() {
      return (
        <div className="ImgContainer">
          <img src={require("../../imgs/logo-fisio.jpg")} width="300"/>
        </div>
      );
    }
  }

  export default Logo;