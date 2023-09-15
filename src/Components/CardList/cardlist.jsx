function CardList(props){
    const { pokemons } = props;
    return(
        <div>
            {pokemons.map((pokemon) => {
                return(
                    <div>
                        <h1>{pokemon.name}</h1>
                    </div>                    
                )
            })}
        </div>
    )
}

export default CardList;