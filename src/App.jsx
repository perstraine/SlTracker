import { useState } from 'react';
import './App.css'
import { Pokedex } from 'pokeapi-js-wrapper';
const P = new Pokedex();

function App() {
  const [wew, setWew] = useState("");
  return (
    <>
      <input onChange={(e)=>{setWew(e.target.value)}}></input>
      <button onClick={()=>P.getPokemonByName(wew).then(function (response) {
    console.log(response);
      })}>
        find
      </button>
      <p>{wew}</p>
    </>
  )
}

export default App
