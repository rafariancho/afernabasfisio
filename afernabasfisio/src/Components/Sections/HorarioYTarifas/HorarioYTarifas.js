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
              <Card title="Sesi&oacute;n" price="30€">Sesión individual <br/></Card>
              <Card title="Consulta" price="48€">Kinesiolog&iacute;a <br/> </Card>
              </div>
            </div>
            <h2>Suelo P&eacute;lvico</h2>
            <div className="margin-block-left">
              <div class="card-deck mb-3 text-center">
              <Card title="Primera consulta" price="40€">
                Primera consulta suelo p&eacute;lvico <br/>
              </Card>
              <Card title="Sesi&oacute;n" price="35€">Sesión individual <br/></Card>
              </div>
            </div>
            <div className="margin-block-left">
              <div class="card-deck mb-3 text-center">
              <Card title="Grupo" price="40€"> (4 alumnos) <br/>1 clase/semana</Card>
              <Card title="Grupo" price="60€">  (4 alumnos) <br/> 2 clases/semana</Card>
              </div>
            </div>
            <h2>Entrenamiento</h2>
            <div className="margin-block-left">
              <div class="card-deck mb-3 text-center">
              <Card title="Valoraci&oacute;n inicial" price="35€">
              </Card>
              </div>
              <div class="card-deck mb-3 text-center">
              <Card title="Entrenamiento" price="120€"> (Personal) <br/>1 sesi&oacute;n/semana</Card>
              <Card title="Entrenamiento" price="200€"> (Personal) <br/>2 sesi&oacute;n/semana</Card>
              </div>
              <div class="card-deck mb-3 text-center">
              <Card title="Entrenamiento" price="70€"> (Parejas) <br/>1 sesi&oacute;n/semana</Card>
              <Card title="Entrenamiento" price="120€"> (Parejas) <br/>2 sesi&oacute;n/semana</Card>
              </div>
            </div>
        </Menu>
      );
    }
  }

export default HorarioYTarifas;