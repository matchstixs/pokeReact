// pokedex library
import React from "react";

function PokemonList({ pokemons, selectPokemon }) {
  const drawPokemon = () => {
    return pokemons.map((p, id) => (
      <li
        key={id}
        onClick={() => selectPokemon(p.id)}
        alt="404"
        className={
          p.selected
            ? "pokemon-list-selected"
            : "pokemon-list"
        }
      >
        <img className="list-image" src={p.sprites.front_default} alt="404" />
        <p className="list-number">#{p.id} {p.name}</p>
      </li>
    ));
  };

  return <ul className="list-group">{pokemons.length > 0 && drawPokemon()}</ul>;
}

export default PokemonList;