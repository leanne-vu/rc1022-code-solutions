import React from 'react';
import ReactDom from 'react-dom/client';
const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
function PokeList(props) {
  const pokedex = props.pokedex;
  const listItems = pokedex.map(pokemon =>
    <li key={pokemon.number}>{pokemon.name}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);
root.render(<PokeList pokedex={pokedex}/>);
