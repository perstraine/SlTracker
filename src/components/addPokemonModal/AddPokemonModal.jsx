import "./addPokemonModal.css"
import { useState } from "react";
import { Pokedex } from "pokeapi-js-wrapper";
const P = new Pokedex();
// eslint-disable-next-line react/prop-types
export default function AddPokemonModal({ setShowModal}) {
  const [wew, setWew] = useState("");
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
    return (
      <>
        <div /*onClick={() => setShowModal(false)}*/ className="modal_holder">
          <div className="modal">
            <div className="player_one">
              <div className="player_name">Player 1</div>
              <div className="location">
                <input></input>
              </div>
              <div className="pokemon">
                <input
                  onChange={(e) => {
                    setWew(e.target.value);
                  }}
                ></input>
                <button
                  className="pokemon-find-button"
                  onClick={() =>
                    P.getPokemonByName(wew).then(function (response) {
                      console.log(response);

                      setImage1(response.sprites.front_default);
                    })
                  }
                >
                  find
                </button>
                <img src={image1}></img>
              </div>
            </div>
            <div className="player_two">
              <div className="player_name">Player 2</div>
              <div className="location">
                <input></input>
              </div>
              <div className="pokemon">
                <input
                  onChange={(e) => {
                    setWew(e.target.value);
                  }}
                ></input>
                <button
                  className="pokemon-find-button"
                  onClick={() =>
                    P.getPokemonByName(wew).then(function (response) {
                      console.log(response);

                      setImage2(response.sprites.front_default);
                    })
                  }
                >
                  find
                </button>
                <img src={image2}></img>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}