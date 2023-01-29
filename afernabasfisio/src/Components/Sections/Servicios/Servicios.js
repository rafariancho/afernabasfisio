import React, { Component } from 'react';
import Menu from '../../Menu/Menu.js';
import Servicio from './Servicio/Servicio.js';

class Servicios extends Component {
  render() {
    return (
      <Menu Title="Servicios" MenuId="Servicios" >
        <div class="d-flex flex-row justify-content-around flex-wrap big-padding-spacer">
          <Servicio 
            img={<img src={require("../../../imgs/iconos/fisioterapia.png")} width="220" height="200" className="category-icon" alt="fisioterapia" />} 
            title="Fisioterapia">
            <p>Técnicas manuales o instrumentales para el tratamiento o prevención del dolor musculo-esquelético.</p> 
            <ul>
              <li>Terapia Manual</li>
              <li>Fisioterapia Deportiva</li>
              <li>Punción seca</li>
              <li>Fibrolisis Diacutanea</li>
              <li>Vendaje Neuro-muscular</li>
            </ul>           
          </Servicio>
          <Servicio 
            img={<img src={require("../../../imgs/iconos/educacion.png")} width="220" height="200" className="category-icon" alt="educacion"/>} 
            title="Reeducaci&oacute;n postural">
            <p>Posturas dinámicas de estiramientos globales para conseguir mejorar de forma progresiva la postura del paciente.</p>          
          </Servicio>
          <Servicio 
            img={<img src={require("../../../imgs/iconos/osteopatia.png")} width="220" height="200" className="category-icon" alt="osteopatia"/>} 
            title="Osteopat&iacute;a">
            <p>Tratamiento global del paciente mediante técnicas manuales para aliviar el dolor y restaurar la movilidad del sistema musculo-esquelético, visceral y nervioso.  </p> 
            <ul>
              <li>Osteopatía estructural</li>
              <li>Osteopatía craneal</li>
              <li>Osteopatía visceral</li>
            </ul> 
          </Servicio>
          <Servicio 
            img={<img src={require("../../../imgs/iconos/ondas.png")} width="220" height="200" className="category-icon" alt="ondas"/>} 
            title="Ondas de choque">
            <p>Tratamiento no invasivo mediante ondas acústicas de alta energía para el tratamiento de patologías agudas o crónicas.</p>   
            <ul>
              <li>Calcificaciones</li>
              <li>Tendinopatías</li>
              <li>Fascitis plantar</li>
              <li>Espolón calcáneo</li>
            </ul>          
          </Servicio>
          <Servicio 
            img={<img src={require("../../../imgs/iconos/atm.png")} width="220" height="200" className="category-icon" alt="atm"/>} 
            title="Fisioterapia ATM">
            <p>Tratamiento de los problemas asociados a la articulación de la mandíbula con el cráneo y los músculos de la masticación.</p>   
            <p>El objetivo fundamental es recuperar la función mandibular óptima del paciente.</p>          
          </Servicio>
          <Servicio 
            img={<img src={require("../../../imgs/iconos/ejercicio.png")} width="220" height="200" className="category-icon" alt="ejercicio"/>} 
            title="Ejercicio terap&eacute;utico">
            <p>Utilización del movimiento con finalidad terapéutica. Trabajo de fuerza, resistencia, flexibilidad, control motor y coordinación para el tratamiento y la prevención de lesiones:</p>  
            <ul>
              <li>Clases individuales</li>
              <li>Grupos reducidos (máx. 4 personas)</li>
              <li>Grupo hernia discal</li>
            </ul>     
          </Servicio>
        </div>
      </Menu>
    );
  }
}

export default Servicios;