import React, { useState } from "react"
import { Form } from "semantic-ui-react"

const PokemonForm = ({ pokemonsURL, addPokemon }) => {
  const [inputs, setInputs] = useState({name: "", hp: "", frontUrl: "", backUrl: ""})

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    const body = {
      name: inputs.name,
      stats: [{
        name: "hp",
        value: inputs.hp
      }],
      sprites: {
        front: inputs.frontUrl,
        back: inputs.backUrl
      }
    }

    fetch(pokemonsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    }).then(res => res.json()).then(json => addPokemon(json))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            onChange={handleChange}
            value={inputs.name}
            label="Name"
            placeholder="Name"
            name="name"
          />
          <Form.Input
            fluid
            onChange={handleChange}
            value={inputs.hp}
            label="hp"
            placeholder="hp"
            name="hp"
          />
          <Form.Input
            fluid
            onChange={handleChange}
            value={inputs.frontUrl}
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            onChange={handleChange}
            value={inputs.backUrl}
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default PokemonForm
