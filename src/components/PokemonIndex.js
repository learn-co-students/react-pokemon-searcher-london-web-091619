import React, { useState, useEffect } from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const BASE_URL = 'http://localhost:3000'
const POKEMON_URL = `${BASE_URL}/pokemon`

const PokemonPage = (props) => {
  const [pokemons, setPokemons] = useState([])
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    fetchPokemon();
  }, [])

  const fetchPokemon = () => {
    return fetch(POKEMON_URL)
      .then(resp => resp.json())
      .then(pokemonData => setPokemons(pokemonData))
  }

  const pokemonsToShow = () => {
    if (searchValue === "") {
      return pokemons
    } else {
      return pokemons.filter(pokemon => {
        return pokemon.name.includes(searchValue)
      })
    }
  }

  const createNewPokemon = (pokemon) => {
    setPokemons([...pokemons, pokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onChange={props.handleSubmitPokemon} createNewPokemon={(pokemon) => createNewPokemon(pokemon)}/>
      <br />
      <Search onChange={(event) => setSearchValue(event.target.value)} />
      <br />
      <PokemonCollection pokemons={pokemonsToShow()} />
    </Container>
  )
}

export default PokemonPage
