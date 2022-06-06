import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonCards, setPokemonCards]= useState([])
  const [searchText, setSearchText] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    sprites:{
        frontUrl: '',
        backUrl: ''
    }
  })

  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then((res)=>res.json())
    .then(data=>setPokemonCards(data))
  },[])
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm name={formData.name} pokemonCards={pokemonCards} setPokemonCards={setPokemonCards} hp={formData.hp} frontUrl={formData.frontUrl} backUrl={formData.backUrl} formData={formData} setFormData={setFormData}/>
      <br />
      <Search searchText={searchText} setSearchText={setSearchText}/>
      <br /> 
      <PokemonCollection searchText={searchText} pokemonCards={pokemonCards}/>
    </Container>
  );
}

export default PokemonPage;
