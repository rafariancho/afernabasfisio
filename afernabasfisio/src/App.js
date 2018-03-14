import React, { Component } from 'react';
import QuickContact from './Components/QuickContact/QuickContact.js';
import Header from './Components/Header/Header.js';
import Logo from './Components/Logo/Logo.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuickContact/>
        <Header/>
        <Logo/>
      </div>
    );
  }
}

export default App;
