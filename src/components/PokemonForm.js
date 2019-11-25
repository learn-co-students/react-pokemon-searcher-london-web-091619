import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const PokemonForm = ({ setPokemons, pokemons }) => {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [frontUrl, setFrontUrl] = useState("");
  const [backUrl, setBackUrl] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    postPokemon();
    resetForm();
  };

  const postPokemon = () => {
    const newPokemon = {
      name,
      stats: [{ value: hp, name: "hp" }],
      sprites: {
        front: frontUrl.substring(0, frontUrl.length - 1),
        back: backUrl.substring(0, frontUrl.length - 1)
      }
    };
    console.log(newPokemon);
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newPokemon)
    };
    fetch("http://localhost:3000/pokemon", configObj)
      .then(resp => resp.json())
      .then(pokemon => setPokemons([...pokemons, pokemon]));
  };

  const resetForm = () => {
    setName("");
    setHp("");
    setFrontUrl("");
    setBackUrl("");
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={hp}
            onChange={e => setHp(e.target.value)}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={e => setFrontUrl(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange={e => setBackUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
};

export default PokemonForm;
