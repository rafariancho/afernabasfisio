import React, { Component }  from 'react';
import Menu from '../../Menu/Menu.js';
import Card from './Card/Card.js';

class HorarioYTarifas extends Component {
    render() {
      return (
        <Menu Title="Horario y tarifas" MenuId="HorarioYTarifas" > 
            <h2>Horario</h2>
            <h5 class="margin-block-left">Lunes a Jueves de 8:00 a 22:00</h5>
            <h5 class="margin-block-left">Viernes de 8:00 a 18:00</h5>

            <h2>Fisioterapia y Osteopatia</h2>
            <div className="margin-block-left">
              <div class="card-deck mb-3 text-center">
              <Card title="Primera consulta" price="45€">
                Primera consulta fisioterapia <br/>
                <ul>
                  <li>Historia cl&iacute;nica</li>
                  <li>Valoraci&oacute;n inicial</li>
                  <li>Tratamiento</li>
                  <li>Plan de ejercicio personalizado adaptado a la lesi&oacute;n</li>
                </ul>
              </Card>
              </div>
              <div class="card-deck mb-3 text-center">
              <Card title="Sesi&oacute;n" price="37€">Sesión individual <br/></Card>
              <Card title="Sesi&oacute;n" price="42">(Fisioterapia + ejercicio) <br/> </Card>
              </div>
              <div class="card-deck mb-3 text-center">
              <Card title="Sesi&oacute;n" price="30€">Sesión individual 30' <br/></Card>
              <Card title="Sesi&oacute;n" price="55€">Ondas de choque <br/> </Card>
              </div>
            </div>
            <h2>Suelo P&eacute;lvico</h2>
            <div className="margin-block-left">              
              <div class="card-deck mb-3 text-center">
              <Card title="Sesi&oacute;n" price="40€">
              </Card>
              </div>
            </div>
            <h2>Entrenamiento</h2>
            <div className="margin-block-left">
              <div class="card-deck mb-3 text-center">
              <Card title="Valoraci&oacute;n inicial" price="45€">
              </Card>
              </div>
              <div class="card-deck mb-3 text-center">
              <Card title="Entrenamiento individual" price="37€"></Card>
              <Card title="Entrenamiento pareja" price="42€"></Card>
              </div>
              <div class="card-deck mb-3 text-center">
              <Card title="Hipopresivos" price="50€">4 sesi&oacute;n/mes</Card>
              <Card title="Pilates" price="70€"> 4 sesiones/mes</Card>
              </div>
            </div>
        </Menu>
      );
    }
  }

export default HorarioYTarifas;
