import React, { Component } from 'react';
import 'reactstrap';
import "./style.css"

class Servicio extends Component {
    render() {
        return (
            <div className="mb-2 col-md-6 mx-auto servicio">
                {this.props.img}
                <div class="card-header">
                    <h4 class="font-weight-normal">{this.props.title}</h4>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Servicio;