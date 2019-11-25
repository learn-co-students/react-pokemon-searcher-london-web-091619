import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchField, setSearchField] = useState("");

  const fetchPokemon = () => {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokemons => setPokemons(pokemons));
  };

  useEffect(fetchPokemon, []);

  const displayPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setPokemons={setPokemons} pokemons={pokemons} />
      <br />
      <Search
        onChange={e => setSearchField(e.target.value)}
        searchField={searchField}
      />
      <br />
      <PokemonCollection pokemons={displayPokemons} />
    </Container>
  );
};

export default PokemonPage;
