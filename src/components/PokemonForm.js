import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ formData, setFormData, pokemonCards, setPokemonCards}) {

  function handleChange(e){
    const key = e.target.name
    setFormData({
      ...formData,
      [key]: e.target.value
    })
  }

  function handleAddPokemon(newPokemon){
    setPokemonCards([...pokemonCards, newPokemon])
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          console.log("submitting form...")
          fetch('http://localhost:3001/pokemon', {
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
          })
          .then((res) => res.json())
          .then((newPokemon) => handleAddPokemon(newPokemon))
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={handleChange}/>
          <Form.Input
            fluid
            value={formData.frontUrl}
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
          />
          <Form.Input
            fluid
            value={formData.backUrl}
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
