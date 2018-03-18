import React, { Component }  from 'react';
import 'reactstrap';
import "./style.css"

class Card extends Component {
    render() {
      return (
          <div className="card mb-4 box-shadow">
              <div class="card-header">
                  <h4 class="font-weight-normal">{this.props.title}</h4>
              </div>
              <div class="card-body">
                  <h1 class="card-title pricing-card-title">{this.props.price}</h1>
                  {this.props.children}
              </div>
          </div>
      );
    }
  }

export default Card;