import React, { Component } from 'react';
import Menu from '../../Menu/Menu.js';
import Gallery from '../../Gallery/Gallery.js';
import "./style.css";

function makeUnsplashSrc(id) {
  let image = DEFAULT_IMAGES.find((x) => x.id == id);
  return image.src;
}

function makeUnsplashThumbnailSrc(id) {
  let image = THUMBNAIL_IMAGES.find((x) => x.id == id);
  return image.src;
}

function makeUnsplashThumbnail(id, orientation = 'landscape') {
    return makeUnsplashThumbnailSrc(id);
}


const THUMBNAIL_IMAGES = [
  {
    id: 1,
    src: require("../../../imgs/thumbs/IMG_4869.jpg"),
    caption: 'instalaciones', orientation: 'main_portrait', useForDemo: true
  },
  
  {
    id: 2,
    src: require("../../../imgs/thumbs/IMG_4833.jpg"),
    caption: 'instalaciones', orientation: 'landscape', useForDemo: true
  },
  {
    id: 3,
    src: require("../../../imgs/thumbs/IMG_4838.jpg"),
    caption: 'instalaciones', orientation: 'landscape', useForDemo: true
  },
  {
    id: 4,
    src: require("../../../imgs/thumbs/IMG_4849.jpg"),
    caption: 'instalaciones', orientation: 'landscape', useForDemo: true
  },
  {
    id: 5,
    src: require("../../../imgs/thumbs/IMG_4855.jpg"),
    caption: 'instalaciones', orientation: 'landscape', useForDemo: true
  },
  {
    id: 6,
    src: require("../../../imgs/thumbs/IMG_4866.jpg"),
    caption: 'instalaciones', orientation: 'landscape', useForDemo: true
  },
  {
    id: 7,
    src: require("../../../imgs/thumbs/IMG_4841.jpg"),
    caption: 'instalaciones', orientation: 'portrait', useForDemo: true
  },
  {
    id: 8,
    src: require("../../../imgs/thumbs/gimnasio.jpg"),
    caption: 'instalaciones', orientation: 'portrait', useForDemo: true
  }
];

const DEFAULT_IMAGES = [
  {
    id: 1,
    src: require("../../../imgs/instalaciones/IMG_4869.jpg"),
    caption: 'instalaciones', orientation: 'main_portrait', useForDemo: true
  },
  
  {
    id: 2,
    src: require("../../../imgs/instalaciones/IMG_4833.JPG"),
    caption: 'instalaciones', orientation: 'landscape', useForDemo: true
  },
  {
    id: 3,
    src: require("../../../imgs/instalaciones/IMG_4838.JPG"),
    caption: 'instalaciones', orientation: 'landscape', useForDemo: true
  },
  {
    id: 4,
    src: require("../../../imgs/instalaciones/IMG_4849.JPG"),
    caption: 'instalaciones', orientation: 'landscape', useForDemo: true
  },
  {
    id: 5,
    src: require("../../../imgs/instalaciones/IMG_4855.JPG"),
    caption: 'instalaciones', orientation: 'landscape', useForDemo: true
  },
  {
    id: 6,
    src: require("../../../imgs/instalaciones/IMG_4866.JPG"),
    caption: 'instalaciones', orientation: 'landscape', useForDemo: true
  },
  {
    id: 7,
    src: require("../../../imgs/instalaciones/IMG_4841.jpg"),
    caption: 'instalaciones', orientation: 'portrait', useForDemo: true
  },
  {
    id: 8,
    src: require("../../../imgs/instalaciones/gimnasio.png"),
    caption: 'instalaciones', orientation: 'portrait', useForDemo: true
  }
];

const theme = {
  // container
  container: {
    background: 'rgba(255, 255, 255, 0.9)',
  },

  // arrows
  arrow: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fill: '#222',
    opacity: 0.6,
    transition: 'opacity 200ms',

    ':hover': {
      opacity: 1,
    },
  },
  arrow__size__medium: {
    borderRadius: 40,
    height: 40,
    marginTop: -20,

    '@media (min-width: 768px)': {
      height: 70,
      padding: 15,
    },
  },
  arrow__direction__left: { marginLeft: 10 },
  arrow__direction__right: { marginRight: 10 },
  close: {
    fill: '#D40000',
    opacity: 0.6,
    transition: 'all 200ms',
    ':hover': {
      opacity: 1,
    },
  },

  // footer
  footer: {
    color: 'black',
  },
  footerCount: {
    color: 'rgba(0, 0, 0, 0.6)',
  },

  // thumbnails
  thumbnail: {
  },
  thumbnail__active: {
    boxShadow: '0 0 0 2px #00D8FF',
  },
};

class Instalaciones extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <Menu Title="Instalaciones" MenuId="Instalaciones" >
      <p className="margin-block-left">Centro de fisioterapia y osteopatía donde cada persona recibirá tratamiento de máxima calidad adaptado a sus necesidades específicas. </p>
      <p className="margin-block-left gallery-spacer">
        <Gallery images={DEFAULT_IMAGES.map(({ caption, id, orientation, useForDemo }) => ({
          src: makeUnsplashSrc(id),
          thumbnail: makeUnsplashThumbnail(id, orientation),
          srcSet: [
            makeUnsplashSrc(id)
          ],
          caption,
          orientation,
          useForDemo,
        }))} />
      </p>
      <p className="margin-block-left">Evaluamos tu problema, estudiaremos como te mueves y la posible relación con tu dolor, y pautaremos el tratamiento necesario para cada persona gracias a una instalaciones que nos permiten trabajar en diferentes entornos (sala de tratamiento, sala de readaptación y trabajo funcional o el gimnasio).</p>
      </Menu>
    );
  }
}

export default Instalaciones;