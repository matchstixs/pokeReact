import React, { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";
import { getPokemonKantoData } from "../handles/PokeService";
import { AppBar } from '@material-ui/core'

function Pokedex () {
  // useState
  const [pokeList, setPokeList] = useState([]);
  const [filteredPokeList, setFilteredPokeList] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState(null);
  const [filter, setFilter] = useState("");

  // useEffect
  useEffect(() => {
    async function fetchPokemon() {
    try {
      let pokemons = await getPokemonKantoData();
      console.log(pokemons);
      setFilteredPokeList(pokemons);
      setPokeList(pokemons);
    } catch (err) {
      alert("an error occurs");
      console.error(err);
    }}
    fetchPokemon()
  }, []);

  const handleSelect = (pokemonId) => {
    setPokemonSelected(pokeList.filter((p) => p.id === pokemonId)[0]);
    setFilteredPokeList(
      filteredPokeList.map((p) =>
        p.id === pokemonId
          ? { ...p, selected: true }
          : { ...p, selected: false }
      )
    );
  };

  // case unsensitive
  const filterPokemon = (value) => {
    setFilter(value);
    setFilteredPokeList(
      pokeList.filter((p) => p.name.toLowerCase().includes(value.toLowerCase()))
    );
  };
  
  return (
    <>
<AppBar position="static">
<h1 className="app-title">First Generation Pokedex</h1>
</AppBar>



      {/* search */}
      <div>
        <div className="search">
            <input
              type="text"
              placeholder="Type to search a pokemon..."
              value={filter}
              onChange={(event) => {
                let { value } = event.target;
                filterPokemon(value);
              }}
            />
        </div>

        {/* render image */}
        <div>
        {pokemonSelected && <PokemonDetail pokemon={pokemonSelected} />}
        </div>
        
        {/* show list */}
        <div>
          <PokemonList
            pokemons={filteredPokeList}
            selectPokemon={handleSelect}
          />
        </div>

      </div>

    </>
  );
}

export default Pokedex;