import React, { Component } from 'react';
import Menu from '../../Menu/Menu.js';
import Gallery from '../../Gallery/Gallery.js';
import consulta from "../../../imgs/consulta.jpg";
import gimnasio from "../../../imgs/instalaciones/gimnasio.png";
import IMG_4833 from "../../../imgs/instalaciones/IMG_4833.JPG";
import IMG_4838 from "../../../imgs/instalaciones/IMG_4838.JPG";
import IMG_4841 from "../../../imgs/instalaciones/IMG_4841.jpg";
import IMG_4849 from "../../../imgs/instalaciones/IMG_4849.JPG";
import IMG_4855 from "../../../imgs/instalaciones/IMG_4855.JPG";
import IMG_4866 from "../../../imgs/instalaciones/IMG_4866.JPG";
import IMG_4869 from "../../../imgs/instalaciones/IMG_4869.jpg";
import "./style.css";

function makeUnsplashSrc(id) {
  let image = DEFAULT_IMAGES.find((x) => x.id == id);
  return image.src;
}
function makeUnsplashSrcSet(id, size) {
  return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=${size} ${size}w`;
}
function makeUnsplashThumbnail(id, orientation = 'landscape') {
  const dimensions = orientation === 'square'
    ? 'w=300&h=300'
    : 'w=240&h=159';
return makeUnsplashSrc(id);
  // return `${makeUnsplashSrc(id)}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`;
}


const DEFAULT_IMAGES = [
  {
    id: 8,
    src: IMG_4869,
    caption: 'IMG_4869', orientation: 'main_portrait', useForDemo: true
  },
  
  {
    id: 2,
    src: IMG_4833,
    caption: 'IMG_4833', orientation: 'landscape', useForDemo: true
  },
  {
    id: 3,
    src: IMG_4838,
    caption: 'IMG_4838', orientation: 'landscape', useForDemo: true
  },
  {
    id: 5,
    src: IMG_4849,
    caption: 'IMG_4849', orientation: 'landscape', useForDemo: true
  },
  {
    id: 6,
    src: IMG_4855,
    caption: 'IMG_4855', orientation: 'landscape', useForDemo: true
  },
  {
    id: 7,
    src: IMG_4866,
    caption: 'IMG_4866', orientation: 'landscape', useForDemo: true
  },
  {
    id: 4,
    src: IMG_4841,
    caption: 'IMG_4841', orientation: 'portrait', useForDemo: true
  },
  {
    id: 1,
    src: gimnasio,
    caption: 'gimnasio', orientation: 'portrait', useForDemo: true
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