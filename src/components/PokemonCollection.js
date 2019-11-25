import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = (props) => {


  const renderPokemon = () => {
    return props.pokemons.map(pokemon => {
      return <PokemonCard pokemon={pokemon}/>
    })
  }

  return (
    <Card.Group itemsPerRow={6}>
      {renderPokemon()}
    </Card.Group>
  )
}

export default PokemonCollection;