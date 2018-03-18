import React, { Component }  from 'react';
import Menu from '../../Menu/Menu.js';
import Card from './../Servicios/Card/Card.js';

class HorarioYTarifas extends Component {
    render() {
      return (
        <Menu Title="Horario y tarifas"> 
            <h2>Horario</h2>
            <h5 class="margin-block-left">Lunes a Viernes de 9:00 a 12:15 y 16:00 a 21:00</h5>

            <h2>Tarifas por tratamientos: </h2>
            <div class="alert alert-primary  margin-block-left" role="alert">
              Aquí tienes todos nuestros precios por tratamientos.
              <br/><br/>
              Como verás disponemos de bonos de 10 sesiones en algunos tratamientos así como sesiones sueltas. Para tratamientos de larga duración consultar precio.
              <br/><br/>
              En caso de cualquier duda, contacta con nosotros a través de nuestro correo electrónico o teléfono
            </div>
            <h2>Fisioterapia y Osteopatia</h2>
            <div className="margin-block-left">
              <div class="card-deck mb-3 text-center">
              <Card title="Sesi&oacute;n" price="25€">Sesión individual</Card>
              <Card title="Bono" price="225€">Bono 10 sesiones</Card>
              </div>
            </div>
            <h2>Ejercicio Terapeútico</h2>
            <div className="margin-block-left">
              <div class="card-deck mb-3 text-center">
              <Card title="Sesi&oacute;n" price="25€">Sesión individual</Card>
              <Card title="Bono" price="225€">Bono 10 sesiones</Card>
              </div>
            </div>
            <div className="margin-block-left">
              <div class="card-deck mb-3 text-center">
              <Card title="Grupo" price="40€"> (4 alumnos) <br/>1 clase/semana</Card>
              <Card title="Grupo" price="60€">  (4 alumnos) <br/> 2 clases/semana</Card>
              </div>
            </div>
        </Menu>
      );
    }
  }

export default HorarioYTarifas;