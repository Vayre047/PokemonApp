import { useEffect, useState } from 'react';
import './App.css';
import SearchInput from './Components/SearchInput/searchinput';
import CardList from './Components/CardList/cardlist';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((response) => response.json())
      .then(pokemon => setPokemons(pokemon.results));
  });


  function searchHandler(event){
    let searchFieldValue = event.target.value.toLocaleLowerCase();
    setSearchValue(searchFieldValue);
  }

  const pokemonsFiltered = pokemons.filter((pokemon) =>{
    return pokemon.name.toLocaleUpperCase().includes(searchValue);
  });

  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <SearchInput valueFiltered={searchHandler} placeholder="Search a Pokemon" />
      <CardList pokemons={pokemonsFiltered} />
    </div>
  );
}

export default App;
