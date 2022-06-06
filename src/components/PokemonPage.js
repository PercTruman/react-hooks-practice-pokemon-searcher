import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonCards, setPokemonCards]= useState([])
  const [searchText, setSearchText] = useState('')
  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then((res)=>res.json())
    .then(data=>setPokemonCards(data))
  },[])
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchText={searchText} setSearchText={setSearchText}/>
      <br /> 
      <PokemonCollection searchText={searchText} pokemonCards={pokemonCards}/>
    </Container>
  );
}

export default PokemonPage;
