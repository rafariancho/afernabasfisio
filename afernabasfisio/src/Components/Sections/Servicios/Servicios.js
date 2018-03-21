import React, { Component }  from 'react';
import Menu from '../../Menu/Menu.js';

class Servicios extends Component {
    render() {
      return (
        <Menu Title="Servicios" MenuId="Servicios" > 
            <h2>Fisioterapia</h2>
            <ul className="CVList margin-block-left">
                <li>Terapia Manual</li> 
                <li>Fisioterapia Deportiva</li> 
                <li>Punción seca</li> 
                <li>Fibrolisis Diacutanea</li> 
                <li>Vendaje Neuro-muscular</li> 
            </ul>
          <h2>Osteopat&iacute;a</h2>
          <h2>Reeducaci&oacute;n postural</h2>
          <h2>Ejercicio terap&eacute;utico</h2>
        </Menu>
      );
    }
  }

export default Servicios;