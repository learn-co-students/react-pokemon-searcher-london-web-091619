import React, { useState, useEffect } from "react"
import PokemonCollection from "./PokemonCollection"
import PokemonForm from "./PokemonForm"
import Search from "./Search"
import { Container } from "semantic-ui-react"

const pokemonsURL = "http://localhost:3000/pokemon"

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch(pokemonsURL)
      .then(res => res.json())
      .then(pokes => setPokemons(pokes))
  }, [])

  const addPokemon = (poke) => {
    setPokemons(prevPokes => [poke, ...prevPokes])
  }

  const filteredPokemons = pokemons.filter(poke =>
    poke.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  )

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemonsURL={pokemonsURL} addPokemon={addPokemon} />
      <br />
      <Search query={query} onChange={e => setQuery(e.target.value)} />
      <br />
      <PokemonCollection pokemons={filteredPokemons} />
    </Container>
  )
}

export default PokemonPage
