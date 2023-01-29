import React, { Component } from 'react';
import "./style.css";

class Address extends Component {
  render() {

    return (
      <footer id="maps">
        <div className="address"> Encuéntranos en <strong><em>Calle Julian Ceballos Nº4, 3º derecha Torrelavega (Cantabria)</em></strong> </div>
        <iframe width="100%" height="350" frameborder="0" className="map" title="map"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJp6EMcRM-SQ0RjqHxlFLj6GM&key=AIzaSyDdPdN4dM-NaBwIdGc5vIWZlDtu-bzF-ok" allowfullscreen></iframe>
      </footer>
    );
  }
}

export default Address;