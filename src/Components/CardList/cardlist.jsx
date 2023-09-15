import './cardlist.css';

function CardList(props){
    const { pokemons } = props;

    return(
        <div className="card-component">
            {pokemons.map((pokemon, key) => {
                return(
                    <div>
                        <h1 className='pokemon-name'>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${key + 1}.png`} alt="" />
                    </div>                    
                )
            })}
        </div>
    )
}

export default CardList;