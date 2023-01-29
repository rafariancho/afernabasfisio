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
              <Card title="Primera consulta" price="40€">
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
              <Card title="Sesi&oacute;n" price="35€">Sesión individual <br/></Card>
              <Card title="Consulta" price="70">Kinesiolog&iacute;a <br/> </Card>
              </div>
              <div class="card-deck mb-3 text-center">
              <Card title="Sesi&oacute;n" price="25€">Sesión individual 30' <br/></Card>
              <Card title="Sesi&oacute;n" price="40€">Ondas de choque <br/> </Card>
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
              <Card title="Valoraci&oacute;n inicial" price="40€">
              </Card>
              </div>
              <div class="card-deck mb-3 text-center">
              <Card title="Entrenamiento" price="140€"> (Personal) <br/>1 sesi&oacute;n/semana</Card>
              <Card title="Entrenamiento" price="240€"> (Personal) <br/>2 sesi&oacute;n/semana</Card>
              </div>
              <div class="card-deck mb-3 text-center">
              <Card title="Clase grupal" price="60€">1 sesi&oacute;n/semana</Card>
              <Card title="Clase Grupal" price="85€"> 2 sesiones/semana</Card>
              </div>
            </div>
        </Menu>
      );
    }
  }

export default HorarioYTarifas;