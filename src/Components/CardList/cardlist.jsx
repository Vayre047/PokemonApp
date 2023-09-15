import './cardlist.css';

function CardList(props){
    const { pokemons } = props;
    const pokemonImg = "";

    return(
        <div className="card-component">
            {pokemons.map((pokemon) => {
                return(
                    <div>
                        <h1 className='pokemon-name'>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>
                        <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/3.svg`} alt="" />
                    </div>                    
                )
            })}
        </div>
    )
}

export default CardList;