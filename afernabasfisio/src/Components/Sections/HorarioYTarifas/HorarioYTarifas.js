import React, { Component }  from 'react';
import Menu from '../../Menu/Menu.js';
import Card from './Card/Card.js';

class HorarioYTarifas extends Component {
    render() {
      return (
        <Menu Title="Horario y tarifas" MenuId="HorarioYTarifas" > 
            <h2>Horario</h2>
            <h5 class="margin-block-left">Lunes a Jueves de 9:00 a 13:00 y 16:00 a 21:00</h5>
            <h5 class="margin-block-left">Viernes de 9:00 a 14:00 y 16:00 a 18:00</h5>

            <h2>Tarifas por tratamientos: </h2>
            <div class="alert alert-primary  margin-block-left" role="alert">
              Como verás disponemos de bonos de 10 sesiones en algunos tratamientos así como sesiones sueltas. Para tratamientos de larga duración consultar precio.
              <br/><br/>
              En caso de cualquier duda, contacta con nosotros a través de nuestro correo electrónico o teléfono.
            </div>
            <h2>Fisioterapia y Osteopatia</h2>
            <div className="margin-block-left">
              <div class="card-deck mb-3 text-center">
              <Card title="Primera consulta" price="35€">
                Primera consulta fisioterapia <br/> (1 hora)
                <ul>
                  <li>Historia cl&iacute;nica</li>
                  <li>Valoraci&oacute;n inicial</li>
                  <li>Tratamiento</li>
                  <li>Plan de ejercicio personalizado adaptado a la lesi&oacute;n</li>
                </ul>
              </Card>
              </div>
              <div class="card-deck mb-3 text-center">
              <Card title="Sesi&oacute;n" price="28€">Sesión individual <br/> (1 hora)</Card>
              <Card title="Sesi&oacute;n" price="35€">Sesión urgencia <br/> (1 hora)</Card>
              </div>
              <div class="card-deck mb-3 text-center">
              <Card title="Bono" price="125€">Bono 5 sesiones</Card>
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