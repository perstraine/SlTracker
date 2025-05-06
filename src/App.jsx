import { useState } from 'react';
import './App.css'
import AddPokemonModal from './components/addPokemonModal/addPokemonModal';
import EncounterList from './components/encounterList/EncounterList';

function App() {
  console.log("load")
  const [pokemon1, setPokemon1] = useState("");
  const [pokemon2, setPokemon2] = useState("");
  const [location, setLocation] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newPokemon, setNewPokemon] = useState(true);
  return (
    <>
      <EncounterList newPokemon={newPokemon} />
      <button onClick={() => setShowModal(!showModal)}>Add pokemon</button>
      {showModal ? (
        <AddPokemonModal
          setShowModal={setShowModal}
          pokemon1={pokemon1}
          pokemon2={pokemon2}
          setPokemon1={setPokemon1}
          setPokemon2={setPokemon2}
          setLocation={setLocation}
        />
      ) : null}
    </>
  );
}

export default App
