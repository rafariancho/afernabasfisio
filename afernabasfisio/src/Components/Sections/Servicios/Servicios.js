import React, { Component }  from 'react';
import Menu from '../../Menu/Menu.js';

class Servicios extends Component {
    render() {
      return (
        <Menu Title="Servicios"> 
            <h2>FISIOTERAPIA</h2>
            <ul className="CVList margin-lock-left">
                <li>Terapia Manual</li> 
                <li>Fisioterapia Deportiva</li> 
                <li>Punción seca</li> 
                <li>Fibrolisis Diacutanea</li> 
                <li>Vendaje Neuro-muscular</li> 
            </ul>
          <h2>OSTEOPATIA</h2>
          <h2>REEDUCACION POSTURAL</h2>
          <h2>EJERCICIO TERAPEUTICO</h2>
        </Menu>
      );
    }
  }

export default Servicios;