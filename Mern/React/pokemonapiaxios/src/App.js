import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [ pokemonList, setPokemonList ] = useState([]);
  
  const handleClick = async () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1279")
          .then(response => {
            return response.data;
        }).then(response => {
            console.log(response);setPokemonList(response.results)
        }).catch(err=>{
            console.log(err);
        });
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Fetch pokemons</button>
      {pokemonList.map(p=><li key={p.name}>{p.name}</li>)}
    
    </div>
  );
}

export default App;