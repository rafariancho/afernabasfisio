import React, { Component }  from 'react';
import Menu from '../../Menu/Menu.js';

class CV extends Component {
    render() {
      return (
        <Menu Title="Curr&iacute;culum" MenuId="Curriculum"> 
            <ul className="CVList">
                <li>Diplomado en Fisioterapia por la Universidad de Gimbernat-Cantabria.</li> 
                <li>Master Oficial en Terapia Manual por la Universidad Europea de Madrid (UEM).</li> 
                <li>Master en Técnicas Osteopáticas del Aparato Locomotor por la Escuela de Osteopatía de Madrid (EOM).</li> 
                <li>Nivel 4 en Osteopatía por la Escuela de Osteopatía de Madrid (EOM).</li> 
                <li>Curso Síndrome del Dolor Miofascial: Tratamiento Conservador y Punción Seca de los puntos gatillos Miofasciales</li> 
                <li>Certificado ACSAS Foundations</li> 
                <li>Curso Reeducación Postural Método K-Stretch</li> 
                <li>Curso La Fisioterapia en el Deporte </li> 
                <li>Curso Fisioterapia Visceral: La importancia de la nutrición en la patología osteomuscular.</li> 
                <li>Curso Salud musculoesqueletica y dolor crónico por el Instituto de Ciencias de Nutrición y Salud (ICNS).</li> 
                <li>Curso Nutrición Clinica Avanzada Nivel 1 por el Instituto de Ciencias de Nutrición y Salud (ICNS)</li> 
                <li>Curso Nutrición Clinica Avanzada Nivel 2 por el Instituto de Ciencias de Nutrición y Salud (ICNS).</li> 
                <li>Congreso Nutrición Celular Activa: "La inflamación silenciosa"</li> 
                <li>Congreso Nutrici&oacute;n Celular Activa: "Abordaje terap&eacute;utico en el s&iacute;ndrome de f&aacute;tiga cr&oacute;nica"</li> 
                <li>Curso Tratamiento Orofacial y Trastornos del lenguaje</li> 
                <li>Colegio Fisioterapeutas de Cantabria Nº 39/554</li> 
            </ul>
        </Menu>
      );
    }
  }

export default CV;