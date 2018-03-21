import React, { Component }  from 'react';
import 'reactstrap';
import './style.css';

class Menu extends Component {
    render() {
      return (
        <div className="MenuContainer mx-auto col-12 col-md-12 col-lg-10 col-xl-7" id={this.props.MenuId}>
            <h1>{this.props.Title}</h1>
            {this.props.children}
        </div>
      );
    }
  }

export default Menu;