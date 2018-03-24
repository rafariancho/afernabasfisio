import React, { Component } from 'react';
import Menu from '../../Menu/Menu.js';
import Servicio from './Servicio/Servicio.js';

class Servicios extends Component {
  render() {
    return (
      <Menu Title="Servicios" MenuId="Servicios" >
        <div class="d-flex flex-row justify-content-around flex-wrap big-padding-spacer">
          <Servicio 
            img={<img src={require("../../../imgs/iconos/fisioterapia.png")} width="220" height="200" />} 
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
            img={<img src={require("../../../imgs/iconos/educacion.png")} width="220" height="200" />} 
            title="Reeducaci&oacute;n postural">
            <p>Posturas dinámicas de estiramientos globales para conseguir mejorar de forma progresiva la postura del paciente.</p>          
          </Servicio>
          <Servicio 
            img={<img src={require("../../../imgs/iconos/osteopatia.png")} width="220" height="200" />} 
            title="Osteopat&iacute;a">
            <p>Tratamiento del ser humano de forma global, restableciendo el equilibrio mediante técnicas manuales dirigidas a todos los tejidos del sistema musculo-esquelético, visceral y nervioso.</p>  
            <p>Conseguimos aliviar, corregir y recuperar lesiones musculo-esqueléticas y patologías orgánicas, facilitando a su vez la autorregulación del organismo.</p> 
            <ul>
              <li>Osteopatía estructural</li>
              <li>Osteopatía craneal</li>
              <li>Osteopatía visceral</li>
            </ul> 
          </Servicio>
          <Servicio 
            img={<img src={require("../../../imgs/iconos/ondas.png")} width="220" height="200" />} 
            title="Ondas de choque">
            <p>Tratamiento no invasivo mediante ondas acústicas de alta energía para el tratamiento de patologías agudas o crónicas.</p>   
            <p>Indicado especialmente para:</p> 
            <ul>
              <li>Calcificaciones</li>
              <li>Tendinopatías</li>
              <li>Fascitis plantar</li>
              <li>Espolón calcáneo</li>
            </ul>          
          </Servicio>
          <Servicio 
            img={<img src={require("../../../imgs/iconos/atm.png")} width="220" height="200" />} 
            title="Fisioterapia ATM">
            <p>Realizamos el tratamiento de la Disfunción de la Articulación Temporomandibular para restaurar la función normal (articular y muscular) del sistema masticatorio y su relación con los dolores de cabeza y del cuello.</p>
            <p>Mediante la aplicación de un programa individualizado donde se aplican una gran variedad de técnicas y modalidades terapéuticas podemos mejorar la dificultad para abrir la boca, bruxismo, chasquidos al abrir o cerrar la boca, etc. El objetivo fundamental es recuperar la función mandibular óptima del paciente.</p>          
          </Servicio>
          <Servicio 
            img={<img src={require("../../../imgs/iconos/ejercicio.png")} width="220" height="200" />} 
            title="Ejercicio terap&eacute;utico">
            <p>Utilización del movimiento con finalidad terapéutica. Trabajo de fuerza, resistencia, flexibilidad, control motor, coordinación...</p>  
            <p>Para el tratamiento y la prevención de lesiones:</p>  
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