import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonCards, searchText}) {
  
 

  const individualCards = pokemonCards.map((pokemon)=>
  pokemon.name.includes(searchText)?
  <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} hp={pokemon.hp} frontSprite={pokemon.sprites.front} backSprite={pokemon.sprites.back} />
  : null );
  
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {individualCards}
    </Card.Group>
  );
}

export default PokemonCollection;
