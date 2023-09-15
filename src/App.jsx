import { useEffect, useState } from 'react';
import './App.css';
import SearchInput from './Components/SearchInput/searchinput';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000")
    .then((response) => response.json())
    .then((pokemon) => setPokemons(pokemon));
  })

  function searchHandler(event){
    let searchFieldValue = event.target.value.toLocaleLowerCase();
    setSearchValue(searchFieldValue);
  }

  // const pokemonFiltered = pokemons.filter((pokemon) =>{
  //   return pokemon.name.toLocaleUpperCase().includes(searchValue);
  // });

  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <SearchInput valueFiltered={searchHandler} placeholder="Search a Pokemon" />
    </div>
  );
}

export default App;
