import React, { useState } from 'react';
import './App.css';

function App() {
  const [ pokemonList, setPokemonList ] = useState([]);
  
  const handleClick = async () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1279")
          .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);setPokemonList(response.results)
        }).catch(err=>{
            console.log(err);
        });
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Show pokemons</button>
      {pokemonList.map(p=><li key={p.name}>{p.name}</li>)}
    
    </div>
  );
}

export default App;
