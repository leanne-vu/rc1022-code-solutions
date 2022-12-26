import React from 'react';
import ReactDOM from 'react-dom/client';
import { Carousel } from './carousel';
const images = [
  {
    picture: '../images/001.png'
  },
  {
    picture: '../images/004.png'
  },
  {
    picture: '../images/007.png'
  },
  {
    picture: '../images/025.png'
  },
  {
    picture: '../images/039.png'
  }

];
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel images={images}/>);
