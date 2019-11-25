import React, {useState, useEffect} from 'react'
import { Form } from 'semantic-ui-react'

const BASE_URL = 'http://localhost:3000'
const POKEMON_URL = `${BASE_URL}/pokemon`

const PokemonForm = (props) => {
  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const [frontUrl, setFrontUrl] = useState('')
  const [backUrl, setBackUrl] = useState('')
  
  const handleSubmitPokemon = (event) => {
    event.preventDefault()
    return fetch(`${POKEMON_URL}`, {
      "method": "POST",
      "headers": {
        'Content-Type': "application/json",
        "Accept": "application/json"
      },
      "body": JSON.stringify({
        name,
        stats: [{ 'hp': hp }],
        sprites: {
          'front': frontUrl,
          'back': backUrl
        }
      })
    })
    .then(resp => resp.json())
    .then(pokemon => props.createNewPokemon(pokemon))
    .catch(console.log)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmitPokemon}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={(event) => setName(event.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={(event) => setHp(event.target.value)}/>
          <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={frontUrl} onChange={(event) => setFrontUrl(event.target.value)}/>
          <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={backUrl} onChange={(event) => setBackUrl(event.target.value)}/>
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default PokemonForm;
