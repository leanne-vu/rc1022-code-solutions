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

const bubbles = [
  <i key={1} className='fa-solid fa-circle'></i>,
  <i key={2} className='fa-solid fa-circle'></i>,
  <i key={3} className='fa-solid fa-circle'></i>,
  <i key={4} className='fa-solid fa-circle'></i>,
  <i key={5} className='fa-solid fa-circle'></i>
];
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel bubbles={bubbles} images={images}/>);
