import React from 'react'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import PokemonCollection from './PokemonCollection'

class PokemonPage extends React.Component {
  state = { 
    pokemonCollection: [], 
    searchTerm: ''
  
  }
   
  componentDidMount() { 
    fetch(`http://localhost:3500/pokemon`)
    .then(resp => resp.json())
    .then(pokemonCollection => this.setState({pokemonCollection: pokemonCollection}))
    .catch(e => console.error(e))
  }

  handleSearchChange = event => { 
  this.setState({searchTerm: event.target.value})
  }


 addPokemon = pokemon => { 
   this.setState({pokemonCollection: [...this.state.pokemonCollection, pokemon]})
 }


  // toggleImage = () => { 
  //   const col = this.state.pokemonCollection
  //   const i = col.indexOf(pokemon)
  //   this.setState({
  //     pokemonCollection:[
  //       ...console.slice(0,i)
  
  //       {...pokemon, isClicked: !pokemon.isClicked},
  //       ...col.slice(i+1)
  //     ]
  //   })

  

  render() {
    const {pokemonCollection} = this.state
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={() => this.handleSearchChange} />
        <br />
        <PokemonCollection pokemon={pokemonCollection}/>
      </Container>
    )
  }
}

export default PokemonPage
