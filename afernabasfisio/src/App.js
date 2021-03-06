import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import QuickContact from './Components/QuickContact/QuickContact.js';
import Header from './Components/Header/Header.js';
import Logo from './Components/Logo/Logo.js';
import CV from './Components/Sections/CV/CV.js';
import Servicios from './Components/Sections/Servicios/Servicios.js';
import HorarioYTarifas from './Components/Sections/HorarioYTarifas/HorarioYTarifas.js';
import Galeria from './Components/Sections/Galeria/Galeria.js';
import Address from './Components/Sections/Address/Address.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div className="App" id ="App">
          <QuickContact />
          <Header />
          <Logo />
          <Servicios />
          <CV />
          <HorarioYTarifas />
          <Galeria />
          <Address />
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
