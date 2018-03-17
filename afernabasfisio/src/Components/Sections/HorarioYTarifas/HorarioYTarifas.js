import React, { Component }  from 'react';
import Menu from '../../Menu/Menu.js';

class HorarioYTarifas extends Component {
    render() {
      return (
        <Menu Title="Horario y tarifas"> 
            <h2>Horario</h2>
            <div class="margin-lock-left">Lunes a Viernes de 9:00 a 12:15 y 16:00 a 21:00</div>

            <h2>Tarifas por tratamientos: </h2>
            <div class="alert alert-primary  margin-lock-left" role="alert">
              Aquí tienes todos nuestros precios por tratamientos.
              <br/><br/>
              Como verás disponemos de bonos de 10 sesiones en algunos tratamientos así como sesiones sueltas. Para tratamientos de larga duración consultar precio.
              <br/><br/>
              En caso de cualquier duda, contacta con nosotros a través de nuestro correo electrónico o teléfono
            </div>
            <h2>Fisioterapia y Osteopatia</h2>
            <ul className="CVList margin-lock-left">
                <li>Sesión individual: 25€</li> 
                <li>Bono 10 sesiones 225€</li> 
            </ul>


            <h2>Ejercicio Terapeútico</h2>
            <ul className="CVList margin-lock-left">
                <li>Grupo (4 alumnos) 1clase/semana 40€</li> 
                <li>Grupo (4 alumnos) 2 clase/semana 60€</li> 
                <li>Clase individual/clase iniciación 25€</li> 
                <li>Bono 10 clases individuales 225€</li> 
            </ul>
        </Menu>
      );
    }
  }

export default HorarioYTarifas;