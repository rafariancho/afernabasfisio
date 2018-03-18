import React, { Component } from 'react';
import QuickContact from './Components/QuickContact/QuickContact.js';
import Header from './Components/Header/Header.js';
import Logo from './Components/Logo/Logo.js';
import CV from './Components/Sections/CV/CV.js';
import Servicios from './Components/Sections/Servicios/Servicios.js';
import HorarioYTarifas from './Components/Sections/HorarioYTarifas/HorarioYTarifas.js';
import Instalaciones from './Components/Sections/Instalaciones/Instalaciones.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuickContact/>
        <Header/>
        <Logo/>
        <Servicios/>
        <CV/>
        <HorarioYTarifas/>
        <Instalaciones/>
      </div>
    );
  }
}

export default App;
