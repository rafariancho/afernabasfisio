import React, { Component } from 'react';
import Menu from '../../Menu/Menu.js';
import Gallery from '../../Gallery/Gallery.js';
import consulta from "../../../imgs/consulta.jpg";
import gimnasio from "../../../imgs/gimnasio.png";
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
    id: 0,
    src: consulta,
    caption: 'consulta', orientation: 'portrait', useForDemo: true
  },
  {
    id: 1,
    src: gimnasio,
    caption: 'gimnasio', orientation: 'landscape', useForDemo: true
  },
  {
    id: 2,
    src: gimnasio,
    caption: 'gimnasio', orientation: 'landscape', useForDemo: true
  },
  {
    id: 3,
    src: gimnasio,
    caption: 'gimnasio', orientation: 'landscape', useForDemo: true
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
      </Menu>
    );
  }
}

export default Instalaciones;