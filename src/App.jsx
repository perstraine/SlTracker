import { useState } from 'react';
import './App.css'
import AddPokemonModal from './components/addPokemonModal/addPokemonModal';

function App() {
  console.log("load")
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      
      <button onClick={()=> setShowModal(!showModal)}>Add pokemon</button>
      {showModal ? <AddPokemonModal setShowModal={setShowModal}/>:null}
    </>
  )
}

export default App
